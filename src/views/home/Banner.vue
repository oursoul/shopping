<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe619;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont position_notice">&#xe60b;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe62d;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="https://cdnmusic.migu.cn/tycms_picture/21/07/188/210707113151178_1400x350_3829.jpg"
    />
  </div>
  <div class="icons">
    <div class="icons__item" v-for="item of bannerList" :key="item.title">
      <img class="icons__item__img" :src="item.imgUrl" />
      <p class="icons__item__desc">{{ item.title }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: "App",
  setup() {
    const bannerList = [
      {
        title: "超市便利",
        imgUrl:
          "//d.musicapp.migu.cn/prod/playlist-service/playListimg/dba69fb5-57c1-4b3c-8b38-bd851eca6a22.jpg",
      },
      {
        title: "菜市场",
        imgUrl:
          "//d.musicapp.migu.cn/prod/playlist-service/playListimg/d9c94b8d-ba14-4a0d-a9d3-5d09f09e5ab8.jpg",
      },
      {
        title: "水果店",
        imgUrl:
          "//d.musicapp.migu.cn/prod/playlist-service/playListimg/7bd12c16-9f8e-46b4-b043-a2e49eb1e757.jpg",
      },
      {
        title: "医药健康",
        imgUrl:
          "//cdnmusic.migu.cn/picture/2021/0630/2056/AS31ac0b689b84e5a1a7a5f54dcf79b0ef.jpg",
      },
      {
        title: "烘培蛋糕",
        imgUrl:
          "//cdnmusic.migu.cn/picture/2021/0627/1035/AS81eb25f33f600338b068c99e07b8a17f.jpg",
      },
      {
        title: "签到",
        imgUrl:
          "//d.musicapp.migu.cn/prod/playlist-service/playListimg/411b182f-7862-4c8a-ae8c-72d373a29016.jpg",
      },
      {
        title: "大牌免运",
        imgUrl:
          "//d.musicapp.migu.cn/prod/playlist-service/playListimg/411b182f-7862-4c8a-ae8c-72d373a29016.jpg",
      },
      {
        title: "红包套餐",
        imgUrl:
          "//d.musicapp.migu.cn/prod/playlist-service/playListimg/411b182f-7862-4c8a-ae8c-72d373a29016.jpg",
      },
      {
        title: "附件门店",
        imgUrl:
          "//d.musicapp.migu.cn/prod/playlist-service/playListimg/411b182f-7862-4c8a-ae8c-72d373a29016.jpg",
      },
      {
        title: "限时优惠",
        imgUrl:
          "//d.musicapp.migu.cn/prod/playlist-service/playListimg/411b182f-7862-4c8a-ae8c-72d373a29016.jpg",
      },
    ];
    return {
      bannerList,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: #F5F5F5;
  color: #B7B7B7;
  border-radius: 0.16rem;
  .iconfont {
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.16rem;
  }
  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.position {
  text-align: left;
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  /* 字体很长 */
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position_notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
/* 图片占位置 */
.banner {
  height: 0;
  overflow: hidden;
  /* 宽高比 */
  padding-bottom: 25%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
      border-radius: 50%;
    }
    &__desc {
      font-size: 10px;
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
</style>