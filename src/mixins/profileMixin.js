import { fetchDocument } from 'tripledoc';
import { vcard, foaf, dct, rdfs } from 'rdf-namespaces'
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
        //console.log(e)
        this.makeToast(e.message, webId, 'warning')
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
        //alert(webId+" : "+e)
        this.makeToast(e.message, webId, 'warning')
      }
      return friends
    },
    addIndex: async function(fullpath, classe, name){
      let inst  =  fullpath+"/index.ttl#this"
      var dateObj = new Date();
      var date = dateObj.toISOString()

      //      console.log(inst, classe, name, webId)
      let puti = this.$store.state.solid.indexes.puti
      //    console.log(puti)
      let putiDoc = await fetchDocument(puti.url)
      let newchat = await putiDoc.addSubject()
      //subj.addLiteral(dct.created, date)
      newchat.addLiteral(rdfs.label, name)
      newchat.addNodeRef("http://www.w3.org/ns/solid/terms#forClass", classe)
      newchat.addNodeRef("http://www.w3.org/ns/solid/terms#instance", inst)
      newchat.addLiteral(dct.created, date)
      await putiDoc.save();

    },
    getIndexes: async function(webId){
      let indexes = {puti: {instances: [], classes: []}, prti: {instances: [], classes: []}}
      try{
        let profileDoc = await fetchDocument(webId);
        const subject = profileDoc.getSubject(webId)

        let puti = await  subject.getNodeRef("http://www.w3.org/ns/solid/terms#publicTypeIndex" )
        let prti = await  subject.getNodeRef("http://www.w3.org/ns/solid/terms#privateTypeIndex" )

        //    console.log(puti)
        //    console.log(prti)
        indexes.puti.url = puti
        indexes.prti.url = prti
        let putiDoc = await fetchDocument(puti)
      //  let prtiDoc = await fetchDocument(prti)
        //    console.log(putiDoc)
        //    console.log(prtiDoc)
        let puIndexes = await putiDoc.findSubjects("http://www.w3.org/ns/solid/terms#forClass")
      //  let prIndexes = await prtiDoc.findSubjects("http://www.w3.org/ns/solid/terms#forClass")
        //    console.log(puIndexes,prIndexes)

        puIndexes.forEach( async function(index) {
          let classe = await index.getRef("http://www.w3.org/ns/solid/terms#forClass")
          let instance = await index.getRef("http://www.w3.org/ns/solid/terms#instance")
          let created = await index.getString(dct.created)
          let label = await index.getString(rdfs.label)
          //    console.log(instance, classe)
          indexes.puti.instances.push({instance: instance, classe: classe, label: label, created: created})
          indexes.puti.classes[classe] ==  undefined ? indexes.puti.classes[classe] = [] : ""
          indexes.puti.classes[classe].push(instance)
        });

      /*  prIndexes.forEach( async function(index) {
          let classe = await index.getRef("http://www.w3.org/ns/solid/terms#forClass")
          let instance = await index.getRef("http://www.w3.org/ns/solid/terms#instance")
          let created = await index.getString(dct.created)
          let label = await index.getString(rdfs.label)
          //    console.log(instance, classe)
          indexes.prti.instances.push({instance: instance, classe: classe, label: label, created: created})
          indexes.prti.classes[classe] ==  undefined ? indexes.prti.classes[classe] = [] : ""
          indexes.prti.classes[classe].push(instance)
        });*/



      }catch(e){
        //  console.log(e)
      }
      console.log(webId, indexes)
      return indexes
    },
    makeToast(title, content,variant = null) {
      this.$bvToast.toast(content , {
        title: title,
        variant: variant,
        solid: true
      })
    }
  }


}
