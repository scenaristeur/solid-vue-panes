(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tension-edit"],{"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),a=r("17c2"),o=r("9112");for(var s in i){var c=n[s],l=c&&c.prototype;if(l&&l.forEach!==a)try{o(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),a=r("ae40"),o=i("forEach"),s=a("forEach");t.exports=o&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"18cc":function(t,e,r){"use strict";r("96cf");var n=r("1da1"),i=r("86bb"),a=(r("4160"),r("ac1f"),r("5319"),r("1276"),r("498a"),r("159b"),r("4d8d")),o=r("6dc1"),s=r("00e8"),c=r.n(s),l={mixins:[i["a"]],data:function(){return{}},created:function(){this.fc=new SolidFileClient(c.a),console.log(this.fc)},methods:{createFile:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,i,s,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.label=t.label.trim(),t.ttl_name=t.label.replace(/\s/g,"_"),r.prev=2,n={},void 0!=t.url){r.next=12;break}return console.log(t),t.url=t.path+t.ttl_name+".ttl",r.next=9,Object(a["a"])(t.url);case 9:n=r.sent,r.next=15;break;case 12:return r.next=14,Object(a["b"])(t.url);case 14:n=r.sent;case 15:return i=n.addSubject({identifier:"this"}),console.log(i),s=new Date,c=s.toISOString(),void 0!=t.created?(t.modified=c,i.addLiteral(o["a"].modified,c),i.removeAll(o["e"].label),i.removeAll(o["c"].inbox),i.removeAll("https://holacratie.solid.community/public/holacratie#whatis",t.wi),i.removeAll("https://holacratie.solid.community/public/holacratie#whatshouldbe",t.wsb),i.removeAll(o["d"].type),i.removeAll("http://www.w3.org/ns/org#memberOf"),i.removeAll("http://www.w3.org/ns/org#purpose")):(t.created=c,i.addLiteral(o["a"].created,c)),console.log(t),i.addLiteral(o["e"].label,t.label),i.addRef(o["c"].inbox,"./"+t.ttl_name+"/inbox/"),i.addLiteral("https://holacratie.solid.community/public/holacratie#whatis",t.wi),i.addLiteral("https://holacratie.solid.community/public/holacratie#whatshouldbe",t.wsb),i.addRef(o["b"].maker,e.$store.state.solid.webId),t.types.forEach((function(t){i.addRef(o["d"].type,t)})),t.roles.split(",").forEach((function(t){i.addLiteral("http://www.w3.org/ns/org#memberOf",t.trim())})),console.log("TODO: must look at existing groups & existing frineds groups & activity published groups"),t.domains.split(",").forEach((function(t){i.addLiteral("http://www.w3.org/ns/org#purpose",t.trim())})),console.log("TODO: must look at https://www.wikidata.org/w/api.php?action=wbsearchentities&language=fr&format=json&search=Ecology"),r.next=33,n.save();case 33:e.makeToast("Created "+t.label,"ok","success"),r.next=40;break;case 36:r.prev=36,r.t0=r["catch"](2),e.makeToast("Error creating "+t.label,r.t0,"danger"),console.log(r.t0);case 40:"public"==t.privacy&&(console.log("ACTIVITY !!"),e.makeToast("TODO : must Activity publish",t.label,"success"));case 41:case"end":return r.stop()}}),r,null,[[2,36]])})))()},getFolder:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("get folder",t),r.next=3,e.fc.readFolder(t);case 3:return n=r.sent,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})))()}}};e["a"]={mixins:[i["a"],l],data:function(){return{tension:{privacy:"public"}}},methods:{createTension:function(){this.tension.displayType="Tension",this.tension.types=["http://purl.org/vocab/lifecycle/schema#Task","http://www.w3.org/ns/ldp#Resource"],this.tension.path=this.path,console.log(this.tension,this.path),this.createFile(this.tension),this.tension={privacy:"public"}},getTensions:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("GET TENSIONS",t.path),e.next=3,t.getFolder(t.path);case 3:return r=e.sent,console.log(r),e.abrupt("return",r.files);case 6:case"end":return e.stop()}}),e)})))()},getTensionDetail:function(t){return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["b"])(t.url);case 2:return r=e.sent,n=r.getSubject(t.url+"#this"),i=t,i.created=n.getLiteral(o["a"].created),i.label=n.getLiteral(o["e"].label),i.inbox=n.getRef(o["c"].inbox),i.wi=n.getLiteral("https://holacratie.solid.community/public/holacratie#whatis"),i.wsb=n.getLiteral("https://holacratie.solid.community/public/holacratie#whatshouldbe"),i.maker=n.getRef(o["b"].maker),i.types=n.getAllRefs(o["d"].type),i.roles=n.getAllLiterals("http://www.w3.org/ns/org#memberOf"),i.domains=n.getAllLiterals("http://www.w3.org/ns/org#purpose"),console.log(i),e.abrupt("return",i);case 16:case"end":return e.stop()}}),e)})))()}}}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"498a":function(t,e,r){"use strict";var n=r("23e7"),i=r("58a8").trim,a=r("c8d2");n({target:"String",proto:!0,forced:a("trim")},{trim:function(){return i(this)}})},5319:function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),a=r("7b0b"),o=r("50c4"),s=r("a691"),c=r("1d80"),l=r("8aa5"),u=r("14c3"),d=Math.max,f=Math.min,h=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=n.REPLACE_KEEPS_$0,w=v?"$":"$0";return[function(r,n){var i=c(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!v&&g||"string"===typeof n&&-1===n.indexOf(w)){var a=r(e,t,this,n);if(a.done)return a.value}var c=i(t),h=String(this),p="function"===typeof n;p||(n=String(n));var b=c.global;if(b){var x=c.unicode;c.lastIndex=0}var L=[];while(1){var S=u(c,h);if(null===S)break;if(L.push(S),!b)break;var T=String(S[0]);""===T&&(c.lastIndex=l(h,o(c.lastIndex),x))}for(var E="",k=0,R=0;R<L.length;R++){S=L[R];for(var $=String(S[0]),A=d(f(s(S.index),h.length),0),_=[],O=1;O<S.length;O++)_.push(m(S[O]));var C=S.groups;if(p){var j=[$].concat(_,A,h);void 0!==C&&j.push(C);var I=String(n.apply(void 0,j))}else I=y($,h,A,_,C,n);A>=k&&(E+=h.slice(k,A)+I,k=A+$.length)}return E+h.slice(k)}];function y(t,r,n,i,o,s){var c=n+t.length,l=i.length,u=b;return void 0!==o&&(o=a(o),u=p),e.call(s,u,(function(e,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(c);case"<":s=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>l){var d=h(u/10);return 0===d?e:d<=l?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):e}s=i[u-1]}return void 0===s?"":s}))}}))},5701:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tension-view"},[r("p",[t._v("A tension is a difference between what is and what should be")]),r("b-container",[r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"input-none"}},[t._v("Name:")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-input",{attrs:{placeholder:"Name"},model:{value:t.tension.label,callback:function(e){t.$set(t.tension,"label",e)},expression:"tension.label"}})],1)],1),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"input-none"}},[t._v("What is:")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-textarea",{attrs:{id:"wi",placeholder:"What is",rows:"3","max-rows":"6"},model:{value:t.tension.wi,callback:function(e){t.$set(t.tension,"wi",e)},expression:"tension.wi"}})],1)],1),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"input-none"}},[t._v("What should be:")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-textarea",{attrs:{id:"wsb",placeholder:"What should be",rows:"3","max-rows":"6"},model:{value:t.tension.wsb,callback:function(e){t.$set(t.tension,"wsb",e)},expression:"tension.wsb"}})],1)],1),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"input-none"}},[t._v("In which role do you feel this tension:")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-input",{attrs:{placeholder:"Role (citizen, user of some service...)"},model:{value:t.tension.roles,callback:function(e){t.$set(t.tension,"roles",e)},expression:"tension.roles"}})],1)],1),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"input-none"}},[t._v("Which domains does this tension apply:")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-input",{attrs:{placeholder:"society, economy, ecology, decentralization..."},model:{value:t.tension.domains,callback:function(e){t.$set(t.tension,"domains",e)},expression:"tension.domains"}})],1)],1),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"radio-privacy"}},[t._v("Privacy:")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-group",[r("b-form-radio-group",{attrs:{id:"radio-privacy",name:"radio-privacy"},model:{value:t.tension.privacy,callback:function(e){t.$set(t.tension,"privacy",e)},expression:"tension.privacy"}},[r("b-form-radio",{attrs:{value:"public"}},[t._v("Public")]),r("b-form-radio",{attrs:{value:"private",disabled:""}},[t._v("Private")])],1)],1)],1)],1),r("b-row",{staticClass:"my-1"},[r("b-button",{on:{click:t.create}},[t._v("Save")])],1)],1),t._v(" path : "+t._s(this.path)+" [ change path button] TensionEdit ")],1)},i=[],a=(r("a15b"),r("18cc")),o={name:"TensionEdit",mixins:[a["a"]],data:function(){return{path:""}},created:function(){this.path=this.config.workspace+"tensions/",console.log("route",this.$route),void 0!=this.$route.params.tension&&this.fillForm(this.$route.params.tension)},methods:{create:function(){this.createTension()},fillForm:function(t){t.privacy="public",this.tension=t,this.tension.roles=this.tension.roles.join(", "),this.tension.domains=this.tension.domains.join(", ")}},watch:{$route:function(t){console.log("route to",t),void 0!=this.$route.params.tension&&this.fillForm(this.$route.params.tension)}},computed:{config:{get:function(){return this.$store.state.gouvernance.config},set:function(){}}}},s=o,c=r("2877"),l=Object(c["a"])(s,n,i,!1,null,null,null);e["default"]=l.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),a="["+i+"]",o=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),a=r("b622"),o=a("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"86bb":function(t,e,r){"use strict";e["a"]={methods:{makeToast:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:r,solid:!0})}}}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),a=r("7b0b"),o=r("50c4"),s=r("65f0"),c=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(h,p,b,m){for(var v,g,w=a(h),y=i(w),x=n(p,b,3),L=o(y.length),S=0,T=m||s,E=e?T(h,L):r?T(h,0):void 0;L>S;S++)if((f||S in y)&&(v=y[S],g=x(v,S,w),t))if(e)E[S]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return S;case 2:c.call(E,v)}else if(u)return!1;return d?-1:l||u?u:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c8d2:function(t,e,r){var n=r("d039"),i=r("5899"),a="​᠎";t.exports=function(t){return n((function(){return!!i[t]()||a[t]()!=a||i[t].name!==t}))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=tension-edit.1606a12e.js.map