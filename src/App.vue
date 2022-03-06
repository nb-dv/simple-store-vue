<template>
  <div id="app">
    <MainWrapper></MainWrapper>
  </div>
</template>

<script>
  import MainWrapper from "@/components/v-wrapper";
  export default {
    name: 'app',
    components: {
      MainWrapper,
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
