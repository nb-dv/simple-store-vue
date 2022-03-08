<template>
  <div class="v-catalog">
    <div class="v-catalog__list">
      <v-catalog-item
      v-for="product in PRODUCTS"
      :key="product._id"
      :product_data="product"
      @sendID="showIdInConsole"
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
      ])
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
      ]),
      showIdInConsole(data) {
        console.log(data);
      }
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
    }
  }
</style>
