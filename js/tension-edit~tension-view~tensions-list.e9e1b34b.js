(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tension-edit~tension-view~tensions-list"],{1404:function(t,e,i){"use strict";i("a15b"),i("fb6a"),i("b0c0"),i("96cf");var r=i("1da1"),a=i("4d8d"),n=i("6dc1");e["a"]={created:function(){this.webId=this.$store.state.solid.webId,console.log("ActivityMixin WEBID CREATED",this.webId),this.config(this.webId);var t=new Date;this.date=this.formatDate(t),console.log(this.as),console.log(this.date)},methods:{sendActivity:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,r,o,c,s,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),i=new Date,r="Activity_"+i.getTime(),o=i.toISOString(),c=t.formatDate(i),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,c),s=t.pubPod+c+".ttl",l={},e.prev=8,e.next=11,Object(a["b"])(s);case 11:l=e.sent,e.next=19;break;case 14:return e.prev=14,e.t0=e["catch"](8),e.next=18,Object(a["a"])(s);case 18:l=e.sent;case 19:return console.log("webId",t.webId),t.activity.summary.length<1&&(t.activity.summary=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" ")),u=l.addSubject({identifier:r}),u.addLiteral(n["e"].label,t.activity.object.name),u.addLiteral(n["a"].created,o),u.addRef(n["b"].maker,t.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),u.addRef(n["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=31,l.save();case 31:case"end":return e.stop()}}),e,null,[[8,14]])})))()},send:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,r,o,c,s,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,t.date),i=t.pubPod+t.date+".ttl",r=new Date,o="Activity_"+r.getTime(),c=r.toISOString(),s={},e.prev=7,e.next=10,Object(a["b"])(i);case 10:s=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e["catch"](7),e.next=17,Object(a["a"])(i);case 17:s=e.sent;case 18:return console.log("webId",t.webId),l=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" "),console.log("Musr create outbox object first, then activity !",s,o,c),u=s.addSubject({identifier:o}),u.addLiteral(n["e"].label,l),u.addLiteral(n["a"].created,c),u.addRef(n["b"].maker,t.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),u.addRef(n["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=31,s.save();case 31:case"end":return e.stop()}}),e,null,[[7,13]])})))()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},postActivity:function(){},config:function(t){this.config={},this.config.webId=t,console.log("ActivityMixin config",this.config)}},webId:{webId:function(t){this.config(t)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solid.community/public/popock/inbox/"}}}},"159b":function(t,e,i){var r=i("da84"),a=i("fdbc"),n=i("17c2"),o=i("9112");for(var c in a){var s=r[c],l=s&&s.prototype;if(l&&l.forEach!==n)try{o(l,"forEach",n)}catch(u){l.forEach=n}}},"17c2":function(t,e,i){"use strict";var r=i("b727").forEach,a=i("a640"),n=i("ae40"),o=a("forEach"),c=n("forEach");t.exports=o&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"18cc":function(t,e,i){"use strict";i("96cf");var r=i("1da1"),a=i("86bb"),n=(i("4160"),i("ac1f"),i("5319"),i("1276"),i("498a"),i("159b"),i("1404")),o=i("4d8d"),c=i("6dc1"),s=i("00e8"),l=i.n(s),u={mixins:[a["a"],n["a"]],data:function(){return{}},created:function(){this.fc=new SolidFileClient(l.a),console.log(this.fc)},methods:{createFile:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var r,a,n,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.label=t.label.trim(),t.ttl_name=t.label.replace(/\s/g,"_"),e.activity={actor:{name:e.$store.state.solid.webId},type:"Create",summary:"",object:{name:t.label,url:"",type:"Tension"}},i.prev=3,r={},void 0!=t.url){i.next=13;break}return t.url=t.path+t.ttl_name+".ttl",i.next=9,Object(o["a"])(t.url);case 9:r=i.sent,e.activity.type="Create",i.next=17;break;case 13:return i.next=15,Object(o["b"])(t.url);case 15:r=i.sent,e.activity.type="Update";case 17:return a=r.addSubject({identifier:"this"}),n=new Date,s=n.toISOString(),void 0!=t.created?(t.modified=s,a.addLiteral(c["a"].modified,s),a.removeAll(c["e"].label),a.removeAll(c["c"].inbox),a.removeAll("https://holacratie.solid.community/public/holacratie#whatis",t.wi),a.removeAll("https://holacratie.solid.community/public/holacratie#whatshouldbe",t.wsb),a.removeAll(c["d"].type),a.removeAll("http://www.w3.org/ns/org#memberOf"),a.removeAll("http://www.w3.org/ns/org#purpose")):(t.created=s,a.addLiteral(c["a"].created,s)),console.log(t),a.addLiteral(c["e"].label,t.label),a.addRef(c["c"].inbox,"./"+t.ttl_name+"/inbox/"),a.addLiteral("https://holacratie.solid.community/public/holacratie#whatis",t.wi),a.addLiteral("https://holacratie.solid.community/public/holacratie#whatshouldbe",t.wsb),a.addRef(c["b"].maker,e.$store.state.solid.webId),t.types.forEach((function(t){a.addRef(c["d"].type,t)})),void 0!=t.roles&&(t.roles.split(",").forEach((function(t){a.addLiteral("http://www.w3.org/ns/org#memberOf",t.trim())})),console.log("TODO: must look at existing groups & existing frineds groups & activity published groups")),void 0!=t.domains&&(t.domains.split(",").forEach((function(t){a.addLiteral("http://www.w3.org/ns/org#purpose",t.trim())})),console.log("TODO: must look at https://www.wikidata.org/w/api.php?action=wbsearchentities&language=fr&format=json&search=Ecology")),i.next=32,r.save();case 32:e.makeToast("Created "+t.label,"ok","success"),i.next=39;break;case 35:i.prev=35,i.t0=i["catch"](3),e.makeToast("Error creating "+t.label,i.t0,"danger"),console.log(i.t0);case 39:"public"==t.privacy&&(console.log("ACTIVITY !!"),e.activity.object.url=t.url,e.sendActivity(),e.makeToast("TODO : must Activity publish",t.label,"success"));case 40:case"end":return i.stop()}}),i,null,[[3,35]])})))()},getFolder:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return console.log("get folder",t),i.next=3,e.fc.readFolder(t);case 3:return r=i.sent,i.abrupt("return",r);case 5:case"end":return i.stop()}}),i)})))()}}};e["a"]={mixins:[a["a"],u],data:function(){return{tension:{privacy:"public"}}},methods:{createTension:function(){this.tension.displayType="Tension",this.tension.types=["http://purl.org/vocab/lifecycle/schema#Task","http://www.w3.org/ns/ldp#Resource"],this.tension.path=this.path,console.log(this.tension,this.path),this.createFile(this.tension),this.tension={privacy:"public"}},getTensions:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("GET TENSIONS",t.path),e.next=3,t.getFolder(t.path);case 3:return i=e.sent,console.log(i),e.abrupt("return",i.files);case 6:case"end":return e.stop()}}),e)})))()},getTensionDetail:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["b"])(t.url);case 2:return i=e.sent,r=i.getSubject(t.url+"#this"),a=t,a.created=r.getLiteral(c["a"].created),a.label=r.getLiteral(c["e"].label),a.inbox=r.getRef(c["c"].inbox),a.wi=r.getLiteral("https://holacratie.solid.community/public/holacratie#whatis"),a.wsb=r.getLiteral("https://holacratie.solid.community/public/holacratie#whatshouldbe"),a.maker=r.getRef(c["b"].maker),a.types=r.getAllRefs(c["d"].type),a.roles=r.getAllLiterals("http://www.w3.org/ns/org#memberOf"),a.domains=r.getAllLiterals("http://www.w3.org/ns/org#purpose"),console.log(a),e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})))()}}}},4160:function(t,e,i){"use strict";var r=i("23e7"),a=i("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"498a":function(t,e,i){"use strict";var r=i("23e7"),a=i("58a8").trim,n=i("c8d2");r({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},5319:function(t,e,i){"use strict";var r=i("d784"),a=i("825a"),n=i("7b0b"),o=i("50c4"),c=i("a691"),s=i("1d80"),l=i("8aa5"),u=i("14c3"),d=Math.max,f=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,i,r){var b=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,w=b?"$":"$0";return[function(i,r){var a=s(this),n=void 0==i?void 0:i[t];return void 0!==n?n.call(i,a,r):e.call(String(a),i,r)},function(t,r){if(!b&&m||"string"===typeof r&&-1===r.indexOf(w)){var n=i(e,t,this,r);if(n.done)return n.value}var s=a(t),p=String(this),h="function"===typeof r;h||(r=String(r));var v=s.global;if(v){var x=s.unicode;s.lastIndex=0}var L=[];while(1){var S=u(s,p);if(null===S)break;if(L.push(S),!v)break;var R=String(S[0]);""===R&&(s.lastIndex=l(p,o(s.lastIndex),x))}for(var T="",A=0,k=0;k<L.length;k++){S=L[k];for(var j=String(S[0]),E=d(f(c(S.index),p.length),0),I=[],O=1;O<S.length;O++)I.push(g(S[O]));var D=S.groups;if(h){var C=[j].concat(I,E,p);void 0!==D&&C.push(D);var M=String(r.apply(void 0,C))}else M=y(j,p,E,I,D,r);E>=A&&(T+=p.slice(A,E)+M,A=E+j.length)}return T+p.slice(A)}];function y(t,i,r,a,o,c){var s=r+t.length,l=a.length,u=v;return void 0!==o&&(o=n(o),u=h),e.call(c,u,(function(e,n){var c;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return i.slice(0,r);case"'":return i.slice(s);case"<":c=o[n.slice(1,-1)];break;default:var u=+n;if(0===u)return e;if(u>l){var d=p(u/10);return 0===d?e:d<=l?void 0===a[d-1]?n.charAt(1):a[d-1]+n.charAt(1):e}c=a[u-1]}return void 0===c?"":c}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var r=i("1d80"),a=i("5899"),n="["+a+"]",o=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),s=function(t){return function(e){var i=String(r(e));return 1&t&&(i=i.replace(o,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(t,e,i){var r=i("861d"),a=i("e8b5"),n=i("b622"),o=n("species");t.exports=function(t,e){var i;return a(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?r(i)&&(i=i[o],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"86bb":function(t,e,i){"use strict";e["a"]={methods:{makeToast:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:i,solid:!0})}}}},b727:function(t,e,i){var r=i("0366"),a=i("44ad"),n=i("7b0b"),o=i("50c4"),c=i("65f0"),s=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(p,h,v,g){for(var b,m,w=n(p),y=a(w),x=r(h,v,3),L=o(y.length),S=0,R=g||c,T=e?R(p,L):i?R(p,0):void 0;L>S;S++)if((f||S in y)&&(b=y[S],m=x(b,S,w),t))if(e)T[S]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return S;case 2:s.call(T,b)}else if(u)return!1;return d?-1:l||u?u:T}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c8d2:function(t,e,i){var r=i("d039"),a=i("5899"),n="​᠎";t.exports=function(t){return r((function(){return!!a[t]()||n[t]()!=n||a[t].name!==t}))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=tension-edit~tension-view~tensions-list.e9e1b34b.js.map