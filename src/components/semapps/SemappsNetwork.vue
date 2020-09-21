<!-- vue-vis-network -->
<template>
  <div class="network container">
    <h5>Type a search to filter</h5>

    <b-input @input="search" size="sm" v-model="input.subject" placeholder="Subject" />
    <b-input @input="search" size="sm" v-model="input.property" placeholder="property" />
    <b-input @input="search" size="sm" v-model="input.object" placeholder="Object" />

    <b-button  @click="showTypes" size="sm" variant="outline-info">All types</b-button>


    <network ref="network"
    class="wrapper"
    :nodes="nodes"
    :edges="edges"
    :options="options"
    @select-node="selectNode">
  </network>

  <div id="node-popUp">
    <span id="node-operation">node</span> <br>
    <table style="margin:auto;">
      <tr>
        <td>id</td><td><input id="node-id" value="new value" /></td>
      </tr>
      <tr>
        <td>label</td><td><input id="node-label" value="new value" /></td>
      </tr>
    </table>
    <input type="button" value="save" id="node-saveButton" />
    <input type="button" value="cancel" id="node-cancelButton" />
  </div>

  <div id="edge-popUp">
    <span id="edge-operation">edge</span> <br>
    <table style="margin:auto;">
      <tr>
        <td>label</td><td><input id="edge-label" value="new value" /></td>
      </tr></table>
      <input type="button" value="save" id="edge-saveButton" />
      <input type="button" value="cancel" id="edge-cancelButton" />
    </div>

  </div>
</template>

<script>
import networkMixin from '@/mixins/networkMixin'
import { fetchDocument, /*createDocument*/ } from 'tripledoc';
import { foaf } from 'rdf-namespaces'
import "vue-vis-network/node_modules/vis-network/dist/vis-network.css";
import axios from 'axios';

