<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">Back to catalog</div>
    </router-link>
    <h3>Cart</h3>
    <p v-if="!cart_data.length">Not products in cart...</p>
    <vCartItem
      v-for="(item, index) in cart_data"
      :key="item._id"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import vCartItem from './vCartItem';
import { mapActions } from 'vuex';

export default {
  name: 'vCart',
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    },
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
  },
}
</script>

<style>

</style>
