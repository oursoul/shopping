<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item" v-for="item in nearbyList" :key="item">
      <img :src="item.imgUrl" class="nearby__item__img" />
      <div class="nearby__content">
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
  </div>
</template>

<script>
export default {
  name: "Nearby",
  setup() {
    let nearbyList = [
      {
        imgUrl:
          "//cdnmusic.migu.cn/picture/2021/0708/1407/AS6de99d4e571dd7a7f34c7bef0c28721e.jpg",
        title: "沃尔玛",
        tags: ["月销1万+", "起送￥0", "基础运费￥5"],
        desc: " VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        imgUrl:
          "//cdnmusic.migu.cn/picture/2021/0708/1407/AS6de99d4e571dd7a7f34c7bef0c28721e.jpg",
        title: "沃尔玛",
        tags: ["月销1万+", "起送￥0", "基础运费￥5"],
        desc: " VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        imgUrl:
          "//cdnmusic.migu.cn/picture/2021/0708/1407/AS6de99d4e571dd7a7f34c7bef0c28721e.jpg",
        title: "沃尔玛",
        tags: ["月销1万+", "起送￥0", "基础运费￥5"],
        desc: " VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        imgUrl:
          "//cdnmusic.migu.cn/picture/2021/0708/1035/AS31ccb04384e2455b9bd15605bb2699a6.jpg",
        title: "沃尔玛",
        tags: ["月销1万+", "起送￥0", "基础运费￥5"],
        desc: " VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        imgUrl:
          "//cdnmusic.migu.cn/picture/2021/0707/2335/AS417ec84f55ded16af27842c5340f0bae.jpg",
        title: "沃尔玛",
        tags: ["月销1万+", "起送￥0", "基础运费￥5"],
        desc: " VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        imgUrl:
          "//cdnmusic.migu.cn/picture/2021/0708/0942/ASfae081e25628537c8c20138ad7876eed.jpg",
        title: "沃尔玛",
        tags: ["月销1万+", "起送￥0", "基础运费￥5"],
        desc: " VIP尊享满89元减4元运费券（每月3张）",
      },
    ];
    return {
      nearbyList,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.nearby {
  &__title {
    text-align: left;
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
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
    text-align: left;
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-bgColor;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
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