export default {
  name: 'SemappsNetWork',
  mixins: [networkMixin],
  components: {
    //  'network': () => import("vue-vis-network")
    //'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  props: ['containers'],
  data: function () {
    //  data() {
    return {
      input: {subject:"", property:"", object:""},
      nodes: [
      ],
      edges: [
      ],
      dataset: {nodes: [], edges: [], types: []},
      buttons: [],
      //  buttonsList: [],
      edges_non: [],
      caches: [],
      visibles: [],
      old: [],
      options: {
        locale: navigator.language,
        nodes: {
          borderWidth: 1
        },
        edges:{
          arrows: 'to',
          //  color: 'red',
          //  font: '12px arial #ff0000',
          /*
          shadow: true,*/
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
        /*  manipulation: {
        addNode: function (data, callback) {
        // filling in the popup DOM elements
        document.getElementById('node-operation').innerHTML = "Add Node";
        this.editNode(data, this.clearNodePopUp, callback);
        console.log(data,callback)
      },
      editNode: function (data, callback) {
      // filling in the popup DOM elements
      document.getElementById('node-operation').innerHTML = "Edit Node";
      this.editNode(data, this.cancelNodeEdit, callback);
      console.log(data,callback)
    },
    addEdge: function (data, callback) {
    if (data.from == data.to) {
    var r = confirm("Do you want to connect the node to itself?");
    if (r != true) {
    callback(null);
    return;
  }
}
document.getElementById('edge-operation').innerHTML = "Add Edge";
this.editEdgeWithoutDrag(data, callback);
},
editEdge: {
editWithoutDrag: function(data, callback) {
document.getElementById('edge-operation').innerHTML = "Edit Edge";
this.editEdgeWithoutDrag(data,callback);
console.log(data,callback)
}
}
},*/
physics:{
  enabled: true,
  barnesHut: {
    //   theta: 0.5,
    gravitationalConstant: -2000,
    centralGravity: 0.3,
    springLength: 95,
    springConstant: 0.04,
    damping: 0.09,
    avoidOverlap: 0
  },
  forceAtlas2Based: {
    // theta: 0.5,
    gravitationalConstant: -50,
    centralGravity: 0.01,
    springConstant: 0.08,
    springLength: 100,
    damping: 0.4,
    avoidOverlap: 0
  },
  repulsion: {
    centralGravity: 0.2,
    springLength: 200,
    springConstant: 0.05,
    nodeDistance: 100,
    damping: 0.09
  },
  hierarchicalRepulsion: {
    centralGravity: 0.0,
    springLength: 100,
    springConstant: 0.01,
    nodeDistance: 120,
    damping: 0.09,
    //   avoidOverlap: 0
  },
  maxVelocity: 50,
  minVelocity: 0.1,
  solver: 'repulsion',
  stabilization: {
    enabled: true,
    iterations: 1000,
    updateInterval: 100,
    onlyDynamicEdges: false,
    fit: true
  },
  timestep: 0.5,
  adaptiveTimestep: true,
  // wind: { x: 0, y: 0 }
}
}
}
},
mounted() {
  this.webId = this.$route.params.webId || this.$store.state.solid.webId
  this.friends  = this.$store.state.solid.friends
  this.nodes.find(x => x.id === this.webId) == undefined ?   this.nodes.push({ id: this.webId, label: this.webId }) : ""
  this.addInterests(this.webId)
  //  console.log("4444444444444444444444",this.$refs.network)

  //  this.updateFriends()
},
computed:{

  currentEndpoint: {
    get: function() { return this.$store.state.semapps.currentEndpoint},
    set: function() {}
  },

  profile_url:{
    get: function() { return this.$store.state.solid.storage+"public/salut/profile.ttl"},
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
},
watch: {
  $route(to, from) {
    console.log(to, from, this.$route)
    // react to route changes...
  },
  storage (st) {
    //  '$route' (to, from) {
    console.log(st)
  },
  friends(friends){
    console.log(friends)
    friends.forEach((f) => {
      //  console.log(f,i)
      this.nodes.find(x => x.id === f) == undefined ?   this.nodes.push({ id:f, label: f , shape: "dot", color: "yellow"}) : ""
      this.edges.push({
        from: this.webId,
        to: f,
        label: "friend"
      });
      this.addInterests(f)

    });

  },
  webId(webId){
    console.log(webId)
    this.nodes.find(x => x.id === webId) == undefined ?   this.nodes.push({ id:webId, label: webId ,/*   "shape": "icon",
    "icon": {
    face: '"Font Awesome 5 Brands"',
    code: '\uf36e'
  }*/}) : ""
  this.addInterests(webId)
},
async currentEndpoint(e){
  this.donnees = []
  for ( let c in this.containers){
    await this.retrieveData(e.url+this.containers[c])
  }


},

},
methods:{
  selectNode(selected){
    //https://www.npmjs.com/package/@marklogic-community/grove-react-visjs-graph
    console.log("event",selected)
    let selected_id = selected.nodes[0]
    console.log("dataset",this.dataset)
    /*  let edges = this.dataset.edges.filter(function(edge) {
    return edge.from == selected_id || edge.to == selected_id
  });
  console.log(edges)*/
  let edges_ids = []
  let nodes_ids = []
  this.edges = []
  this.nodes = []
  this.dataset.edges.forEach((edge) => {
    if(edge.from == selected_id || edge.to == selected_id){
      this.edges.push(edge)
      edges_ids.push(edge.id)
      if ((nodes_ids.indexOf(edge.from)) < 0){
        nodes_ids.push(edge.from)
        this.nodes.push(this.dataset.nodes[edge.from])
      }
      if ((nodes_ids.indexOf(edge.to)) < 0){
        nodes_ids.push(edge.to)
        this.nodes.push(this.dataset.nodes[edge.to])

      }


    }
  });







},
showTypes(){
//  console.log(this.dataset.types)
  this.nodes = []
  for (const node of Object.values(this.dataset.nodes)) {
    this.dataset.types.includes(node.id) ? this.nodes.push(node) : ""
  //  console.log(this.nodes)
}


  /*
  TODO Utilisation de la couleur
  var color = colorize(nom)
  //console.log(color)
  //var red = ''+Math.floor(Math.random() * 255);
  //var green = ''+Math.floor(Math.random() * 255);
  //var blue = ''+Math.floor(Math.random() * 255);
  var ds = {
  label: nom,
  backgroundColor: 'rgba('+color.red+', '+color.green+', '+color.blue+',0.01)',
  borderColor: 'rgb('+color.red+', '+color.green+', '+color.blue+')',

  */
},

search(){
  //  console.log(this.input)
  //  console.log(this.visData)//.findNode(this.input))
  //  console.log(this.$refs.network)
  let input = this.input

  // MUST REVIEW THIS LINE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  this.old == undefined || this.old.length < this.nodes.length ? this.old = this.nodes : this.nodes = this.old



  this.visibles = this.old.filter(function(el) {
    return (input.subject.length > 0 && el.label.includes(input.subject)) ||
    (input.property.length > 0 && el.label.includes(input.property)) ||
    (input.object.length > 0 && el.label.includes(input.object))
  });
  /*this.caches = this.nodes.filter(function(el) {
  return !el.id.includes(input)
});*/
//this.$refs.network.selecNodes(this.visibles)
this.nodes = this.visibles

//
//  let nodes = this.filterNodes()
//  let result = []
/*for (const [key, value] of Object.entries(this.visData.nodes._data)) {
if (key.includes(this.input)){
//  console.log(key, value)
value.hidden = false
result[key] = value
value.label = false
console.log(key, " hidden ",value.hidden)
this.visData.nodes._data[key] = value
let v = {}
v[key] = value
//  console.log(v)
//  delete this.nodes[key]
nodes = nodes.filter(function(el) { return el.id.includes(input) });
console.log("IN",nodes)

//  this.nodes.push(v)
}else{
value.hidden = true
value.label = true
//  this.visData.nodes._data[key] = value
}


//  this.visData.update(v)
}*/
//console.log("NODES",this.nodes)
},

/*stringToColour (str) {
var hash = 0;
for (var i = 0; i < str.length; i++) {
hash = str.charCodeAt(i) + ((hash << 5) - hash);
}
var colour = '#';
for (var j = 0; j < 3; i++) {
var value = (hash >> (j * 8)) & 0xFF;
colour += ('00' + value.toString(16)).substr(-2);
}
console.log(colour)
return colour //this.hexToRgb(colour);
},
hexToRgb(hex) {
var result = /^#?([a-fd]{2})([a-fd]{2})([a-fd]{2})$/i.exec(hex);
if(result){
var r= parseInt(result[1], 16);
var g= parseInt(result[2], 16);
var b= parseInt(result[3], 16);
return r+","+g+","+b;//return 23,14,45 -> reformat if needed
}
return null;
},*/

addOrNothingNode(n){
  let found = this.nodes.find(x => x.id === n.id)
  if( found == undefined){
    this.nodes.push(n)
    return n
  }else{
    return found
  }
},
stringOrArray(entries){
  let result = []
  if( entries != undefined ){
    if ( typeof entries == "string" ){
      result.push(entries)
    }else{
      entries.forEach((m) => {
        result.push(m)
      });
    }
  }
  return result
},
lastPart(url){
  return url.substr(url.lastIndexOf('/') + 1)
},
random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
},
add2network(donnees){
  console.log(donnees)
  for (let don in donnees){
    let d = donnees[don]
    let color = this.random_rgba()
    /*  if(    this.color[d['@type']] == undefined ){
    this.color[d['@type']] = this.random_rgba()
    color = this.color[d['@type']]
  }else{
  color = this.color[d['@type']]
}
console.log(color)*/

let label = d['pair:label'] || d['pair:firstName']+' '+d['pair:lastName'] || this.lastPart(d['@id'])
let subjectNode = { id:d['@id'], label: label, shape: "star", color:color ,x:Math.random(-500, 500) , y:Math.random(-500,500)  }
//this.addOrNothingNode(subjectNode)
this.dataset.nodes[subjectNode.id] = subjectNode

for (const [key, value] of Object.entries(d)) {
  let typeNode = {}
  let propertyEdge = {}
  let objectNode = {}
  let typeEdge = {}
  //console.log("FOR")
  switch (key) {
    case "@type":
    typeNode = { id:d['@type'], label: this.lastPart(d['@type']), shape: "circle", classe: d['@type'], color: color, size: 100 }
    this.addOrNothingNode(typeNode)
    typeEdge = {
      from: d['@id'],
      to: d['@type'],
      label: "a",
    }
    //  this.edges.push(typeEdge);
    this.dataset.nodes[typeNode.id] = typeNode
    this.dataset.edges.push(typeEdge)
    this.dataset.types.indexOf(typeNode.id) < 0 ? this.dataset.types.push(typeNode.id) : ""

    /*  if (
    this.buttonsList.indexOf(d['@type']) < 0 )
    {
    this.buttons.push({label:d['@type'], classe: d['@type']})
    this.buttonsList.push(d['@type'])
  }
  console.log(this.buttons)*/
  //  console.log(typeEdge.id)
  break;
  // NE rien faire déjà traité ou traité differemment
  case "pair:label":
  case 'pair:firstName':
  case 'pair:lastName':
  case "@id":
  //console.log(key, value);
  break;
  // autres propriétés
  case "pair:involves":
  case 'pair:offeredBy':
  case 'pair:hasMember':
  case 'pair:memberOf':
  case 'pair:hasInterest':
  case 'pair:offers':
  case 'pair:involvedIn':
  case 'pair:interestOf':

  //  console.log("_______________",key, value);
  this.stringOrArray(value).forEach((v) => {
    objectNode = { id:v, label: this.lastPart(v), shape: "box", color: color, x:Math.random(-500,500) , y:Math.random(-500,500)  }
    propertyEdge = {from: d['@id'], to: v.replace('pair:',''), label: key}
    //  this.addOrNothingNode(objectNode)
    //  this.edges.push(propertyEdge);

    this.dataset.nodes[objectNode.id] = objectNode
    this.dataset.edges.push(propertyEdge)
  });
  //  console.log(this.stringToColour(key))
  break;

  default:
  console.warn("TODO : ---------------",key, value);
  this.stringOrArray(value).forEach((v) => {
    objectNode = { id:v, label: this.lastPart(v), shape: "box",  color: color,x:Math.random(500,1000) , y:Math.random(500,1000)  }
    propertyEdge = {from: d['@id'], to: v.replace('pair:',''), label: key}
    //  this.addOrNothingNode(objectNode)
    //  this.edges.push(propertyEdge);
    this.dataset.nodes[objectNode.id] = objectNode
    this.dataset.edges.push(propertyEdge)
  });

}
//  console.log("END switch")
//  color = this.random_rgba()
}
//console.log(this.dataset.nodes, this.dataset.edges)
}
},
async retrieveData(source){
  //  console.log(source)
  axios({
    method: 'get',
    url: source,
    responseType: 'application/ld+json'
  })
  .then(response => {
    //this.response = response
    //   console.log(response.data["ldp:contains"])
    //  console.log(this.response)
    //console.log(this.donnees);
    this.add2network(response.data["ldp:contains"])
    //  console.log(response.status);    //  console.log(response.statusText);    //  console.log(response.headers); //  console.log(response.config);
  })
  .catch(() /*error*/ => {
    //console.log(error);
    this.donnees = []
  }).then(function () {
    //console.log("END")

  });
},
async addInterests(webId){
  let storage =  await solid.data[webId].storage
  let p_u = storage+"public/salut/profile.ttl"
  console.log("P8U",p_u)
  try{
    this.profileDoc = await fetchDocument(p_u)
    let subj = await this.profileDoc.getSubject(p_u+"#me")
    this.interests = await subj.getAllLiterals(foaf.topic_interest)
    console.log(this.interests)
    this.interests.forEach((interest) => {
      this.nodes.find(x => x.id === interest) == undefined ?   this.nodes.push({ id:interest, label: interest, shape: "triangle", color: "green" }) : ""
      this.edges.push({
        from: webId,
        to: interest,
        label: "topic_interest"
      });
    });

  }catch(e){
    //  console.log(e)
    //  this.profileDoc = await createDocument(p_u)
  }

},
editNode(data, cancelAction, callback) {
  document.getElementById('node-label').value = data.label;
  document.getElementById('node-saveButton').onclick = this.saveNodeData.bind(this, data, callback);
  document.getElementById('node-cancelButton').onclick = cancelAction.bind(this, callback);
  document.getElementById('node-popUp').style.display = 'block';
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

editEdgeWithoutDrag(data, callback) {
  // filling in the popup DOM elements
  document.getElementById('edge-label').value = data.label;
  document.getElementById('edge-saveButton').onclick = this.saveEdgeData.bind(this, data, callback);
  document.getElementById('edge-cancelButton').onclick = this.cancelEdgeEdit.bind(this,callback);
  document.getElementById('edge-popUp').style.display = 'block';
},

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
}
/*  async updateFriends(){
this.friends = await this.getFriends(this.webId)
}*/
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
