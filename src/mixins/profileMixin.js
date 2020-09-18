import { fetchDocument } from 'tripledoc';
import { vcard, foaf, dct, rdfs, ldp } from 'rdf-namespaces'
//const solid= window.solid

export default {
  methods: {
    getProfile: async function(webId){
      let profile = {friends:[]}
      profile.webId = webId
      try{
        let profileDoc = await fetchDocument(webId);
        const p = profileDoc.getSubject(webId)
        profile.name = p.getString(vcard.fn)
        profile.organization = p.getString("http://www.w3.org/2006/vcard/ns#organization-name")
        profile.role = p.getString(vcard.role)
        profile.photo = p.getString(vcard.hasPhoto)
        profile.bday = p.getString(vcard.bday)
        profile.gender = p.getString(vcard.hasGender)
        profile.note = p.getString(vcard.note)
        profile.friends = p.getAllRefs(foaf.knows)
        //profile.trustedApps = p.getAllLiterals("http://www.w3.org/ns/auth/acl#trustedApp")
      //  console.log(p)
      //  console.log(acl)

        //must check if there are many addressUrl
        let addressUrl = p.getRef(vcard.hasAddress)
        //    console.log("Address Node ",addressUrl)
        if (addressUrl != null){
          let add = profileDoc.getSubject(addressUrl);
          profile.locality = add.getString(vcard.locality)
          profile.country = add.getString("http://www.w3.org/2006/vcard/ns#country-name")
          profile.postal = add.getString("http://www.w3.org/2006/vcard/ns#postal-code")
          profile.region = add.getString(vcard.region)
          profile.address = add.getString("http://www.w3.org/2006/vcard/ns#street-address")
        }
        // ???  Does not work profile.photo = await p.getString(vcard.hasPhoto)
      /*  let photo = await solid.data.[webId].vcard$hasPhoto
        profile.photo = `${photo}`*/
      }catch(e){
        //console.log(e)
        this.makeToast(e.message, webId, 'warning')
      }
      console.log(profile)
      return profile
    },
    getInboxUrls: async function(webId){
      let inbox_urls = []
      try{
        let profileDoc = await fetchDocument(webId);
        const p = profileDoc.getSubject(webId)
        inbox_urls = await  p.getAllRefs(ldp.inbox )
      }catch(e){
        //alert(webId+" : "+e)
        this.makeToast(e.message, webId, 'warning')
      }
      return inbox_urls
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
