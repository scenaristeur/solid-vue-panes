(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b9d5b7e"],{1276:function(e,t,n){"use strict";var r=n("d784"),o=n("44e7"),i=n("825a"),s=n("1d80"),c=n("4840"),a=n("8aa5"),l=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),h=[].push,p=Math.min,b=4294967295,g=!f((function(){return!RegExp(b,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(s(this)),i=void 0===n?b:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,i);var c,a,l,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,g=new RegExp(e.source,f+"g");while(c=d.call(g,r)){if(a=g.lastIndex,a>p&&(u.push(r.slice(p,c.index)),c.length>1&&c.index<r.length&&h.apply(u,c.slice(1)),l=c[0].length,p=a,u.length>=i))break;g.lastIndex===c.index&&g.lastIndex++}return p===r.length?!l&&g.test("")||u.push(""):u.push(r.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=s(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,o,n):r.call(String(o),t,n)},function(e,o){var s=n(r,e,this,o,r!==t);if(s.done)return s.value;var d=i(e),f=String(this),h=c(d,RegExp),x=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),m=new h(g?d:"^(?:"+d.source+")",v),w=void 0===o?b:o>>>0;if(0===w)return[];if(0===f.length)return null===u(m,f)?[f]:[];var _=0,y=0,E=[];while(y<f.length){m.lastIndex=g?y:0;var R,I=u(m,g?f:f.slice(y));if(null===I||(R=p(l(m.lastIndex+(g?0:y)),f.length))===_)y=a(f,y,x);else{if(E.push(f.slice(_,y)),E.length===w)return E;for(var k=1;k<=I.length-1;k++)if(E.push(I[k]),E.length===w)return E;y=_=R}}return E.push(f.slice(_)),E}]}),!g)},"14c3":function(e,t,n){var r=n("c6b6"),o=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),i=n("2d00"),s=o("species");e.exports=function(e){return i>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"44e7":function(e,t,n){var r=n("861d"),o=n("c6b6"),i=n("b622"),s=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==o(e))}},6547:function(e,t,n){var r=n("a691"),o=n("1d80"),i=function(e){return function(t,n){var i,s,c=String(o(t)),a=r(n),l=c.length;return a<0||a>=l?e?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===l||(s=c.charCodeAt(a+1))<56320||s>57343?e?c.charAt(a):i:e?c.slice(a,a+2):s-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},8418:function(e,t,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?o.f(e,s,i(0,n)):e[s]=n}},"85fc":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inbox container"},[e._v(" webId : "+e._s(e.webId)+" "),null!=e.webId?n("div",[e._m(0),n("div",[n("b-button-toolbar",{attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[n("b-button-group",{staticClass:"mx-1"},[n("b-button",{staticClass:"new",attrs:{title:"new",size:"sm",variant:"success"},on:{click:function(t){return t.stopPropagation(),e.init_new()}}},[n("b-icon-pencil-square",{attrs:{variant:"outline-success"},on:{click:function(t){return t.stopPropagation(),e.init_new()}}})],1)],1)],1)],1),n("b-list-group",e._l(e.inbox.files.slice().reverse(),(function(e){return n("b-list-group-item",{key:e.name,staticClass:"d-flex align-items-center"},[n("MessageLine",{attrs:{message:e}})],1)})),1),n("b-modal",{attrs:{id:"confirm-trash",title:"Are you sure you want to delete"},on:{ok:e.trash}},[e._v(" "+e._s(e.toTrash)+" ")]),n("b-modal",{attrs:{id:"send-modal",title:e.title},on:{ok:e.send,cancel:function(t){e.selected=[]}}},[n("div",{staticClass:"container flush"},[1==e.showFriends?n("FriendsSelection",{on:{selected:e.onSelected}}):e._e(),n("b-form-group",[n("label",{attrs:{for:"destinataire"}},[e._v("WebId :")]),n("b-form-input",{attrs:{id:"destinataire",placeholder:"ex: https://spoggy-test.solid.community/profile/card#me"},model:{value:e.recipient,callback:function(t){e.recipient=t},expression:"recipient"}})],1)],1),n("b-list-group",[n("b-input-group",{attrs:{prepend:"Label"}},[n("b-form-input",{model:{value:e.label,callback:function(t){e.label=t},expression:"label"}})],1),n("b-form-textarea",{attrs:{id:"textarea-rows",placeholder:"",rows:"8"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)],1),e._v(" webId : "+e._s(e.webId)+" inbox_urls : "+e._s(e.inbox_urls)+" ")],1):n("div",[n("SolidLogin")],1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("To test the inbox, you can add me to your friends :"),n("br"),e._v(" "),n("a",{attrs:{href:"https://spoggy.solid.community/profile/card#me",target:"_blank"}},[e._v("https://spoggy.solid.community/profile/card#me")]),n("br"),e._v(" You have too "),n("a",{attrs:{href:"https://forum.solidproject.org/t/popock-bring-your-pod-in-your-pocket/3378/4?u=smag0",target:"_blank"}},[e._v("grant authenticated Agents & this app")]),e._v(" if you want to receive messages. ")])}],i=(n("99af"),n("4160"),n("fb6a"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),n("96cf"),n("1da1")),s=n("4380"),c=n("eb27"),a=n("00e8"),l=n.n(a),u=n("93ef"),d=n("4d8d"),f=n("6dc1"),h=window.SolidFileClient;console.log("SFC",h);var p=new h(l.a),b={name:"Inbox",mixins:[s["a"],c["a"]],components:{MessageLine:function(){return n.e("chunk-dacaf2b4").then(n.bind(null,"5d33"))},FriendsSelection:function(){return n.e("chunk-2d0b219b").then(n.bind(null,"2359"))},SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},props:["value"],data:function(){return{inbox_urls:[],inbox:{files:[]},selected:[],title:"",content:"",label:"",recipient:null,showFriends:!0}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.webId=e.$store.state.solid.webId,t.next=3,e.getInbox(e.webId);case 3:return e.inbox_urls=t.sent,t.next=6,e.configureInbox(e.inbox_urls[0],e.webId,e.storage);case 6:case"end":return t.stop()}}),t)})))()},watch:{webId:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getInbox(e);case 2:t.inbox_urls=n.sent;case 3:case"end":return n.stop()}}),n)})))()},inbox_urls:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.current_inbox_url=e[0],console.log(t.current_inbox_url),t.getMessages(),t.subscribe();case 4:case"end":return n.stop()}}),n)})))()},reply:function(e){console.log("reply",e),this.showFriends=!1,this.$bvModal.show("send-modal"),this.recipient=e.sender,this.label="ref: "+e.label},storage:function(e){this.inbox_log_file=e+"popock/inbox_log.ttl",console.log("inbox_log_file",this.inbox_log_file)}},methods:{notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"This is an example!";this.$notification.show("Hello World",{body:e},{})},send:function(){if(console.log(this.title,this.content,this.selected,this.label,this.recipient),null!=this.recipient&&this.selected.push(this.recipient),console.log("selected",this.selected),this.content.length>0){var e={};e.date=new Date(Date.now()),e.id=e.date.getTime(),e.sender=this.webId,e.content=this.content,e.label=this.label;var t='\n        @prefix : <#>.\n        @prefix schem: <http://schema.org/>.\n        @prefix sch: <https://schema.org/>.\n        @prefix rd: <http://www.w3.org/2000/01/rdf-schema#>.\n\n        <>\n        a sch:Message;\n        schem:dateSent "'.concat(e.date.toISOString(),'";\n        schem:sender <').concat(e.sender,'>;\n        schem:text "').concat(e.content,'";\n        rd:label "').concat(e.label,'";\n        schem:abstract "this message can be opened with inbox of Popock https://scenaristeur.github.io/solid-vue-panes/".\n        ');console.log(t);var n=this.getInbox;console.log(this.selected),this.selected.forEach(function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(o){var i,s,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n(o);case 2:if(i=r.sent,!(void 0!=i&&i.length>0)){r.next=13;break}return e.url=i+e.id+".ttl",console.log(e.url),r.next=8,p.postFile(e.url,t,"text/turtle");case 8:return r.next=10,solid.data[o].storage;case 10:s=r.sent,c=s+"popock/inbox_log.ttl",console.log(c);case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}else alert("content must not be empty")},onSelected:function(e){this.selected=e,console.log(this.selected)},init_new:function(){console.log("new"),this.showFriends=!0,this.$bvModal.show("send-modal"),this.recipient=null,this.label="",this.content=""},subscribe:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n="wss://"+e.current_inbox_url.split("/")[2],r=new WebSocket(n,["solid.0.1.0"]),r.onopen=function(){this.send("sub "+this.inbox_log_file),console.log("subscribe to INBOX",n,this.inbox_log_file)},o=e.getMessages,r.onmessage=function(e){console.log(e),e.data&&"pub"===e.data.slice(0,3)&&(console.log(e.data),o())};case 5:case"end":return t.stop()}}),t)})))()},getMessages:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.readFolder(e.current_inbox_url);case 2:e.inbox=t.sent,e.notify(e.inbox.files.length+" messages !!!");case 4:case"end":return t.stop()}}),t)})))()},trash:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.toTrash),t.next=3,Object(u["b"])(e.toTrash);case 3:return console.log("File deleted !"),t.next=6,Object(d["b"])(e.current_inbox_url+"log.ttl");case 6:return n=t.sent,r=n.findSubject(f["f"].about,e.toTrash),n.removeSubject(r),t.next=11,n.save();case 11:case"end":return t.stop()}}),t)})))()}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},toTrash:function(){return this.$store.state.inbox.toTrash},reply:function(){return this.$store.state.inbox.reply},storage:function(){return this.$store.state.solid.storage}}},g=b,x=n("2877"),v=Object(x["a"])(g,r,o,!1,null,null,null);t["default"]=v.exports},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),o=n("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,c=i,a=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=a||u||l;d&&(c=function(e){var t,n,o,c,d=this,f=l&&d.sticky,h=r.call(d),p=d.source,b=0,g=e;return f&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,b++),n=new RegExp("^(?:"+p+")",h)),u&&(n=new RegExp("^"+p+"$(?!\\s)",h)),a&&(t=d.lastIndex),o=i.call(f?n:d,g),f?o?(o.input=o.input.slice(b),o[0]=o[0].slice(b),o.index=d.lastIndex,d.lastIndex+=o[0].length):d.lastIndex=0:a&&o&&(d.lastIndex=d.global?o.index+o[0].length:t),u&&o&&o.length>1&&s.call(o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),e.exports=c},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("d039"),i=n("e8b5"),s=n("861d"),c=n("7b0b"),a=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),f=n("b622"),h=n("2d00"),p=f("isConcatSpreadable"),b=9007199254740991,g="Maximum allowed index exceeded",x=h>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),v=d("concat"),m=function(e){if(!s(e))return!1;var t=e[p];return void 0!==t?!!t:i(e)},w=!x||!v;r({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,r,o,i,s=c(this),d=u(s,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?s:arguments[t],m(i)){if(o=a(i.length),f+o>b)throw TypeError(g);for(n=0;n<o;n++,f++)n in i&&l(d,f,i[n])}else{if(f>=b)throw TypeError(g);l(d,f++,i)}return d.length=f,d}})},"9f7f":function(e,t,n){"use strict";var r=n("d039");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("d039"),i=n("b622"),s=n("9263"),c=n("9112"),a=i("species"),l=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var p=i(e),b=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),g=b&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[a]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!b||!g||"replace"===e&&(!l||!u||f)||"split"===e&&!h){var x=/./[p],v=n(p,""[e],(function(e,t,n,r,o){return t.exec===s?b&&!o?{done:!0,value:x.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),m=v[0],w=v[1];r(String.prototype,e,m),r(RegExp.prototype,p,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}d&&c(RegExp.prototype[p],"sham",!0)}},eb27:function(e,t,n){"use strict";n("96cf");var r=n("1da1"),o=n("93ef"),i=n("00e8"),s=n.n(i),c=window.SolidFileClient;console.log("SFC",c);var a=new c(s.a);t["a"]={created:function(){},methods:{configureInbox:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var i,s,c,l,u,d,f,h,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("configureInbox",e,t,n.storage),i=n.storage+"popock/inbox_log.ttl",r.next=4,a.itemExists(e);case 4:return s=r.sent,r.prev=5,r.next=8,Object(o["f"])(e);case 8:return c=r.sent,l=Object(o["c"])(c,t),u=Object(o["d"])(c),null==l&&alert("Are you sure that you have allowed me to 'CONTROL' your POD, I can't read Acl of "+e+". I got a NULL value !! Please check your POD / Preferences / Trusted Application. "),r.next=14,a.itemExists(i);case 14:if(r.sent){r.next=18;break}return console.log("creation:",i),r.next=18,a.createFile(i);case 18:return console.log("inbox_url: ",e,"inbox_exists: ",s,"agentAcces: ",l,"publicAccess:",u),r.next=21,a.itemExists(i);case 21:if(d=r.sent,console.log("inbox_log_file_exists:",d),Object(o["i"])(c)){r.next=31;break}if(Object(o["g"])(c)){r.next=26;break}throw new Error("The current user does not have permission to change access rights to this Resource.");case 26:if(Object(o["h"])(c)){r.next=28;break}throw new Error("The current user does not have permission to see who currently has access to this Resource.");case 28:f=Object(o["a"])(c),r.next=32;break;case 31:f=Object(o["e"])(c);case 32:return h=Object(o["l"])(f,{read:!0,append:!0,write:!1,control:!1}),p=Object(o["k"])(f,{read:!1,append:!0,write:!1,control:!1}),r.next=36,Object(o["j"])(c,h);case 36:return r.next=38,Object(o["j"])(c,p);case 38:console.log("DOSSIER, EVERYONE POSTER, DEFAULT EVERYONE SUBMITTERS",p,h,o["j"]),r.next=44;break;case 41:r.prev=41,r.t0=r["catch"](5),alert(r.t0);case 44:case"end":return r.stop()}}),r,null,[[5,41]])})))()}}}},fb6a:function(e,t,n){"use strict";var r=n("23e7"),o=n("861d"),i=n("e8b5"),s=n("23cb"),c=n("50c4"),a=n("fc6a"),l=n("8418"),u=n("b622"),d=n("1dde"),f=n("ae40"),h=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),g=[].slice,x=Math.max;r({target:"Array",proto:!0,forced:!h||!p},{slice:function(e,t){var n,r,u,d=a(this),f=c(d.length),h=s(e,f),p=s(void 0===t?f:t,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(d,h,p);for(r=new(void 0===n?Array:n)(x(p-h,0)),u=0;h<p;h++,u++)h in d&&l(r,u,d[h]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-9b9d5b7e.01405e28.js.map