(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tension-edit~tensions-list"],{1404:function(t,e,a){"use strict";a("a15b"),a("fb6a"),a("b0c0"),a("ac1f"),a("1276"),a("2ca0"),a("96cf");var r=a("1da1"),i=a("4d8d"),n=a("6dc1"),o=a("ae85");e["a"]={mixins:[o["a"]],created:function(){this.webId=this.$store.state.solid.webId,this.config(this.webId);var t=new Date;this.date=this.formatDate(t)},methods:{sendOfferActivity:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,o,s,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=new Date,r="Activity_"+a.getTime(),o=a.toISOString(),s=t.formatDate(a),c=t.pubPod+s+".ttl",l={},e.prev=7,e.next=10,Object(i["b"])(c);case 10:l=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e["catch"](7),e.next=17,Object(i["a"])(c);case 17:l=e.sent;case 18:return u=l.addSubject({identifier:r}),u.addLiteral(n["e"].label,t.activity["gr:name"]),u.addLiteral(n["a"].created,o),u.addRef(n["d"].type,t.activity["gr:hasBusinessFunction"]),u.addRef(n["d"].type,"http://purl.org/goodrelations/v1#Offering"),u.addRef(n["b"].maker,t.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),u.addLiteral("http://purl.org/goodrelations/v1#name",t.activity["gr:name"]),u.addLiteral("http://purl.org/goodrelations/v1#businessEntity",t.activity["gr:businessEntity"]),u.addLiteral("http://purl.org/goodrelations/v1#description",t.activity["gr:description"]),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity["gr:name"]),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=32,l.save();case 32:case"end":return e.stop()}}),e,null,[[7,13]])})))()},sendActivity:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,o,s,c,l,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=new Date,r="Activity_"+a.getTime(),o=a.toISOString(),s=t.formatDate(a),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,s),c=t.pubPod+s+".ttl",l={},e.prev=8,e.next=11,Object(i["b"])(c);case 11:l=e.sent,e.next=19;break;case 14:return e.prev=14,e.t0=e["catch"](8),e.next=18,Object(i["a"])(c);case 18:l=e.sent;case 19:return t.activity.summary.length<1&&(t.activity.summary=[t.activity.actor.name.split("/").slice(2,3)[0],t.localname(t.activity.type),"a",t.activity.object.type,"with name",t.activity.object.name].join(" ")),u=t.activity.object.type.startsWith("http")?t.activity.object.type:"https://www.w3.org/ns/activitystreams#"+t.activity.object.type,d=l.addSubject({identifier:r}),d.addLiteral(n["e"].label,t.activity.object.name),d.addLiteral(n["a"].created,o),d.addRef(n["b"].maker,t.webId),d.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),d.addRef(n["d"].type,u),d.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),d.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),void 0!=t.activity.object.inReplyTo&&d.addRef("https://www.w3.org/ns/activitystreams#inReplyTo",t.activity.object.inReplyTo),"https://www.w3.org/ns/activitystreams#Article"!=u?void 0!=t.currentWorkspace?d.addRef(n["d"].type,t.currentWorkspace.path+t.activity.object.type):d.addRef(n["d"].type,t.activity.object.url+"#"+t.activity.object.type):d.addRef(n["d"].type,t.activity.type),e.next=33,l.save();case 33:case"end":return e.stop()}}),e,null,[[8,14]])})))()},send:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,o,s,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=t.pubPod+t.date+".ttl",r=new Date,o="Activity_"+r.getTime(),s=r.toISOString(),c={},e.prev=6,e.next=9,Object(i["b"])(a);case 9:c=e.sent,e.next=17;break;case 12:return e.prev=12,e.t0=e["catch"](6),e.next=16,Object(i["a"])(a);case 16:c=e.sent;case 17:return l=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" "),u=c.addSubject({identifier:o}),u.addLiteral(n["e"].label,l),u.addLiteral(n["a"].created,s),u.addRef(n["b"].maker,t.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),u.addRef(n["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=28,c.save();case 28:console.log("todo toast when activity saved");case 29:case"end":return e.stop()}}),e,null,[[6,12]])})))()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},config:function(t){this.config={},this.config.webId=t}},webId:{webId:function(t){this.config(t)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solidcommunity.net/public/popock/inbox/"}}}},"18cc":function(t,e,a){"use strict";a("96cf");var r=a("1da1"),i=a("fd2a"),n=(a("4160"),a("ac1f"),a("5319"),a("1276"),a("498a"),a("159b"),a("1404")),o=a("4d8d"),s=a("6dc1"),c=a("00e8"),l=a.n(c),u=a("7fed"),d=a.n(u),p=new d.a(l.a),m={mixins:[i["a"],n["a"]],data:function(){return{}},methods:{createFile:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var r,i,n,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.label=t.label.trim(),t.ttl_name=t.label.replace(/\s/g,"_"),e.activity={actor:{name:e.$store.state.solid.webId},type:"Create",summary:"",object:{name:t.label,url:"",type:"Tension"}},a.prev=3,r={},void 0!=t.url){a.next=13;break}return t.url=t.path+t.ttl_name+".ttl",a.next=9,Object(o["a"])(t.url);case 9:r=a.sent,e.activity.type="Create",a.next=17;break;case 13:return a.next=15,Object(o["b"])(t.url);case 15:r=a.sent,e.activity.type="Update";case 17:return i=r.addSubject({identifier:"this"}),n=new Date,c=n.toISOString(),void 0!=t.created?(t.modified=c,i.addLiteral(s["a"].modified,c),i.removeAll(s["e"].label),i.removeAll(s["c"].inbox),i.removeAll("https://holacratie.solidcommunity.net/public/holacratie#whatis",t.wi),i.removeAll("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe",t.wsb),i.removeAll(s["d"].type),i.removeAll("http://www.w3.org/ns/org#memberOf"),i.removeAll("http://www.w3.org/ns/org#purpose")):(t.created=c,i.addLiteral(s["a"].created,c)),i.addLiteral(s["e"].label,t.label),i.addRef(s["c"].inbox,"./"+t.ttl_name+"/inbox/"),i.addLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatis",t.wi),i.addLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe",t.wsb),i.addRef(s["b"].maker,e.$store.state.solid.webId),t.types.forEach((function(t){i.addRef(s["d"].type,t)})),void 0!=t.roles&&(t.roles.split(",").forEach((function(t){i.addLiteral("http://www.w3.org/ns/org#memberOf",t.trim())})),console.log("TODO: must look at existing groups & existing frineds groups & activity published groups")),void 0!=t.domains&&(t.domains.split(",").forEach((function(t){i.addLiteral("http://www.w3.org/ns/org#purpose",t.trim())})),console.log("TODO: must look at https://www.wikidata.org/w/api.php?action=wbsearchentities&language=fr&format=json&search=Ecology")),a.next=31,r.save();case 31:e.makeToast("Created "+t.label,"ok","success"),a.next=38;break;case 34:a.prev=34,a.t0=a["catch"](3),e.makeToast("Error creating "+t.label,a.t0,"danger"),console.log(a.t0);case 38:return"public"==t.privacy&&(e.activity.object.url=t.url,e.sendActivity(),e.makeToast("TODO : must Activity publish",t.label,"success")),a.abrupt("return",t);case 40:case"end":return a.stop()}}),a,null,[[3,34]])})))()},getFolder:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.readFolder(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))()}}};e["a"]={mixins:[i["a"],m],data:function(){return{}},methods:{createTension:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tension.displayType="Tension",console.log("TODO use http://purl.org/vocab/lifecycle/schema#Task"),t.tension.types=["http://purl.org/vocab/lifecycle/schema#Task","http://www.w3.org/ns/ldp#Resource"],t.tension.path=t.path,console.log(t.tension,t.path),e.prev=5,e.next=8,t.createFile(t.tension);case 8:a=e.sent,console.log("Result",a),t.tension={privacy:"public"},t.makeToast("success !",t.tension.label+" created !","success"),t.$router.push({name:"Tensions",params:{url:a.url}}),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](5),t.makeToast("Error !",e.t0,"danger");case 18:case"end":return e.stop()}}),e,null,[[5,15]])})))()},getTensions:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("GET TENSIONS",t.path),e.next=3,t.getFolder(t.path);case 3:return a=e.sent,console.log(a),e.abrupt("return",a.files);case 6:case"end":return e.stop()}}),e)})))()},getTensionDetail:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["b"])(t.url);case 2:return a=e.sent,r=a.getSubject(t.url+"#this"),i=t,i.created=r.getLiteral(s["a"].created),i.label=r.getLiteral(s["e"].label),i.inbox=r.getRef(s["c"].inbox),i.wi=r.getLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatis"),i.wsb=r.getLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe"),i.maker=r.getRef(s["b"].maker),i.types=r.getAllRefs(s["d"].type),i.roles=r.getAllLiterals("http://www.w3.org/ns/org#memberOf"),i.domains=r.getAllLiterals("http://www.w3.org/ns/org#purpose"),i.actors=r.getAllRefs("https://www.w3.org/ns/activitystreams#actor"),e.abrupt("return",i);case 16:case"end":return e.stop()}}),e)})))()}}}},"2ca0":function(t,e,a){"use strict";var r=a("23e7"),i=a("06cf").f,n=a("50c4"),o=a("5a34"),s=a("1d80"),c=a("ab13"),l=a("c430"),u="".startsWith,d=Math.min,p=c("startsWith"),m=!l&&!p&&!!function(){var t=i(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!m&&!p},{startsWith:function(t){var e=String(s(this));o(t);var a=n(d(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return u?u.call(e,r,a):e.slice(a,a+r.length)===r}})},ae85:function(t,e,a){"use strict";a("baa5"),a("fb6a"),a("bf19");e["a"]={methods:{localname:function(t){var e=t;return void 0!=t&&(e=-1!=t.lastIndexOf("#")?t.substr(t.lastIndexOf("#")).substr(1):t.substr(t.lastIndexOf("/")).substr(1),e=0==e.length?t:e),e},today:function(){var t=new Date;return t.setMinutes(this.getMinutes()-this.getTimezoneOffset()),t.toJSON().slice(0,10)},streamActivity:function(t,e){var a={"@context":"https://www.w3.org/ns/activitystreams",summary:"User fill a form with shighl-vuejs",type:"Add",published:(new Date).toISOString(),actor:{type:"Person",id:t,name:"UserName",url:"same as webid ?",image:{type:"Link",href:"http://example.org/martin/image.jpg",mediaType:"image/jpeg"}},object:{id:"http://www.test.example/blog/abc123/xyz",type:"Document",url:"http://example.org/blog/2011/02/entry",name:"Why I love Activity Streams",content:e},target:{id:"http://example.org/blog/",type:"OrderedCollection",name:"Martin's Blog"}};return a}}}},baa5:function(t,e,a){var r=a("23e7"),i=a("e58c");r({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},bf19:function(t,e,a){"use strict";var r=a("23e7");r({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},e58c:function(t,e,a){"use strict";var r=a("fc6a"),i=a("a691"),n=a("50c4"),o=a("a640"),s=a("ae40"),c=Math.min,l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0,d=o("lastIndexOf"),p=s("indexOf",{ACCESSORS:!0,1:0}),m=u||!d||!p;t.exports=m?function(t){if(u)return l.apply(this,arguments)||0;var e=r(this),a=n(e.length),o=a-1;for(arguments.length>1&&(o=c(o,i(arguments[1]))),o<0&&(o=a+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}:l},fd2a:function(t,e,a){"use strict";e["a"]={methods:{makeToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:a,solid:!0})}}}}}]);
//# sourceMappingURL=tension-edit~tensions-list.0de5b989.js.map