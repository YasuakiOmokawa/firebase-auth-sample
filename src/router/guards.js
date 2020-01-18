import store from "../store";

export const authorizeToken = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // マッチしたルートにおいて、メタフィールドに`requiresAuth`が付与されている場合は
    // 認証されたユーザ情報があるかチェックする

    store.dispatch("signedIn").then(() => {
      if (!store.state.auth || !store.state.auth.uid) {
        next({ path: "/login" });
      } else {
        next();
      }
    });
  } else {
    next();
  }
};
