(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44654681"],{"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),s=n("2d00"),i=o("species");e.exports=function(e){return s>=51||!r((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,n){"use strict";var r=n("c04e"),o=n("9bf2"),s=n("5c6c");e.exports=function(e,t,n){var i=r(t);i in e?o.f(e,i,s(0,n)):e[i]=n}},"85fc":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inbox container"},[e._v(" webId : "+e._s(e.webId)+" "),null!=e.webId?n("div",[e._m(0),n("div",[n("b-button-toolbar",{attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[n("b-button-group",{staticClass:"mx-1"},[n("b-button",{staticClass:"new",attrs:{title:"new",size:"sm",variant:"success"},on:{click:function(t){return t.stopPropagation(),e.init_new()}}},[n("b-icon-pencil-square",{attrs:{variant:"outline-success"},on:{click:function(t){return t.stopPropagation(),e.init_new()}}})],1)],1)],1)],1),n("b-list-group",e._l(e.inbox.files.slice().reverse(),(function(e){return n("b-list-group-item",{key:e.name,staticClass:"d-flex align-items-center"},[n("MessageLine",{attrs:{message:e}})],1)})),1),n("b-modal",{attrs:{id:"confirm-trash",title:"Are you sure you want to delete"},on:{ok:e.trash}},[e._v(" "+e._s(e.toTrash)+" ")]),n("b-modal",{attrs:{id:"send-modal",title:e.title},on:{ok:e.send,cancel:function(t){e.selected=[]}}},[n("div",{staticClass:"container flush"},[1==e.showFriends?n("FriendsSelection",{on:{selected:e.onSelected}}):e._e(),n("b-form-group",[n("label",{attrs:{for:"destinataire"}},[e._v("WebId :")]),n("b-form-input",{attrs:{id:"destinataire",placeholder:"ex: https://spoggy-test.solid.community/profile/card#me"},model:{value:e.recipient,callback:function(t){e.recipient=t},expression:"recipient"}})],1)],1),n("b-list-group",[n("b-input-group",{attrs:{prepend:"Label"}},[n("b-form-input",{model:{value:e.label,callback:function(t){e.label=t},expression:"label"}})],1),n("b-form-textarea",{attrs:{id:"textarea-rows",placeholder:"",rows:"8"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)],1),e._v(" webId : "+e._s(e.webId)+" inbox_urls : "+e._s(e.inbox_urls)+" ")],1):n("div",[n("SolidLoginButton")],1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("To test the inbox, you can add me to your friends :"),n("br"),e._v(" "),n("a",{attrs:{href:"https://spoggy.solid.community/profile/card#me",target:"_blank"}},[e._v("https://spoggy.solid.community/profile/card#me")]),n("br"),e._v(" You have too "),n("a",{attrs:{href:"https://forum.solidproject.org/t/popock-bring-your-pod-in-your-pocket/3378/4?u=smag0",target:"_blank"}},[e._v("grant authenticated Agents & this app")]),e._v(" if you want to receive messages. ")])}],s=(n("99af"),n("4160"),n("fb6a"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),n("96cf"),n("1da1")),i=n("4380"),a=n("eb27"),c=n("00e8"),l=n.n(c),u=n("4d8d"),d=n("6dc1"),b=window.SolidFileClient;console.log("SFC",b);var f=new b(l.a),h={name:"Inbox",mixins:[i["a"],a["a"]],components:{MessageLine:function(){return n.e("chunk-dacaf2b4").then(n.bind(null,"5d33"))},FriendsSelection:function(){return n.e("chunk-2d0b219b").then(n.bind(null,"2359"))},SolidLoginButton:function(){return n.e("chunk-2d226c5a").then(n.bind(null,"e9a1"))}},props:["value"],data:function(){return{inbox_urls:[],inbox:{files:[]},selected:[],title:"",content:"",label:"",recipient:null,showFriends:!0}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.webId=e.$store.state.solid.webId,t.next=3,e.getInbox(e.webId);case 3:if(e.inbox_urls=t.sent,null==e.webId){t.next=7;break}return t.next=7,e.configureInbox(e.inbox_urls[0],e.webId,e.storage);case 7:case"end":return t.stop()}}),t)})))()},watch:{webId:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("############# WEBID changed",e),null==e){n.next=5;break}return n.next=4,t.getInbox(e);case 4:t.inbox_urls=n.sent;case 5:case"end":return n.stop()}}),n)})))()},inbox_urls:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.current_inbox_url=e[0],null!=t.current_inbox_url&&(console.log(t.current_inbox_url),t.getMessages());case 2:case"end":return n.stop()}}),n)})))()},reply:function(e){console.log("reply",e),this.showFriends=!1,this.$bvModal.show("send-modal"),this.selected=[],this.recipient=e.sender,this.label="ref: "+e.label},storage:function(e){this.inbox_log_file=e+"popock/inbox_log.ttl",console.log("STORAGE WATCH inbox_log_file",this.inbox_log_file),this.subscribe()}},methods:{notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"This is an example!";this.$notification.show("Hello World",{body:e},{})},send:function(){if(console.log(this.title,this.content,this.selected,this.label,this.recipient),null!=this.recipient&&this.selected.push(this.recipient),console.log("selected",this.selected),this.content.length>0){var e={};e.date=new Date(Date.now()),e.id=e.date.getTime(),e.sender=this.webId,e.content=this.content,e.label=this.label;var t='\n        @prefix : <#>.\n        @prefix schem: <http://schema.org/>.\n        @prefix sch: <https://schema.org/>.\n        @prefix rd: <http://www.w3.org/2000/01/rdf-schema#>.\n\n        <>\n        a sch:Message;\n        schem:dateSent "'.concat(e.date.toISOString(),'";\n        schem:sender <').concat(e.sender,'>;\n        schem:text "').concat(e.content,'";\n        rd:label "').concat(e.label,'";\n        schem:abstract "this message can be opened with inbox of Popock https://scenaristeur.github.io/solid-vue-panes/".\n        ');console.log(t);var n=this.getInbox;console.log(this.selected),this.selected.forEach(function(){var r=Object(s["a"])(regeneratorRuntime.mark((function r(o){var s,i,a,c,l,b,h;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n(o);case 2:if(s=r.sent,!(void 0!=s&&s.length>0)){r.next=37;break}return e.url=s+e.id+".ttl",console.log(e.url),r.next=8,f.postFile(e.url,t,"text/turtle");case 8:return console.log("find storage of ",o),r.next=11,Object(u["b"])(o);case 11:return i=r.sent,r.next=14,i.getSubject(o);case 14:return a=r.sent,r.next=17,a.getNodeRef(d["h"].storage);case 17:return c=r.sent,console.log("".concat(c)),l="".concat(c)+"popock/inbox_log.ttl",console.log(l),b={},r.prev=22,r.next=25,Object(u["b"])(l);case 25:b=r.sent,r.next=33;break;case 28:return r.prev=28,r.t0=r["catch"](22),r.next=32,Object(u["a"])(l);case 32:b=r.sent;case 33:return h=b.addSubject(),h.addNodeRef(d["f"].about,e.url),r.next=37,b.save();case 37:case"end":return r.stop()}}),r,null,[[22,28]])})));return function(e){return r.apply(this,arguments)}}())}else alert("content must not be empty")},onSelected:function(e){this.selected=e,console.log(this.selected)},init_new:function(){console.log("new"),this.showFriends=!0,this.$bvModal.show("send-modal"),this.selected=[],this.recipient=null,this.label="",this.content=""},subscribe:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n="wss://"+e.inbox_log_file.split("/")[2],r=new WebSocket(n,["solid.0.1.0"]),o=e.inbox_log_file,r.onopen=function(){this.send("sub "+o),console.log("subscribe to INBOX",n,o)},s=e.getMessages,r.onmessage=function(e){console.log(e),e.data&&"pub"===e.data.slice(0,3)&&(console.log(e.data),s())};case 6:case"end":return t.stop()}}),t)})))()},getMessages:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.readFolder(e.current_inbox_url);case 2:e.inbox=t.sent,e.notify(e.inbox.files.length+" messages !!!");case 4:case"end":return t.stop()}}),t)})))()},trash:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.toTrash),t.next=3,f.deleteFile(e.toTrash);case 3:return console.log("File deleted !"),t.next=6,Object(u["b"])(e.inbox_log_file);case 6:return n=t.sent,r=n.findSubject(d["f"].about,e.toTrash),n.removeSubject(r),t.next=11,n.save();case 11:case"end":return t.stop()}}),t)})))()}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},toTrash:function(){return this.$store.state.inbox.toTrash},reply:function(){return this.$store.state.inbox.reply},storage:function(){return this.$store.state.solid.storage}}},p=h,g=n("2877"),x=Object(g["a"])(p,r,o,!1,null,null,null);t["default"]=x.exports},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("d039"),s=n("e8b5"),i=n("861d"),a=n("7b0b"),c=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),b=n("b622"),f=n("2d00"),h=b("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",x=f>=51||!o((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),m=d("concat"),w=function(e){if(!i(e))return!1;var t=e[h];return void 0!==t?!!t:s(e)},v=!x||!m;r({target:"Array",proto:!0,forced:v},{concat:function(e){var t,n,r,o,s,i=a(this),d=u(i,0),b=0;for(t=-1,r=arguments.length;t<r;t++)if(s=-1===t?i:arguments[t],w(s)){if(o=c(s.length),b+o>p)throw TypeError(g);for(n=0;n<o;n++,b++)n in s&&l(d,b,s[n])}else{if(b>=p)throw TypeError(g);l(d,b++,s)}return d.length=b,d}})},fb6a:function(e,t,n){"use strict";var r=n("23e7"),o=n("861d"),s=n("e8b5"),i=n("23cb"),a=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),d=n("1dde"),b=n("ae40"),f=d("slice"),h=b("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),g=[].slice,x=Math.max;r({target:"Array",proto:!0,forced:!f||!h},{slice:function(e,t){var n,r,u,d=c(this),b=a(d.length),f=i(e,b),h=i(void 0===t?b:t,b);if(s(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?o(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(d,f,h);for(r=new(void 0===n?Array:n)(x(h-f,0)),u=0;f<h;f++,u++)f in d&&l(r,u,d[f]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-44654681.acc6154a.js.map