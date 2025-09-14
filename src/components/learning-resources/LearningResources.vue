<template>
  <li>
    <based-card>
      <header>
        <h2>{{ title }}</h2>
        <based-button mode="flat">Delete</based-button>
      </header>
      <section>
        <p>{{ description }}</p>
        <a :href="link">View Resource</a>
        <div class="clear"></div>
      </section>
    </based-card>
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
  padding: 15px;
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
  color: indianred;
}
a:hover,
span:hover {
  text-decoration: underline;
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
.clear {
  clear: both;
}
</style>
