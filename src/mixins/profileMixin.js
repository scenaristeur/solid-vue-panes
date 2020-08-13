import { fetchDocument } from 'tripledoc';
import { vcard, foaf, dct } from 'rdf-namespaces'
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
    },
    addIndex: async function(url, classe, name){
      let inst  =  url.endsWith('/') ? url+name+"/index.ttl#this" : url+"/"+name+"/index.ttl#this"
      var dateObj = new Date();
      var date = dateObj.toISOString()

      console.log(inst, classe, name)
      let puti = this.$store.state.solid.indexes.puti
      console.log(puti)
      let putiDoc = await fetchDocument(puti.url)
      let newchat = await putiDoc.addSubject()
      //subj.addLiteral(dct.created, date)
      newchat.addNodeRef("http://www.w3.org/ns/solid/terms#forClass", classe)
      newchat.addNodeRef("http://www.w3.org/ns/solid/terms#instance", inst)
        newchat.addLiteral(dct.created, date)
      await putiDoc.save();
    },
    getIndexes: async function(webId){
      let indexes = {puti: {instances: {}, classes: {}}, prti: {instances: {}, classes: {}}}
      try{
        let profileDoc = await fetchDocument(webId);
        const subject = profileDoc.getSubject(webId)

        let puti = await  subject.getNodeRef("http://www.w3.org/ns/solid/terms#publicTypeIndex" )
        let prti = await  subject.getNodeRef("http://www.w3.org/ns/solid/terms#privateTypeIndex" )

        console.log(puti)
        console.log(prti)
        indexes.puti.url = puti
        indexes.prti.url = prti
        let putiDoc = await fetchDocument(puti)
        let prtiDoc = await fetchDocument(prti)
        console.log(putiDoc)
        console.log(prtiDoc)
        let puIndexes = await putiDoc.findSubjects("http://www.w3.org/ns/solid/terms#forClass", null)
        let prIndexes = await prtiDoc.findSubjects("http://www.w3.org/ns/solid/terms#forClass")
        console.log(puIndexes,prIndexes)

        puIndexes.forEach( async function(index) {
          let classe = await index.getRef("http://www.w3.org/ns/solid/terms#forClass")
          let instance = await index.getRef("http://www.w3.org/ns/solid/terms#instance")
          console.log(instance, classe)
          indexes.puti.instances[instance] = classe
          indexes.puti.classes[classe] ==  undefined ? indexes.puti.classes[classe] = [] : ""
          indexes.puti.classes[classe].push(instance)
        });

        prIndexes.forEach( async function(index) {
          let classe = await index.getRef("http://www.w3.org/ns/solid/terms#forClass")
          let instance = await index.getRef("http://www.w3.org/ns/solid/terms#instance")
          console.log(instance, classe)
          indexes.prti.classes[classe] ==  undefined ? indexes.prti.classes[classe] = [] : ""
          indexes.prti.classes[classe].push(instance)
        });



      }catch(e){
        console.log(e)
      }
      return indexes
    }
  }


}
