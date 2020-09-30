<!-- vue-vis-network -->
<template>
  <div class="network container">
    <h5>Type a search to filter</h5>

    <div class="row">
      <div class="col">
        <b-input @input="search" size="sm" v-model="input.subject" placeholder="Subject" />
        <b-input @input="search" size="sm" v-model="input.property" placeholder="property" />
        <b-input @input="search" size="sm" v-model="input.object" placeholder="Object" />

        <b-button  @click="showTypes" size="sm" variant="outline-info">All types</b-button>
        <b-button  @click="showNodes" size="sm" variant="outline-info">All Nodes</b-button>
        <!--https://visjs.github.io/vis-network/examples/network/physics/physicsConfiguration.html-->
        <b-button v-b-toggle.collapse-1 variant="primary">Network Settings</b-button>
        <a href="https://visjs.github.io/vis-network/docs/network/physics.html" target="_blank"><b>?</b></a>

      </div>
      <div class="col">




        <b-collapse id="collapse-1" class="mt-2">
          <b-card>

            <b-button v-b-toggle.collapse-1-inner size="sm">Edges</b-button>
            <b-collapse id="collapse-1-inner" class="mt-2">
              <b-card>

                - smooth : <br>
                <b-row>
                  <b-col sm="3">
                    <label for="smooth-enabled">Enabled</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-checkbox
                    id="smooth-enabled"
                    v-model="options.edges.smooth">

                  </b-form-checkbox>
                </b-col>
              </b-row>

              <!--        <b-row>
              <b-col sm="3">
              <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
            </b-col>
            <b-col sm="9">
            <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
          </b-col>
        </b-row>


        <b-row>
        <b-col sm="3">
        <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="9">
      <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
    </b-col>
  </b-row>

  <b-row>
  <b-col sm="3">
  <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
</b-col>
<b-col sm="9">
<b-form-input :id="`type-${type}`" :type="type"></b-form-input>
</b-col>
</b-row>






<b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
<div class="mt-3">Selected: <strong>{{ selected }}</strong></div>

<label for="range-1">Example range with min and max</label>
<b-form-input id="range-1" v-model="value" type="range" min="0" max="5"></b-form-input>
<div class="mt-2">Value: {{ value }}</div>

-->

</b-card>
</b-collapse>



