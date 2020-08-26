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
  getAgentAccess,
  //  getAgentAccessAll,
  //  setAgentResourceAccess,
  setAgentResourceAccess,
  setAgentDefaultAccess,
  setPublicResourceAccess,
  setPublicDefaultAccess,
  saveAclFor,
} from "@inrupt/solid-client";

import { fetchDocument, createDocument } from 'tripledoc';
import { schema } from 'rdf-namespaces'

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


      let logDoc ={}
      try{
        logDoc = await fetchDocument(inbox_log_file);
      } catch(e){
        logDoc = await createDocument(inbox_log_file);
      }


      let s = logDoc.addSubject()
      s.addNodeRef(schema.about, "init")
      //  console.log(logDoc)
      await logDoc.save()



      try{
        const inboxtWithAcl = await getSolidDatasetWithAcl(inbox_url);
        const agentAccess = getAgentAccess(inboxtWithAcl, webId);
        const publicAccess = getPublicAccess(inboxtWithAcl);
        if(agentAccess == null){
          alert ("Are you sure that you have allowed me to 'CONTROL' your POD, I can't read Acl of "+inbox_url+". I got a NULL value !! Please check your POD / Preferences / Trusted Application. ")
        }

        /*  if( !(await fc.itemExists(inbox_log_file)) ) {
        console.log("creation:",inbox_log_file)
        await fc.postFile( inbox_log_file, " ", "text/turtle") // only create if it doesn't already exist
      }*/





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


    const updatedAgentResourceAccess = setAgentResourceAccess(
      resourceAcl,
      webId,
      { read: true, append: true, write: true, control: true },
    );
    const updatedAgentDefaultAccess = setAgentDefaultAccess(
      resourceAcl,
      webId,
      { read: true, append: true, write: true, control: true },
    );
    const updatedPublicResourceAccess = setPublicResourceAccess(
      resourceAcl,
      { read: true, append: true, write: false, control: false },
    );
    const updatedPublicDefaultAccess = setPublicDefaultAccess(
      resourceAcl,
      { read: false, append: true, write: false, control: false },
    );

    //    console.log("DOSSIER, EVERYONE POSTER, DEFAULT EVERYONE SUBMITTERS",updatedAgentResourceAccess, updatedAgentResourceAccess)
    try{
      // Now save the ACL:
      await saveAclFor(inboxtWithAcl, updatedAgentResourceAccess);
      console.log("owner Resource")
    }catch(e){
      console.log("todo if 409 conflict : must test if ok before patch" /*,e*/)          }
      try{
        await saveAclFor(inboxtWithAcl, updatedAgentDefaultAccess);
        console.log("owner default")
      }catch(e){
        console.log("todo if 409 conflict : must test if ok before patch" /*,e*/)          }
        try{
          await saveAclFor(inboxtWithAcl, updatedPublicResourceAccess);
          console.log("posters Resource")
        }catch(e){
          console.log("todo if 409 conflict : must test if ok before patch" /*,e*/)
        }
        try{
          await saveAclFor(inboxtWithAcl, updatedPublicDefaultAccess);
          console.log("submitters Default")

        }catch(e){
          console.log("todo if 409 conflict : must test if ok before patch" /*,e*/)
        }


        const logFileWithAcl = await getSolidDatasetWithAcl(inbox_log_file);

        let logAcl;
        if (!hasResourceAcl(logFileWithAcl)) {
          if (!hasAccessibleAcl(logFileWithAcl)) {
            throw new Error(
              "The current user does not have permission to change access rights to this Resource."
            );
          }
          if (!hasFallbackAcl(logFileWithAcl)) {
            throw new Error(
              "The current user does not have permission to see who currently has access to this Resource."
            );
            // Alternatively, initialise a new empty ACL as follows,
            // but be aware that if you do not give someone Control access,
            // **nobody will ever be able to change Access permissions in the future**:
            // resourceAcl = createAcl(myDatasetWithAcl);
          }
          logAcl = createAclFromFallbackAcl(logFileWithAcl);
        } else {
          logAcl = getResourceAcl(logFileWithAcl);
        }

        console.log("Log acl", logAcl)
        const updatedPublicLogAccess = setPublicResourceAccess(
          logAcl,
          { read: true, append: true, write: false, control: false },
        );
        //    try{
        await saveAclFor(logFileWithAcl, updatedPublicLogAccess);
        console.log("logfile Default")

        //  }catch(e){
        //  console.log("todo if 409 conflict : must test if ok before patch" /*,e*/)
        //}



        //console.log("just for block",inboxtWithAcl, updatedAcl,saveAclFor);



      }catch(e){
        alert(e)
      }

      // cleaning for debug
      //await fc.deleteFile(inbox_log_file)



    },

  }
}
