(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15e3f3fd"],{"07ac":function(e,t,s){var n=s("23e7"),o=s("6f53").values;n({target:"Object",stat:!0},{values:function(e){return o(e)}})},2532:function(e,t,s){"use strict";var n=s("23e7"),o=s("5a34"),a=s("1d80"),i=s("ab13");n({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(a(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"44bc":function(e,t,s){},"6ccd":function(e,t,s){"use strict";var n=s("44bc"),o=s.n(n);o.a},"6fca":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"network container"},[s("h5",[e._v("Type a search to filter")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("b-input",{attrs:{size:"sm",placeholder:"Subject"},on:{input:e.search},model:{value:e.input.subject,callback:function(t){e.$set(e.input,"subject",t)},expression:"input.subject"}}),s("b-input",{attrs:{size:"sm",placeholder:"property"},on:{input:e.search},model:{value:e.input.property,callback:function(t){e.$set(e.input,"property",t)},expression:"input.property"}}),s("b-input",{attrs:{size:"sm",placeholder:"Object"},on:{input:e.search},model:{value:e.input.object,callback:function(t){e.$set(e.input,"object",t)},expression:"input.object"}}),s("b-button",{attrs:{size:"sm",variant:"outline-info"},on:{click:e.showTypes}},[e._v("All types")]),s("b-button",{attrs:{size:"sm",variant:"outline-info"},on:{click:e.showNodes}},[e._v("All Nodes")]),s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],attrs:{variant:"primary"}},[e._v("Network Settings")]),e._m(0)],1),s("div",{staticClass:"col"},[s("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"}},[s("b-card",[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1-inner",modifiers:{"collapse-1-inner":!0}}],attrs:{size:"sm"}},[e._v("Edges")]),s("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1-inner"}},[s("b-card",[e._v(" - smooth : "),s("br"),s("b-row",[s("b-col",{attrs:{sm:"3"}},[s("label",{attrs:{for:"smooth-enabled"}},[e._v("Enabled")])]),s("b-col",{attrs:{sm:"9"}},[s("b-form-checkbox",{attrs:{id:"smooth-enabled"},model:{value:e.options.edges.smooth,callback:function(t){e.$set(e.options.edges,"smooth",t)},expression:"options.edges.smooth"}})],1)],1)],1)],1),s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2-inner",modifiers:{"collapse-2-inner":!0}}],attrs:{size:"sm"}},[e._v("Physics")]),s("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-2-inner"}},[s("b-card",[s("b-row",[s("b-col",{attrs:{sm:"4"}},[s("label",{attrs:{for:"physics-enabled"}},[e._v("Enabled")])]),s("b-col",{attrs:{sm:"8"}},[s("b-form-checkbox",{attrs:{id:"physics-enabled"},model:{value:e.options.physics.enabled,callback:function(t){e.$set(e.options.physics,"enabled",t)},expression:"options.physics.enabled"}})],1)],1),s("b-row",[s("b-col",{attrs:{sm:"4"}},[s("label",{attrs:{for:"max-velocity"}},[e._v("Max velocity : "+e._s(e.options.physics.maxVelocity))])]),s("b-col",{attrs:{sm:"8"}},[s("b-form-input",{attrs:{id:"range-1",type:"range",min:"1",max:"100"},model:{value:e.options.physics.maxVelocity,callback:function(t){e.$set(e.options.physics,"maxVelocity",e._n(t))},expression:"options.physics.maxVelocity"}})],1)],1),s("b-row",[s("b-col",{attrs:{sm:"4"}},[s("label",{attrs:{for:"solver"}},[e._v("Min velocity : "+e._s(e.options.physics.minVelocity))])]),s("b-col",{attrs:{sm:"8"}},[s("b-form-input",{attrs:{id:"range-1",type:"range",step:"0.1",min:"0",max:"1"},model:{value:e.options.physics.minVelocity,callback:function(t){e.$set(e.options.physics,"minVelocity",e._n(t))},expression:"options.physics.minVelocity"}})],1)],1),s("b-row",[s("b-col",{attrs:{sm:"4"}},[s("label",{attrs:{for:"solver"}},[e._v("Time step : "+e._s(e.options.physics.timestep))])]),s("b-col",{attrs:{sm:"8"}},[s("b-form-input",{attrs:{id:"range-1",type:"range",step:"0.1",min:"0",max:"1"},model:{value:e.options.physics.timestep,callback:function(t){e.$set(e.options.physics,"timestep",e._n(t))},expression:"options.physics.timestep"}})],1)],1),s("b-row",[s("b-col",[s("label",{attrs:{for:"adaptive-timestep"}},[e._v("Adaptive Timestep")])]),s("b-col",[s("b-form-checkbox",{attrs:{id:"adaptive-timestep"},model:{value:e.options.physics.adaptiveTimestep,callback:function(t){e.$set(e.options.physics,"adaptiveTimestep",t)},expression:"options.physics.adaptiveTimestep"}})],1)],1)],1),s("b-card",[s("b-row",[s("b-col",{attrs:{sm:"4"}},[s("label",{attrs:{for:"solver"}},[e._v("Solver")])]),s("b-col",{attrs:{sm:"8"}},[s("b-form-select",{staticClass:"mt-3",attrs:{id:"solver",options:e.optionsSolver,size:"sm"},model:{value:e.solver,callback:function(t){e.solver=t},expression:"solver"}})],1)],1),e._l(Object.entries(e.options.physics[e.solver]),(function(t,n){return s("b-row",{key:n},[s("b-col",[s("label",{attrs:{for:"param"}},[e._v(e._s(t[0])+" : "+e._s(t[1]))])]),s("b-col",["gravitationalConstant"==t[0]?s("b-form-input",{attrs:{id:"param",type:"range",min:"-50000",max:"0"},model:{value:e.options.physics[e.solver].gravitationalConstant,callback:function(t){e.$set(e.options.physics[e.solver],"gravitationalConstant",e._n(t))},expression:"options.physics[solver].gravitationalConstant"}}):e._e(),"centralGravity"==t[0]?s("b-form-input",{attrs:{id:"param",type:"range",min:"0",max:"1",step:"0.01"},model:{value:e.options.physics[e.solver].centralGravity,callback:function(t){e.$set(e.options.physics[e.solver],"centralGravity",e._n(t))},expression:"options.physics[solver].centralGravity"}}):e._e(),"springLength"==t[0]?s("b-form-input",{attrs:{id:"param",type:"range",min:"1",max:"500"},model:{value:e.options.physics[e.solver].springLength,callback:function(t){e.$set(e.options.physics[e.solver],"springLength",e._n(t))},expression:"options.physics[solver].springLength"}}):e._e(),"springConstant"==t[0]?s("b-form-input",{attrs:{id:"param",type:"range",min:"0",max:"1",step:"0.01"},model:{value:e.options.physics[e.solver].springConstant,callback:function(t){e.$set(e.options.physics[e.solver],"springConstant",e._n(t))},expression:"options.physics[solver].springConstant"}}):e._e(),"nodeDistance"==t[0]?s("b-form-input",{attrs:{id:"param",type:"range",min:"0",max:"500"},model:{value:e.options.physics[e.solver].nodeDistance,callback:function(t){e.$set(e.options.physics[e.solver],"nodeDistance",e._n(t))},expression:"options.physics[solver].nodeDistance"}}):e._e(),"damping"==t[0]?s("b-form-input",{attrs:{id:"param",type:"range",min:"0",max:"1",step:"0.01"},model:{value:e.options.physics[e.solver].damping,callback:function(t){e.$set(e.options.physics[e.solver],"damping",e._n(t))},expression:"options.physics[solver].damping"}}):e._e(),"avoidOverlap"==t[0]?s("b-form-input",{attrs:{id:"param",type:"range",min:"0",max:"1",step:"0.01"},model:{value:e.options.physics[e.solver].avoidOverlap,callback:function(t){e.$set(e.options.physics[e.solver],"avoidOverlap",e._n(t))},expression:"options.physics[solver].avoidOverlap"}}):e._e()],1)],1)}))],2)],1)],1)],1)],1)]),s("network",{ref:"network",staticClass:"wrapper",attrs:{nodes:e.nodes,edges:e.edges,options:e.options},on:{"select-node":e.selectNode}}),e.historic.length>0?s("b-list-group",e._l(e.historic,(function(t){return s("b-list-group-item",{key:t.id},[e._v(" "+e._s(t.label)+" "),s("b-button-group",[s("b-button",{attrs:{variant:"outline-info",size:"sm"},on:{click:function(s){return e.see(t)}}},[e._v("See")]),s("b-button",{attrs:{variant:"outline-info",size:"sm",to:{name:"Profile",params:{interest:t.id}}}},[e._v("Add to my inyterests")])],1)],1)})),1):e._e(),e._m(1),e._m(2)],1)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"https://visjs.github.io/vis-network/docs/network/physics.html",target:"_blank"}},[s("b",[e._v("?")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"node-popUp"}},[s("span",{attrs:{id:"node-operation"}},[e._v("node")]),e._v(" "),s("br"),s("table",{staticStyle:{margin:"auto"}},[s("tr",[s("td",[e._v("id")]),s("td",[s("input",{attrs:{id:"node-id",value:"new value"}})])]),s("tr",[s("td",[e._v("label")]),s("td",[s("input",{attrs:{id:"node-label",value:"new value"}})])])]),s("input",{attrs:{type:"button",value:"save",id:"node-saveButton"}}),s("input",{attrs:{type:"button",value:"cancel",id:"node-cancelButton"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"edge-popUp"}},[s("span",{attrs:{id:"edge-operation"}},[e._v("edge")]),e._v(" "),s("br"),s("table",{staticStyle:{margin:"auto"}},[s("tr",[s("td",[e._v("label")]),s("td",[s("input",{attrs:{id:"edge-label",value:"new value"}})])])]),s("input",{attrs:{type:"button",value:"save",id:"edge-saveButton"}}),s("input",{attrs:{type:"button",value:"cancel",id:"edge-cancelButton"}})])}],a=(s("4de4"),s("7db0"),s("4160"),s("caad"),s("c975"),s("b0c0"),s("4fad"),s("d3b7"),s("07ac"),s("2532"),s("159b"),s("ddb0"),s("53ca")),i=s("3835"),r=(s("96cf"),s("1da1")),l=s("234f"),c=s("4d8d"),d=s("6dc1"),p=(s("38b4"),s("bc3a")),u=s.n(p),b={name:"SemappsNetWork",mixins:[l["a"]],components:{},data:function(){return{lastX:0,lastY:0,input:{subject:"",property:"",object:""},nodes:[],edges:[],dataset:{nodes:[],edges:[],types:[]},historic:[],optionsSolver:["barnesHut","repulsion","hierarchicalRepulsion","forceAtlas2Based"],solver:"barnesHut",options:{locale:navigator.language,nodes:{borderWidth:1},edges:{arrows:"to",scaling:{label:!0},smooth:!0},interaction:{navigationButtons:!0,keyboard:!0},physics:{enabled:!0,barnesHut:{gravitationalConstant:-2e3,centralGravity:.3,springLength:95,springConstant:.04,damping:.09,avoidOverlap:0},forceAtlas2Based:{gravitationalConstant:-50,centralGravity:.01,springConstant:.08,springLength:100,damping:.4,avoidOverlap:0},repulsion:{centralGravity:.2,springLength:200,springConstant:.05,nodeDistance:100,damping:.09},hierarchicalRepulsion:{centralGravity:0,springLength:100,springConstant:.01,nodeDistance:120,damping:.09},maxVelocity:50,minVelocity:.1,solver:"repulsion",stabilization:{enabled:!0,iterations:1e3,updateInterval:500},timestep:.5,adaptiveTimestep:!0}}}},mounted:function(){var e=this;this.webId=this.$route.params.webId||this.$store.state.solid.webId,this.friends=this.$store.state.solid.friends;var t={id:this.webId,label:this.webId};void 0==this.nodes.find((function(t){return t.id===e.webId}))&&this.nodes.push(t),this.dataset.nodes[t.id]=t,this.addInterests(this.webId)},computed:{currentEndpoint:{get:function(){return this.$store.state.semapps.currentEndpoint},set:function(){}},profile_url:{get:function(){return this.$store.state.solid.storage+"public/popock/profile.ttl"},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},friends:{get:function(){return this.$store.state.solid.friends},set:function(){}}},watch:{solver:function(e){switch(console.log("SOLVER",e),this.options.physics.solver=e,this.solver){case"barnesHut":this.options.physics.barnesHut={gravitationalConstant:-2e3,centralGravity:.3,springLength:95,springConstant:.04,damping:.09,avoidOverlap:0};break;case"forceAtlas2Based":this.options.physics.forceAtlas2Based={gravitationalConstant:-50,centralGravity:.01,springConstant:.08,springLength:100,damping:.4,avoidOverlap:0};break;case"repulsion":this.options.physics.repulsion={centralGravity:.2,springLength:200,springConstant:.05,nodeDistance:100,damping:.09};break;case"hierarchicalRepulsion":this.options.physics.hierarchicalRepulsion={centralGravity:0,springLength:100,springConstant:.01,nodeDistance:120,damping:.09};break;default:}},$route:function(e,t){console.log(e,t,this.$route)},storage:function(e){console.log(e)},friends:function(e){var t=this;console.log(e),e.forEach((function(e){var s={id:e,label:e,shape:"dot",color:"yellow"},n={from:t.webId,to:e,label:"friend"};void 0==t.nodes.find((function(t){return t.id===e}))&&t.nodes.push(s),t.edges.push(n),t.dataset.nodes[s.id]=s,t.dataset.edges.push(n),t.addInterests(e)}))},webId:function(e){console.log(e),void 0==this.nodes.find((function(t){return t.id===e}))&&this.nodes.push({id:e,label:e}),this.addInterests(e)},currentEndpoint:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:t.donnees=[],t.containers=e.containers,console.log(e),s.t0=regeneratorRuntime.keys(t.containers);case 4:if((s.t1=s.t0()).done){s.next=10;break}return n=s.t1.value,s.next=8,t.retrieveData(e.url+t.containers[n]+"/");case 8:s.next=4;break;case 10:case"end":return s.stop()}}),s)})))()}},methods:{see:function(e){console.log(e)},selectNode:function(e){var t=this;console.log("event",e);var s=e.nodes[0];this.historic.push(this.dataset.nodes[s]),console.log("dataset",this.dataset);var n=[],o=[];this.edges=[],this.nodes=[],this.dataset.edges.forEach((function(e){e.from!=s&&e.to!=s||(t.edges.push(e),n.push(e.id),o.indexOf(e.from)<0&&(o.push(e.from),t.nodes.push(t.dataset.nodes[e.from])),o.indexOf(e.to)<0&&(o.push(e.to),t.nodes.push(t.dataset.nodes[e.to])))}))},showTypes:function(){this.nodes=[];for(var e=0,t=Object.values(this.dataset.nodes);e<t.length;e++){var s=t[e];this.dataset.types.includes(s.id)&&this.nodes.push(s)}},showNodes:function(){this.nodes=[],this.edges=[];for(var e=0,t=Object.values(this.dataset.nodes);e<t.length;e++){var s=t[e];this.nodes.push(s)}for(var n=0,o=Object.values(this.dataset.edges);n<o.length;n++){var a=o[n];this.edges.push(a)}console.log(this.nodes,this.edges)},search:function(){var e=this.input;void 0==this.old||this.old.length<this.nodes.length?this.old=this.nodes:this.nodes=this.old,this.visibles=this.old.filter((function(t){return e.subject.length>0&&t.label.includes(e.subject)||e.property.length>0&&t.label.includes(e.property)||e.object.length>0&&t.label.includes(e.object)})),this.nodes=this.visibles},retrieveData:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:u()({method:"get",url:e,responseType:"application/ld+json"}).then((function(e){"semapps"==t.currentEndpoint.model?t.add2network(e.data):t.add2networkSartinblox(e.data)})).catch((function(){t.donnees=[]})).then((function(){}));case 1:case"end":return s.stop()}}),s)})))()},add2networkSartinblox:function(e){var t=this,s=e["ldp:contains"];console.log("SIB",s),console.log(s);var n=function(e){var n=s[e];console.log(n);var o=n["@id"];a=t.colorize(o);var r=n.name||n.first_name+" "+n.last_name||n.username||t.lastPart(n["@id"]),l={id:o,label:r,shape:"star",color:"rgba("+a.red+", "+a.green+", "+a.blue+",0.5)",x:Math.random(-500,500),y:Math.random(-500,500)};console.log(l),t.dataset.nodes[l.id]=l;for(var c=function(){var e=Object(i["a"])(p[d],2),s=e[0],r=e[1],l={},c={},u={},b={};switch(s){case"@id":case"@context":case"permissions":case"password":break;case"@type":l={id:n["@type"],label:t.lastPart(n["@type"]),shape:"circle",classe:n["@type"],color:"rgba("+a.red+", "+a.green+", "+a.blue+",0.5)",size:100},t.addOrNothingNode(l),c={from:o,to:n["@type"],label:"a"},t.dataset.nodes[l.id]=l,t.dataset.edges.push(c),t.dataset.types.indexOf(l.id)<0&&t.dataset.types.push(l.id);break;case"first_name":case"last_name":case"username":case"name":case"email":case"is_staff":case"is_active":t.stringOrArray(r).forEach((function(e){b={id:e,label:e,shape:"box",color:"rgba("+a.red+", "+a.green+", "+a.blue+",0.5)",x:t.lastX,y:t.lastY},u={from:n["@id"],to:e,label:s},t.dataset.nodes[b.id]=b,t.dataset.edges.push(u)}));break;case"chatProfile":case"jobOffers":case"inbox":case"profile":case"circles":case"groups":console.log(s+" -> "+r["@id"]);break;default:console.warn("TODO : ---------------",s,r)}},d=0,p=Object.entries(n);d<p.length;d++)c();console.log(t.nodes)};for(var o in s){var a;n(o)}},addInterests:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var n,o,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,solid.data[e].storage;case 2:return n=s.sent,o=n+"public/popock/profile.ttl",s.prev=4,s.next=7,Object(c["b"])(o);case 7:return t.profileDoc=s.sent,s.next=10,t.profileDoc.getSubject(o+"#me");case 10:return a=s.sent,s.next=13,a.getAllLiterals(d["b"].topic_interest);case 13:t.interests=s.sent,console.log(t.interests),t.interests.forEach((function(s){var n={id:s,label:s,shape:"triangle",color:"green"},o={from:e,to:s,label:"topic_interest"};void 0==t.nodes.find((function(e){return e.id===s}))&&t.nodes.push(n),t.edges.push(o),t.dataset.nodes[n.id]=n,t.dataset.edges.push(o)})),s.next=20;break;case 18:s.prev=18,s.t0=s["catch"](4);case 20:case"end":return s.stop()}}),s,null,[[4,18]])})))()},editNode:function(e,t,s){document.getElementById("node-label").value=e.label,document.getElementById("node-saveButton").onclick=this.saveNodeData.bind(this,e,s),document.getElementById("node-cancelButton").onclick=t.bind(this,s),document.getElementById("node-popUp").style.display="block"},clearNodePopUp:function(){document.getElementById("node-saveButton").onclick=null,document.getElementById("node-cancelButton").onclick=null,document.getElementById("node-popUp").style.display="none"},cancelNodeEdit:function(e){this.clearNodePopUp(),e(null)},saveNodeData:function(e,t){e.label=document.getElementById("node-label").value,this.clearNodePopUp(),t(e)},editEdgeWithoutDrag:function(e,t){document.getElementById("edge-label").value=e.label,document.getElementById("edge-saveButton").onclick=this.saveEdgeData.bind(this,e,t),document.getElementById("edge-cancelButton").onclick=this.cancelEdgeEdit.bind(this,t),document.getElementById("edge-popUp").style.display="block"},clearEdgePopUp:function(){document.getElementById("edge-saveButton").onclick=null,document.getElementById("edge-cancelButton").onclick=null,document.getElementById("edge-popUp").style.display="none"},cancelEdgeEdit:function(e){this.clearEdgePopUp(),e(null)},saveEdgeData:function(e,t){"object"===Object(a["a"])(e.to)&&(e.to=e.to.id),"object"===Object(a["a"])(e.from)&&(e.from=e.from.id),e.label=document.getElementById("edge-label").value,this.clearEdgePopUp(),t(e)}}},h=b,v=(s("6ccd"),s("2877")),m=Object(v["a"])(h,n,o,!1,null,null,null);t["default"]=m.exports},caad:function(e,t,s){"use strict";var n=s("23e7"),o=s("4d64").includes,a=s("44d2"),i=s("ae40"),r=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!r},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")}}]);
//# sourceMappingURL=chunk-15e3f3fd.ba5df888.js.map