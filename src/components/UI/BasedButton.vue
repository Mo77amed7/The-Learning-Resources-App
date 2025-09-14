<template>
  <button :type="type" :class="mode"><slot></slot></button>
</template>
<script>
export default {
  name: "BasedButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    mode: {
      type: String,
    },
  },
};
</script>
<style scoped>
button {
  font: inherit;
  cursor: pointer;
  background: transparent;
  border: none;
  color: #8b005d;
  padding: 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
button:hover,
button:active {
  background: transparent;
  color: #ac0e77;
  text-decoration: underline;
}
button.flat {
  border: 1px solid #8b005d;
  background: #8b005d;
  color: white;
  padding: 10px 20px;
}
button.flat:hover,
button.flat:active {
  background: #ac0e77;
  border-color: #ac0e77;
  text-decoration: none;
}
</style>
