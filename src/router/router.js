import Vue from 'vue';
import VueRouter from 'vue-router';
import vCatalog from '../components/vCatalog';
import vCart from '../components/vCart';

Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  name: 'catalog',
  component: vCatalog,
  },
  {
    path: '/cart',
    name: 'cart',
    component: vCart,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
