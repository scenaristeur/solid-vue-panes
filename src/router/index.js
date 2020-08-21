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
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue')
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
    name: 'Friends',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "friends" */ '@/views/Friends.vue')
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
    component: () => import( /* webpackChunkName: "inbox" */'@/views/Inbox.vue')
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
    path: '/groups',
    name: 'Groups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "groups" */'@/views/Groups.vue')
  }
]

const router = new VueRouter({
  routes, mode: 'history', base: publicPath
})


export default router
