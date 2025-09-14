<template>
  <the-header title="RememberMe"></the-header>
  <stored-resources :resources="resources"></stored-resources>
</template>

<script>
import StoredResources from "./components/learning-resources/StoredResources.vue";
import TheHeader from "./components/Layout/TheHeader.vue";
export default {
  name: "App",
  components: {
    StoredResources,
    TheHeader,
  },
  data() {
    return {
      resources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation",
          link: "https://www.vue.com",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google",
          link: "https://www.google.com",
        },
      ],
    };
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
