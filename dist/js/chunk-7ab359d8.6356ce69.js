(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ab359d8"],{1404:function(t,e,a){"use strict";a("a15b"),a("fb6a"),a("b0c0"),a("ac1f"),a("1276"),a("2ca0"),a("96cf");var r=a("1da1"),i=a("4d8d"),n=a("6dc1"),o=a("ae85");e["a"]={mixins:[o["a"]],created:function(){this.webId=this.$store.state.solid.webId,this.config(this.webId);var t=new Date;this.date=this.formatDate(t)},methods:{sendOfferActivity:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,o,s,c,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=new Date,r="Activity_"+a.getTime(),o=a.toISOString(),s=t.formatDate(a),c=t.pubPod+s+".ttl",d={},e.prev=7,e.next=10,Object(i["b"])(c);case 10:d=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e["catch"](7),e.next=17,Object(i["a"])(c);case 17:d=e.sent;case 18:return u=d.addSubject({identifier:r}),u.addLiteral(n["e"].label,t.activity["gr:name"]),u.addLiteral(n["a"].created,o),u.addRef(n["d"].type,t.activity["gr:hasBusinessFunction"]),u.addRef(n["d"].type,"http://purl.org/goodrelations/v1#Offering"),u.addRef(n["b"].maker,t.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),u.addLiteral("http://purl.org/goodrelations/v1#name",t.activity["gr:name"]),u.addLiteral("http://purl.org/goodrelations/v1#businessEntity",t.activity["gr:businessEntity"]),u.addLiteral("http://purl.org/goodrelations/v1#description",t.activity["gr:description"]),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity["gr:name"]),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),u.addLiteral("http://purl.org/goodrelations/v1#hasCurrency",t.activity["gr:hasPriceSpecification"]["gr:hasCurrency"]),u.addLiteral("http://purl.org/goodrelations/v1#hasCurrencyValue",t.activity["gr:hasPriceSpecification"]["gr:hasCurrencyValue"]),e.next=34,d.save();case 34:case"end":return e.stop()}}),e,null,[[7,13]])})))()},sendActivity:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,o,s,c,d,u,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=new Date,r="Activity_"+a.getTime(),o=a.toISOString(),s=t.formatDate(a),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,s),c=t.pubPod+s+".ttl",d={},e.prev=8,e.next=11,Object(i["b"])(c);case 11:d=e.sent,e.next=19;break;case 14:return e.prev=14,e.t0=e["catch"](8),e.next=18,Object(i["a"])(c);case 18:d=e.sent;case 19:return t.activity.summary.length<1&&(t.activity.summary=[t.activity.actor.name.split("/").slice(2,3)[0],t.localname(t.activity.type),"a",t.activity.object.type,"with name",t.activity.object.name].join(" ")),u=t.activity.object.type.startsWith("http")?t.activity.object.type:"https://www.w3.org/ns/activitystreams#"+t.activity.object.type,p=d.addSubject({identifier:r}),p.addLiteral(n["e"].label,t.activity.object.name),p.addLiteral(n["a"].created,o),p.addRef(n["b"].maker,t.webId),p.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),p.addRef(n["d"].type,u),p.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),p.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),void 0!=t.activity.object.inReplyTo&&p.addRef("https://www.w3.org/ns/activitystreams#inReplyTo",t.activity.object.inReplyTo),"https://www.w3.org/ns/activitystreams#Article"!=u?void 0!=t.currentWorkspace?p.addRef(n["d"].type,t.currentWorkspace.path+t.activity.object.type):p.addRef(n["d"].type,t.activity.object.url+"#"+t.activity.object.type):p.addRef(n["d"].type,t.activity.type),e.next=33,d.save();case 33:case"end":return e.stop()}}),e,null,[[8,14]])})))()},send:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,o,s,c,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=t.pubPod+t.date+".ttl",r=new Date,o="Activity_"+r.getTime(),s=r.toISOString(),c={},e.prev=6,e.next=9,Object(i["b"])(a);case 9:c=e.sent,e.next=17;break;case 12:return e.prev=12,e.t0=e["catch"](6),e.next=16,Object(i["a"])(a);case 16:c=e.sent;case 17:return d=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" "),u=c.addSubject({identifier:o}),u.addLiteral(n["e"].label,d),u.addLiteral(n["a"].created,s),u.addRef(n["b"].maker,t.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),u.addRef(n["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=28,c.save();case 28:console.log("todo toast when activity saved");case 29:case"end":return e.stop()}}),e,null,[[6,12]])})))()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},config:function(t){this.config={},this.config.webId=t}},webId:{webId:function(t){this.config(t)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solidcommunity.net/public/popock/inbox/"}}}},"25b1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group-create"},[a("b-modal",{attrs:{id:"new-group-modal",title:"New Group"},on:{ok:t.add}},[a("b-form-group",[a("label",{attrs:{for:"name"}},[t._v("Group Name")]),a("b-form-input",{attrs:{id:"name",placeholder:"ex: "+t.name},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("label",{attrs:{for:"purpose"}},[t._v("Group Purpose")]),a("b-form-input",{attrs:{id:"purpose",placeholder:"ex: Build Solid Cool apps..."},model:{value:t.purpose,callback:function(e){t.purpose=e},expression:"purpose"}}),void 0!=t.tension&&t.tension.length>0?a("div",[a("label",{attrs:{for:"parent"}},[t._v("Dedicated to ")]),a("b-form-input",{attrs:{id:"tension",placeholder:"attached to tension"},model:{value:this.tension,callback:function(e){t.$set(this,"tension",e)},expression:"this.tension"}})],1):t._e(),a("label",{attrs:{for:"parent"}},[t._v("Parent / Supercircle")]),a("b-form-input",{attrs:{id:"parent",placeholder:"ex: Supercircle"},model:{value:t.parent,callback:function(e){t.parent=e},expression:"parent"}}),a("label",{attrs:{for:"url"}},[t._v("Group location")]),a("b-form-input",{attrs:{id:"url",placeholder:"ex: "+t.url},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)],1),a("a",{attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.url))])],1)},i=[],n=(a("a15b"),a("b0c0"),a("ac1f"),a("5319"),a("498a"),a("96cf"),a("1da1")),o=a("4d8d"),s=a("6dc1"),c=a("b335"),d=a("1404"),u={name:"GroupCreate",mixins:[c["a"],d["a"]],data:function(){return{name:"CoolGroup",purpose:"",parent:"",pubPod:"https://agora.solidcommunity.net/public/popock/inbox/",tension:"",url:""}},created:function(){void 0!=this.$route.params.tension&&(this.tension=this.$route.params.tension),console.log("TEnsion",this.tension),void 0!=this.tension&&this.tension.length>0&&(this.$bvModal.show("new-group-modal"),this.purpose="This group aims to treat "+this.tension),this.update()},watch:{$route:function(t){this.tension=t.params.tension,console.log("tension",this.tension),void 0!=this.tension&&this.tension.length>0&&(this.$bvModal.show("new-group-modal"),this.purpose="This group aims to treat "+this.tension)},currentWorkspace:function(){this.update()}},methods:{update:function(){void 0!=this.currentWorkspace.path&&"gouvernance"==this.currentWorkspace.name&&(console.log(this.currentWorkspace),this.url=this.currentWorkspace.path+"groups/")},add:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,i,n,c,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.name=t.name.trim(),a=t.name.replace(/\s/g,"_"),console.log(t.name,t.url),r=new Date,i=r.toISOString(),t.path=t.url+a+".ttl",console.log(t.path),e.next=9,Object(o["a"])(t.path);case 9:if(n=e.sent,c=n.addSubject({identifier:"this"}),c.addLiteral(s["i"].fn,t.name),c.addRef(s["c"].inbox,"./"+a+"/inbox/"),c.addLiteral(s["a"].created,i),c.addRef(s["b"].maker,t.webId),c.addRef(s["i"].hasMember,t.webId),c.addRef(s["i"].hasMember,"https://spoggy-test4.solidcommunity.net/profile/card#me"),c.addRef(s["i"].hasMember,"https://spoggy-test5.solidcommunity.net/profile/card#me"),c.addRef(s["i"].hasMember,"https://spoggy.solidcommunity.net/profile/card#me"),c.addRef(s["d"].type,t.currentWorkspace.path+"Group"),c.addRef(s["d"].type,s["i"].Group),c.addLiteral("http://www.w3.org/ns/org#purpose",t.purpose),c.addRef("http://www.w3.org/ns/org#subOrganizationOf",t.parent),!(void 0!=t.tension&&t.tension.length>0)){e.next=33;break}return c.addRef("https://www.w3.org/ns/activitystreams#object",t.tension+"#this"),c.addRef(s["b"].topic_interest,t.tension),e.next=28,Object(o["b"])(t.tension);case 28:return d=e.sent,u=d.getSubject(t.tension+"#this"),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.path+"#this"),e.next=33,d.save();case 33:return e.next=35,n.save();case 35:t.$emit("created"),t.activity={"@context":["https://www.w3.org/ns/activitystreams",{org:"http://www.w3.org/ns/org#",purpose:{"@id":"org:purpose","@type":"@id"},subOrganizationOf:{"@id":"org:subOrganizationOf","@type":"@id"}}],summary:"will Be auto-generated",type:"Create",actor:{type:"webId",name:t.webId},object:{type:"Group",name:t.name,purpose:t.purpose,url:t.path+"#this",subOrganizationOf:t.parent}},t.activity.summary=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" "),console.log(t.activity),t.sendActivity();case 40:case"end":return e.stop()}}),e)})))()},sendActivity:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,i,n,c,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,t.date),a=new Date,r=t.formatDate(a),i=t.pubPod+r+".ttl",n="Activity_"+a.getTime(),c=a.toISOString(),d={},console.log(i),e.prev=9,e.next=12,Object(o["b"])(i);case 12:d=e.sent,e.next=20;break;case 15:return e.prev=15,e.t0=e["catch"](9),e.next=19,Object(o["a"])(i);case 19:d=e.sent;case 20:return console.log("webId",t.webId),u=d.addSubject({identifier:n}),u.addLiteral(s["e"].label,t.activity.object.name),u.addLiteral(s["a"].created,c),u.addRef(s["b"].maker,t.activity.actor.name),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.activity.actor.name),u.addRef(s["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),u.addRef(s["d"].type,t.currentWorkspace.path+t.activity.object.type),e.next=32,d.save();case 32:case"end":return e.stop()}}),e,null,[[9,15]])})))()}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},currentWorkspace:{get:function(){return this.$store.state.workspaces.currentWorkspace},set:function(){}}}},p=u,l=a("2877"),m=Object(l["a"])(p,r,i,!1,null,null,null);e["default"]=m.exports},"2ca0":function(t,e,a){"use strict";var r=a("23e7"),i=a("06cf").f,n=a("50c4"),o=a("5a34"),s=a("1d80"),c=a("ab13"),d=a("c430"),u="".startsWith,p=Math.min,l=c("startsWith"),m=!d&&!l&&!!function(){var t=i(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!m&&!l},{startsWith:function(t){var e=String(s(this));o(t);var a=n(p(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return u?u.call(e,r,a):e.slice(a,a+r.length)===r}})},ae85:function(t,e,a){"use strict";a("baa5"),a("fb6a"),a("bf19");e["a"]={methods:{localname:function(t){var e=t;return void 0!=t&&(e=-1!=t.lastIndexOf("#")?t.substr(t.lastIndexOf("#")).substr(1):t.substr(t.lastIndexOf("/")).substr(1),e=0==e.length?t:e),e},today:function(){var t=new Date;return t.setMinutes(this.getMinutes()-this.getTimezoneOffset()),t.toJSON().slice(0,10)},streamActivity:function(t,e){var a={"@context":"https://www.w3.org/ns/activitystreams",summary:"User fill a form with shighl-vuejs",type:"Add",published:(new Date).toISOString(),actor:{type:"Person",id:t,name:"UserName",url:"same as webid ?",image:{type:"Link",href:"http://example.org/martin/image.jpg",mediaType:"image/jpeg"}},object:{id:"http://www.test.example/blog/abc123/xyz",type:"Document",url:"http://example.org/blog/2011/02/entry",name:"Why I love Activity Streams",content:e},target:{id:"http://example.org/blog/",type:"OrderedCollection",name:"Martin's Blog"}};return a}}}},b335:function(t,e,a){"use strict";a("b0c0"),a("96cf");var r=a("1da1"),i=a("4d8d"),n=a("6dc1");e["a"]={methods:{getGroup:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={members:[],subgroups:[]},e.next=3,Object(i["b"])(t);case 3:return r=e.sent,o=r.findSubject(),a.name=o.getLiteral(n["i"].fn),a.members=o.getAllRefs(n["i"].hasMember),a.purpose=o.getLiteral("http://www.w3.org/ns/org#purpose"),a.parent=o.getRef("http://www.w3.org/ns/org#subOrganizationOf"),a.subgroups=o.getAllRefs("http://www.w3.org/ns/org#hasSubOrganization"),s=r.findSubject("http://www.w3.org/ns/solid/terms#forClass","http://www.w3.org/ns/pim/meeting#LongChat"),null!=s&&(a.chat_instance=s.getRef("http://www.w3.org/ns/solid/terms#instance"),console.log("chat instance",a.chat_instance)),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))()},makeToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:a,solid:!0})}}}},baa5:function(t,e,a){var r=a("23e7"),i=a("e58c");r({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},bf19:function(t,e,a){"use strict";var r=a("23e7");r({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},e58c:function(t,e,a){"use strict";var r=a("fc6a"),i=a("a691"),n=a("50c4"),o=a("a640"),s=a("ae40"),c=Math.min,d=[].lastIndexOf,u=!!d&&1/[1].lastIndexOf(1,-0)<0,p=o("lastIndexOf"),l=s("indexOf",{ACCESSORS:!0,1:0}),m=u||!p||!l;t.exports=m?function(t){if(u)return d.apply(this,arguments)||0;var e=r(this),a=n(e.length),o=a-1;for(arguments.length>1&&(o=c(o,i(arguments[1]))),o<0&&(o=a+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}:d}}]);
//# sourceMappingURL=chunk-7ab359d8.6356ce69.js.map