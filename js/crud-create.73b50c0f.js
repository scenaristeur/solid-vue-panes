(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["crud-create"],{"159b":function(e,t,r){var a=r("da84"),n=r("fdbc"),s=r("17c2"),o=r("9112");for(var i in n){var c=a[i],u=c&&c.prototype;if(u&&u.forEach!==s)try{o(u,"forEach",s)}catch(h){u.forEach=s}}},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,n=r("a640"),s=r("ae40"),o=n("forEach"),i=s("forEach");e.exports=o&&i?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},4160:function(e,t,r){"use strict";var a=r("23e7"),n=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"5a34":function(e,t,r){var a=r("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},"65f0":function(e,t,r){var a=r("861d"),n=r("e8b5"),s=r("b622"),o=s("species");e.exports=function(e,t){var r;return n(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?a(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"8a79":function(e,t,r){"use strict";var a=r("23e7"),n=r("06cf").f,s=r("50c4"),o=r("5a34"),i=r("1d80"),c=r("ab13"),u=r("c430"),h="".endsWith,l=Math.min,f=c("endsWith"),p=!u&&!f&&!!function(){var e=n(String.prototype,"endsWith");return e&&!e.writable}();a({target:"String",proto:!0,forced:!p&&!f},{endsWith:function(e){var t=String(i(this));o(e);var r=arguments.length>1?arguments[1]:void 0,a=s(t.length),n=void 0===r?a:l(s(r),a),c=String(e);return h?h.call(t,c,n):t.slice(n-c.length,n)===c}})},ab13:function(e,t,r){var a=r("b622"),n=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,"/./"[e](t)}catch(a){}}return!1}},ae85:function(e,t,r){"use strict";r("baa5"),r("fb6a"),r("bf19");t["a"]={methods:{localname:function(e){var t=e;return void 0!=e&&(t=-1!=e.lastIndexOf("#")?e.substr(e.lastIndexOf("#")).substr(1):e.substr(e.lastIndexOf("/")).substr(1),t=0==t.length?e:t),t},today:function(){var e=new Date;return e.setMinutes(this.getMinutes()-this.getTimezoneOffset()),e.toJSON().slice(0,10)},streamActivity:function(e,t){var r={"@context":"https://www.w3.org/ns/activitystreams",summary:"User fill a form with shighl-vuejs",type:"Add",published:(new Date).toISOString(),actor:{type:"Person",id:e,name:"UserName",url:"same as webid ?",image:{type:"Link",href:"http://example.org/martin/image.jpg",mediaType:"image/jpeg"}},object:{id:"http://www.test.example/blog/abc123/xyz",type:"Document",url:"http://example.org/blog/2011/02/entry",name:"Why I love Activity Streams",content:t},target:{id:"http://example.org/blog/",type:"OrderedCollection",name:"Martin's Blog"}};return r}}}},b727:function(e,t,r){var a=r("0366"),n=r("44ad"),s=r("7b0b"),o=r("50c4"),i=r("65f0"),c=[].push,u=function(e){var t=1==e,r=2==e,u=3==e,h=4==e,l=6==e,f=5==e||l;return function(p,d,m,g){for(var v,S,b=s(p),w=n(b),x=a(d,m,3),y=o(w.length),L=0,_=g||i,O=t?_(p,y):r?_(p,0):void 0;y>L;L++)if((f||L in w)&&(v=w[L],S=x(v,L,b),e))if(t)O[L]=S;else if(S)switch(e){case 3:return!0;case 5:return v;case 6:return L;case 2:c.call(O,v)}else if(h)return!1;return l?-1:u||h?h:O}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},baa5:function(e,t,r){var a=r("23e7"),n=r("e58c");a({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},bf19:function(e,t,r){"use strict";var a=r("23e7");a({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},cc75:function(e,t,r){"use strict";r("4160"),r("8a79"),r("159b"),r("96cf");var a=r("1da1"),n=r("ae85");t["a"]={mixins:[n["a"]],methods:{load_raw_schema:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=window.shexParser.construct("http://example.com/base/url/"),console.log(a),console.warn(a.parse(e),null,2),n=a.parse(e),t.$store.commit("crud/setSchema",n),t.splitSchema(n);case 6:case"end":return r.stop()}}),r)})))()},load_remote_schema:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=t,window.shexLoader.load([e],[],[],[]).then((function(e){e.schema&&(console.log("LOADED",e.schema),t.$store.commit("crud/setSchema",e.schema),a.splitSchema(e.schema))}),(function(e){console.log("erreur ",e),alert(e.message)})),console.log("loaded");case 3:case"end":return r.stop()}}),r)})))()},splitSchema:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=t,t.shapes=[],t.footprint_shapes=[],t.translate_shapes=[],e.shapes.forEach((function(e){e.localname=t.localname(e.id),e.id.endsWith("_Footprint")?(e.use="footprint",t.footprint_shapes.push(e)):e.id.endsWith("_Translate")?(e.use="translate",a.translate_shapes.push(e)):(e.use="regular",a.shapes.push(e))})),t.currentShape=t.shapes[0].id,t.$store.commit("crud/setCurrentShape",t.shapes[0].id),console.log("SHAPES",t.shapes),console.log("FOOTPRINT_SHAPES",t.footprint_shapes),console.log("TRANSLATE_SHAPES",t.translate_shapes),t.$store.commit("crud/setShapes",t.shapes),t.$store.commit("crud/setFShapes",t.footprint_shapes),t.$store.commit("crud/setTShapes",t.translate_shapes);case 13:case"end":return r.stop()}}),r)})))()}}}},d64a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"crud-create"},[e._v(" Create"),r("br"),e._v(" workspace : "+e._s(e.workspace)+" "),r("br"),e._v(" shape.name : "+e._s(e.shape.name)),r("br"),e._v(" shape.url: "+e._s(e.shape.url)),r("br"),e._v(" schema: "+e._s(e.schema)),r("br"),r("FormTab")],1)},n=[],s=(r("d3b7"),r("cc75")),o={name:"CrudCreate",mixins:[s["a"]],components:{FormTab:function(){return r.e("chunk-0c8e6b9a").then(r.bind(null,"4693"))}},data:function(){return{}},created:function(){this.workspace=this.$store.state.crud.workspace,this.shape=this.$store.state.crud.shape,this.load_schema()},watch:{workspace:function(e){console.log(e)},shape:function(e){console.log(e),this.load_schema()}},methods:{load_schema:function(){this.load_remote_schema(this.shape.url)}},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},workspace:{get:function(){return this.$store.state.crud.workspace},set:function(){}},shape:{get:function(){return this.$store.state.crud.shape},set:function(){}},schema:{get:function(){return this.$store.state.crud.schema},set:function(){}}}},i=o,c=r("2877"),u=Object(c["a"])(i,a,n,!1,null,null,null);t["default"]=u.exports},e58c:function(e,t,r){"use strict";var a=r("fc6a"),n=r("a691"),s=r("50c4"),o=r("a640"),i=r("ae40"),c=Math.min,u=[].lastIndexOf,h=!!u&&1/[1].lastIndexOf(1,-0)<0,l=o("lastIndexOf"),f=i("indexOf",{ACCESSORS:!0,1:0}),p=h||!l||!f;e.exports=p?function(e){if(h)return u.apply(this,arguments)||0;var t=a(this),r=s(t.length),o=r-1;for(arguments.length>1&&(o=c(o,n(arguments[1]))),o<0&&(o=r+o);o>=0;o--)if(o in t&&t[o]===e)return o||0;return-1}:u},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=crud-create.73b50c0f.js.map