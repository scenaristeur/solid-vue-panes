<template>
  <div class="modele-view">
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

  <network ref="network"
  class="wrapper"
  :nodes="nodes"
  :edges="edges"
  :options="options"
  @select="networkEvent('select')"
  @select-node="networkEvent('selectNode')"
  @select-edge="networkEvent('selectEdge')"
  >
</network>
<!--  <network ref="network"
:nodes="nodes"
:edges="edges"
:options="options">
</network>-->

<NodeModal v-model="node" @ok="saveNode"/>
<EdgeModal v-model="edge" @ok="saveEdge"/>


<!--  <b-list-group>
<b-list-group-item v-for="(t,i) in triples" :key="i">
<div class="row">
<div class="col rounded">
<b><a :href="t.subject.id" target="_blank">{{t.subject.id }}</a></b>
</div>
<div class="col">
{{ t.predicate.id }}
</div>
<div class="col">
<span v-if="t.object.id.startsWith('http')">
<b><a :href="t.object.id" target="_blank">{{t.object.id }}</a></b>
</span>
<span v-else>
{{ t.object.id }}
</span>
</div>
</div>
</b-list-group-item>
</b-list-group> -->
</div>
</template>

<script>

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


export default {
  name: 'EditorNetwork',
  mixins: [networkMixin, ActivityMixin, ToastMixin],
  components: {
    'NodeModal': () => import('@/components/network/NodeModal'),
    'EdgeModal': () => import('@/components/network/EdgeModal'),
  },
  data() {
    return {
      //  title:{label:"youpy"},
      self: this,
      filename:"",
      tmp_file: null,
      triples: [],
      node: {},
      edge:{},
      net: {},
      privacy: "public_write",
      clipDispo: false,
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
      options1: {
        nodes: {
          borderWidth: 4
        },
        edges: {
          color: 'lightgray'
        },
        manipulation: {
          //enabled: true,
          //initiallyActive: true,
          addNode: true,
          addEdge: true,
          editNode: true,
          editEdge: true,
          deleteNode: true,
          deleteEdge: true,
          // controlNodeStyle:{
          // // all node options are valid.
          // }
        }

      },
      //nodes: [],
      //edges: [],
      options: {
        locale: navigator.language,
        nodes: {
          borderWidth: 1
        },
        edges:{
          arrows: 'to',
          color: 'red',
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
          keyboard: true
        },
        manipulation: {
          enabled: true,
          initiallyActive: true,
          addNode: async (node, callback) => {
            callback() // Node will be added via reactivity from Vuex
            if (self.tmp_file != null ){
              self.file = self.tmp_file
            }
            node.id = self.file.url+"#"+node.id
            //console.log(node)
            self.editNode(node, callback)
          },
          editNode: async (node, callback) => {
            callback() // Node will be added via reactivity from Vuex
            //console.log(node)
            self.editNode(node, callback)
          },
          addEdge: async (edge, callback) => {
            callback() // Node will be added via reactivity from Vuex
            //console.log(edge)
            self.addEdge(edge, callback)
          },
          editEdge: {
            editWithoutDrag: async (edge, callback) => {self.editWithoutDrag(edge, callback)}
          },

        }

      }
    }
  },
  async created(){
    /*  navigator.permissions.query({name: "clipboard-write"}).then(result => {
    if (result.state == "granted" || result.state == "prompt") {
    // write to the clipboard now
    this.clipDispo = true
  }
});*/


},
mounted(){
  // let app = this
  // this.network = this.$refs.network
  // console.log(this.network)
  // this.network.setOptions({
  //   locale: navigator.language,
  //   nodes: {
  //     borderWidth: 1
  //   },
  //   edges:{
  //     arrows: 'to',
  //     color: 'red',
  //     //  font: '12px arial #ff0000',
  //
  //     //  shadow: true,
  //     //   font: '12px arial #ff0000',
  //     scaling:{
  //       label: true,
  //     },
  //     smooth: true,
  //   },
  //   interaction: {
  //     navigationButtons: true,
  //     //  keyboard: true
  //   },
  //   // manipulation: {
  //   //   enabled: true,
  //   //   initiallyActive: true,
  //   //   // addNode: async (node, callback) => {
  //   //   //   callback() // Node will be added via reactivity from Vuex
  //   //   //   if (this.tmp_file != null ){
  //   //   //     this.file = this.tmp_file
  //   //   //   }
  //   //   //   node.id = this.file.url+"#"+node.id
  //   //   //   //console.log(node)
  //   //   //   this.editNode(node, callback)
  //   //   // },
  //   //   editNode: async (node, callback) => {
  //   //     callback() // Node will be added via reactivity from Vuex
  //   //     //console.log(node)
  //   //     this.editNode(node, callback)
  //   //   },
  //   //   addEdge: async (edge, callback) => {
  //   //     callback() // Node will be added via reactivity from Vuex
  //   //     //console.log(edge)
  //   //     this.addEdge(edge, callback)
  //   //   },
  //   //   editEdge: {
  //   //     editWithoutDrag: function (edge, callback){
  //   //       callback() // Node will be added via reactivity from Vuex
  //   //       //console.log(edge)
  //   //       app.editEdge(edge, callback)
  //   //     }
  //   //   },
  //   //
  //   // }
  // })
  this.file = this.$store.state.solid.file
  //  this.update()
},

methods: {
  editWithoutDrag(edge, callback){
    callback() // Node will be added via reactivity from Vuex
    //console.log(edge)
    this.editEdge(edge, callback)

  },
  copy(){
    let copyText = "https://scenaristeur.github.io/solid-vue-panes/?url="+this.file.url //window.location.href
    let app = this
    //  !copyText.endsWith(".ttl") ?
    //copyText = copyText+this.file.url //: ""
    console.log(copyText)
    navigator.clipboard.writeText(copyText).then(function() {
      /* clipboard successfully set */
      //  console.log("clipok", copyText)
      app.makeToast("The url is in your clipboard ;-)", copyText+".               Use Ctrl+V to share it", "success")
    }, function() {
      /* clipboard write failed */
      console.log("clipERROR", copyText)
      app.makeToast("Houston, we've got a problem with the clipboard ;-(", copyText, "warning")
    })

  },
  saveNode(n){
    //console.log("saveNode",n)
    //  this.callback(n)

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
  async  writeEdgeToFile(e){
    if (this.tmp_file != null){
      this.file = this.tmp_file
    }
    let subject  = this.nodes.filter(function(el) {
      return el.id == e.from
    });
    let object  = this.nodes.filter(function(el) {
      return el.id == e.to
    });
    //console.log(subject[0], e, object[0])

    //let identifier = subject[0].id.indexOf(this.file) > 0 ? subject[0].id.split('#') : subject[0].id
    let subj_identifier = subject[0].id.split('#')[1]
    let obj_identifier = object[0].id.split('#')[1]


    var dateObj = new Date();
    var date = dateObj.toISOString()
    let doc =  await this.$fc.readFile(this.file.url)
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
  saveEdge(e){
    //console.log("saveEdge",e)
    //  this.callback(n)

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


    //


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
      doc =  await this.$fc.readFile(this.tmp_file.url)
      exist = true
    }catch(e){
      doc =  await this.$fc.createFile(this.tmp_file.url)
      exist = false

    }

    var dateObj = new Date();
    var date = dateObj.toISOString()
    //let doc =  await this.$fc.readFile(this.file.url)
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
  async update(){
    this.triples = []
    console.log(this.file.url)
    if (this.file.url != undefined && (this.file.url.endsWith('.ttl') || (this.file.url.endsWith('card')))){
      let fileDoc = await this.$fc.readFile(this.file.url)
      console.log("fileDoc",fileDoc)
      this.triples = fileDoc.getTriples()
      console.log(this.triples)
    }else{
      console.log("TODO",this.file.url)
    }

  },
  networkEvent(e,object){
    console.log(e,object)
  },
  async addInterests(webId){
    let storage =  await solid.data[webId].storage
    let p_u = storage+"public/popock/profile.ttl"
    //console.log("P8U",p_u)
    try{
      this.profileDoc = await this.$fc.readFile(p_u)
      let subj = await this.profileDoc.getSubject(p_u+"#me")
      this.interests = await subj.getAllLiterals(foaf.topic_interest)
      //console.log(this.interests)
      this.interests.forEach((interest) => {
        this.$refs.network.nodes.push({ id:interest, label: interest, shape: "triangle", color: "green" });
        this.$refs.network.edges.push({
          from: webId,
          to: interest,
          label: "foaf:topic_interest"
        });
      });

    }catch(e){
      // //console.log(e)
      //  this.profileDoc = await this.$fc.createFile(p_u)
    }

  },
  addTriplet(t){
    // //console.log(t)
    // //console.log(t.subject.id, t.predicate.id, t.object.id)

    var color = this.colorize(t.subject.id)
    let label =  this.lastPart(t.subject.id)
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
  editNode(node) {
    //console.log("editNode",node)
    this.node = node
    this.$bvModal.show("node-popup")
    //  console.log(node, callback)
    //  callback(node)
    //  this.callback = callback
    //  callback()
    /*  document.getElementById('node-label').value = data.label;
    document.getElementById('node-saveButton').onclick = this.saveNodeData.bind(this, data, callback);
    document.getElementById('node-cancelButton').onclick = cancelAction.bind(this, callback);
    document.getElementById('node-popUp').style.display = 'block';*/
  },
  addEdge(edge, callback){
    //console.log("addedge")
    this.edge = edge
    if (edge.from == edge.to) {
      var r = confirm("Do you want to connect the node to itself?");
      if (r != true) {
        callback(null);
        return;
      }
    }

    this.editEdgeWithoutDrag(edge, callback);
    //callback()
  },
  editEdge(edge, callback){
    //console.log("edit edge", edge, callback)
    this.editEdgeWithoutDrag(edge, callback);
    //  callback()
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



  // Callback passed as parameter is ignored
  clearNodePopUp() {
    document.getElementById('node-saveButton').onclick = null;
    document.getElementById('node-cancelButton').onclick = null;
    document.getElementById('node-popUp').style.display = 'none';
  },

  cancelNodeEdit(callback) {
    this.clearNodePopUp();
    callback(null);
  },

  saveNodeData(data, callback) {
    data.label = document.getElementById('node-label').value;
    this.clearNodePopUp();
    callback(data);
  },

  /*  editEdgeWithoutDrag(data, callback) {
  // filling in the popup DOM elements
  document.getElementById('edge-label').value = data.label;
  document.getElementById('edge-saveButton').onclick = this.saveEdgeData.bind(this, data, callback);
  document.getElementById('edge-cancelButton').onclick = this.cancelEdgeEdit.bind(this,callback);
  document.getElementById('edge-popUp').style.display = 'block';
},*/

clearEdgePopUp() {
  document.getElementById('edge-saveButton').onclick = null;
  document.getElementById('edge-cancelButton').onclick = null;
  document.getElementById('edge-popUp').style.display = 'none';
},

cancelEdgeEdit(callback) {
  this.clearEdgePopUp();
  callback(null);
},

saveEdgeData(data, callback) {
  if (typeof data.to === 'object')
  data.to = data.to.id
  if (typeof data.from === 'object')
  data.from = data.from.id
  data.label = document.getElementById('edge-label').value;
  this.clearEdgePopUp();
  callback(data);
},



},
watch:{
  node(){
    //console.log("NODE ADD ", this.node)
  },
  file(){
    //console.log("watch")
    this.update()
  },
  /*$route(to, from) {
  console.log(to, from, this.$route)
  // react to route changes...
},
storage (st) {
//  '$route' (to, from) {
console.log(st)
},*/
friends(friends){
  //console.log(friends)
  friends.forEach((f) => {
    // //console.log(f,i)
    this.$refs.network.nodes.push({ id:f, label: f , shape: "dot", color: "yellow"});
    this.$refs.network.edges.push({
      from: this.webId,
      to: f,
      label: "foaf:friend"
    });
    this.addInterests(f)

  });

},
webId(webId){
  //console.log(webId)
  this.$refs.network.nodes.push({ id:webId, label: webId ,/*   "shape": "icon",
  "icon": {
  face: '"Font Awesome 5 Brands"',
  code: '\uf36e'
}*/});
this.addInterests(webId)
},
triples(){
  //console.log("TRIPLES",this.triples)
  if (this.triples.length > 0){
    this.triples.forEach((t) => {
      //  console.log("trip",t)
      this.addTriplet(t)
    });

  }
}
},
computed:{
  folder(){
    return  this.$store.state.solid.folder
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
}
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
