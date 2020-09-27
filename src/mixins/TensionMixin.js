import ToastMixin from '@/mixins/ToastMixin'
import fileMixin from '@/mixins/fileMixin'

import { fetchDocument} from 'tripledoc';
import { /*vcard,*/ dct, foaf, ldp, rdfs, rdf} from 'rdf-namespaces' //



export default {
  mixins: [ToastMixin, fileMixin],
  data: function () {
    return {
    //  tension : {privacy:"public"}
    }
  },

  methods: {
    async createTension() {
      this.tension.displayType = "Tension"
      console.log("TODO use http://purl.org/vocab/lifecycle/schema#Task")
      // see https://vocab.org/lifecycle/schema#Task & https://noeldemartin.github.io/solid-focus/#
      this.tension.types = ["http://purl.org/vocab/lifecycle/schema#Task", "http://www.w3.org/ns/ldp#Resource"]
      this.tension.path = this.path
      console.log(this.tension, this.path)
      try{
        let result = await this.createFile(this.tension)
        console.log("Result",result)
        this.tension = {privacy:"public"}
        this.makeToast("success !", this.tension.label+" created !", "success")
        this.$router.push({ name: 'Tensions', params: { url: result.url } })
      }
      catch(e){
        this.makeToast("Error !", e, "danger")

      }


    },
    async getTensions(){
      console.log("GET TENSIONS",this.path)
      let folder = await this.getFolder(this.path)
      console.log(folder)
      return folder.files
    },
    async getTensionDetail(tension){

      let tensionDoc = await fetchDocument(tension.url)
      const t_subj = tensionDoc.getSubject(tension.url+"#this")
      let details = tension
      details.created = t_subj.getLiteral(dct.created)
      details.label = t_subj.getLiteral(rdfs.label)
      details.inbox = t_subj.getRef(ldp.inbox)
      details.wi = t_subj.getLiteral("https://holacratie.solid.community/public/holacratie#whatis")
      details.wsb = t_subj.getLiteral("https://holacratie.solid.community/public/holacratie#whatshouldbe")
      details.maker = t_subj.getRef(foaf.maker)
      details.types = t_subj.getAllRefs(rdf.type)
      details.roles = t_subj.getAllLiterals("http://www.w3.org/ns/org#memberOf")
      details.domains = t_subj.getAllLiterals("http://www.w3.org/ns/org#purpose")
      details.actors = t_subj.getAllRefs("https://www.w3.org/ns/activitystreams#actor")

      //  console.log(details)
      return details
    }

  }
}
