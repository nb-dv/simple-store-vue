<template>
  <div class="v-wrapper">
    <vCatalog />
    <vCart
        v-if="CART.length"
        :cart_data="CART"
    />
  </div>
</template>

<script>
import vCatalog from './vCatalog';
import vCart from './vCart';
import { mapGetters } from 'vuex';

export default {
  name: 'vWrapper',
  components: {
    vCatalog,
    vCart,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'CART',
    ]),
  },
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
.v-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
