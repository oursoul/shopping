<template class="nearby">
  <div class="nearby__item">
    <img :src="item.imgUrl" class="nearby__item__img" />
    <div
      :class="{
        nearby__content: true,
        'nearby__content--border': hideBorder ? false : true,
      }"
    >
      <div class="nearby__content__title">{{ item.title }}</div>
      <div class="nearby__content__tags">
        <span
          class="nearby__content__tag"
          v-for="(innerItem, index) in item.tags"
          :key="index"
          >{{ innerItem }}</span
        >
      </div>
      <p class="nearby__content__highlight">
        {{ item.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: ["item", "hideBorder"],
};
</script>

<style scoped lang="scss">
/* @import "../style/mixins.scss";
@import "../style/viriables.scss"; */
/* $content-bgColor:#f1f1f1;    */
.nearby {
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    color: #333;
    text-align: left;
    flex: 1;
    padding-bottom: 0.12rem;
    &--border {
      border-bottom: 1px solid #f1f1f1;
    }
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      /* color: #f1f1f1; */
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      /* color: #f1f1f1; */
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #E93B3B;
    }
  }
}
</style>