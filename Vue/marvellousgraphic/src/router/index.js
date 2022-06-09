import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import ContactUs from '../views/ContactUs.vue'
import RequestQuote from '../views/RequestQuote.vue'
import ProductsMugs from '../components/Products/ProductsMugs.vue'

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
    name: 'productsMugs',
    component: ProductsMugs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
