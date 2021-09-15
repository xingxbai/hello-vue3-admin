const state = {
  token: localStorage.getItem("token"),
  // 其他用户信息
  roles: [123],
};
const mutations = {
  token: (state, routes) => {
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