<b-button v-b-toggle.collapse-2-inner size="sm">Physics</b-button>
<b-collapse id="collapse-2-inner" class="mt-2">
  <b-card>


    <b-row>
      <b-col sm="4">
        <label for="physics-enabled">Enabled</label>
      </b-col>
      <b-col sm="8">
        <b-form-checkbox
        id="physics-enabled"
        v-model="options.physics.enabled">
      </b-form-checkbox>
    </b-col>
  </b-row>



    <b-row>
      <b-col sm="4">
        <label for="max-velocity">Max velocity : {{ options.physics.maxVelocity }}</label>
      </b-col>
      <b-col sm="8">
        <b-form-input id="range-1" v-model.number="options.physics.maxVelocity" type="range" min=1 max=100></b-form-input>
      </b-col>
    </b-row>


    <b-row>
      <b-col sm="4">
        <label for="solver">Min velocity : {{ options.physics.minVelocity }}</label>
      </b-col>
      <b-col sm="8">
        <b-form-input id="range-1" v-model.number="options.physics.minVelocity" type="range" step=0.1 min=0 max=1></b-form-input>

      </b-col>
    </b-row>

    <b-row>
      <b-col sm="4">
        <label for="solver">Time step : {{ options.physics.timestep }}</label>
      </b-col>
      <b-col sm="8">

        <b-form-input id="range-1" v-model.number="options.physics.timestep" type="range" step=0.1 min=0 max=1></b-form-input>

      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <label for="adaptive-timestep">Adaptive Timestep</label>
      </b-col>
      <b-col>
        <b-form-checkbox
        id="adaptive-timestep"
        v-model="options.physics.adaptiveTimestep">
      </b-form-checkbox>
    </b-col>
  </b-row>


  </b-card>
  <b-card>

  <b-row>
    <b-col sm="4">
      <label for="solver">Solver</label>
    </b-col>
    <b-col sm="8">
      <b-form-select id="solver" v-model="solver" :options="optionsSolver" size="sm" class="mt-3"></b-form-select>
    </b-col>
  </b-row>


  <b-row v-for="(param, i) in Object.entries(options.physics[solver])" :key=i>
    <b-col>
      <label for="param">{{ param[0] }}  : {{param[1]}}</label>
    </b-col>
    <b-col>
      <b-form-input v-if="param[0] == 'gravitationalConstant'" id="param" v-model.number="options.physics[solver].gravitationalConstant" type="range" min="-50000" max="0"></b-form-input>
      <b-form-input v-if="param[0] == 'centralGravity'" id="param" v-model.number="options.physics[solver].centralGravity" type="range" min="0" max="1" step="0.01"></b-form-input>
      <b-form-input v-if="param[0] == 'springLength'" id="param" v-model.number="options.physics[solver].springLength" type="range" min="1" max="500"></b-form-input>
      <b-form-input v-if="param[0] == 'springConstant'" id="param" v-model.number="options.physics[solver].springConstant" type="range" min="0" max="1" step="0.01"></b-form-input>
      <b-form-input v-if="param[0] == 'nodeDistance'" id="param" v-model.number="options.physics[solver].nodeDistance" type="range" min="0" max="500"></b-form-input>

      <b-form-input v-if="param[0] == 'damping'" id="param" v-model.number="options.physics[solver].damping" type="range" min="0" max="1" step="0.01"></b-form-input>
      <b-form-input v-if="param[0] == 'avoidOverlap'" id="param" v-model.number="options.physics[solver].avoidOverlap" type="range" min="0" max="1" step="0.01"></b-form-input>

    </b-col>
  </b-row>



</b-card>

</b-collapse>

</b-card>
</b-collapse>


</div>
</div>


<network ref="network"
class="wrapper"
:nodes="nodes"
:edges="edges"
:options="options"
@select-node="selectNode">
</network>


<b-list-group v-if="historic.length > 0">
  <b-list-group-item v-for='h in historic' :key="h.id">
    {{ h.label }}
    <b-button-group>
      <b-button variant="outline-info" size="sm" @click="see(h)">See</b-button>
      <b-button variant="outline-info" size="sm" v-bind:to="{ name: 'Profile', params: { interest: h.id }}">Add to my inyterests</b-button>
      <!--<b-button>Button 3</b-button>-->
    </b-button-group>
  </b-list-group-item>
