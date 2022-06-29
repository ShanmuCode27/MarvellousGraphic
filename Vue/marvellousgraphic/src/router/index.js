import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import ContactUs from '../views/ContactUs.vue'
import RequestQuote from '../views/RequestQuote.vue'
import Mugs from '../components/Products/Mugs/Mugs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component : About
  },
  {
    path: '/products',
    name : 'Products',
    component : Products
  },
  {
    path: '/contactus',
    name : 'ContactUs',
    component: ContactUs
  },
  {
    path: '/requestquote',
    name : 'RequestQuote',
    component: RequestQuote
  },
  {
    path: '/products/mugs',
    name: 'ProductsMugs',
    component: Mugs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
