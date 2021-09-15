import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import request from "./utils/request";

// import "./permission";
const app = createApp(App);

app
  .use(store)
  .use(router)
  .mount("#app");
// Vue3.0 全局挂载
// 使用： this.$http
// setup使用:
//       import { getCurrentInstance } from "vue";
//       const { proxy } = getCurrentInstance();
app.config.globalProperties.$http = request;
