//https://docs.inrupt.com/client-libraries/solid-client-js/tutorial/manage-access-control-list.html
import {
  getSolidDatasetWithAcl,
  getPublicAccess,
  hasResourceAcl,
  hasFallbackAcl,
  hasAccessibleAcl,
  //createAcl,
  createAclFromFallbackAcl,
  getResourceAcl,
  //setAgentResourceAccess,
  getAgentAccess,
  //  getAgentAccessAll,
  //  setAgentResourceAccess,
  setPublicResourceAccess,
  setPublicDefaultAccess,
  saveAclFor,
} from "@inrupt/solid-client";

import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
console.log("SFC", SolidFileClient)
const fc = new SolidFileClient(auth)

export default {
  created(){

  },
  methods: {
    async configureInbox(inbox_url, webId){
      console.log("configureInbox",inbox_url, webId,this.storage)
      let inbox_log_file = this.storage+"popock/inbox_log.ttl"
      let inbox_exists = await fc.itemExists(inbox_url)
      try{
        const inboxtWithAcl = await getSolidDatasetWithAcl(inbox_url);
        const agentAccess = getAgentAccess(inboxtWithAcl, webId);
        const publicAccess = getPublicAccess(inboxtWithAcl);
        if(agentAccess == null){
          alert ("Are you sure that you have allowed me to 'CONTROL' your POD, I can't read Acl of "+inbox_url+". I got a NULL value !! Please check your POD / Preferences / Trusted Application. ")
        }

        if( !(await fc.itemExists(inbox_log_file)) ) {
          console.log("creation:",inbox_log_file)
          await fc.createFile(inbox_log_file) // only create if it doesn't already exist

        }

        console.log("inbox_url: ", inbox_url, "inbox_exists: ", inbox_exists, "agentAcces: ", agentAccess, "publicAccess:", publicAccess )
        let inbox_log_file_exists = await fc.itemExists(inbox_log_file)
        console.log("inbox_log_file_exists:", inbox_log_file_exists)



        let resourceAcl;
        if (!hasResourceAcl(inboxtWithAcl)) {
          if (!hasAccessibleAcl(inboxtWithAcl)) {
            throw new Error(
              "The current user does not have permission to change access rights to this Resource."
            );
          }
          if (!hasFallbackAcl(inboxtWithAcl)) {
            throw new Error(
              "The current user does not have permission to see who currently has access to this Resource."
            );
            // Alternatively, initialise a new empty ACL as follows,
            // but be aware that if you do not give someone Control access,
            // **nobody will ever be able to change Access permissions in the future**:
            // resourceAcl = createAcl(myDatasetWithAcl);
          }
          resourceAcl = createAclFromFallbackAcl(inboxtWithAcl);
        } else {
          resourceAcl = getResourceAcl(inboxtWithAcl);
        }

        // Give someone Control access to the given Resource:
        /*  const updatedAcl = setAgentResourceAccess(
        resourceAcl,
        inbox_url,
        { read: false, append: true, write: false, control: true }
      );*/

      const updatedAclFolder = setPublicResourceAccess(
        resourceAcl,
        { read: true, append: true, write: false, control: false },
      );
      const updatedAcl = setPublicDefaultAccess(
        resourceAcl,
        { read: false, append: true, write: false, control: false },
      );

      // Now save the ACL:
      //  await saveAclFor(inboxtWithAcl, updatedAcl);
      console.log(updatedAcl, updatedAclFolder, saveAclFor)
      //  await saveAclFor(inboxtWithAcl, updatedAclFolder);

      //console.log("just for block",inboxtWithAcl, updatedAcl,saveAclFor);



    }catch(e){
      alert(e)
    }

    // cleaning for debug
    //await fc.deleteFile(inbox_log_file)



  },

}
}
