(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16dd7032"],{1404:function(t,e,a){"use strict";a("a15b"),a("fb6a"),a("b0c0"),a("96cf");var i=a("1da1"),n=a("4d8d"),r=a("6dc1");e["a"]={created:function(){this.webId=this.$store.state.solid.webId,this.config(this.webId);var t=new Date;this.date=this.formatDate(t)},methods:{sendActivity:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,i,c,o,s,d,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=new Date,i="Activity_"+a.getTime(),c=a.toISOString(),o=t.formatDate(a),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,o),s=t.pubPod+o+".ttl",d={},e.prev=8,e.next=11,Object(n["b"])(s);case 11:d=e.sent,e.next=19;break;case 14:return e.prev=14,e.t0=e["catch"](8),e.next=18,Object(n["a"])(s);case 18:d=e.sent;case 19:return console.log("webId",t.webId),t.activity.summary.length<1&&(t.activity.summary=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" ")),l=d.addSubject({identifier:i}),l.addLiteral(r["e"].label,t.activity.object.name),l.addLiteral(r["a"].created,c),l.addRef(r["b"].maker,t.webId),l.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),l.addRef(r["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),l.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),l.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),void 0!=t.currentWorkspace?l.addRef(r["d"].type,t.currentWorkspace.path+t.activity.object.type):l.addRef(r["d"].type,t.activity.object.url+"#"+t.activity.object.type),e.next=32,d.save();case 32:case"end":return e.stop()}}),e,null,[[8,14]])})))()},send:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,i,c,o,s,d,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=t.pubPod+t.date+".ttl",i=new Date,c="Activity_"+i.getTime(),o=i.toISOString(),s={},e.prev=6,e.next=9,Object(n["b"])(a);case 9:s=e.sent,e.next=17;break;case 12:return e.prev=12,e.t0=e["catch"](6),e.next=16,Object(n["a"])(a);case 16:s=e.sent;case 17:return d=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" "),l=s.addSubject({identifier:c}),l.addLiteral(r["e"].label,d),l.addLiteral(r["a"].created,o),l.addRef(r["b"].maker,t.webId),l.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),l.addRef(r["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),l.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),l.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=28,s.save();case 28:case"end":return e.stop()}}),e,null,[[6,12]])})))()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},config:function(t){this.config={},this.config.webId=t}},webId:{webId:function(t){this.config(t)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solidcommunity.net/public/popock/inbox/"}}}},"83abe":function(t,e,a){},d845:function(t,e,a){"use strict";var i=a("83abe"),n=a.n(i);n.a},fe98:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modele-view"},[a("div",{staticClass:"accordion scroll",attrs:{role:"tablist"}},t._l(t.files,(function(e,i){return a("b-card",{key:e.name,staticClass:"mb-1",attrs:{"no-body":"","bg-variant":"dark","text-variant":"white"}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+i,expression:"'accordion-'+index"}],attrs:{block:"",variant:"info"}},[t._v(t._s(e.name))])],1),a("b-collapse",{attrs:{id:"accordion-"+i,visible:!0,accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-card-text",[a("ArticlesInFile",{attrs:{file:e}})],1)],1)],1)],1)})),1),t._v(" "+t._s(t.pubPod)+" ")])},n=[],r=(a("d3b7"),a("96cf"),a("1da1")),c=a("1404"),o=a("00e8"),s=a.n(o),d=a("7fed"),l=a.n(d),u=new l.a(s.a),v={name:"LastBlog",components:{ArticlesInFile:function(){return a.e("chunk-80778584").then(a.bind(null,"86ed"))}},mixins:[c["a"]],props:["value"],data:function(){return{folder:{files:[]},files:[]}},created:function(){var t=new Date,e=this.formatDate(t);this.fileUrl=this.pubPod+e+".ttl",this.update()},methods:{update:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.readFolder(t.pubPod).then((function(e){console.log("Folder",e.folders),t.folder=e,t.files=t.folder.files.reverse()}),(function(e){console.log("erreur for url : ",t.pubPod,e)}));case 2:case"end":return e.stop()}}),e)})))()}},watch:{},computed:{}},b=v,w=(a("d845"),a("2877")),f=Object(w["a"])(b,i,n,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-16dd7032.7e695b71.js.map