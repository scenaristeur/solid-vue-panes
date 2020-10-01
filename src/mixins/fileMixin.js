import ToastMixin from '@/mixins/ToastMixin'
import ActivityMixin from '@/mixins/ActivityMixin'

import { createDocument, fetchDocument } from 'tripledoc';
import { /*vcard,*/ dct, foaf, ldp, rdfs, rdf} from 'rdf-namespaces' //
import auth from 'solid-auth-client';

export default {
  mixins: [ToastMixin, ActivityMixin],
  data: function () {
    return {
      //    tension : {privacy:"public"}
    }
  },
  created(){
    this.fc   = new SolidFileClient(auth)
  //  console.log(this.fc)
  },
  methods: {
    async createFile(data){
      data.label = data.label.trim()
      data.ttl_name = data.label.replace(/\s/g, '_')

      this.activity = {
        actor: {name: this.$store.state.solid.webId},
        type: "Create",
        summary: "",
        object:{
          name: data.label,
          url: "",
          type: "Tension"}
        }

        try{
          let dataDoc = {}
          if (data.url == undefined){
            data.url = data.path+data.ttl_name+".ttl"
            dataDoc = await createDocument(data.url);
            this.activity.type = "Create"
          }else{
            dataDoc = await fetchDocument(data.url);
            this.activity.type = "Update"
          }

          let subj =  dataDoc.addSubject({identifier:"this"})
          var dateObj = new Date();
          var date = dateObj.toISOString()
          if (data.created != undefined ){
            data.modified = date
            subj.addLiteral(dct.modified, date)
            subj.removeAll(rdfs.label)
            subj.removeAll(ldp.inbox)
            subj.removeAll("https://holacratie.solid.community/public/holacratie#whatis",data.wi)
            subj.removeAll("https://holacratie.solid.community/public/holacratie#whatshouldbe",data.wsb)
            //  subj.addRef(foaf.maker, this.$store.state.solid.webId)
            subj.removeAll(rdf.type)
            subj.removeAll("http://www.w3.org/ns/org#memberOf")
            subj.removeAll("http://www.w3.org/ns/org#purpose")
          }else{
            data.created = date  //http://purl.org/dc/terms/created
            subj.addLiteral(dct.created, date)
          }

    //      console.log(data)
          subj.addLiteral(rdfs.label, data.label)
          subj.addRef(ldp.inbox, "./"+data.ttl_name+"/inbox/")

          subj.addLiteral("https://holacratie.solid.community/public/holacratie#whatis",data.wi)
          subj.addLiteral("https://holacratie.solid.community/public/holacratie#whatshouldbe",data.wsb)
          subj.addRef(foaf.maker, this.$store.state.solid.webId)
          data.types.forEach((t) => {
            subj.addRef(rdf.type, t)
          });
          if (data.roles != undefined){
            data.roles.split(",").forEach((r) => {
              subj.addLiteral("http://www.w3.org/ns/org#memberOf", r.trim())
            });
            console.log("TODO: must look at existing groups & existing frineds groups & activity published groups")
          }
          if(data.domains != undefined){
            data.domains.split(",").forEach((d) => {
              subj.addLiteral("http://www.w3.org/ns/org#purpose", d.trim())
            });
            console.log("TODO: must look at https://www.wikidata.org/w/api.php?action=wbsearchentities&language=fr&format=json&search=Ecology")
          }

          await dataDoc.save();

          this.makeToast("Created "+data.label, "ok", "success")
        }
        catch(e){
          this.makeToast("Error creating "+data.label, e, "danger")
          console.log(e)
        }



        if (data.privacy == "public"){
      //    console.log("ACTIVITY !!")
          this.activity.object.url = data.url
          //  this.activity.summary = [this.activity.actor.name, this.activity.type, "a", this.activity.object.type, "with name", this.activity.object.name].join(" ")

          this.sendActivity()

          this.makeToast("TODO : must Activity publish", data.label, "success")
        }
        return data
      },
      async  getFolder(url){
        //console.log("get folder",url)
        let folder = await this.fc.readFolder(url)
        return folder
      },
    }
  }
