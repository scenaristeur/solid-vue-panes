(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7c5e17c"],{"6c84":function(o,t,r){},7847:function(o,t){o.exports=function(o){o.options.__i18n=o.options.__i18n||[],o.options.__i18n.push('{"en":{"hello":"hello world!","login":"Login","logout":"Logout","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User"},"fr":{"hello":"Salut tout le monde!","login":"S\'identifier","logout":"Se déconnecter","chat":"Chat","inbox":"Mails","talk":"Parle","databrowser":"Stockage","bookmarks":"Signets","profile":"Profil","fofri":"Suivi d\'amis","friends":"Amis","communication":"Communication","storage":"Storage","User":"User"},"de":{"hello":"Hallo Welt!","login":"Anmeldung","logout":"Ausloggen","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User"},"es":{"hello":"Hola Mundo !","login":"Iniciar sesión","logout":"Cerrar sesión","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User"},"ja":{"hello":"こんにちは、世界！","login":"ログインする","logout":"ログアウト","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User"},"ru":{"hello":"Привет мир！","login":"авторизоваться","logout":"выйти!","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User"}}'),delete o.options._Ctor}},b0f9:function(o,t,r){"use strict";var n=r("7847"),e=r.n(n);t["default"]=e.a},c9f7:function(o,t,r){"use strict";var n=r("6c84"),e=r.n(n);e.a},f464:function(o,t,r){"use strict";r.r(t);var n=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{to:"/"}},[o._v("PoPock")]),r("InboxNotif"),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:o._u([{key:"button-content",fn:function(){return[o._v(" "+o._s(o.$t("databrowser"))+" ")]},proxy:!0}])},[r("b-dropdown-item",{attrs:{to:"/storage"}},[o._v("(Browser + Editor)")]),r("b-dropdown-item",{attrs:{to:"/browser"}},[o._v("Browser")]),r("b-dropdown-item",{attrs:{to:"/editor"}},[o._v("Editor")]),r("b-dropdown-item",{attrs:{to:"/bookmarks"}},[o._v(o._s(o.$t("bookmarks")))])],1),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:o._u([{key:"button-content",fn:function(){return[o._v(" "+o._s(o.$t("User"))+" ")]},proxy:!0}])},[r("b-dropdown-item",{attrs:{to:"/profile"}},[o._v(" "+o._s(o.$t("profile")))]),r("b-dropdown-item",{attrs:{to:"/general"}},[o._v("Profile General")]),r("b-dropdown-item",{attrs:{to:"/fofri"}},[o._v(o._s(o.$t("fofri")))]),r("b-dropdown-item",{attrs:{to:"/indexes"}},[o._v("Indexes")]),r("b-dropdown-item",{attrs:{to:"/friends"}},[o._v(o._s(o.$t("friends")))])],1),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:o._u([{key:"button-content",fn:function(){return[o._v(" Communication ")]},proxy:!0}])},[r("b-dropdown-item",{attrs:{to:"/parle"}},[o._v(o._s(o.$t("talk")))]),r("b-dropdown-item",{attrs:{to:"/chat"}},[o._v(o._s(o.$t("chat")))]),r("b-dropdown-item",{attrs:{to:"/inbox"}},[o._v(o._s(o.$t("inbox")))]),r("b-dropdown-item",{attrs:{to:"/agora"}},[o._v("Agora")])],1),r("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[r("b-dropdown-item",{on:{click:function(t){return o.localeChange("en")}}},[o._v("EN")]),r("b-dropdown-item",{on:{click:function(t){return o.localeChange("fr")}}},[o._v("FR")]),r("b-dropdown-item",{on:{click:function(t){return o.localeChange("de")}}},[o._v("DE")]),r("b-dropdown-item",{on:{click:function(t){return o.localeChange("ja")}}},[o._v("JA")]),r("b-dropdown-item",{on:{click:function(t){return o.localeChange("es")}}},[o._v("ES")]),r("b-dropdown-item",{on:{click:function(t){return o.localeChange("ru")}}},[o._v("RU")]),r("b-dropdown-item",{attrs:{to:"/translation"}},[o._v("Translate to your language")])],1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",[r("SolidLoginButton")],1),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:o._u([{key:"button-content",fn:function(){return[o._v(" Misc ")]},proxy:!0}])},[r("b-dropdown-item",{attrs:{to:"/bookmarks"}},[o._v(o._s(o.$t("bookmarks")))]),r("b-dropdown-item",{attrs:{to:"/groups"}},[o._v("Groups")]),r("b-dropdown-item",{attrs:{to:"/offers"}},[o._v("Offers")]),r("b-dropdown-item",{attrs:{to:"/forms"}},[o._v("Forms")]),r("b-dropdown-item",{attrs:{to:"/pod"}},[o._v("Pod 2 ")]),r("b-dropdown-item",{attrs:{to:"/share"}},[o._v("Share")])],1),r("b-nav-item",{attrs:{to:"/about"}},[o._v("About")])],1)],1)],1)],1)},e=[],a=(r("d3b7"),{name:"NavBar",props:{msg:String},components:{SolidLoginButton:function(){return r.e("chunk-22639f02").then(r.bind(null,"e9a1"))},InboxNotif:function(){return r.e("chunk-7a5376f0").then(r.bind(null,"7bd6"))}},methods:{localeChange:function(o){console.log(o),this.$i18n.locale=o}}}),i=a,s=(r("c9f7"),r("2877")),l=r("b0f9"),d=Object(s["a"])(i,n,e,!1,null,"23a1620a",null);"function"===typeof l["default"]&&Object(l["default"])(d);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-e7c5e17c.27829f5f.js.map