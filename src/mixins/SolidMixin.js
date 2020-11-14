import { fetchDocument, createDocument } from 'tripledoc';
import { dct, rdfs, foaf, rdf } from 'rdf-namespaces'
import activityMixin from '@/mixins/ActivityMixin'
import ToastMixin from '@/mixins/ToastMixin'
//import * as jsonld from 'jsonld';

export default {
  name: 'SolidMixin',
  mixins: [activityMixin, ToastMixin],
  methods: {
    async putOnPod(data){
      console.log(data)

      let d = new Date()
      //  this.d = d
      let iso_date = d.toISOString()
      let filename = [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")
      let path = data['folder'].length != undefined && data['folder'].length > 0?  this.storage+data['folder'] : this.storage+"public/"
      let fileUrl = path+filename+".ttl"
      console.log(fileUrl)
      let postDoc = {}
      try{
        postDoc = await fetchDocument(fileUrl);
      }catch(e){
        postDoc = await createDocument(fileUrl);
      }
      var postId = data['rdf:type'].split(":")[1]+"_"+d.getTime()
      console.log(postId)
      data['@id'] = postId
      let subj = postDoc.addSubject({identifier:postId})
      //subj.addLiteral(sioc.content, this.activity)
      subj.addLiteral(rdfs.label, data['gr:name'])
      subj.addLiteral(dct.created, iso_date)
      subj.addRef(foaf.maker, this.webId)
      subj.addRef("https://www.w3.org/ns/activitystreams#actor", this.webId)
      await this.addOtherProperties(subj,data,postDoc, d)


      try{
        await postDoc.save();
        console.log("DOC saved ")
        this.makeToast("Saved", data['gr:name']+" at "+fileUrl, "success")
        // this.activity = {actor:{}, object: {}, summary:""}
        // this.activity.actor.name = this.webId
        // this.activity.type = "https://www.w3.org/ns/activitystreams#Create"
        // this.activity.object.name = this.post.title
        // this.activity.object.type = "Article"
        // this.activity.object.url = fileUrl+"#"+postId
        // this.activity.object.inReplyTo = this.url
        // //    this.activity.summary = this.webId+" has just posted an Article with title "+this.post.title+" at "+this.activity.object.url
        if (data['@publish'] == true){
          this.activity = data
          this.activity.object.url = fileUrl+"#"+postId
          this.sendOfferActivity()
        }
        //
      }
      catch(e){
        alert(e)
        this.makeToast("Error", e, "danger")
      }



    },
    async  addOtherProperties(subject, data, doc, d){
      console.log(data)
      let context = data['@context']
      //https://github.com/rdf-ext-archive/rdf-examples/blob/develop/parse-jsonld-to-prefix-map.js
      console.log("context",context)
      let contextMap = {}
      context.forEach((item) => {
        if (typeof item == 'object'){
          console.log(item)
          Object.entries(item).forEach((prefix) => {
            if (!prefix[0].startsWith('@')){
              contextMap[prefix[0]] = prefix[1]
            }

          });

          //  contextMap.push(item)
        }
      });
      console.log("MAP",contextMap)

      // const expanded = await jsonld.expand(data);
      // console.log(expanded)
      // const flattened = await jsonld.flatten(data);
      // console.log(flattened)
      // const nquads = await jsonld.toRDF(data, {format: 'application/n-quads'});
      // console.log(nquads)
      // const ttl = await jsonld.toRDF(data, {format: 'application/x-turtle'});
      // console.log(ttl)

      Object.entries(data).forEach((entry) => {

        if (!entry[0].startsWith('@')){

          let predicate = this.shortToLong(entry[0], contextMap)
          let object = ""
          switch (typeof entry[1]) {
            case "string":
            if(entry[1].length > 0){
              object = this.shortToLong(entry[1], contextMap)
              //  console.log("Pred",predicate)
              //  console.log("Object", object)
              if(object.startsWith('http')){
                subject.addRef(predicate, object)
              }else{
                subject.addLiteral(predicate, object)
              }
            }
            break;
            case "object":
            console.log(typeof entry[1], entry[0], "->",  entry[1])
            if(entry[0] == "object"){
              this.addObject(subject, entry[1], doc, d, contextMap)
            }

            break;
            default:

          }

        }

      });

    },
    addObject(subj, object_data, doc, d, contextMap){

      var objectId = object_data['rdf:type'].split(":")[1]+"_"+d.getTime()

      let subj_object = doc.addSubject({identifier:objectId})
      subj.addRef('http://purl.org/goodrelations/v1#includes',subj_object.asRef())
      //subj.addLiteral(sioc.content, this.activity)
      subj_object.addLiteral(rdfs.label, object_data['gr:name'])
      subj_object.addRef(rdf.type, this.shortToLong(object_data['rdf:type'],contextMap))

      Object.entries(object_data).forEach((entry) => {

        let pred = this.shortToLong(entry[0], contextMap)
        if(typeof entry[1] == "string"){
          let  object = this.shortToLong(entry[1], contextMap)
          //  console.log("Pred",predicate)
          //  console.log("Object", object)
          if(object.startsWith('http')){
            subj_object.addRef(pred, object)
          }else{
            subj_object.addLiteral(pred, object)
          }
        }else{
          console.log("TODO",entry)
          let p = this.shortToLong(entry[0], contextMap)

          entry[1].forEach((obj_val) => {
            let obj_long = this.shortToLong(obj_val, contextMap)
            if(obj_long.startsWith('http')){
              subj_object.addRef(p, obj_long)
            }else{
              subj_object.addLiteral(p, obj_long)
            }

          });





        }
      });




    },
    shortToLong(short, prefixes){
      //  console.log(prefixes)
      let splitted = short.split(":")
      //  console.log(splitted)
      let prefix = splitted[0]
      //  console.log(prefix)
      let url = prefixes[prefix]
      //  console.log(url)
      return url != undefined ? url+"#"+splitted[1] : short
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
