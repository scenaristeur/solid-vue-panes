import Vue from 'vue'
import VueRouter from 'vue-router'
const publicPath = process.env.NODE_ENV === 'production' ? '/solid-vue-panes' : ''
Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')},
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import(/* webpackChunkName: "welcome" */ '@/views/Welcome.vue')
  },
  {
    path: '/providers',
    name: 'Providers',
    component: () => import(/* webpackChunkName: "providers" */ '@/views/Providers.vue')
  },
  {
    path: '/issuetrackers',
    name: 'IssueTrackers',
    component: () => import(/* webpackChunkName: "issue-trackers" */ '@/views/IssueTrackers.vue')
  },
  {
    path: '/pod/:path?',
    name: 'Pod',
    component: () => import(/* webpackChunkName: "pod" */ '@/views/Pod.vue')
  },
  {
    path: '/file/:file?',
    name: 'File',
    component: () => import(/* webpackChunkName: "file" */ '@/views/File.vue')
  },
  {
    path: '/allvis',
    name: 'All',
    component: () => import(/* webpackChunkName: "file" */ '@/components/network/AllVis.vue')
  },
  {
    path: '/migration',
    name: 'Migration',
    component: () => import(/* webpackChunkName: "migration" */ '@/views/MigrationView.vue')
  },
  {
    path: '/fofri/:webId?',
    name: 'FoFri',
    component: () => import(/* webpackChunkName: "friends_follower" */ '@/components/profile/FoFri.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */'@/views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',

    component: () => import(/* webpackChunkName: "profile" */ '@/components/profile/Profile.vue')
  },
  {
    path: '/salut',
    name: 'Salut',
    component: () => import(/* webpackChunkName: "salut" */ '@/views/SalutView.vue')
  },
  {
    path: '/general',
    name: 'General',
    component: () => import(/* webpackChunkName: "general" */ '@/views/General.vue')
  },
  {
    path: '/indexes',
    name: 'Indexes',
    component: () => import(/* webpackChunkName: "indexes" */ '@/views/Indexes.vue')
  },
  {path: '/friends',name: 'FriendsView',component: () => import(/* webpackChunkName: "friends" */ '@/views/FriendsView.vue')},
  {
    path: '/communication',
    name: 'Communication',
    component: () => import(/* webpackChunkName: "communication" */ '@/views/Communication.vue')
  },
  {
    path: '/parle',
    name: 'Parle',
    component: () => import(/* webpackChunkName: "parle" */ '@/views/Parle.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "chat" */ '@/views/Chat.vue')
  },
  {
    path: '/chat/:url?',
    name: 'ChatUrl',
    component: () => import(/* webpackChunkName: "chat" */'@/views/Chat.vue')
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: () => import( /* webpackChunkName: "inbox" */'@/views/InboxView.vue')
  },
  {
    path: '/agora',
    name: 'Agora',
    component: () => import(/* webpackChunkName: "agora" */ '@/views/AgoraView.vue')
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import(/* webpackChunkName: "editor" */ '@/components/explorer/Editor.vue')
  },
  {
    path: '/browser',
    name: 'Browser',
    component: () => import(/* webpackChunkName: "browser" */ '@/components/explorer/Browser.vue')
  },
  {
    path: '/misc',
    name: 'Misc',
    component: () => import(/* webpackChunkName: "misc" */'@/views/Misc.vue')
  },
  {path: '/offers', name: 'Offers', component: () => import(/* webpackChunkName: "offers" */ '@/views/Offers.vue')},
  {path: '/forms', name: 'Forms', component: () => import(/* webpackChunkName: "forms" */ '@/views/Forms.vue')},
  {path: '/groups/', name: 'GroupsBasic', component: () => import(/* webpackChunkName: "groups" */'@/views/Groups.vue')
  },
  {
    path: '/groups/:url?',
    name: 'Groups',
    component: () => import(/* webpackChunkName: "groups" */'@/views/Groups.vue')
  },
  {
    path: '/groups/:tension?',
    name: 'GroupsTension',
    component: () => import(/* webpackChunkName: "groups" */'@/views/Groups.vue')
  },
  {
    path: '/view/:url?',
    name: 'View',
    component: () => import(/* webpackChunkName: "groups" */'@/views/View.vue')
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
  component: () => import(/* webpackChunkName: "bookmarks" */'@/views/Bookmarks.vue')
  },
  {
    path: '/translation',
    name: 'Translation',
  component: () => import(/* webpackChunkName: "bookmarks" */'@/components/translation/TranslationTest.vue')
  },
  {
    path: '/post/:url?',
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */'@/views/PostView.vue')
  },
  {
    path: '/network',
    name: 'Network',
    component: () => import(/* webpackChunkName: "network" */'@/views/NetworkView.vue')
  },
  {
    path: '/holon',
    name: 'Holon',
  component: () => import(/* webpackChunkName: "holon" */'@/views/holon/HolonView.vue')
  },
  {
    path: '/group',
    name: 'Group',
  component: () => import(/* webpackChunkName: "group" */'@/views/holon/group/GroupDisplay.vue')
  },
  {
    path: '/gouvernance1',
    name: 'Gouvernance1',
    component: () => import(/* webpackChunkName: "gouvernance" */'@/views/gouvernance1/GouvernanceView1.vue')
  },
  {
    path: '/read',
    name: 'CrudRead',
    component: () => import(/* webpackChunkName: "crud-read" */'@/components/crud-shape/CrudRead.vue')
  },
  {
    path: '/create',
    name: 'CrudCreate',
    component: () => import(/* webpackChunkName: "crud-create" */'@/components/crud-shape/CrudCreate.vue')
  },
  {
    path: '/gouvernance',
    name: 'Gouvernance',
    component: () => import(/* webpackChunkName: "gouvernance" */'@/views/gouvernance/GouvernanceView.vue')
  },
  {
    path: '/tension/edit/:url?',
    name: 'TensionEdit',
      component: () => import(/* webpackChunkName: "tension-edit" */'@/views/tension/TensionEdit.vue')
  },
{
  path: '/tensions',
  name: 'TensionsList',
  component: () => import(/* webpackChunkName: "tensions-list" */'@/views/tension/TensionsList.vue')
},
{
  path: '/tensions/:url?',
  name: 'Tensions',
  component: () => import(/* webpackChunkName: "tensions-list" */'@/views/tension/TensionsList.vue')
},
{
  path: '/simplegouv',
  name: 'SimpleGouv',
  component: () => import(/* webpackChunkName: "simple-gouv" */'@/views/simple-gouv/SimpleGouvView.vue')
},
{
  path: '/workspaces',
  name: 'Workspaces',
  component: () => import(/* webpackChunkName: "workspaces" */ '@/views/WorkSpaces.vue')
},
{
  path: '/semapps/:url?',
  name: 'Semapps',
  component: () => import(/* webpackChunkName: "agora" */ '@/views/SemApps.vue')
},
{
  path: '/p5/:url?',
  name: 'P5View',
  component: () => import(/* webpackChunkName: "p5view" */ '@/views/P5View.vue')
},
]

const router = new VueRouter({
  routes, mode: 'history', base: publicPath,  linkActiveClass: 'active'
})

export default router
