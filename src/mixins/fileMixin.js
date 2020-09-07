import toastMixin from '@/mixins/toastMixin'
import { createDocument, /*fetchDocument */} from 'tripledoc';
import { /*vcard,*/ dct, foaf, ldp, rdfs, rdf} from 'rdf-namespaces' //


export default {
  mixins: [toastMixin],
  data: function () {
    return {
      //    tension : {privacy:"public"}
    }
  },
  methods: {
    async  createFile(data){
      data.label = data.label.trim()
      data.ttl_name = data.label.replace(/\s/g, '_')
      var dateObj = new Date();
      var date = dateObj.toISOString()
      data.created = date  //http://purl.org/dc/terms/created
      console.log(data)
      data.url = data.path+data.ttl_name+".ttl"
      console.log(data)

      try{
        let dataDoc =    await createDocument(data.url);
        let subj =  dataDoc.addSubject({identifier:"this"})
        subj.addLiteral(rdfs.label, data.label)
        subj.addNodeRef(ldp.inbox, "./"+data.ttl_name+"/inbox/")
        subj.addLiteral(dct.created, date)
        subj.addNodeRef(foaf.maker, this.$store.state.solid.webId)
        data.types.forEach((t) => {
          subj.addNodeRef(rdf.type, t)
        });
        data.role.split(",").forEach((r) => {
          subj.addLiteral("http://www.w3.org/ns/org#memberOf", r.trim())
        });
        data.domains.split(",").forEach((d) => {
          subj.addLiteral("http://www.w3.org/ns/org#purpose", d.trim())
        });

        await dataDoc.save();

        this.makeToast("Created "+data.label, "ok", "success")
      }
      catch(e){
        this.makeToast("Error creating "+data.label, e, "danger")
        console.log(e)
      }



      if (data.privacy == "public"){
        console.log("ACTIVITY !!")

        this.makeToast("Activity published", data.label, "success")
      }
    }
  }
}
