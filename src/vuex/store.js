import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/vuex/modules/products'
import cart from '@/vuex/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    cart,
  }
});
