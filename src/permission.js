import router from "./router";
// import store from "./store";
// 页面白名单，不需要鉴权
const whiteList = ["/about"];
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    // 有token，已经登录
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      // 未登录, 重定向去login
      next(`/login?redirect=${to.path}`);
    }
  }
});
