(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c700d8e0"],{"60b0":function(e,t,n){"use strict";var i=n("c976"),r=n.n(i);r.a},a434:function(e,t,n){"use strict";var i=n("23e7"),r=n("23cb"),o=n("a691"),a=n("50c4"),l=n("7b0b"),s=n("65f0"),d=n("8418"),c=n("1dde"),u=n("ae40"),f=c("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,g=Math.min,m=9007199254740991,b="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!p},{splice:function(e,t){var n,i,c,u,f,p,v=l(this),w=a(v.length),k=r(e,w),E=arguments.length;if(0===E?n=i=0:1===E?(n=0,i=w-k):(n=E-2,i=g(h(o(t),0),w-k)),w+n-i>m)throw TypeError(b);for(c=s(v,i),u=0;u<i;u++)f=k+u,f in v&&d(c,u,v[f]);if(c.length=i,n<i){for(u=k;u<w-i;u++)f=u+i,p=u+n,f in v?v[p]=v[f]:delete v[p];for(u=w;u>w-i+n;u--)delete v[u-1]}else if(n>i)for(u=w-i;u>k;u--)f=u+i-1,p=u+n-1,f in v?v[p]=v[f]:delete v[p];for(u=0;u<n;u++)v[u+k]=arguments[u+2];return v.length=w-i+n,c}})},b803:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modele-view"},[n("small",[e._v(" File "),n("a",{attrs:{href:e.file.url,target:"_blank"}},[e._v(e._s(e.file.url))]),n("br"),e._v(" Node : "+e._s(e.node.label)),n("br")]),n("div",{staticClass:"row"},[n("b-input",{attrs:{placeholder:"new file name"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),n("b-button",{on:{click:e.create}},[e._v("New")])],1),n("b-button",{attrs:{size:"sm",variant:"warning"},on:{click:e.clear}},[e._v("Clear")]),n("network",{ref:"network",staticClass:"wrapper",attrs:{nodes:e.nodes,edges:e.edges,options:e.options},on:{select:function(t){return e.networkEvent("select")},"select-node":function(t){return e.networkEvent("selectNode")},"select-edge":function(t){return e.networkEvent("selectEdge")}}}),n("NodeModal",{on:{ok:e.saveNode},model:{value:e.node,callback:function(t){e.node=t},expression:"node"}}),n("EdgeModal",{on:{ok:e.saveEdge},model:{value:e.edge,callback:function(t){e.edge=t},expression:"edge"}})],1)},r=[],o=(n("4de4"),n("4160"),n("c975"),n("a15b"),n("d81d"),n("a434"),n("b0c0"),n("d3b7"),n("ac1f"),n("8a79"),n("1276"),n("159b"),n("53ca")),a=(n("96cf"),n("1da1")),l=n("4d8d"),s=n("6dc1"),d=(n("38b4"),n("234f")),c=n("1404"),u={name:"EditorNetwork",mixins:[d["a"],c["a"]],components:{NodeModal:function(){return n.e("chunk-fad8e306").then(n.bind(null,"b7ab"))},EdgeModal:function(){return n.e("chunk-4e25104e").then(n.bind(null,"4e1d"))}},data:function(){return{filename:"",tmp_file:null,triples:[],node:{},edge:{},net:{},nodes:[],edges:[],options:{locale:navigator.language,nodes:{borderWidth:1},edges:{arrows:"to",color:"red",scaling:{label:!0},smooth:!0},interaction:{navigationButtons:!0,keyboard:!0}}}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.file=e.$store.state.solid.file,e.update();case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this,t=this;this.network=this.$refs.network,this.network.setOptions({manipulation:{enabled:!0,initiallyActive:!0,addNode:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i(),null!=e.tmp_file&&(e.file=e.tmp_file),n.id=e.file.url+"#"+n.id,e.editNode(n,i);case 4:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}(),editNode:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i(),e.editNode(n,i);case 2:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}(),addEdge:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i(),e.addEdge(n,i);case 2:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}(),editEdge:{editWithoutDrag:function(e,n){n(),t.editEdge(e,n)}}}})},methods:{saveNode:function(e){var t=this.nodes.map((function(e){return e.id})).indexOf(e.id);t>-1?(this.nodes.splice(t,1),this.nodes[t].label=e.label):this.nodes.push(e)},writeEdgeToFile:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var i,r,o,a,d,c,u,f,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return null!=t.tmp_file&&(t.file=t.tmp_file),i=t.nodes.filter((function(t){return t.id==e.from})),r=t.nodes.filter((function(t){return t.id==e.to})),o=i[0].id.split("#")[1],a=r[0].id.split("#")[1],d=new Date,c=d.toISOString(),n.next=9,Object(l["b"])(t.file.url);case 9:u=n.sent,f=u.addSubject({identifier:o}),f.addString(s["e"].label,i[0].label),f.addString(s["a"].modified,c),f.addRef(s["b"].maker,t.webId),f.addRef(t.file.url+"#"+e.label,r[0].id),p=u.addSubject({identifier:a}),p.addString(s["e"].label,r[0].label),u.save();case 18:case"end":return n.stop()}}),n)})))()},saveEdge:function(e){var t=this.edges.map((function(e){return e.id})).indexOf(e.id);t>-1?this.edges[t].label=e.label:(this.edges.push(e),this.writeEdgeToFile(e))},create:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,i,r,o,a,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.clear(),e.tmp_file={},e.filename=e.filename.split(" ").join("_"),e.tmp_file.name=e.filename.endsWith(".ttl")?e.filename:e.filename+".ttl",e.tmp_file.url=e.folder.url+e.tmp_file.name,e.thisNode={id:e.tmp_file.url+"#this",label:e.filename},e.nodes.push(e.thisNode),n={},i=!1,t.prev=9,t.next=12,Object(l["b"])(e.tmp_file.url);case 12:n=t.sent,i=!0,t.next=22;break;case 16:return t.prev=16,t.t0=t["catch"](9),t.next=20,Object(l["a"])(e.tmp_file.url);case 20:n=t.sent,i=!1;case 22:r=new Date,o=r.toISOString(),a=n.addSubject({identifier:"this"}),0==i?(d=e.thisNode.label,a.addString(s["e"].label,d),a.addString(s["a"].created,o),a.addRef(s["d"].type,e.tmp_file.url+"#Network"),console.log("file created",e.tmp_file.url)):(a.addString(s["a"].modified,o),console.log("file modified",e.tmp_file.url)),a.addRef(s["b"].maker,e.webId),n.save(),e.createActivity();case 29:case"end":return t.stop()}}),t,null,[[9,16]])})))()},createActivity:function(){console.log("createActivity"),this.net.displayType="Network",this.net.types=["Task","http://www.w3.org/ns/ldp#Resource"],this.net.path=this.tmp_file.url,console.log(this.net),this.activity={actor:{name:this.$store.state.solid.webId},type:"Create",summary:"",object:{name:this.thisNode.label,url:this.tmp_file.url,type:"Network"}},this.sendActivity()},clear:function(){this.nodes=[],this.edges=[]},update:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.triples=[],console.log(e.file.url),void 0==e.file.url||!e.file.url.endsWith(".ttl")&&!e.file.url.endsWith("card")){t.next=11;break}return t.next=5,Object(l["b"])(e.file.url);case 5:n=t.sent,console.log("fileDoc",n),e.triples=n.getTriples(),console.log(e.triples),t.next=12;break;case 11:console.log("TODO",e.file.url);case 12:case"end":return t.stop()}}),t)})))()},networkEvent:function(e,t){console.log(e,t)},addInterests:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var i,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,solid.data[e].storage;case 2:return i=n.sent,r=i+"public/popock/profile.ttl",n.prev=4,n.next=7,Object(l["b"])(r);case 7:return t.profileDoc=n.sent,n.next=10,t.profileDoc.getSubject(r+"#me");case 10:return o=n.sent,n.next=13,o.getAllLiterals(s["b"].topic_interest);case 13:t.interests=n.sent,t.interests.forEach((function(n){t.$refs.network.nodes.push({id:n,label:n,shape:"triangle",color:"green"}),t.$refs.network.edges.push({from:e,to:n,label:"foaf:topic_interest"})})),n.next=19;break;case 17:n.prev=17,n.t0=n["catch"](4);case 19:case"end":return n.stop()}}),n,null,[[4,17]])})))()},addTriplet:function(e){var t=this.colorize(e.subject.id),n=this.lastPart(e.subject.id),i={id:e.subject.id,label:n,shape:"star",color:"rgba("+t.red+", "+t.green+", "+t.blue+",0.5)"};this.addOrNothingNode(i);var r=this.colorize(e.object.id),o=this.lastPart(e.object.id),a={id:e.object.id,label:o,shape:"box",color:"rgba("+r.red+", "+r.green+", "+r.blue+",0.5)"};this.addOrNothingNode(a);var l=this.lastPart(e.predicate.id),s={from:i.id,to:a.id,label:l};this.edges.push(s)},editNode:function(e){this.node=e,this.$bvModal.show("node-popup")},addEdge:function(e,t){if(this.edge=e,e.from==e.to){var n=confirm("Do you want to connect the node to itself?");if(1!=n)return void t(null)}this.editEdgeWithoutDrag(e,t)},editEdge:function(e,t){this.editEdgeWithoutDrag(e,t)},editEdgeWithoutDrag:function(e,t){this.edge=e,this.$bvModal.show("edge-popup"),t()},clearNodePopUp:function(){document.getElementById("node-saveButton").onclick=null,document.getElementById("node-cancelButton").onclick=null,document.getElementById("node-popUp").style.display="none"},cancelNodeEdit:function(e){this.clearNodePopUp(),e(null)},saveNodeData:function(e,t){e.label=document.getElementById("node-label").value,this.clearNodePopUp(),t(e)},clearEdgePopUp:function(){document.getElementById("edge-saveButton").onclick=null,document.getElementById("edge-cancelButton").onclick=null,document.getElementById("edge-popUp").style.display="none"},cancelEdgeEdit:function(e){this.clearEdgePopUp(),e(null)},saveEdgeData:function(e,t){"object"===Object(o["a"])(e.to)&&(e.to=e.to.id),"object"===Object(o["a"])(e.from)&&(e.from=e.from.id),e.label=document.getElementById("edge-label").value,this.clearEdgePopUp(),t(e)}},watch:{node:function(){},file:function(){this.update()},friends:function(e){var t=this;e.forEach((function(e){t.$refs.network.nodes.push({id:e,label:e,shape:"dot",color:"yellow"}),t.$refs.network.edges.push({from:t.webId,to:e,label:"foaf:friend"}),t.addInterests(e)}))},webId:function(e){this.$refs.network.nodes.push({id:e,label:e}),this.addInterests(e)},triples:function(){var e=this;this.triples.length>0&&this.triples.forEach((function(t){console.log("trip",t),e.addTriplet(t)}))}},computed:{folder:function(){return this.$store.state.solid.folder},profile_url:{get:function(){return this.$store.state.solid.storage+"public/popock/profile.ttl"},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},friends:{get:function(){return this.$store.state.solid.friends},set:function(){}},file:{get:function(){return this.$store.state.solid.file},set:function(e){return this.$store.commit("solid/setFile",e)}}}},f=u,p=(n("60b0"),n("2877")),h=Object(p["a"])(f,i,r,!1,null,null,null);t["default"]=h.exports},c976:function(e,t,n){},d81d:function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").map,o=n("1dde"),a=n("ae40"),l=o("map"),s=a("map");i({target:"Array",proto:!0,forced:!l||!s},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-c700d8e0.10fa0a8d.js.map