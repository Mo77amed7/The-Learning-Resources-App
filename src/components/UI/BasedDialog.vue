<template>
  <teleport to="body">
    <dialog open>
      <div class="backdrop" @click="$emit('close')"></div>
      <div class="dialog-content">
        <header class="dialog-header">
          <slot name="header"></slot>
          <button class="close-button" @click="$emit('close')">&times;</button>
        </header>
        <section class="dialog-body">
          <slot name="body"></slot>
        </section>
        <footer class="dialog-footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </dialog>
  </teleport>
</template>

<script>
export default {
  name: "BasedDialog",
  emits: ["close"],
  data() {
    return {};
  },
};
</script>
<style scoped>
dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.dialog-content {
  position: relative;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 90%;
  max-width: 500px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
}
.dialog-header,
.dialog-footer {
  padding: 1rem;
  background: #f4f4f4;
  border-bottom: 1px solid #ccc;
}
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dialog-body {
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
}
.close-button {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.close-button:hover,
.close-button:active {
  color: #ff0055;
}
</style>
