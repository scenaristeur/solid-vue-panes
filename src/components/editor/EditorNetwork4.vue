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
  ff {{ network.nodes.length}}
  <network class="network" ref="network" :nodes="network.nodes" :edges="network.edges" :options="network.options" @click="networkEvent('click')" @doubleClick="networkEvent('doubleClick')" @oncontext="networkEvent('oncontext')" @hold="networkEvent('hold')"
  @release="networkEvent('release')" @select="networkEvent('select')" @selectNode="networkEvent('selectNode')" @selectEdge="networkEvent('selectEdge')" @deselectNode="networkEvent('deselectNode')" @deselectEdge="networkEvent('deselectEdge')" @dragStart="networkEvent('dragStart')"
  @dragging="networkEvent('dragging')" @dragEnd="networkEvent('dragEnd')" @hoverNode="networkEvent('hoverNode')" @blurNode="networkEvent('blurNode')" @hoverEdge="networkEvent('hoverEdge')" @blurEdge="networkEvent('blurEdge')" @zoom="networkEvent('zoom')"
  @showPopup="networkEvent('showPopup')" @hidePopup="networkEvent('hidePopup')" @startStabilizing="networkEvent('startStabilizing')" @stabilizationProgress="networkEvent('stabilizationProgress')" @stabilizationIterationsDone="networkEvent('stabilizationIterationsDone')"
  @stabilized="networkEvent('stabilized')" @resize="networkEvent('resize')" @initRedraw="networkEvent('initRedraw')" @beforeDrawing="networkEvent('beforeDrawing')" @afterDrawing="networkEvent('afterDrawing')" @animationFinished="networkEvent('animationFinished')"
  @configChange="networkEvent('configChange')" @nodes-mounted="networkEvent('nodes-mounted')" @nodes-add="networkEvent('nodes-add')" @nodes-update="networkEvent('nodes-update')" @nodes-remove="networkEvent('nodes-remove')" @edges-mounted="networkEvent('edges-mounted')"
  @edges-add="networkEvent('edges-add')" @edges-update="networkEvent('edges-update')" @edges-remove="networkEvent('edges-remove')">
</network>
<button @click="addNode">Add node</button>
<button @click="addEdge">Add edge</button>
<button @click="resetNetwork">Reset Network</button>
<button @click="removeNode">Remove Node</button>
<button @click="removeEdge">Remove Edge</button>
<div class="events">
  <p>Network events: <br /> {{networkEvents}}</p>
</div>
<p> x: </p>
<input v-model="node.y">
<p> y: </p>
<input v-model="node.x">
<br />
<button id="EditNode" ref="EditNode">EditNode</button>
<button ref="CancelEditNode">CancelEditNode</button>
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

// import { foaf, rdfs, dct, rdf } from 'rdf-namespaces'
// import "vue-vis-network/node_modules/vis-network/dist/vis-network.css";
// import {
//   getSolidDatasetWithAcl,
//   hasResourceAcl,
//   hasFallbackAcl,
//   hasAccessibleAcl,
//   //  createAcl,
//   createAclFromFallbackAcl,
//   getResourceAcl,
//   setPublicResourceAccess,
//   setAgentResourceAccess,
//   saveAclFor,
// } from "@inrupt/solid-client";
import networkMixin from '@/mixins/networkMixin'
import ActivityMixin from '@/mixins/ActivityMixin'
import ToastMixin from '@/mixins/ToastMixin'
import "vue-vis-network/node_modules/vis-network/dist/vis-network.css";


export default {
  name: 'EditorNetwork',
  mixins: [networkMixin, ActivityMixin, ToastMixin],
  components: {
    'NodeModal': () => import('@/components/network/NodeModal'),
    'EdgeModal': () => import('@/components/network/EdgeModal'),
  },
  data() {
    return {
        self: this,
          tmp_file: {url: "test_tmp"},
      filename: "test filename",
      privacy: "public_write",
      node: {
        x: 0,
        y: 0
      },
      edge:{},

      networkEvents: '',
      network: {
        nodes: [{
          id: 1,
          label: 'Node 1'
        },
        {
          id: 2,
          label: 'Node 2'
        },
        {
          id: 3,
          label: 'Node 3'
        },
        {
          id: 4,
          label: 'Node 4'
        },
        {
          id: 5,
          label: 'Node 5'
        },
      ],
      edges: [{
        id: 1,
        from: 1,
        to: 3
      },
      {
        id: 2,
        from: 1,
        to: 2
      },
      {
        id: 3,
        from: 2,
        to: 4
      },
      {
        id: 4,
        from: 2,
        to: 5
      },
      {
        id: 5,
        from: 3,
        to: 3
      },
    ],
    options: {
      nodes: {
        shape: 'circle',
      },
      manipulation: {
        enabled: true,
        initiallyActive: true,
        addNode: async (node, callback) => {
          callback() // Node will be added via reactivity from Vuex
          // if (self.tmp_file != null ){
          //   self.file = self.tmp_file
          // }
          // node.id = self.file.url+"#"+node.id
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
    },
  },
}
},
created(){
  this.file = this.$store.state.solid.file
},
methods: {
  create(){
    console.log("create new file")
  },
  clear(){
    console.log("clear")
  },
  copy(){
    console.log("clear")
  },
  saveNode(){
    console.log("clear")
  },
  saveEdge(){
    console.log("clear")
  },
  onEditNode(data, callback) {
    data.x = this.node.x;
    data.y = this.node.y;
    callback(data);
  },
  onCancelEditNode(data, callback) {
    this.node.x = 0;
    this.node.y = 0;
    callback(null);
  },
  networkEvent(eventName) {
    if (this.networkEvents.length > 500) this.networkEvents = '';
    this.networkEvents += `${eventName}, `;
  },
  addNode() {
    const id = new Date().getTime();
    this.network.nodes.push({
      id,
      label: 'New node'
    });
  },
  addEdge() {
    const n1 = Math.floor(Math.random() * this.network.nodes.length);
    const n2 = Math.floor(Math.random() * this.network.nodes.length);
    this.network.edges.push({
      id: `${this.network.nodes[n1].id}-${this.network.nodes[n2].id}`,
      from: this.network.nodes[n1].id,
      to: this.network.nodes[n2].id,
    });
  },
  resetNetwork() {
    this.network = {
      nodes: [{
        id: 1,
        label: 'Node 1'
      },
      {
        id: 2,
        label: 'Node 2'
      },
      {
        id: 3,
        label: 'Node 3'
      },
      {
        id: 4,
        label: 'Node 4'
      },
      {
        id: 5,
        label: 'Node 5'
      },
    ],
    edges: [{
      id: 1,
      from: 1,
      to: 3
    },
    {
      id: 2,
      from: 1,
      to: 2
    },
    {
      id: 3,
      from: 2,
      to: 4
    },
    {
      id: 4,
      from: 2,
      to: 5
    },
    {
      id: 5,
      from: 3,
      to: 3
    },
  ],
  options: {}

};
},
removeNode() {
  this.network.nodes.splice(0, 1);
},
removeEdge() {
  this.network.edges.splice(0, 1);
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
