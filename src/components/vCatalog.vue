<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">
        <img src="../assets/images/cart.png">
        {{ CART.length }}
      </div>
    </router-link>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product._id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './vCatalogItem'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'vCatalog',
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
      .then(response => {
        if(response.data) {
          console.log('test : Data loaded');
        }
      })
  }
}
</script>

<style lang="scss">
  .v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-top: 5em;
    }

    &__link_to_cart {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding;
      border: 1px solid #ccc;

      img {
        width: 16px;
      }
    }
  }
</style>
