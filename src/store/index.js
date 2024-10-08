import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./action";

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
