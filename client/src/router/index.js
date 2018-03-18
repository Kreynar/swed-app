import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import VartojamosiosPaskolosParaiska from '../components/VartojamosiosPaskolosParaiska.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vartojamosios-paskolos-paraiska',
      name: 'VartojamosiosPaskolosParaiska',
      component: VartojamosiosPaskolosParaiska
    }
  ]
})
