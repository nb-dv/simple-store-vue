<template>
  <div class="v-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'vWrapper',
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
  mounted() {}
};
</script>

<style>
.v-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
