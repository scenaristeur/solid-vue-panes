
import { vcard, foaf, dct, rdfs, ldp , rdf} from 'rdf-namespaces'


export default {
  methods: {
    getProfile: async function(webId){
      let profile = {friends:[]}
      profile.webId = webId
      try{
        let profileDoc = await this.$fc.readFile(webId);
        const p = profileDoc.getSubject(webId)
        profile.name = p.getString(vcard.fn)
        profile.organization = p.getString("http://www.w3.org/2006/vcard/ns#organization-name")
        profile.role = p.getString(vcard.role)
        profile.photo = p.getRef(vcard.hasPhoto)
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

        profile.workspaces = await this.getWorkspaces(webId)

        if (profile.workspaces.length > 0 ){
          console.log("PF",profile.workspaces)
          for(let i in profile.workspaces){
            let w = profile.workspaces[i]
            if(w.name == "gouvernance"){
              let groups_folder = w.path+"groups"
              let tensions_folder = w.path+"tensions"
              console.log("ww",w, groups_folder, tensions_folder)
              let g_folder = await this.$fc.readFolder(groups_folder)
              let t_folder = await this.$fc.readFolder(groups_folder)
              let g_urls = g_folder.files
              let t_urls = t_folder.files
              console.log(g_urls, t_urls)
              profile.groups = g_urls
              profile.tensions = t_urls


            }


          }
          //  profile.groups = await this.getGroups(webId)
          //  profile.tensions = await this.getTensions(webId)
          console.log("PROFILE",webId, profile)
        }

        // ???  Does not work profile.photo = await p.getString(vcard.hasPhoto)
        /*  let photo = await solid.data.[webId].vcard$hasPhoto
        profile.photo = `${photo}`*/
      }catch(e){
        //console.log(e)
        this.makeToast(e.message, webId, 'warning')
      }
      //  console.log(profile)
      return profile
    },
    getInboxUrls: async function(webId){
      let inbox_urls = []
      try{
        let profileDoc = await this.$fc.readFile(webId);
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
        let profileDoc = await this.$fc.readFile(webId);
        const p = profileDoc.getSubject(webId)
        friends = await  p.getAllRefs(foaf.knows )
      }catch(e){
        //alert(webId+" : "+e)
        this.makeToast(e.message, webId, 'warning')
      }
      return friends
    },



    getWorkspaces: async function(webId){

      let workspaces = []
      let storage =  await solid.data[webId].storage
      let indexFile = storage+"public/popock/workspaces.ttl"
      //  console.log(webId, storage, indexFile)
      if (this.$fc.itemExists(indexFile)){
        let workspacesDoc = {}
        try{
          workspacesDoc = await this.$fc.readFile(indexFile)
          let subjects = workspacesDoc.getAllSubjectsOfType("http://www.w3.org/ns/pim/space#Workspace")
          for  (let s of subjects) {
            let name = s.getLiteral(rdf.label)
            let path = s.getRef("http://www.w3.org/ns/pim/space#storage")
            let pod = s.getRef("http://www.w3.org/ns/solid/terms#webId")
            workspaces.push({name: name, path: path, pod: pod, subject: s.asRef().split('#')[1]})
          }
        }catch(e){
          //  console.log(e)
          //  workspacesDoc = await this.$fc.createFile(indexFile)
        }
      }


      //console.log("WWWW workspaces",workspaces)
      return workspaces
    },
    getGroups: async function(webId){
      let groups = []
      let   workspaces = await this.getWorkspaces(webId)

      if (workspaces.length > 0){
        console.log(webId, workspaces)
        workspaces.forEach(async function (w) {

          if(w.name == 'gouvernance'){
            console.log(w.name, w.path, w.subject)
            let folder = w.path+'groups'
            console.log("groups_folder", folder)
            let f = await this.$fc.readFolder(folder)
            groups = f.files
            console.log("GGGGGGGRRRRoups 2",groups)
            return groups
          }
        });

      }

    },

    getTensions: async function(webId){
      let tensions = []
      let   workspaces = await this.getWorkspaces(webId)

      if (workspaces.length > 0){
        console.log(webId, workspaces)
        workspaces.forEach(async function (w) {
          console.log(w.name, w.path, w.subject)
          if(w.name == 'gouvernance'){
            let folder = w.path+'tensions'
            console.log("TTTTTTTTTension folder", folder)
            let f = await this.$fc.readFolder(folder)
            tensions = f.files
            console.log("TTTTTENSIONS",tensions)
          }
        });
      }
      return tensions
    },







    addIndex: async function(fullpath, classe, name){
      let inst  =  fullpath+"/index.ttl#this"
      var dateObj = new Date();
      var date = dateObj.toISOString()

      //      console.log(inst, classe, name, webId)
      let puti = this.$store.state.solid.indexes.puti
      //    console.log(puti)
      let putiDoc = await this.$fc.readFile(puti.url)
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
        let profileDoc = await this.$fc.readFile(webId);
        const subject = profileDoc.getSubject(webId)

        let puti = await  subject.getNodeRef("http://www.w3.org/ns/solid/terms#publicTypeIndex" )
        let prti = await  subject.getNodeRef("http://www.w3.org/ns/solid/terms#privateTypeIndex" )

        //    console.log(puti)
        //    console.log(prti)
        indexes.puti.url = puti
        indexes.prti.url = prti
        let putiDoc = await this.$fc.readFile(puti)
        //  let prtiDoc = await this.$fc.readFile(prti)
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
