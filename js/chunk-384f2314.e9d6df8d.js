(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-384f2314"],{1404:function(t,e,a){"use strict";a("a15b"),a("fb6a"),a("b0c0"),a("96cf");var i=a("1da1"),n=a("4d8d"),r=a("6dc1");e["a"]={created:function(){this.webId=this.$store.state.solid.webId,this.config(this.webId);var t=new Date;this.date=this.formatDate(t)},methods:{sendActivity:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,i,o,s,c,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=new Date,i="Activity_"+a.getTime(),o=a.toISOString(),s=t.formatDate(a),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,s),c=t.pubPod+s+".ttl",d={},e.prev=8,e.next=11,Object(n["b"])(c);case 11:d=e.sent,e.next=19;break;case 14:return e.prev=14,e.t0=e["catch"](8),e.next=18,Object(n["a"])(c);case 18:d=e.sent;case 19:return console.log("webId",t.webId),t.activity.summary.length<1&&(t.activity.summary=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" ")),u=d.addSubject({identifier:i}),u.addLiteral(r["e"].label,t.activity.object.name),u.addLiteral(r["a"].created,o),u.addRef(r["b"].maker,t.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),u.addRef(r["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),void 0!=t.activity.object.inReplyTo&&u.addRef("https://www.w3.org/ns/activitystreams#inReplyTo",t.activity.object.inReplyTo),void 0!=t.currentWorkspace?u.addRef(r["d"].type,t.currentWorkspace.path+t.activity.object.type):u.addRef(r["d"].type,t.activity.object.url+"#"+t.activity.object.type),e.next=33,d.save();case 33:case"end":return e.stop()}}),e,null,[[8,14]])})))()},send:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,i,o,s,c,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=t.pubPod+t.date+".ttl",i=new Date,o="Activity_"+i.getTime(),s=i.toISOString(),c={},e.prev=6,e.next=9,Object(n["b"])(a);case 9:c=e.sent,e.next=17;break;case 12:return e.prev=12,e.t0=e["catch"](6),e.next=16,Object(n["a"])(a);case 16:c=e.sent;case 17:return d=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" "),u=c.addSubject({identifier:o}),u.addLiteral(r["e"].label,d),u.addLiteral(r["a"].created,s),u.addRef(r["b"].maker,t.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),u.addRef(r["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=28,c.save();case 28:console.log("todo toast when activity saved");case 29:case"end":return e.stop()}}),e,null,[[6,12]])})))()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},config:function(t){this.config={},this.config.webId=t}},webId:{webId:function(t){this.config(t)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solidcommunity.net/public/popock/inbox/"}}}},"25b1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group-create"},[a("b-modal",{attrs:{id:"new-group-modal",title:"New Group"},on:{ok:t.add}},[a("b-form-group",[a("label",{attrs:{for:"name"}},[t._v("Group Name")]),a("b-form-input",{attrs:{id:"name",placeholder:"ex: "+t.name},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("label",{attrs:{for:"purpose"}},[t._v("Group Purpose")]),a("b-form-input",{attrs:{id:"purpose",placeholder:"ex: Build Solid Cool apps..."},model:{value:t.purpose,callback:function(e){t.purpose=e},expression:"purpose"}}),void 0!=t.tension&&t.tension.length>0?a("div",[a("label",{attrs:{for:"parent"}},[t._v("Dedicated to ")]),a("b-form-input",{attrs:{id:"tension",placeholder:"attached to tension"},model:{value:this.tension,callback:function(e){t.$set(this,"tension",e)},expression:"this.tension"}})],1):t._e(),a("label",{attrs:{for:"parent"}},[t._v("Parent / Supercircle")]),a("b-form-input",{attrs:{id:"parent",placeholder:"ex: Supercircle"},model:{value:t.parent,callback:function(e){t.parent=e},expression:"parent"}}),a("label",{attrs:{for:"url"}},[t._v("Group location")]),a("b-form-input",{attrs:{id:"url",placeholder:"ex: "+t.url},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)],1),a("a",{attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.url))])],1)},n=[],r=(a("a15b"),a("b0c0"),a("ac1f"),a("5319"),a("498a"),a("96cf"),a("1da1")),o=a("4d8d"),s=a("6dc1"),c=a("b335"),d=a("1404"),u={name:"GroupCreate",mixins:[c["a"],d["a"]],data:function(){return{name:"CoolGroup",purpose:"",parent:"",pubPod:"https://agora.solidcommunity.net/public/popock/inbox/",tension:"",url:""}},created:function(){void 0!=this.$route.params.tension&&(this.tension=this.$route.params.tension),console.log("TEnsion",this.tension),void 0!=this.tension&&this.tension.length>0&&(this.$bvModal.show("new-group-modal"),this.purpose="This group aims to treat "+this.tension),this.update()},watch:{$route:function(t){this.tension=t.params.tension,console.log("tension",this.tension),void 0!=this.tension&&this.tension.length>0&&(this.$bvModal.show("new-group-modal"),this.purpose="This group aims to treat "+this.tension)},currentWorkspace:function(){this.update()}},methods:{update:function(){void 0!=this.currentWorkspace.path&&"gouvernance"==this.currentWorkspace.name&&(console.log(this.currentWorkspace),this.url=this.currentWorkspace.path+"groups/")},add:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i,n,r,c,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.name=t.name.trim(),a=t.name.replace(/\s/g,"_"),console.log(t.name,t.url),i=new Date,n=i.toISOString(),t.path=t.url+a+".ttl",console.log(t.path),e.next=9,Object(o["a"])(t.path);case 9:if(r=e.sent,c=r.addSubject({identifier:"this"}),c.addLiteral(s["i"].fn,t.name),c.addRef(s["c"].inbox,"./"+a+"/inbox/"),c.addLiteral(s["a"].created,n),c.addRef(s["b"].maker,t.webId),c.addRef(s["i"].hasMember,t.webId),c.addRef(s["i"].hasMember,"https://spoggy-test4.solidcommunity.net/profile/card#me"),c.addRef(s["i"].hasMember,"https://spoggy-test5.solidcommunity.net/profile/card#me"),c.addRef(s["i"].hasMember,"https://spoggy.solidcommunity.net/profile/card#me"),c.addRef(s["d"].type,t.currentWorkspace.path+"Group"),c.addRef(s["d"].type,s["i"].Group),c.addLiteral("http://www.w3.org/ns/org#purpose",t.purpose),c.addRef("http://www.w3.org/ns/org#subOrganizationOf",t.parent),!(void 0!=t.tension&&t.tension.length>0)){e.next=33;break}return c.addRef("https://www.w3.org/ns/activitystreams#object",t.tension+"#this"),c.addRef(s["b"].topic_interest,t.tension),e.next=28,Object(o["b"])(t.tension);case 28:return d=e.sent,u=d.getSubject(t.tension+"#this"),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.path+"#this"),e.next=33,d.save();case 33:return e.next=35,r.save();case 35:t.$emit("created"),t.activity={"@context":["https://www.w3.org/ns/activitystreams",{org:"http://www.w3.org/ns/org#",purpose:{"@id":"org:purpose","@type":"@id"},subOrganizationOf:{"@id":"org:subOrganizationOf","@type":"@id"}}],summary:"will Be auto-generated",type:"Create",actor:{type:"webId",name:t.webId},object:{type:"Group",name:t.name,purpose:t.purpose,url:t.path+"#this",subOrganizationOf:t.parent}},t.activity.summary=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" "),console.log(t.activity),t.sendActivity();case 40:case"end":return e.stop()}}),e)})))()},sendActivity:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i,n,r,c,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,t.date),a=new Date,i=t.formatDate(a),n=t.pubPod+i+".ttl",r="Activity_"+a.getTime(),c=a.toISOString(),d={},console.log(n),e.prev=9,e.next=12,Object(o["b"])(n);case 12:d=e.sent,e.next=20;break;case 15:return e.prev=15,e.t0=e["catch"](9),e.next=19,Object(o["a"])(n);case 19:d=e.sent;case 20:return console.log("webId",t.webId),u=d.addSubject({identifier:r}),u.addLiteral(s["e"].label,t.activity.object.name),u.addLiteral(s["a"].created,c),u.addRef(s["b"].maker,t.activity.actor.name),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.activity.actor.name),u.addRef(s["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),u.addRef(s["d"].type,t.currentWorkspace.path+t.activity.object.type),e.next=32,d.save();case 32:case"end":return e.stop()}}),e,null,[[9,15]])})))()}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},currentWorkspace:{get:function(){return this.$store.state.workspaces.currentWorkspace},set:function(){}}}},p=u,l=a("2877"),w=Object(l["a"])(p,i,n,!1,null,null,null);e["default"]=w.exports},b335:function(t,e,a){"use strict";a("b0c0"),a("96cf");var i=a("1da1"),n=a("4d8d"),r=a("6dc1");e["a"]={methods:{getGroup:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={members:[],subgroups:[]},e.next=3,Object(n["b"])(t);case 3:return i=e.sent,o=i.findSubject(),a.name=o.getLiteral(r["i"].fn),a.members=o.getAllRefs(r["i"].hasMember),a.purpose=o.getLiteral("http://www.w3.org/ns/org#purpose"),a.parent=o.getRef("http://www.w3.org/ns/org#subOrganizationOf"),a.subgroups=o.getAllRefs("http://www.w3.org/ns/org#hasSubOrganization"),s=i.findSubject("http://www.w3.org/ns/solid/terms#forClass","http://www.w3.org/ns/pim/meeting#LongChat"),null!=s&&(a.chat_instance=s.getRef("http://www.w3.org/ns/solid/terms#instance"),console.log("chat instance",a.chat_instance)),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))()},makeToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:a,solid:!0})}}}}}]);
//# sourceMappingURL=chunk-384f2314.e9d6df8d.js.map