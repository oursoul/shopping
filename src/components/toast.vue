<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style lang="scss" scoped>
.toast {
  font-size: 16px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #FFF;
}
</style>
