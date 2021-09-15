import Axios from "axios";
// 创建axios实例
const axios = Axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // token存在,打入header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 1) {
      // code不为1则判定为一个错误
      alert("Error");
      // 假设：10008-非法令牌; 10012-其他客户端已登录; 10014-令牌过期;
      if (res.code === 10008 || res.code === 10012 || res.code === 10014) {
        // dispatch action resetToken
        location.reload();
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    // 接口报错，400 or 500
    alert("接口报错");
    return Promise.reject(error);
  }
);
export default axios;
