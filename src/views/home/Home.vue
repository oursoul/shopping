<template>
  <div>
    <div class="wrapper">
      <Banner />
      <Nearby />
    </div>
    <Bottom />
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Bottom from "./Bottom.vue";
import Nearby from "./Nearby.vue";

export default {
  //name与vue-devtools搭配使用,如果不写，以文件名为准
  // name: "HelloWorld",
  setup() {
    return {};
  },
  components: {
    Banner,
    Bottom,
    Nearby,
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
}
</style>