</b-list-group>

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
  //props: ['containers'],
  data: function () {
    //  data() {
    return {
      lastX : 0,
      lastY : 0,
      input: {subject:"", property:"", object:""},
      nodes: [
      ],
      edges: [
      ],
      dataset: {nodes: [], edges: [], types: []},
      historic: [],
      optionsSolver: [
        'barnesHut', 'repulsion', 'hierarchicalRepulsion', 'forceAtlas2Based'
      ],
      solver: "barnesHut",
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
          smooth: false // true,
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
    //  theta: 0.5,
    gravitationalConstant: -2000,
    centralGravity: 0.3,
    springLength: 95,
    springConstant: 0.04,
    damping: 0.09,
    avoidOverlap: 0
  },
  forceAtlas2Based: {
    //  theta: 0.5,
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
    //  avoidOverlap: 0
  },
  maxVelocity: 50,
  minVelocity: 0.1,
  solver: 'repulsion',
  stabilization: {
    enabled: true,
    iterations: 1000,
    updateInterval: 500,
    //onlyDynamicEdges: true,
  //  fit: true
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
  let webIdNode = { id: this.webId, label: this.webId }
  this.nodes.find(x => x.id === this.webId) == undefined ?   this.nodes.push(webIdNode) : ""
  this.dataset.nodes[webIdNode.id] = webIdNode
  //  this.dataset.edges.push(interestProperty)
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
},
watch: {
  solver(solver){
    console.log("SOLVER",solver)
    this.options.physics.solver = solver

    switch (this.solver) {
      case "barnesHut":
      this.options.physics.barnesHut = {
        //  theta: 0.5,
        gravitationalConstant: -2000,
        centralGravity: 0.3,
        springLength: 95,
        springConstant: 0.04,
        damping: 0.09,
        avoidOverlap: 0
      }
      break;
      case "forceAtlas2Based":
      this.options.physics.forceAtlas2Based = {
        //  theta: 0.5,
        gravitationalConstant: -50,
        centralGravity: 0.01,
        springConstant: 0.08,
        springLength: 100,
        damping: 0.4,
        avoidOverlap: 0
      }
      break;
      case "repulsion":
      this.options.physics.repulsion = {
        centralGravity: 0.2,
        springLength: 200,
        springConstant: 0.05,
        nodeDistance: 100,
        damping: 0.09
      }
      break;
      case "hierarchicalRepulsion":
      this.options.physics.hierarchicalRepulsion = {
        centralGravity: 0.0,
        springLength: 100,
        springConstant: 0.01,
        nodeDistance: 120,
        damping: 0.09,
        //  avoidOverlap: 0
      }
      break;




      default:

    }






  },
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
      let friendNode = { id:f, label: f , shape: "dot", color: "yellow"}
      let edgeNode = {
        from: this.webId,
        to: f,
        label: "friend"
      }
      this.nodes.find(x => x.id === f) == undefined ?   this.nodes.push(friendNode) : ""
      this.edges.push(edgeNode);

      this.dataset.nodes[friendNode.id] = friendNode
      this.dataset.edges.push(edgeNode)
      //  this.dataset.types.indexOf(typeNode.id) < 0 ? this.dataset.types.push(typeNode.id) : ""

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
  this.containers = e.containers
  console.log(e)
  for ( let c in this.containers){
    await this.retrieveData(e.url+this.containers[c]+"/")
  }


},

},
methods:{
  see(node){
    console.log(node)
  },
  selectNode(selected){
    //https://www.npmjs.com/package/@marklogic-community/grove-react-visjs-graph
    console.log("event",selected)
    let selected_id = selected.nodes[0]
    this.historic.push(this.dataset.nodes[selected_id])
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
},

showNodes(){
  //  console.log(this.dataset.types)

  this.nodes = []
  this.edges = []
  for (const node of Object.values(this.dataset.nodes)) {
    this.nodes.push(node)
    //  console.log(this.nodes)
  }

  for (const edge of Object.values(this.dataset.edges)) {
    this.edges.push(edge)
    //  console.log(this.nodes)
  }

  console.log(this.nodes, this.edges)
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
    this.currentEndpoint.model == "semapps" ?
    this.add2network(response.data)
    : this.add2networkSartinblox(response.data)
    //  console.log(response.status);    //  console.log(response.statusText);    //  console.log(response.headers); //  console.log(response.config);
  })
  .catch(() /*error*/ => {
    //console.log(error);
    this.donnees = []
  }).then(function () {
    //console.log("END")

  });
},

