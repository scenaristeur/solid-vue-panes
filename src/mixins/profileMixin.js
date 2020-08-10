/*eslint no-unused-vars: "error"*/
//import auth from 'solid-auth-client';
import { fetchDocument } from 'tripledoc';
import { vcard, foaf  /*sioc, dct, foaf*/ } from 'rdf-namespaces'
//console.log(auth)
const solid= window.solid

export default {
  created: async function () {
    //  this.hello()
    //  this.profile = this.getprofile()
  },
  methods: {
    hello: function () {
      //    console.log('hello from mixin!')
    },
    getProfile: async function(webId){
      let profile = {}
      profile.webId = webId
      try{
        let profileDoc = await fetchDocument(webId);

        const p = profileDoc.getSubject(webId)

        profile.name = await  p.getString(vcard.fn)

        profile.organization = await  p.getString("http://www.w3.org/2006/vcard/ns#organization-name")
        profile.role = await  p.getString(vcard.role)
        profile.friends = await  p.getAllRefs(foaf.knows )

        let addressUrl = await  p.getRef(vcard.hasAddress)
        console.log("Address Node ",addressUrl)
        let add = profileDoc.getSubject(addressUrl);

        profile.locality = await add.getString(vcard.locality)


        //  Does not work profile.photo = await p.getString(vcard.hasPhoto)
        let photo = await solid.data.[webId].vcard$hasPhoto
        profile.photo = `${photo}`

        /*  let friends = await solid.data.[webId].friends

        profile.friends = `${friends}`*/
    //    console.log(profile)
        /*  profile.friends = await  profile.getAllRefs(foaf.knows )*/
      }catch(e){
        //  console.log(e)
      }
      return profile

    }
  }


}
