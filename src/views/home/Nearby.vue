<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      :to="`/shop/${item.id}`"
      v-for="item in nearbyList"
      :key="item"
    >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { get } from "../../utils/request.js";
import ShopInfo from "../../components/shopInfo";
const useNearbyList = () => {
  let nearbyList = ref([]);
  const getNearbyList = async () => {
    const res = await get("/api/storelist");
    if (res?.error === 0) {
      // console.log(res.data);
      nearbyList.value = res.data;
    }
    // console.log(res);
  };
  return { nearbyList, getNearbyList };
};
export default {
  name: "Nearby",
  components: { ShopInfo },
  setup() {
    const { nearbyList, getNearbyList } = useNearbyList();
    getNearbyList();
    return {
      nearbyList,
    };
  },
  create: function () {},
};
</script>

<style scoped lang="scss">
/* @import "../../style/viriables.scss"; */
/* @import "../../style/mixins.scss"; */
.nearby {
  &__title {
    text-align: left;
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: #333;
  }
  a {
    text-decoration: none;
  }
}
</style>