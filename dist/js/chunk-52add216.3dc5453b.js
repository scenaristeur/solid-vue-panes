(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52add216"],{"382e":function(t,n,a){"use strict";var e=a("a70c"),r=a.n(e);r.a},"8b72":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"modele-view"},[a("b-button-toolbar",{attrs:{"key-nav":"","aria-label":"Toolbar with button groups"}},[a("b-button-group",{staticClass:"mx-1",attrs:{size:"sm"}},[a("b-button",{attrs:{variant:"outline",to:{name:"TensionDetail",params:{details:t.url}}}},[t._v("Details "),a("b-icon",{attrs:{icon:"eye","aria-hidden":"true",variant:"info"}})],1),a("b-button",{attrs:{variant:"outline",to:{name:"TensionEdit",params:{tension:t.url}}}},[t._v("Edit "),a("b-icon",{attrs:{icon:"plus-square","aria-hidden":"true",variant:"info"}})],1),t.navigator_share?a("b-button",{attrs:{variant:"outline"},on:{click:t.openShareDialog}},[t._v(" Share "),a("b-icon",{attrs:{icon:"list",variant:"info"}})],1):t._e(),a("b-button",{attrs:{variant:"outline",to:"/tensions"}},[t._v("Create Group "),a("b-icon",{attrs:{icon:"list",variant:"info"}})],1),a("b-button",{attrs:{variant:"outline",to:"/tensions"}},[t._v("Fork "),a("b-icon",{attrs:{icon:"list",variant:"info"}})],1)],1),a("br"),a("small",[t._v(t._s(t.url))])],1)],1)},r=[],i=(a("96cf"),a("1da1")),o={name:"ModeleView",props:["url"],data:function(){return{navigator_share:navigator&&navigator.share}},created:function(){},computed:{},methods:{openShareDialog:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!navigator||!navigator.share){n.next=5;break}return n.next=3,t.shareNative();case 3:n.next=5;break;case 5:case"end":return n.stop()}}),n)})))()},shareNative:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:window.navigator.share({title:t.label,text:"This could interest you : ",url:"https://scenaristeur.github.io/solid-vue-panes/view/"+t.url}).then((function(){return console.log("Successful share")})).catch((function(t){return console.log("Error sharing",t)}));case 1:case"end":return n.stop()}}),n)})))()}},watch:{}},s=o,u=(a("382e"),a("2877")),c=Object(u["a"])(s,e,r,!1,null,null,null);n["default"]=c.exports},a70c:function(t,n,a){}}]);
//# sourceMappingURL=chunk-52add216.3dc5453b.js.map