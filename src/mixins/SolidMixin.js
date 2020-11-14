import { fetchDocument, createDocument } from 'tripledoc';
import { dct, rdfs, foaf } from 'rdf-namespaces'
import activityMixin from '@/mixins/ActivityMixin'
import * as jsonld from 'jsonld';

export default {
  name: 'SolidMixin',
  mixins: [activityMixin],
  methods: {
    async putOnPod(data){
      console.log(data)

      let d = new Date()
      //  this.d = d
      let iso_date = d.toISOString()
      let filename = [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")
      let path = data.folder.length != undefined && data.folder.length > 0?  this.storage+data.folder : this.storage+"public/"
      let fileUrl = path+filename+".ttl"
      console.log(fileUrl)
      let postDoc = {}
      try{
        postDoc = await fetchDocument(fileUrl);
      }catch(e){
        postDoc = await createDocument(fileUrl);
      }
      var postId = data.type.split(":")[1]+"_"+d.getTime()
      console.log(postId)
      let subj = postDoc.addSubject({identifier:postId})
      //subj.addLiteral(sioc.content, this.activity)
      subj.addLiteral(rdfs.label, data['gr:name'])
      subj.addLiteral(dct.created, iso_date)
      subj.addRef(foaf.maker, this.webId)
      subj.addRef("https://www.w3.org/ns/activitystreams#actor", this.webId)
      await this.addOtherProperties(subj,data)


      try{
        await postDoc.save();
        console.log("DOC saved ")
        // this.activity = {actor:{}, object: {}, summary:""}
        // this.activity.actor.name = this.webId
        // this.activity.type = "https://www.w3.org/ns/activitystreams#Create"
        // this.activity.object.name = this.post.title
        // this.activity.object.type = "Article"
        // this.activity.object.url = fileUrl+"#"+postId
        // this.activity.object.inReplyTo = this.url
        // //    this.activity.summary = this.webId+" has just posted an Article with title "+this.post.title+" at "+this.activity.object.url
        // this.sendActivity()
      }
      catch(e){
        alert(e)
      }



    },
    async  addOtherProperties(subject, data){
      console.log(data)
      let context = data['@context']
      //https://github.com/rdf-ext-archive/rdf-examples/blob/develop/parse-jsonld-to-prefix-map.js
      console.log("context",context)
      let contextMap = {}
      context.forEach((item) => {
        if (typeof item == 'object'){
          console.log(item)
          Object.entries(item).forEach((prefix) => {
            contextMap[prefix[0]] = prefix[1]
          });

          //  contextMap.push(item)
        }
      });
      console.log("MAP",contextMap)

      const expanded = await jsonld.expand(data);
      console.log(expanded)
      const flattened = await jsonld.flatten(data);
      console.log(flattened)
      const nquads = await jsonld.toRDF(data, {format: 'application/n-quads'});
      console.log(nquads)
      // const ttl = await jsonld.toRDF(data, {format: 'application/x-turtle'});
      // console.log(ttl)

      Object.entries(data).forEach((entry) => {
        console.log(entry[0], "->", entry[1])
      });

    }
  },
  computed:{
    storage:{
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    webId:{
      get: function() { return this.$store.state.solid.webId},
      set: function() {}
    },
  }


}
