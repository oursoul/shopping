import { createApp } from "vue";
import App from "./App.vue";
//引入normalize.css
// import "normalize.css";
import router from "./router";
import "./style/base.scss";
import "./style/iconfont.scss";
createApp(App).use(router).mount("#app");
