<template>
  <based-card>
    <based-button
      @click="selectTab('stored-resources')"
      :mode="selectMode('stored-resources')"
      >Show Resources</based-button
    >
    <based-button
      @click="selectTab('add-resources')"
      :mode="selectMode('add-resources')"
      >Add Resources</based-button
    >
  </based-card>
  <keep-alive>
    <component :is="selectedTab" :resources="resources"></component>
  </keep-alive>
</template>
<script>
import StoredResources from "./StoredResources.vue";
import AddResources from "./AddResources.vue";
export default {
  components: {
    StoredResources,
    AddResources,
  },
  data() {
    return {
      selectedTab: "stored-resources",
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
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, link, description) {
      const newResource = {
        id: title.toLowerCase().replace(/ /g, "-"),
        title: title,
        link: link,
        description: description,
      };
      this.resources.push(newResource);
      this.selectedTab = "stored-resources";
    },
  },
  computed: {
    selectMode() {
      return (tab) => {
        return this.selectedTab === tab ? "flat" : "null";
      };
    },
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
    };
  },
};
</script>
<style scoped></style>
