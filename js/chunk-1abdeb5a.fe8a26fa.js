(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1abdeb5a"],{"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),s=r("17c2"),o=r("9112");for(var i in n){var c=a[i],u=c&&c.prototype;if(u&&u.forEach!==s)try{o(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("a640"),s=r("ae40"),o=n("forEach"),i=s("forEach");t.exports=o&&i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var a=r("23e7"),n=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"5a34":function(t,e,r){var a=r("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,r){var a=r("861d"),n=r("e8b5"),s=r("b622"),o=s("species");t.exports=function(t,e){var r;return n(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?a(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6ad8":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"crud-card"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-title",[t._v(t._s(t.shape.name))]),r("b-card-text",[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),r("CrudToolbar",{attrs:{shape:t.shape}}),r("small",[t._v(" shape.url : "+t._s(t.shape.url)+" ")])],1)],1)},n=[],s=(r("d3b7"),r("cc75")),o={name:"CrudCard",mixins:[s["a"]],components:{CrudToolbar:function(){return r.e("chunk-2d238090").then(r.bind(null,"fe50"))}},props:["shape"],data:function(){return{}},created:function(){},watch:{storage:function(t){console.log(t)},shape:function(t){console.log("shape changed",t)}},methods:{load_schema:function(){this.load_remote_schema(this.shape.url)}},computed:{storage:function(){return this.$store.state.solid.storage}}},i=o,c=r("2877"),u=Object(c["a"])(i,a,n,!1,null,null,null);e["default"]=u.exports},"8a79":function(t,e,r){"use strict";var a=r("23e7"),n=r("06cf").f,s=r("50c4"),o=r("5a34"),i=r("1d80"),c=r("ab13"),u=r("c430"),l="".endsWith,h=Math.min,f=c("endsWith"),p=!u&&!f&&!!function(){var t=n(String.prototype,"endsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!p&&!f},{endsWith:function(t){var e=String(i(this));o(t);var r=arguments.length>1?arguments[1]:void 0,a=s(e.length),n=void 0===r?a:h(s(r),a),c=String(t);return l?l.call(e,c,n):e.slice(n-c.length,n)===c}})},ab13:function(t,e,r){var a=r("b622"),n=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(a){}}return!1}},ae85:function(t,e,r){"use strict";r("baa5"),r("fb6a"),r("bf19");e["a"]={methods:{localname:function(t){var e=t;return void 0!=t&&(e=-1!=t.lastIndexOf("#")?t.substr(t.lastIndexOf("#")).substr(1):t.substr(t.lastIndexOf("/")).substr(1),e=0==e.length?t:e),e},today:function(){var t=new Date;return t.setMinutes(this.getMinutes()-this.getTimezoneOffset()),t.toJSON().slice(0,10)},streamActivity:function(t,e){var r={"@context":"https://www.w3.org/ns/activitystreams",summary:"User fill a form with shighl-vuejs",type:"Add",published:(new Date).toISOString(),actor:{type:"Person",id:t,name:"UserName",url:"same as webid ?",image:{type:"Link",href:"http://example.org/martin/image.jpg",mediaType:"image/jpeg"}},object:{id:"http://www.test.example/blog/abc123/xyz",type:"Document",url:"http://example.org/blog/2011/02/entry",name:"Why I love Activity Streams",content:e},target:{id:"http://example.org/blog/",type:"OrderedCollection",name:"Martin's Blog"}};return r}}}},b727:function(t,e,r){var a=r("0366"),n=r("44ad"),s=r("7b0b"),o=r("50c4"),i=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,h=6==t,f=5==t||h;return function(p,d,m,g){for(var v,S,b=s(p),x=n(b),w=a(d,m,3),y=o(x.length),L=0,_=g||i,O=e?_(p,y):r?_(p,0):void 0;y>L;L++)if((f||L in x)&&(v=x[L],S=w(v,L,b),t))if(e)O[L]=S;else if(S)switch(t){case 3:return!0;case 5:return v;case 6:return L;case 2:c.call(O,v)}else if(l)return!1;return h?-1:u||l?l:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},baa5:function(t,e,r){var a=r("23e7"),n=r("e58c");a({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},bf19:function(t,e,r){"use strict";var a=r("23e7");a({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},cc75:function(t,e,r){"use strict";r("4160"),r("8a79"),r("159b"),r("96cf");var a=r("1da1"),n=r("ae85");e["a"]={mixins:[n["a"]],methods:{load_raw_schema:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=window.shexParser.construct("http://example.com/base/url/"),console.log(a),console.warn(a.parse(t),null,2),n=a.parse(t),e.$store.commit("crud/setSchema",n),e.splitSchema(n);case 6:case"end":return r.stop()}}),r)})))()},load_remote_schema:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=e,window.shexLoader.load([t],[],[],[]).then((function(t){t.schema&&(console.log("LOADED",t.schema),e.$store.commit("crud/setSchema",t.schema),a.splitSchema(t.schema))}),(function(t){console.log("erreur ",t),alert(t.message)})),console.log("loaded");case 3:case"end":return r.stop()}}),r)})))()},splitSchema:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=e,e.shapes=[],e.footprint_shapes=[],e.translate_shapes=[],t.shapes.forEach((function(t){t.localname=e.localname(t.id),t.id.endsWith("_Footprint")?(t.use="footprint",e.footprint_shapes.push(t)):t.id.endsWith("_Translate")?(t.use="translate",a.translate_shapes.push(t)):(t.use="regular",a.shapes.push(t))})),e.currentShape=e.shapes[0].id,e.$store.commit("crud/setCurrentShape",e.shapes[0].id),console.log("SHAPES",e.shapes),console.log("FOOTPRINT_SHAPES",e.footprint_shapes),console.log("TRANSLATE_SHAPES",e.translate_shapes),e.$store.commit("crud/setShapes",e.shapes),e.$store.commit("crud/setFShapes",e.footprint_shapes),e.$store.commit("crud/setTShapes",e.translate_shapes);case 13:case"end":return r.stop()}}),r)})))()}}}},e58c:function(t,e,r){"use strict";var a=r("fc6a"),n=r("a691"),s=r("50c4"),o=r("a640"),i=r("ae40"),c=Math.min,u=[].lastIndexOf,l=!!u&&1/[1].lastIndexOf(1,-0)<0,h=o("lastIndexOf"),f=i("indexOf",{ACCESSORS:!0,1:0}),p=l||!h||!f;t.exports=p?function(t){if(l)return u.apply(this,arguments)||0;var e=a(this),r=s(e.length),o=r-1;for(arguments.length>1&&(o=c(o,n(arguments[1]))),o<0&&(o=r+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}:u},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-1abdeb5a.fe8a26fa.js.map