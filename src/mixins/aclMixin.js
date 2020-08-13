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
  setPublicDefaultAccess,
  saveAclFor,
} from "@inrupt/solid-client";

export default {
  created(){

  },
  methods: {
    async readPublicAccess(url){
      const myDatasetWithAcl = await getSolidDatasetWithAcl(url);
      const publicAccess = getPublicAccess(myDatasetWithAcl);
      console.log("publicAccess", publicAccess)
    },
    async setPublicAccess(url, pattern){
      // Fetch the SolidDataset and its associated ACLs, if available:
      const myDatasetWithAcl = await getSolidDatasetWithAcl(url);

      // Obtain the SolidDataset's own ACL, if available,
      // or initialise a new one, if possible:
      let resourceAcl;
      if (!hasResourceAcl(myDatasetWithAcl)) {
        if (!hasAccessibleAcl(myDatasetWithAcl)) {
          throw new Error(
            "The current user does not have permission to change access rights to this Resource."
          );
        }
        if (!hasFallbackAcl(myDatasetWithAcl)) {
          throw new Error(
            "The current user does not have permission to see who currently has access to this Resource."
          );
          // Alternatively, initialise a new empty ACL as follows,
          // but be aware that if you do not give someone Control access,
          // **nobody will ever be able to change Access permissions in the future**:
          // resourceAcl = createAcl(myDatasetWithAcl);
        }
        resourceAcl = createAclFromFallbackAcl(myDatasetWithAcl);
      } else {
        resourceAcl = getResourceAcl(myDatasetWithAcl);
      }

      // Give someone Control access to the given Resource:
      /*const updatedAcl = setAgentResourceAccess(
      resourceAcl,
      "https://some.pod/profile#webId",
      pattern
    );*/
    const updatedAcl = setPublicDefaultAccess(
      resourceAcl,
      { read: true, append: true, write: false, control: false },
    );
    
    // Now save the ACL:
    await saveAclFor(myDatasetWithAcl, updatedAcl);
    console.log("Pattern saved for ",url, pattern)
  }

}
}
