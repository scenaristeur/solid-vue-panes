(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["crud-create"],{"5a34":function(e,t,r){var s=r("44e7");e.exports=function(e){if(s(e))throw TypeError("The method doesn't accept regular expressions");return e}},"8a79":function(e,t,r){"use strict";var s=r("23e7"),a=r("06cf").f,n=r("50c4"),o=r("5a34"),c=r("1d80"),i=r("ab13"),u=r("c430"),h="".endsWith,l=Math.min,p=i("endsWith"),m=!u&&!p&&!!function(){var e=a(String.prototype,"endsWith");return e&&!e.writable}();s({target:"String",proto:!0,forced:!m&&!p},{endsWith:function(e){var t=String(c(this));o(e);var r=arguments.length>1?arguments[1]:void 0,s=n(t.length),a=void 0===r?s:l(n(r),s),i=String(e);return h?h.call(t,i,a):t.slice(a-i.length,a)===i}})},ab13:function(e,t,r){var s=r("b622"),a=s("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(s){}}return!1}},ae85:function(e,t,r){"use strict";r("baa5"),r("fb6a"),r("bf19");t["a"]={methods:{localname:function(e){var t=e;return void 0!=e&&(t=-1!=e.lastIndexOf("#")?e.substr(e.lastIndexOf("#")).substr(1):e.substr(e.lastIndexOf("/")).substr(1),t=0==t.length?e:t),t},today:function(){var e=new Date;return e.setMinutes(this.getMinutes()-this.getTimezoneOffset()),e.toJSON().slice(0,10)},streamActivity:function(e,t){var r={"@context":"https://www.w3.org/ns/activitystreams",summary:"User fill a form with shighl-vuejs",type:"Add",published:(new Date).toISOString(),actor:{type:"Person",id:e,name:"UserName",url:"same as webid ?",image:{type:"Link",href:"http://example.org/martin/image.jpg",mediaType:"image/jpeg"}},object:{id:"http://www.test.example/blog/abc123/xyz",type:"Document",url:"http://example.org/blog/2011/02/entry",name:"Why I love Activity Streams",content:t},target:{id:"http://example.org/blog/",type:"OrderedCollection",name:"Martin's Blog"}};return r}}}},baa5:function(e,t,r){var s=r("23e7"),a=r("e58c");s({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},bf19:function(e,t,r){"use strict";var s=r("23e7");s({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},cc75:function(e,t,r){"use strict";r("4160"),r("8a79"),r("159b"),r("96cf");var s=r("1da1"),a=r("ae85");t["a"]={mixins:[a["a"]],methods:{load_raw_schema:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:s=window.shexParser.construct("http://example.com/base/url/"),console.log(s),console.warn(s.parse(e),null,2),a=s.parse(e),t.$store.commit("crud/setSchema",a),t.splitSchema(a);case 6:case"end":return r.stop()}}),r)})))()},load_remote_schema:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:s=t,window.shexLoader.load([e],[],[],[]).then((function(e){e.schema&&(console.log("LOADED",e.schema),t.$store.commit("crud/setSchema",e.schema),s.splitSchema(e.schema))}),(function(e){console.log("erreur ",e),alert(e.message)})),console.log("loaded");case 3:case"end":return r.stop()}}),r)})))()},splitSchema:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:s=t,t.shapes=[],t.footprint_shapes=[],t.translate_shapes=[],e.shapes.forEach((function(e){e.localname=t.localname(e.id),e.id.endsWith("_Footprint")?(e.use="footprint",t.footprint_shapes.push(e)):e.id.endsWith("_Translate")?(e.use="translate",s.translate_shapes.push(e)):(e.use="regular",s.shapes.push(e))})),t.currentShape=t.shapes[0].id,t.$store.commit("crud/setCurrentShape",t.shapes[0].id),console.log("SHAPES",t.shapes),console.log("FOOTPRINT_SHAPES",t.footprint_shapes),console.log("TRANSLATE_SHAPES",t.translate_shapes),t.$store.commit("crud/setShapes",t.shapes),t.$store.commit("crud/setFShapes",t.footprint_shapes),t.$store.commit("crud/setTShapes",t.translate_shapes);case 13:case"end":return r.stop()}}),r)})))()}}}},d64a:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"crud-create"},[e._v(" Create"),r("br"),e._v(" workspace : "+e._s(e.workspace)+" "),r("br"),e._v(" shape.name : "+e._s(e.shape.name)),r("br"),e._v(" shape.url: "+e._s(e.shape.url)),r("br"),e._v(" schema: "+e._s(e.schema)),r("br"),r("FormTab")],1)},a=[],n=(r("d3b7"),r("cc75")),o={name:"CrudCreate",mixins:[n["a"]],components:{FormTab:function(){return r.e("chunk-0c8e6b9a").then(r.bind(null,"4693"))}},data:function(){return{}},created:function(){this.workspace=this.$store.state.crud.workspace,this.shape=this.$store.state.crud.shape,this.load_schema()},watch:{workspace:function(e){console.log(e)},shape:function(e){console.log(e),this.load_schema()}},methods:{load_schema:function(){this.load_remote_schema(this.shape.url)}},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},workspace:{get:function(){return this.$store.state.crud.workspace},set:function(){}},shape:{get:function(){return this.$store.state.crud.shape},set:function(){}},schema:{get:function(){return this.$store.state.crud.schema},set:function(){}}}},c=o,i=r("2877"),u=Object(i["a"])(c,s,a,!1,null,null,null);t["default"]=u.exports},e58c:function(e,t,r){"use strict";var s=r("fc6a"),a=r("a691"),n=r("50c4"),o=r("a640"),c=r("ae40"),i=Math.min,u=[].lastIndexOf,h=!!u&&1/[1].lastIndexOf(1,-0)<0,l=o("lastIndexOf"),p=c("indexOf",{ACCESSORS:!0,1:0}),m=h||!l||!p;e.exports=m?function(e){if(h)return u.apply(this,arguments)||0;var t=s(this),r=n(t.length),o=r-1;for(arguments.length>1&&(o=i(o,a(arguments[1]))),o<0&&(o=r+o);o>=0;o--)if(o in t&&t[o]===e)return o||0;return-1}:u}}]);
//# sourceMappingURL=crud-create.81974b5b.js.map