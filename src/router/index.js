import Vue from 'vue'
import VueRouter from 'vue-router'

import firebase from 'firebase/app'
import 'firebase/auth'

import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * When going with "history" mode, please also make sure "build.publicPath"
   * is set to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

Router.beforeEach((to, from, next) => {
  console.log('router before each')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        console.log('no user')
        next('login')
      } else {
        // console.log(user)
        if (to.matched.some(record => record.name === 'room')) {
          firebase.firestore().collection('rooms').doc(to.params.id).get().then((doc) => {
            if (doc.exists) {
              if (Object.keys(doc.data().users).includes(user.uid)) {
                next()
              } else {
                console.log('no permissions to enter this game room')
                next('dashboard')
              }
            }
          })
        } else next()
      }
    })
  } else next()
})

export default Router
