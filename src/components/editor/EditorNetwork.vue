<template>
  <div class="modele-view">
    Reprendre network3
    <!--  <Component /> -->
    <small>
      File: <a :href="file.url" target="_blank">{{ file.url }}</a><br>
      Node: {{node.label}}<br>
    </small>

    <!--  <b-button v-b-modal.node-popup>Launch demo modal</b-button>
    <b-button v-b-modal.edge-popup>Launch demo modal</b-button>-->

    <b-input placeholder="filename without spaces or any exotic char" v-model="filename" />
    <b-button @click="create">New</b-button>
    <b-form-checkbox class="m-2"
    id="checkbox-1"
    v-model="privacy"
    name="checkbox-1"
    value="public_write"
    unchecked-value="private_write"
    checked> Anyone can amend this file
  </b-form-checkbox>

  <b-button @click="clear" size="sm" variant="warning">Clear</b-button>
  <b-button @click="copy"  size="sm" variant="success">Copy</b-button>
  <b-button @click="openCommand" size="sm" variant="success">Command</b-button>

  <network ref="network"
  class="wrapper"
  :nodes="nodes"
  :edges="edges"
  :options="options"
  @select-node="selectNode"
  @select-edge="selectEdge">
</network>
<!-- @select="networkEvent('select')" -->
<!--  @nodes-mounted="networkEvent('nodes-mounted')"
@nodes-add="addNode"
@nodes-update="updateNode"
@nodes-remove="removeNode"
@edges-mounted="networkEvent('edges-mounted')"
@edges-add="addEdge"
@edges-update="updateEdge"
@edges-remove="removeEdge"-->

<NodeModal v-model="node" @ok="saveNode"/>
<EdgeModal v-model="edge" @ok="saveEdge"/>
<CommandModal v-model="command" :inputNew="inputNew" @ok="saveCommand"/>

</div>
</template>

<script>
import "vue-vis-network/node_modules/vis-network/dist/vis-network.css";

import {  fetchDocument, createDocument } from 'tripledoc';
import { foaf, rdfs, dct, rdf } from 'rdf-namespaces'
import "vue-vis-network/node_modules/vis-network/dist/vis-network.css";
import {
  getSolidDatasetWithAcl,
  hasResourceAcl,
  hasFallbackAcl,
  hasAccessibleAcl,
  //  createAcl,
  createAclFromFallbackAcl,
  getResourceAcl,
  setPublicResourceAccess,
  setAgentResourceAccess,
  saveAclFor,
} from "@inrupt/solid-client";
import networkMixin from '@/mixins/networkMixin'
import ActivityMixin from '@/mixins/ActivityMixin'
import ToastMixin from '@/mixins/ToastMixin'
import TripleMixin from '@/mixins/TripleMixin'

