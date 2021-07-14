<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="//cdnmusic.migu.cn/tycms_picture/20/06/163/200611105045154_none_9619.jpg"
    />
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content wrapper__gotop"
        placeholder="请输入密码"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content wrapper__gotop"
        placeholder="确认密码"
      />
    </div>
    <div class="wrapper__login-button wrapper__gotop">立即注册</div>
    <div class="wrapper__login-link wrapper__gotop" @click="handleLogin">
      已有账号，立马登录
    </div>
  </div>
</template>

<script>
// 登录之后进行路由跳转
import { useRouter } from "vue-router";
export default {
  name: "Register",
  setup() {
    let router = useRouter();
    let handleLogin = () => {
      router.push({ name: "Login" });
    };
    return {
      handleLogin,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
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

      background: #F9F9F9;
      border: 1px solid rgba(0, 0, 0, 0.1);
      margin: 0 0.4rem 0.16rem 0.4rem;
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
      padding: 0 0.16rem;
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