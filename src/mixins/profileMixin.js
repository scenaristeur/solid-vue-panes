import { fetchDocument } from 'tripledoc';
import { vcard, foaf} from 'rdf-namespaces'
const solid= window.solid

export default {
  methods: {
    getProfile: async function(webId){
      let profile = {friends:[]}
      profile.webId = webId
      try{
        let profileDoc = await fetchDocument(webId);

        const p = profileDoc.getSubject(webId)

        profile.name = await  p.getString(vcard.fn)

        profile.organization = await  p.getString("http://www.w3.org/2006/vcard/ns#organization-name")
        profile.role = await  p.getString(vcard.role)

        //must check if there are many addressUrl
        let addressUrl = await  p.getRef(vcard.hasAddress)
        //    console.log("Address Node ",addressUrl)
        if (addressUrl != null){
          let add = profileDoc.getSubject(addressUrl);
          profile.locality = await add.getString(vcard.locality)
        }
        // ???  Does not work profile.photo = await p.getString(vcard.hasPhoto)
        let photo = await solid.data.[webId].vcard$hasPhoto
        profile.photo = `${photo}`
      }catch(e){
        //  console.log(e)
      }
      return profile
    },
    getFriends: async function(webId){
      let friends = []
      try{
        let profileDoc = await fetchDocument(webId);
        const p = profileDoc.getSubject(webId)
        friends = await  p.getAllRefs(foaf.knows )
      }catch(e){
        //  console.log(e)
      }
      return friends
    }
  }


}
