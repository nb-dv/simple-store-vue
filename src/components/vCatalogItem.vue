<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image"
         :src="require('/src/assets/images/' + product_data.image)"
         alt="product_data.category"
    >
    <div class="v-catalog-item__name">{{ product_data.name }}</div>
    <div class="v-catalog-item__price">Price: {{ product_data.price }}</div>
    <button
        class="v-catalog-item__btn"
        @click="addToCart"
    >Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'vCatalogItem',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    },
  },
}
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  min-width: 180px;
  padding: $padding*2;
  margin-bottom: $margin*2;
  box-shadow: 0 0 8px 0 #e0e0e0;

  &__image {
    width: 100px;
  }

  &__name {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    margin-top: auto;
    margin-bottom: auto;
  }

  &__price {
    margin-bottom: 1em;
  }
}
</style>

