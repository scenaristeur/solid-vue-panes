(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76df7e4a"],{1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),c=n("825a"),s=n("1d80"),o=n("4840"),i=n("8aa5"),u=n("50c4"),l=n("14c3"),p=n("9263"),d=n("d039"),f=[].push,h=Math.min,g=4294967295,x=!d((function(){return!RegExp(g,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(s(this)),c=void 0===n?g:n>>>0;if(0===c)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,c);var o,i,u,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,x=new RegExp(e.source,d+"g");while(o=p.call(x,r)){if(i=x.lastIndex,i>h&&(l.push(r.slice(h,o.index)),o.length>1&&o.index<r.length&&f.apply(l,o.slice(1)),u=o[0].length,h=i,l.length>=c))break;x.lastIndex===o.index&&x.lastIndex++}return h===r.length?!u&&x.test("")||l.push(""):l.push(r.slice(h)),l.length>c?l.slice(0,c):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=s(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,a,n):r.call(String(a),t,n)},function(e,a){var s=n(r,e,this,a,r!==t);if(s.done)return s.value;var p=c(e),d=String(this),f=o(p,RegExp),b=p.unicode,v=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(x?"y":"g"),w=new f(x?p:"^(?:"+p.source+")",v),m=void 0===a?g:a>>>0;if(0===m)return[];if(0===d.length)return null===l(w,d)?[d]:[];var R=0,j=0,O=[];while(j<d.length){w.lastIndex=x?j:0;var k,E=l(w,x?d:d.slice(j));if(null===E||(k=h(u(w.lastIndex+(x?0:j)),d.length))===R)j=i(d,j,b);else{if(O.push(d.slice(R,j)),O.length===m)return O;for(var y=1;y<=E.length-1;y++)if(O.push(E[y]),O.length===m)return O;j=R=k}}return O.push(d.slice(R)),O}]}),!x)},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},4380:function(e,t,n){"use strict";n("4160"),n("b0c0"),n("159b"),n("96cf");var r=n("1da1"),a=n("4d8d"),c=n("6dc1"),s=window.solid;t["a"]={methods:{getProfile:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,i,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={friends:[]},n.webId=t,e.prev=2,e.next=5,Object(a["b"])(t);case 5:return r=e.sent,o=r.getSubject(t),e.next=9,o.getString(c["h"].fn);case 9:return n.name=e.sent,e.next=12,o.getString("http://www.w3.org/2006/vcard/ns#organization-name");case 12:return n.organization=e.sent,e.next=15,o.getString(c["h"].role);case 15:return n.role=e.sent,e.next=18,o.getRef(c["h"].hasAddress);case 18:if(i=e.sent,null==i){e.next=24;break}return u=r.getSubject(i),e.next=23,u.getString(c["h"].locality);case 23:n.locality=e.sent;case 24:return e.next=26,s.data[t].vcard$hasPhoto;case 26:l=e.sent,n.photo="".concat(l),e.next=33;break;case 30:e.prev=30,e.t0=e["catch"](2),this.makeToast(e.t0.message,t,"warning");case 33:return e.abrupt("return",n);case 34:case"end":return e.stop()}}),e,this,[[2,30]])})));function t(t){return e.apply(this,arguments)}return t}(),getInbox:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,Object(a["b"])(t);case 4:return r=e.sent,s=r.getSubject(t),e.next=8,s.getAllRefs(c["c"].inbox);case 8:n=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),getFriends:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,Object(a["b"])(t);case 4:return r=e.sent,s=r.getSubject(t),e.next=8,s.getAllRefs(c["b"].knows);case 8:n=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),addIndex:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var s,o,i,u,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t+"/index.ttl#this",o=new Date,i=o.toISOString(),u=this.$store.state.solid.indexes.puti,e.next=6,Object(a["b"])(u.url);case 6:return l=e.sent,e.next=9,l.addSubject();case 9:return p=e.sent,p.addLiteral(c["e"].label,r),p.addNodeRef("http://www.w3.org/ns/solid/terms#forClass",n),p.addNodeRef("http://www.w3.org/ns/solid/terms#instance",s),p.addLiteral(c["a"].created,i),e.next=16,l.save();case 16:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}(),getIndexes:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,s,o,i,u,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={puti:{instances:[],classes:[]},prti:{instances:[],classes:[]}},e.prev=1,e.next=4,Object(a["b"])(t);case 4:return s=e.sent,o=s.getSubject(t),e.next=8,o.getNodeRef("http://www.w3.org/ns/solid/terms#publicTypeIndex");case 8:return i=e.sent,e.next=11,o.getNodeRef("http://www.w3.org/ns/solid/terms#privateTypeIndex");case 11:return u=e.sent,n.puti.url=i,n.prti.url=u,e.next=16,Object(a["b"])(i);case 16:return l=e.sent,e.next=19,l.findSubjects("http://www.w3.org/ns/solid/terms#forClass");case 19:p=e.sent,p.forEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var r,a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getRef("http://www.w3.org/ns/solid/terms#forClass");case 2:return r=e.sent,e.next=5,t.getRef("http://www.w3.org/ns/solid/terms#instance");case 5:return a=e.sent,e.next=8,t.getString(c["a"].created);case 8:return s=e.sent,e.next=11,t.getString(c["e"].label);case 11:o=e.sent,n.puti.instances.push({instance:a,classe:r,label:o,created:s}),void 0==n.puti.classes[r]&&(n.puti.classes[r]=[]),n.puti.classes[r].push(a);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=25;break;case 23:e.prev=23,e.t0=e["catch"](1);case 25:return console.log(t,n),e.abrupt("return",n);case 27:case"end":return e.stop()}}),e,null,[[1,23]])})));function t(t){return e.apply(this,arguments)}return t}(),makeToast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:n,solid:!0})}}}},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),c=n("b622"),s=c("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==a(e))}},6547:function(e,t,n){var r=n("a691"),a=n("1d80"),c=function(e){return function(t,n){var c,s,o=String(a(t)),i=r(n),u=o.length;return i<0||i>=u?e?"":void 0:(c=o.charCodeAt(i),c<55296||c>56319||i+1===u||(s=o.charCodeAt(i+1))<56320||s>57343?e?o.charAt(i):c:e?o.slice(i,i+2):s-56320+(c-55296<<10)+65536)}};e.exports={codeAt:c(!1),charAt:c(!0)}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),c=RegExp.prototype.exec,s=String.prototype.replace,o=c,i=function(){var e=/a/,t=/b*/g;return c.call(e,"a"),c.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],p=i||l||u;p&&(o=function(e){var t,n,a,o,p=this,d=u&&p.sticky,f=r.call(p),h=p.source,g=0,x=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),x=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(h="(?: "+h+")",x=" "+x,g++),n=new RegExp("^(?:"+h+")",f)),l&&(n=new RegExp("^"+h+"$(?!\\s)",f)),i&&(t=p.lastIndex),a=c.call(d?n:p,x),d?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=p.lastIndex,p.lastIndex+=a[0].length):p.lastIndex=0:i&&a&&(p.lastIndex=p.global?a.index+a[0].length:t),l&&a&&a.length>1&&s.call(a[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),e.exports=o},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),c=n("b622"),s=n("9263"),o=n("9112"),i=c("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),p=c("replace"),d=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),f=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,p){var h=c(e),g=!a((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),x=g&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[i]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!g||!x||"replace"===e&&(!u||!l||d)||"split"===e&&!f){var b=/./[h],v=n(h,""[e],(function(e,t,n,r,a){return t.exec===s?g&&!a?{done:!0,value:b.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),w=v[0],m=v[1];r(String.prototype,e,w),r(RegExp.prototype,h,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}p&&o(RegExp.prototype[h],"sham",!0)}},eb27:function(e,t,n){"use strict";n("96cf");var r=n("1da1"),a=n("93ef"),c=n("4d8d"),s=n("6dc1"),o=n("00e8"),i=n.n(o),u=window.SolidFileClient;console.log("SFC",u);var l=new u(i.a);t["a"]={created:function(){},methods:{configureInbox:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var o,i,u,p,d,f,h,g,x,b,v,w,m,R,j,O;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("configureInbox",e,t,n.storage),o=n.storage+"popock/inbox_log.ttl",r.next=4,l.itemExists(e);case 4:return i=r.sent,u={},r.prev=6,r.next=9,Object(c["b"])(o);case 9:u=r.sent,r.next=17;break;case 12:return r.prev=12,r.t0=r["catch"](6),r.next=16,Object(c["a"])(o);case 16:u=r.sent;case 17:return p=u.addSubject(),p.addNodeRef(s["f"].about,"init"),r.next=21,u.save();case 21:return r.prev=21,r.next=24,Object(a["f"])(e);case 24:return d=r.sent,f=Object(a["c"])(d,t),h=Object(a["d"])(d),null==f&&alert("Are you sure that you have allowed me to 'CONTROL' your POD, I can't read Acl of "+e+". I got a NULL value !! Please check your POD / Preferences / Trusted Application. "),console.log("inbox_url: ",e,"inbox_exists: ",i,"agentAcces: ",f,"publicAccess:",h),r.next=31,l.itemExists(o);case 31:if(g=r.sent,console.log("inbox_log_file_exists:",g),Object(a["i"])(d)){r.next=41;break}if(Object(a["g"])(d)){r.next=36;break}throw new Error("The current user does not have permission to change access rights to this Resource.");case 36:if(Object(a["h"])(d)){r.next=38;break}throw new Error("The current user does not have permission to see who currently has access to this Resource.");case 38:x=Object(a["a"])(d),r.next=42;break;case 41:x=Object(a["e"])(d);case 42:return b=Object(a["l"])(x,t,{read:!0,append:!0,write:!0,control:!0}),v=Object(a["k"])(x,t,{read:!0,append:!0,write:!0,control:!0}),w=Object(a["n"])(x,{read:!0,append:!0,write:!1,control:!1}),m=Object(a["m"])(x,{read:!1,append:!0,write:!1,control:!1}),r.prev=46,r.next=49,Object(a["j"])(d,b);case 49:console.log("owner Resource"),r.next=55;break;case 52:r.prev=52,r.t1=r["catch"](46),console.log("todo if 409 conflict : must test if ok before patch");case 55:return r.prev=55,r.next=58,Object(a["j"])(d,v);case 58:console.log("owner default"),r.next=64;break;case 61:r.prev=61,r.t2=r["catch"](55),console.log("todo if 409 conflict : must test if ok before patch");case 64:return r.prev=64,r.next=67,Object(a["j"])(d,w);case 67:console.log("posters Resource"),r.next=73;break;case 70:r.prev=70,r.t3=r["catch"](64),console.log("todo if 409 conflict : must test if ok before patch");case 73:return r.prev=73,r.next=76,Object(a["j"])(d,m);case 76:console.log("submitters Default"),r.next=82;break;case 79:r.prev=79,r.t4=r["catch"](73),console.log("todo if 409 conflict : must test if ok before patch");case 82:return r.next=84,Object(a["f"])(o);case 84:if(R=r.sent,Object(a["i"])(R)){r.next=93;break}if(Object(a["g"])(R)){r.next=88;break}throw new Error("The current user does not have permission to change access rights to this Resource.");case 88:if(Object(a["h"])(R)){r.next=90;break}throw new Error("The current user does not have permission to see who currently has access to this Resource.");case 90:j=Object(a["a"])(R),r.next=94;break;case 93:j=Object(a["e"])(R);case 94:return console.log("Log acl",j),O=Object(a["n"])(j,{read:!0,append:!0,write:!1,control:!1}),r.next=98,Object(a["j"])(R,O);case 98:console.log("logfile Default"),r.next=104;break;case 101:r.prev=101,r.t5=r["catch"](21),alert(r.t5);case 104:case"end":return r.stop()}}),r,null,[[6,12],[21,101],[46,52],[55,61],[64,70],[73,79]])})))()}}}}}]);
//# sourceMappingURL=chunk-76df7e4a.79946991.js.map