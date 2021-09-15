const state = {
  routes: [], // 完整路由表
  addRoutes: [], // 用户可访问路由表
};
const mutations = {
  setRoutes: (state, routes) => {
    console.log(state, routes);
  },
};
const actions = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
