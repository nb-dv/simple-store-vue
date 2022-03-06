<template>
  <div class="v-wrapper">
    <v-catalog />
  </div>
</template>

<script>
  import vCatalog from './v-catalog';

  export default {
    name: 'v-wrapper',
    components: {
      vCatalog,
    },
    props: {},
    data() {
      return {};
    },
    computed: {},
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
