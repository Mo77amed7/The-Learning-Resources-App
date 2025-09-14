<template>
  <the-header title="RememberMe"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from "./components/Layout/TheHeader.vue";
import TheResources from "./components/learning-resources/TheResources.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheResources,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
  outline: none;
}
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}
a {
  text-decoration: none;
}
ul {
  list-style-type: none;
}
</style>
