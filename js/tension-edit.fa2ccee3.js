(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tension-edit"],{"098d":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"hello":"hello world!","login":"Login","logout":"Logout","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"POds in the POCKet!","tension_annonce":"A Tension is a difference between WHAT IS is and WHAT SHOULD BE","NameQuestion":"Please give a name to your worst Tension ?","WhatIs":"What is ?","WhatShouldBe":"What should be ?","what_role":"In which role do you feel this tension ?","which_domains":"Which domains does this tension apply ?","Save":"Save","Tension":"Tension","Tensions":"Tensions","Groups":"Groups","Name":"Name","provider_select_proposition":"If you don\'t have a POD, please select a provider in the list below:","proposition_frends_graph":"To see your Solid friends in the graph, please refresh this page.","refresh":"Refresh","choose_source":"Choose a source :"},"fr":{"hello":"Salut tout le monde!","login":"S\'identifier","logout":"Se déconnecter","chat":"Chat","inbox":"Boîte Mails","talk":"Parle","databrowser":"Stockage","bookmarks":"Signets","profile":"Profil","fofri":"Suivi d\'amis","friends":"Amis","communication":"Communication","storage":"Stockage","User":"Utilisateur","explorer":"Explorateur","editor":"Editeur","POds in the POCKet":"Ton POd dans ta POChe!","tension_annonce":"Une TENSION est la différence entre CE QUI EST et CE QUI DEVRAIT ÊTRE","NameQuestion":"S\'il te plaît, donne un nom à ta pire Tension","WhatIs":"Ce qui est ?","WhatShouldBe":"Ce qui devrait être ?","what_role":"Dans quel Rôle ressens-tu cette tension ?","which_domains":"A quels domaines s\'applique cette Tension ?","Save":"Enregistrer","Tension":"Tension","Tensions":"Tensions","Groups":"Groupes","Name":"Nom","provider_select_proposition":"Si vous n\'avez pas de POD, vous pouvez selectionner un fournisseur dans la liste suivante :","proposition_frends_graph":"Pour voir vos amis Solid dans le graphe","refresh":"Rafraîchir","choose_source":"Choisissez une source"},"de":{"hello":"Hallo Welt!","login":"Anmeldung","logout":"Ausloggen","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"Dein POD in deiner Tasche!","Tension":"Tension","Tensions":"Tensions","Groups":"Groups","Name":"Name"},"es":{"hello":"Hola Mundo !","login":"Iniciar sesión","logout":"Cerrar sesión","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"¡Tu POD en tu bolsillo!","Tension":"Tension","Tensions":"Tensions","Groups":"Groups","Name":"Name"},"ja":{"hello":"こんにちは、世界！","login":"ログインする","logout":"ログアウト","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"あなたのポケットにあなたのPOD！","Tension":"Tension","Tensions":"Tensions","Groups":"Groups","Name":"Name"},"ru":{"hello":"Привет мир！","login":"авторизоваться","logout":"выйти!","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"Ваш POD в кармане!","Tension":"Tension","Tensions":"Tensions","Groups":"Groups","Name":"Name"}}'),delete e.options._Ctor}},1404:function(e,t,o){"use strict";o("a15b"),o("fb6a"),o("b0c0"),o("96cf");var r=o("1da1"),a=o("4d8d"),n=o("6dc1");t["a"]={created:function(){this.webId=this.$store.state.solid.webId,this.config(this.webId);var e=new Date;this.date=this.formatDate(e)},methods:{sendActivity:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,r,i,s,c,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.activity),o=new Date,r="Activity_"+o.getTime(),i=o.toISOString(),s=e.formatDate(o),console.log(e.activity.actor.name,e.activity.type,e.activity.summary,s),c=e.pubPod+s+".ttl",l={},t.prev=8,t.next=11,Object(a["b"])(c);case 11:l=t.sent,t.next=19;break;case 14:return t.prev=14,t.t0=t["catch"](8),t.next=18,Object(a["a"])(c);case 18:l=t.sent;case 19:return console.log("webId",e.webId),e.activity.summary.length<1&&(e.activity.summary=[e.activity.actor.name,e.activity.type,"a",e.activity.object.type,"with name",e.activity.object.name].join(" ")),u=l.addSubject({identifier:r}),u.addLiteral(n["e"].label,e.activity.object.name),u.addLiteral(n["a"].created,i),u.addRef(n["b"].maker,e.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",e.webId),u.addRef(n["d"].type,"https://www.w3.org/ns/activitystreams#"+e.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",e.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",e.activity.object.url),void 0!=e.activity.object.inReplyTo&&u.addRef("https://www.w3.org/ns/activitystreams#inReplyTo",e.activity.object.inReplyTo),void 0!=e.currentWorkspace?u.addRef(n["d"].type,e.currentWorkspace.path+e.activity.object.type):u.addRef(n["d"].type,e.activity.object.url+"#"+e.activity.object.type),t.next=33,l.save();case 33:case"end":return t.stop()}}),t,null,[[8,14]])})))()},send:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,r,i,s,c,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.activity),o=e.pubPod+e.date+".ttl",r=new Date,i="Activity_"+r.getTime(),s=r.toISOString(),c={},t.prev=6,t.next=9,Object(a["b"])(o);case 9:c=t.sent,t.next=17;break;case 12:return t.prev=12,t.t0=t["catch"](6),t.next=16,Object(a["a"])(o);case 16:c=t.sent;case 17:return l=[e.activity.actor.name,e.activity.type,"a",e.activity.object.type,"with name",e.activity.object.name].join(" "),u=c.addSubject({identifier:i}),u.addLiteral(n["e"].label,l),u.addLiteral(n["a"].created,s),u.addRef(n["b"].maker,e.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",e.webId),u.addRef(n["d"].type,"https://www.w3.org/ns/activitystreams#"+e.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",e.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",e.activity.object.url),t.next=28,c.save();case 28:console.log("todo toast when activity saved");case 29:case"end":return t.stop()}}),t,null,[[6,12]])})))()},formatDate:function(e){return[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-")},config:function(e){this.config={},this.config.webId=e}},webId:{webId:function(e){this.config(e)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solidcommunity.net/public/popock/inbox/"}}}},"18cc":function(e,t,o){"use strict";o("96cf");var r=o("1da1"),a=o("fd2a"),n=(o("4160"),o("ac1f"),o("5319"),o("1276"),o("498a"),o("159b"),o("1404")),i=o("4d8d"),s=o("6dc1"),c=o("00e8"),l=o.n(c),u=o("7fed"),d=o.n(u),p=new d.a(l.a),m={mixins:[a["a"],n["a"]],data:function(){return{}},methods:{createFile:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function o(){var r,a,n,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(e.label=e.label.trim(),e.ttl_name=e.label.replace(/\s/g,"_"),t.activity={actor:{name:t.$store.state.solid.webId},type:"Create",summary:"",object:{name:e.label,url:"",type:"Tension"}},o.prev=3,r={},void 0!=e.url){o.next=13;break}return e.url=e.path+e.ttl_name+".ttl",o.next=9,Object(i["a"])(e.url);case 9:r=o.sent,t.activity.type="Create",o.next=17;break;case 13:return o.next=15,Object(i["b"])(e.url);case 15:r=o.sent,t.activity.type="Update";case 17:return a=r.addSubject({identifier:"this"}),n=new Date,c=n.toISOString(),void 0!=e.created?(e.modified=c,a.addLiteral(s["a"].modified,c),a.removeAll(s["e"].label),a.removeAll(s["c"].inbox),a.removeAll("https://holacratie.solidcommunity.net/public/holacratie#whatis",e.wi),a.removeAll("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe",e.wsb),a.removeAll(s["d"].type),a.removeAll("http://www.w3.org/ns/org#memberOf"),a.removeAll("http://www.w3.org/ns/org#purpose")):(e.created=c,a.addLiteral(s["a"].created,c)),a.addLiteral(s["e"].label,e.label),a.addRef(s["c"].inbox,"./"+e.ttl_name+"/inbox/"),a.addLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatis",e.wi),a.addLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe",e.wsb),a.addRef(s["b"].maker,t.$store.state.solid.webId),e.types.forEach((function(e){a.addRef(s["d"].type,e)})),void 0!=e.roles&&(e.roles.split(",").forEach((function(e){a.addLiteral("http://www.w3.org/ns/org#memberOf",e.trim())})),console.log("TODO: must look at existing groups & existing frineds groups & activity published groups")),void 0!=e.domains&&(e.domains.split(",").forEach((function(e){a.addLiteral("http://www.w3.org/ns/org#purpose",e.trim())})),console.log("TODO: must look at https://www.wikidata.org/w/api.php?action=wbsearchentities&language=fr&format=json&search=Ecology")),o.next=31,r.save();case 31:t.makeToast("Created "+e.label,"ok","success"),o.next=38;break;case 34:o.prev=34,o.t0=o["catch"](3),t.makeToast("Error creating "+e.label,o.t0,"danger"),console.log(o.t0);case 38:return"public"==e.privacy&&(t.activity.object.url=e.url,t.sendActivity(),t.makeToast("TODO : must Activity publish",e.label,"success")),o.abrupt("return",e);case 40:case"end":return o.stop()}}),o,null,[[3,34]])})))()},getFolder:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.readFolder(e);case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})))()}}};t["a"]={mixins:[a["a"],m],data:function(){return{}},methods:{createTension:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tension.displayType="Tension",console.log("TODO use http://purl.org/vocab/lifecycle/schema#Task"),e.tension.types=["http://purl.org/vocab/lifecycle/schema#Task","http://www.w3.org/ns/ldp#Resource"],e.tension.path=e.path,console.log(e.tension,e.path),t.prev=5,t.next=8,e.createFile(e.tension);case 8:o=t.sent,console.log("Result",o),e.tension={privacy:"public"},e.makeToast("success !",e.tension.label+" created !","success"),e.$router.push({name:"Tensions",params:{url:o.url}}),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](5),e.makeToast("Error !",t.t0,"danger");case 18:case"end":return t.stop()}}),t,null,[[5,15]])})))()},getTensions:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("GET TENSIONS",e.path),t.next=3,e.getFolder(e.path);case 3:return o=t.sent,console.log(o),t.abrupt("return",o.files);case 6:case"end":return t.stop()}}),t)})))()},getTensionDetail:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["b"])(e.url);case 2:return o=t.sent,r=o.getSubject(e.url+"#this"),a=e,a.created=r.getLiteral(s["a"].created),a.label=r.getLiteral(s["e"].label),a.inbox=r.getRef(s["c"].inbox),a.wi=r.getLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatis"),a.wsb=r.getLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe"),a.maker=r.getRef(s["b"].maker),a.types=r.getAllRefs(s["d"].type),a.roles=r.getAllLiterals("http://www.w3.org/ns/org#memberOf"),a.domains=r.getAllLiterals("http://www.w3.org/ns/org#purpose"),a.actors=r.getAllRefs("https://www.w3.org/ns/activitystreams#actor"),t.abrupt("return",a);case 16:case"end":return t.stop()}}),t)})))()}}}},5701:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tension-view"},["gouvernance"==e.currentWorkspace.name?o("div",[o("h3",[o("i",[e._v(e._s(e.$t("tension_annonce")))])]),o("b-container",[o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"input-none"}},[e._v(e._s(e.$t("NameQuestion")))])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-input",{attrs:{placeholder:e.$t("Name")},model:{value:e.tension.label,callback:function(t){e.$set(e.tension,"label",t)},expression:"tension.label"}})],1)],1),o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"input-none"}},[e._v(e._s(e.$t("WhatIs")))])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-textarea",{attrs:{id:"wi",placeholder:e.$t("WhatIs"),rows:"3","max-rows":"6"},model:{value:e.tension.wi,callback:function(t){e.$set(e.tension,"wi",t)},expression:"tension.wi"}})],1)],1),o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"input-none"}},[e._v(e._s(e.$t("WhatShouldBe")))])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-textarea",{attrs:{id:"wsb",placeholder:e.$t("WhatShouldBe"),rows:"3","max-rows":"6"},model:{value:e.tension.wsb,callback:function(t){e.$set(e.tension,"wsb",t)},expression:"tension.wsb"}})],1)],1),o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"input-none"}},[e._v(e._s(e.$t("what_role")))])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-input",{attrs:{placeholder:"Role (citizen, user of some service...)"},model:{value:e.tension.roles,callback:function(t){e.$set(e.tension,"roles",t)},expression:"tension.roles"}})],1)],1),o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"input-none"}},[e._v("Which domains does this tension apply:")])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-input",{attrs:{placeholder:"society, economy, ecology, decentralization..."},model:{value:e.tension.domains,callback:function(t){e.$set(e.tension,"domains",t)},expression:"tension.domains"}})],1)],1),o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"radio-privacy"}},[e._v("Privacy: ("),o("small",[e._v("not implemented yet")]),e._v(")")])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-group",[o("b-form-radio-group",{attrs:{id:"radio-privacy",name:"radio-privacy"},model:{value:e.tension.privacy,callback:function(t){e.$set(e.tension,"privacy",t)},expression:"tension.privacy"}},[o("b-form-radio",{attrs:{value:"public"}},[e._v("Public")]),o("b-form-radio",{attrs:{value:"private"}},[e._v("Private")])],1)],1)],1)],1),o("b-row",{staticClass:"my-1"},[o("b-button",{attrs:{variant:"info"},on:{click:e.create}},[e._v(e._s(e.$t("Save")))])],1)],1)],1):o("div",[e._v(' To use this part of Popock, you need to choose a workspace with name "gouvernance".'),o("br"),o("b-button",{attrs:{size:"sm",to:"/workspaces",variant:"outline-warning"}},[void 0!=e.currentWorkspace.name?o("span",[e._v(e._s(e.currentWorkspace.name))]):o("span",[e._v("Workspaces ")])])],1)])},a=[],n=(o("a15b"),o("96cf"),o("1da1")),i=o("18cc"),s={name:"TensionEdit",mixins:[i["a"]],data:function(){return{path:"",tension:{privacy:"public"}}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("TTTTTTTTTTTTTTTT currentWorkspace",e.currentWorkspace),e.storage=e.$store.state.solid.storage,console.log("route",e.$route),void 0==e.$route.params.url){t.next=10;break}return o={url:e.$route.params.url},t.next=7,e.getTensionDetail(o);case 7:r=t.sent,console.log(r),e.fillForm(r);case 10:case"end":return t.stop()}}),t)})))()},methods:{create:function(){console.log("TTTTTTTTTTTTTTTT currentWorkspace",this.currentWorkspace),this.path=this.currentWorkspace.path+"tensions/",this.createTension()},fillForm:function(e){e.privacy="public",this.tension=e,this.tension.roles=this.tension.roles.join(", "),this.tension.domains=this.tension.domains.join(", ")}},watch:{$route:function(e){console.log("route to",e),void 0!=this.$route.params.tension&&this.fillForm(this.$route.params.tension)}},computed:{currentWorkspace:{get:function(){return this.$store.state.workspaces.currentWorkspace},set:function(){}}}},c=s,l=o("2877"),u=o("fd78"),d=Object(l["a"])(c,r,a,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(d);t["default"]=d.exports},fd2a:function(e,t,o){"use strict";t["a"]={methods:{makeToast:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:o,solid:!0})}}}},fd78:function(e,t,o){"use strict";var r=o("098d"),a=o.n(r);t["default"]=a.a}}]);
//# sourceMappingURL=tension-edit.fa2ccee3.js.map