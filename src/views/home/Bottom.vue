<template>
  <div class="docker">
    <!-- 使用iconfont图标 -->
    <div
      :class="{ docker__item: true, 'docker__item--active': index == 0 }"
      v-for="(item, index) of bottomList"
      :key="item"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  setup() {
    // 精简代码
    const bottomList = [
      { icon: "&#xe6f3;", text: "首页" },
      { icon: "&#xe7e5;", text: "购物车" },
      { icon: "&#xe61e;", text: "订单" },
      { icon: "&#xe660;", text: "我的" },
    ];
    return {
      bottomList,
    };
  },
};
</script>

<style scoped lang="scss">
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #F1F1F1;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1FA4FC;
    }
  }
  &__title {
    font-size: 20px;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>