add2networkSartinblox(response_data){
  let donnees = response_data["ldp:contains"]
  console.log("SIB",donnees)
  console.log(donnees)
  for (let don in donnees){
    let d = donnees[don]
    console.log(d)
    let id = d['@id']

    var color = this.colorize(id)

    let label =  d.name || d.first_name+' '+d.last_name || d.username ||  this.lastPart(d['@id'])
    let subjectNode = { id:id, label: label, shape: "star", color:'rgba('+color.red+', '+color.green+', '+color.blue+',0.5)' ,x:Math.random(-500, 500) , y:Math.random(-500,500)  }
    console.log(subjectNode)
    this.dataset.nodes[subjectNode.id] = subjectNode
    //  this.nodes.push(subjectNode)

    for (const [key, value] of Object.entries(d)) {

      let typeNode = {}
      let typeEdge = {}
      let propertyEdge = {}
      let objectNode = {}
      //console.log("FOR")
      switch (key) {
        // NOTHING TO DO, ALREADY TREATED NE rien faire déjà traité ou traité differemment
        case "@id":
        case '@context':
        case 'permissions':
        case "password":
        //console.log(key, value);
        break;
        case "@type":
        typeNode = { id:d['@type'], label: this.lastPart(d['@type']), shape: "circle", classe: d['@type'], color: 'rgba('+color.red+', '+color.green+', '+color.blue+',0.5)', size: 100 }
        this.addOrNothingNode(typeNode)
        typeEdge = {
          from: id,
          to: d['@type'],
          label: "a",
        }
        //  this.edges.push(typeEdge);
        this.dataset.nodes[typeNode.id] = typeNode
        this.dataset.edges.push(typeEdge)
        this.dataset.types.indexOf(typeNode.id) < 0 ? this.dataset.types.push(typeNode.id) : ""
        break;

        // autres propriétés
        case 'first_name':
        case 'last_name':
        case "username":
        case "name":
        case "email":
        case "is_staff":
        case "is_active":
        //  case "account":
        //  console.log("_______________",key, value);
        this.stringOrArray(value).forEach((v) => {
          objectNode = { id:v, label: v, shape: "box", color: 'rgba('+color.red+', '+color.green+', '+color.blue+',0.5)', x:this.lastX , y:this.lastY  }
          propertyEdge = {from: d['@id'], to: v, label: key}
          //  this.addOrNothingNode(objectNode)
          //  this.edges.push(propertyEdge);

          this.dataset.nodes[objectNode.id] = objectNode
          this.dataset.edges.push(propertyEdge)
        });
        //  console.log(this.stringToColour(key))
        break;
        case "chatProfile":
        case "jobOffers":
        case "inbox":
        case "profile":
        case "circles":
        case "groups":

        console.log(key+" -> "+value['@id'])
        break;
        default:
        console.warn("TODO : ---------------",key, value);
        /*  try{
        this.stringOrArray(value).forEach((v) => {
        objectNode = { id:v, label: this.lastPart(v), shape: "box",  color: 'rgba('+color.red+', '+color.green+', '+color.blue+',0.5)' ,x:Math.random(500,1000) , y:Math.random(500,1000)  }
        propertyEdge = {from: d['@id'], to: v.replace('pair:',''), label: key}
        //  this.addOrNothingNode(objectNode)
        //  this.edges.push(propertyEdge);
        this.dataset.nodes[objectNode.id] = objectNode
        this.dataset.edges.push(propertyEdge)
      });
    }catch(e){
    //console.log(e)
  }*/

}
}
console.log(this.nodes)

}




},
async addInterests(webId){
  let storage =  await solid.data[webId].storage
  let p_u = storage+"public/popock/profile.ttl"
  //console.log("P8U",p_u)
  try{
    this.profileDoc = await fetchDocument(p_u)
    let subj = await this.profileDoc.getSubject(p_u+"#me")
    this.interests = await subj.getAllLiterals(foaf.topic_interest)
    console.log(this.interests)
    this.interests.forEach((interest) => {
      let interestNode = { id:interest, label: interest, shape: "triangle", color: "green" }
      let interestProperty = {from: webId, to: interest, label: "topic_interest"}
      this.nodes.find(x => x.id === interest) == undefined ?   this.nodes.push(interestNode) : ""
      this.edges.push(interestProperty);

      this.dataset.nodes[interestNode.id] = interestNode
      this.dataset.edges.push(interestProperty)

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
