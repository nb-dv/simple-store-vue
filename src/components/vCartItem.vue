<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image"
         :src="require('/src/assets/images/' + cart_item_data.image)"
         alt="cart_item_data.category"
    >
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}
      <p>Article: {{cart_item_data._id}}</p>
      <p>price: {{cart_item_data.price}}</p>
    </div>
    <div class="v-cart-item__quantity">{{cart_item_data.quantity}}</div>
    <button
        class="v-cart-item__btn-delete"
        @click="deleteFromCart"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'vCartItem',
  components: {},
  data() {
    return {};
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  },
}
</script>

<style lang="scss">
.v-cart-item{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: $padding*2;
  margin-bottom: $margin*2;
  box-shadow: 0 0 8px 0 #e0e0e0;

  &__image {
    width: 25%;
  }

  &__info {
    width: 25%;
    margin: 0 2em;
  }

  &__btn-delete {
    margin: 0 3em;
  }
}

</style>
