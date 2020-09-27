import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const publicPath = process.env.NODE_ENV === 'production' ? '/solid-vue-panes' : ''

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pod/:path?',
    name: 'Pod',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pod" */ '@/views/Pod.vue')
  },
  {
    path: '/file/:file?',
    name: 'File',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "file" */ '@/views/File.vue')
  },
  {
    path: '/fofri/:webId?',
    name: 'FoFri',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "friends_follower" */ '@/components/profile/FoFri.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */'@/views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '@/components/profile/Profile.vue')
  },
  {
    path: '/salut',
    name: 'Salut',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "salut" */ '@/views/SalutView.vue')
  },
  {
    path: '/general',
    name: 'General',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "general" */ '@/views/General.vue')
  },
  {
    path: '/indexes',
    name: 'Indexes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "indexes" */ '@/views/Indexes.vue')
  },
  {
    path: '/friends',
    name: 'FriendsView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "friends" */ '@/views/FriendsView.vue')
  },
  {
    path: '/storage',
    name: 'Storage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "storage" */ '@/views/Storage.vue')
  },
  {
    path: '/communication',
    name: 'Communication',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "communication" */ '@/views/Communication.vue')
  },
  {
    path: '/parle',
    name: 'Parle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "parle" */ '@/views/Parle.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "chat" */ '@/views/Chat.vue')
  },
  {
    path: '/inbox',
    name: 'Inbox',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "inbox" */'@/views/InboxView.vue')
  },
  {
    path: '/agora',
    name: 'Agora',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "agora" */ '@/views/AgoraView.vue')
  },
  {
    path: '/editor',
    name: 'Editor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "editor" */ '@/components/explorer/Editor.vue')
  },
  {
    path: '/browser',
    name: 'Browser',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "browser" */ '@/components/explorer/Browser.vue')
  },
  {
    path: '/misc',
    name: 'Misc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "misc" */'@/views/Misc.vue')
  },
  {
    path: '/offers',
    name: 'Offers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "offers" */ '@/views/Offers.vue')
  },
  {
    path: '/forms',
    name: 'Forms',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "forms" */ '@/views/Forms.vue')
  },
  {
    path: '/groups/:url?',
    name: 'Groups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "groups" */'@/views/Groups.vue')
  },
  {
    path: '/groups/:tension?',
    name: 'GroupsTension',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "groups" */'@/views/Groups.vue')
  },
  {
    path: '/view/:url?',
    name: 'View',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "groups" */'@/views/View.vue')
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "bookmarks" */'@/views/Bookmarks.vue')
  },
  {
    path: '/translation',
    name: 'Translation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "bookmarks" */'@/components/translation/TranslationTest.vue')
  },
  {
    path: '/post',
    name: 'Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "post" */'@/views/PostView.vue')
  },
  {
    path: '/network',
    name: 'Network',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "network" */'@/views/NetworkView.vue')
  },
  {
    path: '/holon',
    name: 'Holon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "holon" */'@/views/holon/HolonView.vue')
  },
  {
    path: '/group',
    name: 'Group',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "group" */'@/views/holon/group/GroupDisplay.vue')
  },
  {
    path: '/gouvernance1',
    name: 'Gouvernance1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "gouvernance" */'@/views/gouvernance1/GouvernanceView1.vue')
  },
  {
    path: '/read',
    name: 'CrudRead',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "crud-read" */'@/components/crud-shape/CrudRead.vue')
  },
  {
    path: '/create',
    name: 'CrudCreate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "crud-create" */'@/components/crud-shape/CrudCreate.vue')
  },
  {
    path: '/gouvernance',
    name: 'Gouvernance',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "gouvernance" */'@/views/gouvernance/GouvernanceView.vue')
  },
  {
    path: '/tension/edit/:url?',
    name: 'TensionEdit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tension-edit" */'@/views/tension/TensionEdit.vue')
  },
/*  {
    path: '/tension/detail/:details?',
    name: 'TensionDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(@/views/tension/TensionDetail.vue')
  },*/
  {
    path: '/tensions',
    name: 'TensionsList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tensions-list" */'@/views/tension/TensionsList.vue')
  },
  {
    path: '/tensions/:url?',
    name: 'TensionsList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tensions-list" */'@/views/tension/TensionsList.vue')
  },
  {
    path: '/simplegouv',
    name: 'SimpleGouv',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "simple-gouv" */'@/views/simple-gouv/SimpleGouvView.vue')
  },
  {
    path: '/workspaces',
    name: 'Workspaces',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "workspaces" */ '@/views/WorkSpaces.vue')
  },
  {
    path: '/semapps/:url?',
    name: 'Semapps',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "agora" */ '@/views/SemApps.vue')
  },

]

const router = new VueRouter({
  routes, mode: 'history', base: publicPath,  linkActiveClass: 'active'
})


export default router
