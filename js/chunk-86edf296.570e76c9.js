(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86edf296"],{"77a0":function(t,e,i){"use strict";i("f73e")},df28:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"agora-list container"},[i("h5",[t._v(" "+t._s(t.activities.length)+" Activities")]),i("b-card",[i("b-card-body",[i("b-card-title",[i("h2",[t._v("Do you want to share your activities to poPock users ?")])]),t._v(" Use "),i("h3",[i("router-link",{attrs:{to:"/post"}},[t._v("poPock/post ")]),t._v("!")],1),t._v(" or programaticaly append the current day file like those "),i("a",{attrs:{href:"https://agora.solidcommunity.net/public/popock/inbox/",target:"_blank"}},[t._v(" https://agora.solidcommunity.net/public/popock/inbox/")])],1)],1),i("b-card-group",{attrs:{deck:""}},t._l(t.activities,(function(t){return i("ActivityItem",{key:t.id,attrs:{activity:t}})})),1)],1)},o=[],n=(i("a15b"),i("fb6a"),i("d3b7"),{name:"AgoraList",components:{ActivityItem:function(){return Promise.all([i.e("chunk-2d21d458"),i.e("chunk-064363fe")]).then(i.bind(null,"194d"))}},props:["value"],data:function(){return{}},created:function(){var t=new Date;this.date=this.formatDate(t),this.max=this.date,this.activities=this.$store.state.agora.activities},methods:{sort:function(){this.activities.reverse()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")}},computed:{storage:function(){return this.$store.state.solid.storage},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}}}),s=n,r=(i("77a0"),i("2877")),c=Object(r["a"])(s,a,o,!1,null,null,null);e["default"]=c.exports},f73e:function(t,e,i){}}]);
//# sourceMappingURL=chunk-86edf296.570e76c9.js.map