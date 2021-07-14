<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe6f2;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe62d;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-if="item.imgUrl" />
  </div>
</template>

<script>
import ShopInfo from "../../components/shopInfo.vue";
import { useRouter, useRoute } from "vue-router";
import { get } from "../../utils/request.js";
import { reactive, toRefs } from "vue";
// 获取当前商铺信息
const useShopInfoEffect = () => {
  let data = reactive({
    item: {},
  });
  const getItemData = async () => {
    let route = useRoute();
    const res = await get("/api/shop/" + route.params.id);
    if (res?.error === 0) {
      data.item = res.data;
    }
    // console.log(res);
  };
  let { item } = toRefs(data);
  return {
    getItemData,
    item,
  };
};
const useGobackEffect = () => {
  let router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return {
    handleBackClick,
  };
};
export default {
  name: "Shop",
  components: { ShopInfo },
  setup() {
    let { item, getItemData } = useShopInfoEffect();
    getItemData();
    let { handleBackClick } = useGobackEffect();
    return {
      handleBackClick,
      item,
    };
  },
};
</script>


<style lang="scss" scoped>
.wrapper {
  padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: 0.2rem 0 0.16rem 0;
  line-height: 0.32rem;
  &__back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: #F5F5F5;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: #B7B7B7;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      font-size: 0.14rem;
      color: #333;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>