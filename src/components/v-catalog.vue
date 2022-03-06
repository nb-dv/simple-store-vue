<template>
  <div class="v-catalog">
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in products"
        :key="product._id"
        :product_data="product"
        @sendID="showIdInConsole"
      />
    </div>
  </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item'

  export default {
    name: 'v-catalog',
    components: {
      vCatalogItem,
    },
    props: {},
    data() {
      return {
        products: [
          {
            _id: '1',
            name: 'MOUNTAINEERING BACKPACK 70 LITRES  – MAKALU 45/70',
            category: 'backpack',
            image: 'product-1.jpg',
            color: 'red',
            price: 79.99,
            brand: 'SIMOND',
            rating: 4,
            numReviews: 10,
            countInStock: 6,
          },
          {
            _id: '2',
            name: 'BACKPACK 70L TRAVEL 500',
            category: 'backpack',
            image: 'product-2.jpg',
            color: 'grey',
            price: 85.99,
            brand: 'FORCLAZ',
            rating: 4,
            numReviews: 51,
          },
          {
            _id: '3',
            name: 'TRAVEL BACKPACK 60 L',
            category: 'backpack',
            image: 'product-3.jpg',
            color: 'blue',
            price: 59.99,
            brand: 'FORCLAZ',
            rating: 4.5,
            numReviews: 45,
          }
        ]
      }
    },
    methods: {
      showIdInConsole(data) {
        console.log(data)
      }
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
    }
  }
</style>
