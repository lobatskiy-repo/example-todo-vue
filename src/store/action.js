export default {
  async createNewTodo({ commit }, payload) {
    commit("CREATE_NEW_TODO", payload);
  },
  async updateTodo({ commit }, payload) {
    commit("UPDATE_TODO", payload);
  },
  async deleteTodo({ commit }, payload) {
    commit("DELETE_TODO", payload);
  },
};
