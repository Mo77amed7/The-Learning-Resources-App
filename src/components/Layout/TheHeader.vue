<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>
<script>
export default {
  name: "TheHeader",
  props: ["title"],
};
</script>
<style scoped>
header {
  background-color: rgb(81, 0, 0);
  padding: 30px 20px;
  border-bottom: 1px solid #eee;
}
h1 {
  margin: 0;
  font-size: 28px;
  color: #fff;
}
</style>