export default {
  name: 'EditorNetwork',
  components: {
    'NodeModal': () => import('@/components/network/NodeModal'),
    'EdgeModal': () => import('@/components/network/EdgeModal'),
    'CommandModal': () => import('@/components/network/CommandModal'),
  },
  mixins: [networkMixin, ActivityMixin, ToastMixin, TripleMixin],
  data() {
    return {
      //  file: {url:"file_url"},
      self:this,
      node: {label: "node_label"},
      edge: {},
      filename: "new_graph.ttl",
      privacy: "public_write",
      net: {},
      command: "",
      inputNew:"",
      nodes: [
        {id: 1,  label: 'circle',  shape: 'circle' },
        {id: 2,  label: 'ellipse', shape: 'ellipse'},
        {id: 3,  label: 'database',shape: 'database'},
        {id: 4,  label: 'box',     shape: 'box'    },
        {id: 5,  label: 'diamond', shape: 'diamond'},
        {id: 6,  label: 'dot',     shape: 'dot'},
        {id: 7,  label: 'square',  shape: 'square'},
        {id: 8,  label: 'triangle',shape: 'triangle'},
      ],
      edges: [
        {from: 1, to: 2},
        {from: 2, to: 3},
        {from: 2, to: 4},
        {from: 2, to: 5},
        {from: 5, to: 6},
        {from: 5, to: 7},
        {from: 6, to: 8}
      ],
      options: {
        // locale: navigator.language,
        // nodes: {
        // //  borderWidth: 1
        // },
        edges:{
          arrows: 'to',
          //  color: 'red',
          //  font: '12px arial #ff0000',
          //  shadow: true,
          //   font: '12px arial #ff0000',
          scaling:{
            label: true,
          },
          smooth: true,
        },
        interaction: {
          navigationButtons: true,
        //  keyboard: true
        },
        manipulation: {
          enabled: true,
          initiallyActive: true,
          addNode: async (node, callback) => {
            this.addNode(node, callback)
          },
          editNode: async (node, callback) => {
            this.editNode(node, callback)
          },
          addEdge: async (node, callback) => {
            this.addEdge(node, callback)
          },
          editEdge: async (node, callback) => {
            this.editEdge(node, callback)
          },

        }
      }
    }
  },
  created(){
    this.folder = this.$store.state.solid.folder
    //  console.log("route",this.$route)
    //  this.url = this.$route.params.url
    //  this.getData()
  },
  methods: {
    selectNode(e){
      console.log(e)
      console.log(e.nodes[0])
    },
    selectEdge(e){
      console.log(e)
      console.log(e.edges[0])
    },
    saveCommand(command){
      console.log("COMMAND",command)
      let inputObject = this.getInputType(command)
      console.log("inputObject",inputObject);
      this.traiteInput(inputObject);
      this.inputNew = inputObject.inputNew
      console.log(this.inputNew)
      //  this.updateInput(inputObject.inputNew)
    },
    addNode(node, callback){
      //  callback() // Node will be added via reactivity from Vuex
      if (this.tmp_file != null ){
        this.file = this.tmp_file
      }
      node.id = this.file.url+"#"+node.id
      node.label = ""
      //console.log(node)
      this.editNode(node, callback)
    },
    editNode(n,cb){
      console.log("EDIT NODE",n,cb)
      this.node = n
      this.$bvModal.show("node-popup")
    },
    addEdge(e,cb){
      console.log("add edge",e,cb)
      this.edge = e
      if (e.from == e.to) {
        var r = confirm("Do you want to connect the node to itself?");
        if (r != true) {
          cb(null);
          return;
        }
      }
      this.editEdgeWithoutDrag(e, cb);
    },
    editEdge(e,cb){
      console.log("EDIT edge",e,cb)
      this.editEdgeWithoutDrag(e, cb);
    },
    editEdgeWithoutDrag(edge, callback){
      //
      //console.log("edit editWithoutDrag",edge)
      /*      // filling in the popup DOM elements
      document.getElementById('edge-label').value = data.label;
      document.getElementById('edge-saveButton').onclick = this.saveEdgeData.bind(this, data, callback);
      document.getElementById('edge-cancelButton').onclick = this.cancelEdgeEdit.bind(this,callback);
      document.getElementById('edge-popUp').style.display = 'block';
      */
      this.edge = edge
      this.$bvModal.show("edge-popup")
      //console.log(edge, callback)
      callback()
    },

    saveNode(n){
      console.log("saveNode",n)
      var index = this.nodes.map(x => {
        return x.id;
      }).indexOf(n.id);
      //console.log(index)
      if(index > -1){
        this.nodes.splice(index, 1);
        //console.log(  this.nodes[index])
        this.nodes[index].label = n.label
      }else{
        this.nodes.push(n)
      }
    },
    saveEdge(e){
      var index = this.edges.map(x => {
        return x.id;
      }).indexOf(e.id);
      //console.log(index)
      if(index > -1){
        //console.log(  this.edges[index])
        this.edges[index].label = e.label
      }else{
        this.edges.push(e)
        this.writeEdgeToFile(e)
      }
    },

    async  writeEdgeToFile(e){
      if (this.tmp_file != null){
        this.file = this.tmp_file
      }
      console.log(e)
      let subject  = this.nodes.filter(function(el) {
        return el.id == e.from
      });
      let object  = this.nodes.filter(function(el) {
        return el.id == e.to
      });
      //console.log(subject[0], e, object[0])

      //let identifier = subject[0].id.indexOf(this.file) > 0 ? subject[0].id.split('#') : subject[0].id


      let subj_identifier = subject[0].id.includes(this.file.url) ? subject[0].id.split('#')[1] : subject[0].id
      let obj_identifier = object[0].id.includes(this.file.url) ? object[0].id.split('#')[1] : object[0].id


      var dateObj = new Date();
      var date = dateObj.toISOString()
      let doc =  await fetchDocument(this.file.url)
      //console.log(doc)
      let subj = doc.addSubject({identifier: subj_identifier})
      subj.addString(rdfs.label, subject[0].label)

      subj.addString(dct.modified, date)

      subj.addRef(foaf.maker, this.webId)


      subj.addRef(this.file.url+"#"+e.label, object[0].id)
      //subj.addRef(this.file.url+"#"+e.label, obj_identifier)
      let obj = doc.addSubject({identifier: obj_identifier})
      obj.addString(rdfs.label, object[0].label)
      doc.save()
    },
    networkEvent(eventName,e) {
      console.log(eventName,e)
    },
    copy(){
      let copyText = "https://scenaristeur.github.io/solid-vue-panes/?url="+this.file.url //window.location.href
      let app = this
      //  !copyText.endsWith(".ttl") ?
      //copyText = copyText+this.file.url //: ""
    //  console.log(copyText)
      navigator.clipboard.writeText(copyText).then(function() {
        /* clipboard successfully set */
        //  console.log("clipok", copyText)
        app.makeToast("The url is in your clipboard ;-)", copyText+".               Use Ctrl+V to share it", "success")
      }, function() {
        /* clipboard write failed */
      //  console.log("clipERROR", copyText)
        app.makeToast("Houston, we've got a problem with the clipboard ;-(", copyText, "warning")
      })

    },

    async  create(){
      this.clear()
      // //console.log(this.file)
      // //console.log(this.newfile)
      // //console.log(this.folder)
      console.log(this.privacy)
      this.tmp_file = {}
      this.filename = this.filename.split(' ').join('_');

      this.tmp_file.name =  this.filename.endsWith('.ttl') ? this.filename : this.filename+".ttl"
      this.tmp_file.url = this.folder.url+this.tmp_file.name
      //console.log(this.tmp_file)
      this.thisNode = {id:this.tmp_file.url+"#this", label: this.filename}
      this.nodes.push(this.thisNode)

      let doc = {}
      //console.log(this.file.url)
      let exist = false
      try{
        doc =  await fetchDocument(this.tmp_file.url)
        exist = true
      }catch(e){
        doc =  await createDocument(this.tmp_file.url)
        exist = false

      }

      var dateObj = new Date();
      var date = dateObj.toISOString()
      //let doc =  await fetchDocument(this.file.url)
      //console.log(doc)
      let subj = doc.addSubject({identifier: "this"})

      if(exist == false){
        let this_label = this.thisNode.label
        subj.addString(rdfs.label, this_label)
        subj.addString(dct.created, date)
        subj.addRef(rdf.type, this.tmp_file.url+"#Network")
        console.log("file created", this.tmp_file.url)

      }else{
        subj.addString(dct.modified, date)
        console.log("file modified", this.tmp_file.url)

      }
      subj.addRef(foaf.maker, this.webId)
      console.log("one")
      let s = await  doc.save()
      console.log("two", s)

      if(this.privacy == "public_write"){

        console.log(this.tmp_file.url)
        const myDatasetWithAcl = await getSolidDatasetWithAcl(this.tmp_file.url);
        console.log(myDatasetWithAcl)
        // Obtain the SolidDataset's own ACL, if available,
        // or initialise a new one, if possible:
        let resourceAcl;
        if (!hasResourceAcl(myDatasetWithAcl)) {
          if (!hasAccessibleAcl(myDatasetWithAcl)) {
            throw new Error(
              "The current user does not have permission to change access rights to this Resource."
            );
          }

          if (!hasFallbackAcl(myDatasetWithAcl)) {
            throw new Error(
              "The current user does not have permission to see who currently has access to this Resource."
            );
            // Alternatively, initialise a new empty ACL as follows,
            // but be aware that if you do not give someone Control access,
            // **nobody will ever be able to change Access permissions in the future**:
            // resourceAcl = createAcl(myDatasetWithAcl);
          }
          resourceAcl = createAclFromFallbackAcl(myDatasetWithAcl);
          console.log("create")
        } else {
          resourceAcl = getResourceAcl(myDatasetWithAcl);
          console.log("get")
        }
        console.log("acl",resourceAcl)
        // Give someone Control access to the given Resource:
        /*  const updatedAcl = setAgentResourceAccess(
        resourceAcl,
        "https://some.pod/profile#webId",
        { read: false, append: false, write: false, control: true }
      );*/
      const ownerAcl = setAgentResourceAccess(resourceAcl,
        this.webId,
        { read: true, append: true, write: true, control: true },
      );

      let r =  await saveAclFor(myDatasetWithAcl, ownerAcl);
      const publicAcl = setPublicResourceAccess(
        resourceAcl,
        { read: true, append: true, write: false, control: false },
      );


      // Now save the ACL:
      //  let r =  await saveAclFor(myDatasetWithAcl, ownerAcl);
      let rp =  await saveAclFor(myDatasetWithAcl, publicAcl);
      console.log(r,rp)
    }
    this.createActivity()
  },
  createActivity(){
    console.log("createActivity")

    this.net.displayType = "Network"
    this.net.types = ["Task", "http://www.w3.org/ns/ldp#Resource"]
    this.net.path = this.tmp_file.url
    console.log(this.net)
    this.activity = {
      actor: {name: this.$store.state.solid.webId},
      type:"Create",
      summary: "",
      object:{
        name: this.thisNode.label,
        url: this.tmp_file.url,
        type:"Network"}
      }

      this.sendActivity()


    },
    clear(){
      this.nodes = []
      this.edges = []
    },
    openCommand(){
      this.$bvModal.show("command-popup")
    },
    async update(){
      this.triples = []
      console.log(this.file.url)
      if (this.file.url != undefined && (this.file.url.endsWith('.ttl') || (this.file.url.endsWith('card')))){
        let fileDoc = await fetchDocument(this.file.url)
        console.log("fileDoc",fileDoc)
        this.triples = fileDoc.getTriples()
        console.log(this.triples)
      }else{
        console.log("TODO",this.file.url)
      }
      if (this.triples.length > 0){
        this.triples.forEach((t) => {
          console.log("trip",t)
          this.addTriplet(t)
        });

      }

    },
    addTriplet(t){
      // //console.log(t)
      // //console.log(t.subject.id, t.predicate.id, t.object.id)
      var color = this.colorize(t.subject.id)
      let label =  this.lastPart(t.subject.id)

      if (t.predicate.id == "http://www.w3.org/2000/01/rdf-schema#label"){
        console.log("LABEL",t.object.id)
        label = t.object.id
      }

      let subjectNode = { id:t.subject.id, label: label, shape: "star", color:'rgba('+color.red+', '+color.green+', '+color.blue+',0.5)'  }
      // //console.log(subjectNode)
      //  this.dataset.nodes[subjectNode.id] = subjectNode
      subjectNode  = this.addOrNothingNode(subjectNode)

      var colorO = this.colorize(t.object.id)
      let labelO =  this.lastPart(t.object.id)




      let objectNode = { id:t.object.id, label: labelO, shape: "box", color:'rgba('+colorO.red+', '+colorO.green+', '+colorO.blue+',0.5)'  }
      // //console.log(objectNode)
      //  this.dataset.nodes[subjectNode.id] = subjectNode
      this.addOrNothingNode(objectNode)

      let labelP = this.lastPart(t.predicate.id)
      let propertyEdge = {from: subjectNode.id, to: objectNode.id, label: labelP}
      this.edges.push(propertyEdge)



    },

    /*async getData() {
    let dataDoc = await fetchDocument(this.url);
    let subj = dataDoc.getSubject(this.url+"#this")
    console.log(subj)
    let types = subj.getAllRefs(rdf.type)
    console.log(types)
  }*/
},

watch:{
  file(){
    console.log(this.file)
    this.update()
  },

  /*'$route' (to) {
  //  '$route' (to, from) {
  console.log(to)
},
url(url){
console.log("URL CHANGE",url)
}*/
},
computed:{
  folder:{
    get: function() { return this.$store.state.solid.folder},
    set: function() {}
  },
  profile_url:{
    get: function() { return this.$store.state.solid.storage+"public/popock/profile.ttl"},
    set: function() {}
  },
  storage:{
    get: function() { return this.$store.state.solid.storage},
    set: function() {}
  },
  webId:{
    get: function() { return this.$store.state.solid.webId},
    set: function() {}
  },
  friends:{
    get: function() { return this.$store.state.solid.friends},
    set: function() {}
  },
  file: {
    get: function () {return this.$store.state.solid.file},
    set: function (file) {return this.$store.commit('solid/setFile', file)}
  },
},
}
</script>
<style>
.wrapper{
  min-height: 100vh;
  border: 1px solid black;
  background: linear-gradient(to bottom, rgba(215, 215, 255), rgba(250, 250, 170));
  padding: 10px;
  height: 100vh;
}
#operation {
  font-size:28px;
}
#node-popUp {
  display:none;
  position:absolute;
  top:350px;
  left:170px;
  z-index:299;
  width:250px;
  height:120px;
  background-color: #f9f9f9;
  border-style:solid;
  border-width:3px;
  border-color: #5394ed;
  padding:10px;
  text-align: center;
}
#edge-popUp {
  display:none;
  position:absolute;
  top:350px;
  left:170px;
  z-index:299;
  width:250px;
  height:90px;
  background-color: #f9f9f9;
  border-style:solid;
  border-width:3px;
  border-color: #5394ed;
  padding:10px;
  text-align: center;
}
</style>
