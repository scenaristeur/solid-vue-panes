(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40110b33"],{4380:function(e,t,n){"use strict";n("4160"),n("b0c0"),n("159b"),n("96cf");var r=n("1da1"),o=n("4d8d"),s=n("6dc1");t["a"]={methods:{getProfile:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={friends:[]},n.webId=t,e.prev=2,e.next=5,Object(o["b"])(t);case 5:r=e.sent,a=r.getSubject(t),n.name=a.getString(s["i"].fn),n.organization=a.getString("http://www.w3.org/2006/vcard/ns#organization-name"),n.role=a.getString(s["i"].role),n.photo=a.getString(s["i"].hasPhoto),n.bday=a.getString(s["i"].bday),n.gender=a.getString(s["i"].hasGender),n.note=a.getString(s["i"].note),n.friends=a.getAllRefs(s["b"].knows),c=a.getRef(s["i"].hasAddress),null!=c&&(i=r.getSubject(c),n.locality=i.getString(s["i"].locality),n.country=i.getString("http://www.w3.org/2006/vcard/ns#country-name"),n.postal=i.getString("http://www.w3.org/2006/vcard/ns#postal-code"),n.region=i.getString(s["i"].region),n.address=i.getString("http://www.w3.org/2006/vcard/ns#street-address")),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](2),this.makeToast(e.t0.message,t,"warning");case 22:return console.log(n),e.abrupt("return",n);case 24:case"end":return e.stop()}}),e,this,[[2,19]])})));function t(t){return e.apply(this,arguments)}return t}(),getInboxUrls:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,Object(o["b"])(t);case 4:return r=e.sent,a=r.getSubject(t),e.next=8,a.getAllRefs(s["c"].inbox);case 8:n=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),getFriends:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,Object(o["b"])(t);case 4:return r=e.sent,a=r.getSubject(t),e.next=8,a.getAllRefs(s["b"].knows);case 8:n=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),addIndex:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,c,i,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t+"/index.ttl#this",c=new Date,i=c.toISOString(),u=this.$store.state.solid.indexes.puti,e.next=6,Object(o["b"])(u.url);case 6:return l=e.sent,e.next=9,l.addSubject();case 9:return d=e.sent,d.addLiteral(s["e"].label,r),d.addNodeRef("http://www.w3.org/ns/solid/terms#forClass",n),d.addNodeRef("http://www.w3.org/ns/solid/terms#instance",a),d.addLiteral(s["a"].created,i),e.next=16,l.save();case 16:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}(),getIndexes:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a,c,i,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={puti:{instances:[],classes:[]},prti:{instances:[],classes:[]}},e.prev=1,e.next=4,Object(o["b"])(t);case 4:return a=e.sent,c=a.getSubject(t),e.next=8,c.getNodeRef("http://www.w3.org/ns/solid/terms#publicTypeIndex");case 8:return i=e.sent,e.next=11,c.getNodeRef("http://www.w3.org/ns/solid/terms#privateTypeIndex");case 11:return u=e.sent,n.puti.url=i,n.prti.url=u,e.next=16,Object(o["b"])(i);case 16:return l=e.sent,e.next=19,l.findSubjects("http://www.w3.org/ns/solid/terms#forClass");case 19:d=e.sent,d.forEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var r,o,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getRef("http://www.w3.org/ns/solid/terms#forClass");case 2:return r=e.sent,e.next=5,t.getRef("http://www.w3.org/ns/solid/terms#instance");case 5:return o=e.sent,e.next=8,t.getString(s["a"].created);case 8:return a=e.sent,e.next=11,t.getString(s["e"].label);case 11:c=e.sent,n.puti.instances.push({instance:o,classe:r,label:c,created:a}),void 0==n.puti.classes[r]&&(n.puti.classes[r]=[]),n.puti.classes[r].push(o);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=25;break;case 23:e.prev=23,e.t0=e["catch"](1);case 25:return console.log(t,n),e.abrupt("return",n);case 27:case"end":return e.stop()}}),e,null,[[1,23]])})));function t(t){return e.apply(this,arguments)}return t}(),makeToast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:n,solid:!0})}}}},"47c5":function(e,t,n){},"85fc":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inbox container"},[null!=e.webId?n("div",[n("div",[n("b-button-toolbar",{attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[n("b-button-group",{staticClass:"mx-1"},[n("b-button",{staticClass:"new",attrs:{title:"new",size:"sm",variant:"success"},on:{click:function(t){return t.stopPropagation(),e.init_new()}}},[n("b-icon-pencil-square",{attrs:{variant:"outline-success"},on:{click:function(t){return t.stopPropagation(),e.init_new()}}})],1)],1)],1)],1),n("b-list-group",e._l(e.inbox.files.slice().reverse(),(function(e){return n("b-list-group-item",{key:e.name},[n("MessageLine",{attrs:{message:e}})],1)})),1),n("b-modal",{attrs:{id:"confirm-trash",title:"Are you sure you want to delete"},on:{ok:e.trash}},[e._v(" "+e._s(e.toTrash)+" ")]),n("b-modal",{attrs:{id:"send-modal",title:e.title},on:{ok:e.send,cancel:function(t){e.selected=[]}}},[n("div",{staticClass:"container flush"},[1==e.showFriends?n("FriendsSelection",{on:{selected:e.onSelected}}):e._e(),n("b-form-group",[n("label",{attrs:{for:"destinataire"}},[e._v("WebId :")]),n("b-form-input",{attrs:{id:"destinataire",placeholder:"ex: https://spoggy-test.solid.community/profile/card#me"},model:{value:e.recipient,callback:function(t){e.recipient=t},expression:"recipient"}})],1)],1),n("b-list-group",[n("b-input-group",{attrs:{prepend:"Label"}},[n("b-form-input",{model:{value:e.label,callback:function(t){e.label=t},expression:"label"}})],1),n("b-form-textarea",{attrs:{id:"textarea-rows",placeholder:"",rows:"8"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)],1),n("p",[e._v("To test the inbox, you can add me to your friends :"),n("br"),n("b-button",{attrs:{to:e.link,variant:"outline-info"}},[e._v("Add Popock dev to your friends")])],1)],1):n("div",[n("SolidLoginButton")],1)])},o=[],s=(n("99af"),n("4160"),n("fb6a"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),n("96cf"),n("1da1")),a=n("cb85"),c=n("4380"),i=n("eb27"),u=n("00e8"),l=n.n(u),d=n("4d8d"),b=n("6dc1"),p=window.SolidFileClient;console.log("SFC",p);var g=new p(l.a),h={name:"Inbox",mixins:[a["a"],c["a"],i["a"]],components:{MessageLine:function(){return n.e("chunk-2c876163").then(n.bind(null,"5d33"))},FriendsSelection:function(){return n.e("chunk-2d0b219b").then(n.bind(null,"2359"))},SolidLoginButton:function(){return n.e("chunk-457eee6c").then(n.bind(null,"e9a1"))}},props:["value"],data:function(){return{inbox_urls:[],inbox:{files:[]},selected:[],title:"",content:"",label:"",recipient:null,showFriends:!0}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.webId=e.$store.state.solid.webId,console.log("################# created inbox webid",e.webId),null==e.webId){t.next=16;break}return t.next=5,e.getInboxUrls(e.webId);case 5:return e.inbox_urls=t.sent,e.storage=e.$store.state.solid.storage,t.next=9,e.inbox_init("created webId non null");case 9:return t.next=11,e.configureInbox(e.inbox_urls[0],e.webId,e.storage);case 11:e.inbox_log_file=e.storage+"popock/inbox_log.ttl",console.log("created inbox_log_file",e.inbox_log_file),e.subscribe(),t.next=19;break;case 16:return t.next=18,e.inbox_init("created webId null");case 18:e.popupLogin();case 19:case"end":return t.stop()}}),t)})))()},watch:{webId:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.inbox_init("webid watch");case 2:if(console.log("############# WEBID changed",e),null==e){n.next=7;break}return n.next=6,t.getInboxUrls(e);case 6:t.inbox_urls=n.sent;case 7:case"end":return n.stop()}}),n)})))()},inbox_urls:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.current_inbox_url=e[0],null!=t.current_inbox_url&&(console.log(t.current_inbox_url),t.getMessages());case 2:case"end":return n.stop()}}),n)})))()},reply:function(e){console.log("reply",e),this.showFriends=!1,this.$bvModal.show("send-modal"),this.selected=[],this.recipient=e.sender,this.label="ref: "+e.label},storage:function(e){null!=e&&(this.inbox_log_file=e+"popock/inbox_log.ttl",console.log("STORAGE WATCH inbox_log_file",this.inbox_log_file),this.subscribe())}},methods:{inbox_init:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("###################################### INBOX INIT from ",e),console.log("INIT WITH",t.webId,t.inbox_urls[0],t.storage);case 2:case"end":return n.stop()}}),n)})))()},notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"This is an example!";this.$notification.show("Hello World",{body:e},{})},send:function(){if(console.log(this.title,this.content,this.selected,this.label,this.recipient),null!=this.recipient&&this.selected.push(this.recipient),console.log("selected",this.selected),this.content.length>0){var e={},t=new Date;e.date=t.toISOString(),e.id=t.getTime(),e.sender=this.webId,e.content=this.content,e.label=this.label;var n='\n        @prefix : <#>.\n        @prefix schem: <http://schema.org/>.\n        @prefix sch: <https://schema.org/>.\n        @prefix rd: <http://www.w3.org/2000/01/rdf-schema#>.\n\n        <>\n        a sch:Message;\n        schem:dateSent "'.concat(e.date,'";\n        schem:sender <').concat(e.sender,'>;\n        schem:text "').concat(e.content,'";\n        rd:label "').concat(e.label,'";\n        schem:abstract "this message can be opened with inbox of Popock https://scenaristeur.github.io/solid-vue-panes/".\n        ');console.log(n);var r=this.getInboxUrls;console.log(this.selected),this.selected.forEach(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(o){var s,a,c,i,u,l,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r(o);case 2:if(s=t.sent,!(void 0!=s&&s.length>0)){t.next=38;break}return console.log("INBOX",s),e.url=s[0]+e.id+".ttl",console.log(e.url),t.next=9,g.postFile(e.url,n,"text/turtle");case 9:return console.log("find storage of ",o),t.next=12,Object(d["b"])(o);case 12:return a=t.sent,t.next=15,a.getSubject(o);case 15:return c=t.sent,t.next=18,c.getNodeRef(b["h"].storage);case 18:return i=t.sent,console.log("".concat(i)),u="".concat(i)+"popock/inbox_log.ttl",console.log(u),l={},t.prev=23,t.next=26,Object(d["b"])(u);case 26:l=t.sent,t.next=34;break;case 29:return t.prev=29,t.t0=t["catch"](23),t.next=33,Object(d["a"])(u);case 33:l=t.sent;case 34:return p=l.addSubject(),p.addNodeRef(b["f"].about,e.url),t.next=38,l.save();case 38:case"end":return t.stop()}}),t,null,[[23,29]])})));return function(e){return t.apply(this,arguments)}}())}else alert("content must not be empty")},onSelected:function(e){this.selected=e,console.log(this.selected)},init_new:function(){console.log("new"),this.showFriends=!0,this.$bvModal.show("send-modal"),this.selected=[],this.recipient=null,this.label="",this.content=""},subscribe:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n="wss://"+e.inbox_log_file.split("/")[2],r=new WebSocket(n,["solid.0.1.0"]),o=e.inbox_log_file,r.onopen=function(){this.send("sub "+o),console.log("subscribe to INBOX",n,o)},s=e.getMessages,r.onmessage=function(e){console.log(e),e.data&&"pub"===e.data.slice(0,3)&&(console.log(e.data),s())};case 6:case"end":return t.stop()}}),t)})))()},getMessages:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.readFolder(e.current_inbox_url);case 2:e.inbox=t.sent,e.notify(e.inbox.files.length+" messages !!!"),e.$store.commit("inbox/setInbox",e.inbox);case 5:case"end":return t.stop()}}),t)})))()},trash:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.toTrash),t.next=3,g.deleteFile(e.toTrash);case 3:return console.log("File deleted !"),t.next=6,Object(d["b"])(e.inbox_log_file);case 6:return n=t.sent,r=n.findSubject(b["f"].about,e.toTrash),n.removeSubject(r),t.next=11,n.save();case 11:case"end":return t.stop()}}),t)})))()}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},toTrash:function(){return this.$store.state.inbox.toTrash},reply:function(){return this.$store.state.inbox.reply},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},link:function(){console.log("route",this.$route,location.href,location.host);var e="/friends?add=https://spoggy.solid.community/profile/card#me";return e}}},f=h,w=(n("90a3"),n("2877")),x=Object(w["a"])(f,r,o,!1,null,null,null);t["default"]=x.exports},"90a3":function(e,t,n){"use strict";var r=n("47c5"),o=n.n(r);o.a},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("d039"),s=n("e8b5"),a=n("861d"),c=n("7b0b"),i=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),b=n("b622"),p=n("2d00"),g=b("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",w=p>=51||!o((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),x=d("concat"),m=function(e){if(!a(e))return!1;var t=e[g];return void 0!==t?!!t:s(e)},v=!w||!x;r({target:"Array",proto:!0,forced:v},{concat:function(e){var t,n,r,o,s,a=c(this),d=l(a,0),b=0;for(t=-1,r=arguments.length;t<r;t++)if(s=-1===t?a:arguments[t],m(s)){if(o=i(s.length),b+o>h)throw TypeError(f);for(n=0;n<o;n++,b++)n in s&&u(d,b,s[n])}else{if(b>=h)throw TypeError(f);u(d,b++,s)}return d.length=b,d}})},cb85:function(e,t,n){"use strict";n("96cf");var r=n("1da1"),o=n("00e8"),s=n.n(o);t["a"]={methods:{popupLogin:function(){return Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.currentSession();case 2:if(t=e.sent,n="./dist-popup/popup.html",t){e.next=8;break}return e.next=7,s.a.popupLogin({popupUri:n});case 7:t=e.sent;case 8:case"end":return e.stop()}}),e)})))()},makeToast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:n,solid:!0})}}}},eb27:function(e,t,n){"use strict";n("96cf");var r=n("1da1"),o=n("93ef"),s=n("4d8d"),a=n("6dc1"),c=n("00e8"),i=n.n(c),u=window.SolidFileClient;console.log("SFC",u);var l=new u(i.a);t["a"]={created:function(){},methods:{configureInbox:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var c,i,u,d,b,p,g,h,f,w,x,m,v,k,j,O;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("configureInbox",e,t,n.storage),c=n.storage+"popock/inbox_log.ttl",r.next=4,l.itemExists(e);case 4:if(i=r.sent,i){r.next=8;break}return r.next=8,l.createFolder(e);case 8:return u={},r.prev=9,r.next=12,Object(s["b"])(c);case 12:u=r.sent,r.next=24;break;case 15:return r.prev=15,r.t0=r["catch"](9),r.next=19,Object(s["a"])(c);case 19:return u=r.sent,d=u.addSubject(),d.addNodeRef(a["f"].about,"init"),r.next=24,u.save();case 24:return r.prev=24,r.next=27,Object(o["g"])(e);case 27:return b=r.sent,p=Object(o["c"])(b,t),g=Object(o["d"])(b),null==p&&alert("Are you sure that you have allowed me to 'CONTROL' your POD, I can't read Acl of "+e+". I got a NULL value !! Please check your POD / Preferences / Trusted Application. "),console.log("inbox_url: ",e,"inbox_exists: ",i,"agentAcces: ",p,"publicAccess:",g),r.next=34,l.itemExists(c);case 34:if(h=r.sent,console.log("inbox_log_file_exists:",h),Object(o["o"])(b)){r.next=44;break}if(Object(o["m"])(b)){r.next=39;break}throw new Error("The current user does not have permission to change access rights to this Resource.");case 39:if(Object(o["n"])(b)){r.next=41;break}throw new Error("The current user does not have permission to see who currently has access to this Resource.");case 41:f=Object(o["a"])(b),r.next=45;break;case 44:f=Object(o["e"])(b);case 45:return w=Object(o["r"])(f,t,{read:!0,append:!0,write:!0,control:!0}),x=Object(o["q"])(f,t,{read:!0,append:!0,write:!0,control:!0}),m=Object(o["t"])(f,{read:!0,append:!0,write:!1,control:!1}),v=Object(o["s"])(f,{read:!1,append:!0,write:!1,control:!1}),r.prev=49,r.next=52,Object(o["p"])(b,w);case 52:console.log("owner Resource"),r.next=58;break;case 55:r.prev=55,r.t1=r["catch"](49),console.log("todo if 409 conflict : must test if ok before patch");case 58:return r.prev=58,r.next=61,Object(o["p"])(b,x);case 61:console.log("owner default"),r.next=67;break;case 64:r.prev=64,r.t2=r["catch"](58),console.log("todo if 409 conflict : must test if ok before patch");case 67:return r.prev=67,r.next=70,Object(o["p"])(b,m);case 70:console.log("posters Resource"),r.next=76;break;case 73:r.prev=73,r.t3=r["catch"](67),console.log("todo if 409 conflict : must test if ok before patch");case 76:return r.prev=76,r.next=79,Object(o["p"])(b,v);case 79:console.log("submitters Default"),r.next=85;break;case 82:r.prev=82,r.t4=r["catch"](76),console.log("todo if 409 conflict : must test if ok before patch");case 85:return r.next=87,Object(o["g"])(c);case 87:if(k=r.sent,Object(o["o"])(k)){r.next=96;break}if(Object(o["m"])(k)){r.next=91;break}throw new Error("The current user does not have permission to change access rights to this Resource.");case 91:if(Object(o["n"])(k)){r.next=93;break}throw new Error("The current user does not have permission to see who currently has access to this Resource.");case 93:j=Object(o["a"])(k),r.next=97;break;case 96:j=Object(o["e"])(k);case 97:return console.log("Log acl",j),O=Object(o["t"])(j,{read:!0,append:!0,write:!1,control:!1}),r.next=101,Object(o["p"])(k,O);case 101:console.log("logfile Default"),r.next=107;break;case 104:r.prev=104,r.t5=r["catch"](24),console.log("erreur",r.t5);case 107:case"end":return r.stop()}}),r,null,[[9,15],[24,104],[49,55],[58,64],[67,73],[76,82]])})))()}}}}}]);
//# sourceMappingURL=chunk-40110b33.c28daa1a.js.map