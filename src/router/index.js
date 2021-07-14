import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/home/Home";
// import Login from "../views/login/Login";
// import Shop from "../views/login/Shop";
// import Register from "../views/register/Register";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home-007" */ "../views/home/Home")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login-007" */ "../views/login/Login"),
    beforeEnter(to, from, next) {
      //登录状态访问login页面，跳转到home页面
      let { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    }
  },
  {
    path: "/register",
    name: "Register",
    // 异步路由
    component: () =>
      import(
        /* webpackChunkName: "register-007" */ "../views/register/Register"
      )
  },
  {
    // 路由传参
    path: "/shop/:id",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: "shop-007" */ "../views/shop/Shop")
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

//路由守卫，跳转之前执行该函数,调用next向下执行
router.beforeEach((to, from, next) => {
  // let isLogin = localStorage.isLogin;
  // if (isLogin || to.name === "Login") {
  //   next();
  // } else {
  //   next({ name: "Login" });
  // }
  //简化成三元表达式和结构
  let { isLogin } = localStorage;
  isLogin || to.name === "Login" ? next() : next({ name: "Login" });
});

export default router;
