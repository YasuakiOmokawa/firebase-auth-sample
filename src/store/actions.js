/* eslint-disable no-unused-vars */
import * as types from "./mutation-types";
import { Auth, List, Task } from "../api";
/* eslint-enable no-unused-vars */

export default {
  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(({ uid, email }) => {
        commit(types.AUTH_LOGIN, { uid, email });
      })
      .catch(err => {
        throw err;
      });
  },

  signedIn: ({ commit }) => {
    return Auth.signedIn().then(({ uid, email }) => {
      commit(types.AUTH_LOGIN, { uid, email });
    });
  },

  fetchLists: ({ commit }) => {
    // TODO:
    throw new Error("fetchLists action should be implemented");
  },

  addTask: ({ commit }) => {
    // TODO:
    throw new Error("addTask action should be implemented");
  },

  updateTask: ({ commit }) => {
    // TODO:
    throw new Error("updateTask action should be implemented");
  },

  removeTask: ({ commit }) => {
    // TODO:
    throw new Error("removeTask action should be implemented");
  },

  logout: ({ commit }) => {
    return Auth.logout()
      .then(() => {
        commit(types.AUTH_LOGOUT);
      })
      .catch(err => {
        throw err;
      });
  }
};
