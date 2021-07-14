<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="//cdnmusic.migu.cn/tycms_picture/20/06/163/200611105045154_none_9619.jpg"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        v-model="data.mobile"
        placeholder="请输入手机号"
      />
    </div>
    <div class="wrapper__input">
      <input
        v-model="data.password"
        type="password"
        class="wrapper__input__content wrapper__gotop"
        placeholder="请输入密码"
      />
    </div>
    <div class="wrapper__login-button wrapper__gotop" @click="handleLogin">
      登陆
    </div>
    <div class="wrapper__login-link wrapper__gotop" @click="handleRegister">
      立即注册
    </div>
    <Toast :message="data.toastMessage" v-if="data.showToast" />
  </div>
</template>

<script>
// 登录之后进行路由跳转
import { useRouter } from "vue-router";
import { reactive } from "vue";
// import axios from "axios";
import { post } from "../../utils/request.js";
//引入toast
import Toast from "../../components/toast.vue";
export default {
  name: "Login",
  components: { Toast },
  setup() {
    //用户名和密码
    let data = reactive({
      username: "",
      password: "",
      showToast: false,
      toastMessage: "",
    });
    let router = useRouter();
    // const handleLogin = () => {
    //   axios
    //     .post(
    //       "https://www.fastmock.site/mock/2cc0ab9bf1c2b238c3c674e5be8884fc/api/login",
    //       {
    //         username: data.username,
    //         password: data.password,
    //       }
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       alert("success");
    //       // 登录之后进行路由跳转
    //       localStorage.isLogin = true;
    //       router.push({ name: "Home" });
    //     })
    //     .then(() => {
    //       console.log();
    //     });
    // };
    const showToast = (msg) => {
      data.showToast = true;
      data.toastMessage = msg;
      setTimeout(() => {
        data.showToast = false;
        data.toastMessage = "";
      }, 2000);
    };
    //使用async ...await语法
    const handleLogin = async () => {
      // 加入try...catch，如果报错的话，也会进行相应提示
      try {
        // let res = await axios.post(
        //   "https://www.fastmock.site/mock/2cc0ab9bf1c2b238c3c674e5be8884fc/api/login",
        //   {
        //     username: data.username,
        //     password: data.password,
        //   }
        // );
        //换成封装后的方法
        let res = await post("111/api/login", {
          username: data.username,
          password: data.password,
        });
        if (res?.error === "0") {
          // 登录之后进行路由跳转
          console.log(res);
          data.toastMessage = "";
          localStorage.isLogin = true;
          router.push({ name: "Home" });
          // alert("success");
          // router.push({ name: "Home" });
        } else {
          showToast("登录失败");
          // alert("reuquest  error");
        }
      } catch {
        showToast("请求失败");
      }
    };
    const handleRegister = () => {
      // 登录之后进行路由跳转
      // localStorage.isLogin = true;
      router.push({ name: "Register" });
    };
    return {
      handleLogin,
      handleRegister,
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  padding: 0 16px;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  /* &__gotop {
    transform: translateY(-50px);
  } */
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  .wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &__img {
      display: block;
      margin: 0 auto 0.4rem auto;
      width: 0.66rem;
      height: 0.66rem;
      border-radius: 50%;
    }
    &__input {
      font-size: 20px;
      max-width: 500px;
      margin: 0 auto;
      background: #F9F9F9;
      border: 1px solid rgba(0, 0, 0, 0.1);
      margin: 0 auto 0.16rem;
      line-height: 0.48rem;
      overflow: hidden;
      border-radius: 6px;
      /* width: 100%; */
      &__content {
        padding: 0 0.16rem;
        line-height: 0.48rem;
        border: none;
        outline: none;
        width: 100%;
        background: none;
        font-size: 0.16rem;
        color: $content-notice-fontcolor;
        background: none;
        /* 设置placeholder字体颜色 */
        &::placeholder {
          color: $content-notice-fontcolor;
        }
      }
    }
    &__login-button {
      max-width: 500px;
      margin: 0 auto;
      /* padding: 0 0.16rem; */
      margin: 0.32rem auto 0.16rem;
      line-height: 0.48rem;
      background: #0091FF;
      box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
      border-radius: 0.04rem;
      border-radius: 0.04rem;
      color: #fff;
      font-size: 0.16rem;
      text-align: center;
    }
    &__login-link {
      text-align: center;
      font-size: 0.14rem;
      color: $content-notice-fontcolor;
    }
  }
  &__login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091FF;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>