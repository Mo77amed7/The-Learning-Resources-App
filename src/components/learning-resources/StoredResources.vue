<template>
  <ul>
    <learning-resources
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resources>
  </ul>
</template>
<script>
import LearningResources from "./LearningResources.vue";
export default {
  data() {
    return {};
  },
  components: {
    LearningResources,
  },
  inject: ["resources"],
};
</script>
<style scoped>
ul {
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
