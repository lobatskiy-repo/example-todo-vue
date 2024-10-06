export default {
  // Set Initial Data
  SAVE_USER_DATA(state, payload) {
    state.userData = payload;
  },
  ADD_NEW_TAG(state, tagName = payload) {
    state.allTags.push({ name: tagName, color: state.defaultTagColor });
  },
  CREATE_NEW_TODO(state, payload) {
    state.todos.unshift(payload);
  },
  MARK_AS_COMPLETE(state, key = payload) {
    if (state.todos[key].completed) {
      state.todos[key].completed = false;
    } else {
      state.todos[key].completed = true;
    }
  },
  DELETE_TODO(state, key = payload) {
    state.todos.splice(key, 1);
  },

  UPDATE_TODO(state, payload) {
    state.todos.forEach((element) => {
      if (element.id == payload.id) {
        console.log("UPDATE ", element);
      }
    });
  },
};
