<template>
  <div class="v-cart">
    <h3>Cart</h3>
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
