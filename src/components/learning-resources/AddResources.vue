<template>
  <based-card>
    <form action="">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" />
      </div>
      <div>
        <label for="link">Link</label>
        <input type="text" id="link" />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea rows="5" id="description"></textarea>
      </div>
      <based-button mode="flat">Add Resource</based-button>
    </form>
  </based-card>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
form {
  width: 100%;
  margin: 20px auto;
}
div {
  margin-bottom: 10px;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
input,
textarea {
  font: inherit;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 100%;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #8b005d;
}
based-button {
  margin-top: 10px;
}
based-button:hover,
based-button:active {
  background: #ac0e77;
  border-color: #ac0e77;
  text-decoration: none;
}
</style>
