(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tension-edit"],{1404:function(e,t,o){"use strict";o("a15b"),o("fb6a"),o("b0c0"),o("96cf");var a=o("1da1"),i=o("4d8d"),r=o("6dc1");t["a"]={created:function(){this.webId=this.$store.state.solid.webId,console.log("ActivityMixin WEBID CREATED",this.webId),this.config(this.webId);var e=new Date;this.date=this.formatDate(e),console.log(this.as),console.log(this.date)},methods:{sendActivity:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var o,a,n,s,c,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.activity),o=new Date,a="Activity_"+o.getTime(),n=o.toISOString(),s=e.formatDate(o),console.log(e.activity.actor.name,e.activity.type,e.activity.summary,s),c=e.pubPod+s+".ttl",l={},t.prev=8,t.next=11,Object(i["b"])(c);case 11:l=t.sent,t.next=19;break;case 14:return t.prev=14,t.t0=t["catch"](8),t.next=18,Object(i["a"])(c);case 18:l=t.sent;case 19:return console.log("webId",e.webId),e.activity.summary.length<1&&(e.activity.summary=[e.activity.actor.name,e.activity.type,"a",e.activity.object.type,"with name",e.activity.object.name].join(" ")),u=l.addSubject({identifier:a}),u.addLiteral(r["e"].label,e.activity.object.name),u.addLiteral(r["a"].created,n),u.addRef(r["b"].maker,e.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",e.webId),u.addRef(r["d"].type,"https://www.w3.org/ns/activitystreams#"+e.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",e.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",e.activity.object.url),t.next=31,l.save();case 31:case"end":return t.stop()}}),t,null,[[8,14]])})))()},send:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var o,a,n,s,c,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.activity),console.log(e.activity.actor.name,e.activity.type,e.activity.summary,e.date),o=e.pubPod+e.date+".ttl",a=new Date,n="Activity_"+a.getTime(),s=a.toISOString(),c={},t.prev=7,t.next=10,Object(i["b"])(o);case 10:c=t.sent,t.next=18;break;case 13:return t.prev=13,t.t0=t["catch"](7),t.next=17,Object(i["a"])(o);case 17:c=t.sent;case 18:return console.log("webId",e.webId),l=[e.activity.actor.name,e.activity.type,"a",e.activity.object.type,"with name",e.activity.object.name].join(" "),console.log("Musr create outbox object first, then activity !",c,n,s),u=c.addSubject({identifier:n}),u.addLiteral(r["e"].label,l),u.addLiteral(r["a"].created,s),u.addRef(r["b"].maker,e.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",e.webId),u.addRef(r["d"].type,"https://www.w3.org/ns/activitystreams#"+e.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",e.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",e.activity.object.url),t.next=31,c.save();case 31:case"end":return t.stop()}}),t,null,[[7,13]])})))()},formatDate:function(e){return[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-")},postActivity:function(){},config:function(e){this.config={},this.config.webId=e,console.log("ActivityMixin config",this.config)}},webId:{webId:function(e){this.config(e)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solid.community/public/popock/inbox/"}}}},"18cc":function(e,t,o){"use strict";o("96cf");var a=o("1da1"),i=o("fd2a"),r=(o("4160"),o("ac1f"),o("5319"),o("1276"),o("498a"),o("159b"),o("1404")),n=o("4d8d"),s=o("6dc1"),c=o("00e8"),l=o.n(c),u={mixins:[i["a"],r["a"]],data:function(){return{}},created:function(){this.fc=new SolidFileClient(l.a),console.log(this.fc)},methods:{createFile:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function o(){var a,i,r,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(e.label=e.label.trim(),e.ttl_name=e.label.replace(/\s/g,"_"),t.activity={actor:{name:t.$store.state.solid.webId},type:"Create",summary:"",object:{name:e.label,url:"",type:"Tension"}},o.prev=3,a={},void 0!=e.url){o.next=13;break}return e.url=e.path+e.ttl_name+".ttl",o.next=9,Object(n["a"])(e.url);case 9:a=o.sent,t.activity.type="Create",o.next=17;break;case 13:return o.next=15,Object(n["b"])(e.url);case 15:a=o.sent,t.activity.type="Update";case 17:return i=a.addSubject({identifier:"this"}),r=new Date,c=r.toISOString(),void 0!=e.created?(e.modified=c,i.addLiteral(s["a"].modified,c),i.removeAll(s["e"].label),i.removeAll(s["c"].inbox),i.removeAll("https://holacratie.solid.community/public/holacratie#whatis",e.wi),i.removeAll("https://holacratie.solid.community/public/holacratie#whatshouldbe",e.wsb),i.removeAll(s["d"].type),i.removeAll("http://www.w3.org/ns/org#memberOf"),i.removeAll("http://www.w3.org/ns/org#purpose")):(e.created=c,i.addLiteral(s["a"].created,c)),console.log(e),i.addLiteral(s["e"].label,e.label),i.addRef(s["c"].inbox,"./"+e.ttl_name+"/inbox/"),i.addLiteral("https://holacratie.solid.community/public/holacratie#whatis",e.wi),i.addLiteral("https://holacratie.solid.community/public/holacratie#whatshouldbe",e.wsb),i.addRef(s["b"].maker,t.$store.state.solid.webId),e.types.forEach((function(e){i.addRef(s["d"].type,e)})),void 0!=e.roles&&(e.roles.split(",").forEach((function(e){i.addLiteral("http://www.w3.org/ns/org#memberOf",e.trim())})),console.log("TODO: must look at existing groups & existing frineds groups & activity published groups")),void 0!=e.domains&&(e.domains.split(",").forEach((function(e){i.addLiteral("http://www.w3.org/ns/org#purpose",e.trim())})),console.log("TODO: must look at https://www.wikidata.org/w/api.php?action=wbsearchentities&language=fr&format=json&search=Ecology")),o.next=32,a.save();case 32:t.makeToast("Created "+e.label,"ok","success"),o.next=39;break;case 35:o.prev=35,o.t0=o["catch"](3),t.makeToast("Error creating "+e.label,o.t0,"danger"),console.log(o.t0);case 39:return"public"==e.privacy&&(console.log("ACTIVITY !!"),t.activity.object.url=e.url,t.sendActivity(),t.makeToast("TODO : must Activity publish",e.label,"success")),o.abrupt("return",e);case 41:case"end":return o.stop()}}),o,null,[[3,35]])})))()},getFolder:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function o(){var a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return console.log("get folder",e),o.next=3,t.fc.readFolder(e);case 3:return a=o.sent,o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}}};t["a"]={mixins:[i["a"],u],data:function(){return{tension:{privacy:"public"}}},methods:{createTension:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tension.displayType="Tension",e.tension.types=["http://purl.org/vocab/lifecycle/schema#Task","http://www.w3.org/ns/ldp#Resource"],e.tension.path=e.path,console.log(e.tension,e.path),t.prev=4,t.next=7,e.createFile(e.tension);case 7:o=t.sent,console.log("Result",o),e.tension={privacy:"public"},e.makeToast("success !",e.tension.label+" created !","success"),e.$router.push({name:"Parle",params:{url:o.url}}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](4),e.makeToast("Error !",t.t0,"danger");case 17:case"end":return t.stop()}}),t,null,[[4,14]])})))()},getTensions:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("GET TENSIONS",e.path),t.next=3,e.getFolder(e.path);case 3:return o=t.sent,console.log(o),t.abrupt("return",o.files);case 6:case"end":return t.stop()}}),t)})))()},getTensionDetail:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var o,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["b"])(e.url);case 2:return o=t.sent,a=o.getSubject(e.url+"#this"),i=e,i.created=a.getLiteral(s["a"].created),i.label=a.getLiteral(s["e"].label),i.inbox=a.getRef(s["c"].inbox),i.wi=a.getLiteral("https://holacratie.solid.community/public/holacratie#whatis"),i.wsb=a.getLiteral("https://holacratie.solid.community/public/holacratie#whatshouldbe"),i.maker=a.getRef(s["b"].maker),i.types=a.getAllRefs(s["d"].type),i.roles=a.getAllLiterals("http://www.w3.org/ns/org#memberOf"),i.domains=a.getAllLiterals("http://www.w3.org/ns/org#purpose"),t.abrupt("return",i);case 15:case"end":return t.stop()}}),t)})))()}}}},5701:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tension-view"},[o("h3",[o("i",[e._v(e._s(e.$t("tension_annonce")))])]),o("b-container",[o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"input-none"}},[e._v(e._s(e.$t("NameQuestion")))])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-input",{attrs:{placeholder:e.$t("Name")},model:{value:e.tension.label,callback:function(t){e.$set(e.tension,"label",t)},expression:"tension.label"}})],1)],1),o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"input-none"}},[e._v(e._s(e.$t("WhatIs")))])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-textarea",{attrs:{id:"wi",placeholder:e.$t("WhatIs"),rows:"3","max-rows":"6"},model:{value:e.tension.wi,callback:function(t){e.$set(e.tension,"wi",t)},expression:"tension.wi"}})],1)],1),o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"input-none"}},[e._v(e._s(e.$t("WhatShouldBe")))])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-textarea",{attrs:{id:"wsb",placeholder:e.$t("WhatShouldBe"),rows:"3","max-rows":"6"},model:{value:e.tension.wsb,callback:function(t){e.$set(e.tension,"wsb",t)},expression:"tension.wsb"}})],1)],1),o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"input-none"}},[e._v(e._s(e.$t("what_role")))])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-input",{attrs:{placeholder:"Role (citizen, user of some service...)"},model:{value:e.tension.roles,callback:function(t){e.$set(e.tension,"roles",t)},expression:"tension.roles"}})],1)],1),o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"input-none"}},[e._v("Which domains does this tension apply:")])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-input",{attrs:{placeholder:"society, economy, ecology, decentralization..."},model:{value:e.tension.domains,callback:function(t){e.$set(e.tension,"domains",t)},expression:"tension.domains"}})],1)],1),o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"radio-privacy"}},[e._v("Privacy:")])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-group",[o("b-form-radio-group",{attrs:{id:"radio-privacy",name:"radio-privacy"},model:{value:e.tension.privacy,callback:function(t){e.$set(e.tension,"privacy",t)},expression:"tension.privacy"}},[o("b-form-radio",{attrs:{value:"public"}},[e._v("Public")]),o("b-form-radio",{attrs:{value:"private"}},[e._v("Private")])],1)],1)],1)],1),o("b-row",{staticClass:"my-1"},[o("b-button",{attrs:{variant:"info"},on:{click:e.create}},[e._v(e._s(e.$t("Save")))])],1)],1),e._v(" path : "+e._s(this.path)+" [ change path button] ")],1)},i=[],r=(o("a15b"),o("96cf"),o("1da1")),n=o("18cc"),s={name:"TensionEdit",mixins:[n["a"]],data:function(){return{path:""}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.storage=e.$store.state.solid.storage,console.log("route",e.$route),void 0==e.$route.params.url){t.next=9;break}return o={url:e.$route.params.url},t.next=6,e.getTensionDetail(o);case 6:a=t.sent,console.log(a),e.fillForm(a);case 9:case"end":return t.stop()}}),t)})))()},methods:{create:function(){this.path=this.storage+this.tension.privacy+"/gouvernance/tensions/",this.createTension()},fillForm:function(e){e.privacy="public",this.tension=e,this.tension.roles=this.tension.roles.join(", "),this.tension.domains=this.tension.domains.join(", ")}},watch:{$route:function(e){console.log("route to",e),void 0!=this.$route.params.tension&&this.fillForm(this.$route.params.tension)}},computed:{config:{get:function(){return this.$store.state.gouvernance.config},set:function(){}}}},c=s,l=o("2877"),u=o("c58f"),d=Object(l["a"])(c,a,i,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(d);t["default"]=d.exports},bddb:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"hello":"hello world!","login":"Login","logout":"Logout","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"POds in the POCKet!","tension_annonce":"A Tension is a difference between WHAT IS is and WHAT SHOULD BE","NameQuestion":"Please give a name to your worst Tension ?","WhatIs":"What is ?","WhatShouldBe":"What should be ?","what_role":"In which role do you feel this tension ?","which_domains":"Which domains does this tension apply ?","Save":"Save"},"fr":{"hello":"Salut tout le monde!","login":"S\'identifier","logout":"Se déconnecter","chat":"Chat","inbox":"Boîte Mails","talk":"Parle","databrowser":"Stockage","bookmarks":"Signets","profile":"Profil","fofri":"Suivi d\'amis","friends":"Amis","communication":"Communication","storage":"Stockage","User":"Utilisateur","explorer":"Explorateur","editor":"Editeur","POds in the POCKet":"Ton POd dans ta POChe!","tension_annonce":"Une TENSION est la différence entre CE QUI EST et CE QUI DEVRAIT ÊTRE","NameQuestion":"S\'il te plaît, donne un nom à ta pire Tension","WhatIs":"Ce qui est ?","WhatShouldBe":"Ce qui devrait être ?","what_role":"Dans quel Rôle ressens-tu cette tension ?","which_domains":"A quels domaines s\'applique cette Tension ?","Save":"Enregistrer"},"de":{"hello":"Hallo Welt!","login":"Anmeldung","logout":"Ausloggen","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"Dein POD in deiner Tasche!"},"es":{"hello":"Hola Mundo !","login":"Iniciar sesión","logout":"Cerrar sesión","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"¡Tu POD en tu bolsillo!"},"ja":{"hello":"こんにちは、世界！","login":"ログインする","logout":"ログアウト","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"あなたのポケットにあなたのPOD！"},"ru":{"hello":"Привет мир！","login":"авторизоваться","logout":"выйти!","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"Ваш POD в кармане!"}}'),delete e.options._Ctor}},c58f:function(e,t,o){"use strict";var a=o("bddb"),i=o.n(a);t["default"]=i.a},fd2a:function(e,t,o){"use strict";t["a"]={methods:{makeToast:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:o,solid:!0})}}}}}]);
//# sourceMappingURL=tension-edit.e59f5923.js.map