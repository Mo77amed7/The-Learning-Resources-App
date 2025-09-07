<template>
  <li>
    <div>
      <header>
        <h2>{{ title }}</h2>
        <span>Delete</span>
      </header>
      <section>
        <p>{{ description }}</p>
        <a :href="link">View Resource</a>
      </section>
    </div>
  </li>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["title", "description", "link"],
};
</script>
<style scoped>
li {
  list-style-type: none;
  width: 80%;
  box-shadow: -1px -1px 10px 1px #efefef, 1px 1px 10px 1px #efefef;
  padding: 15px;
  margin: 10px 0px;
  border-radius: 6px;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h2 {
  color: black;
}
span {
  display: block;
  cursor: pointer;
}
p {
  text-align: left;
}
a {
  display: block;
  float: left;
  cursor: pointer;
  color: indianred;
}
</style>
