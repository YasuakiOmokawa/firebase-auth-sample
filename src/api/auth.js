import firebase from "firebase";

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(authInfo.email, authInfo.password)
        .then(user =>
          resolve({
            uid: user.uid,
            email: user.email
          })
        )
        .catch(err => {
          reject(new Error(err.stack || err.message));
        });
    });
  },

  // onAuthStateChanged()を使うので、rejectは定義されない
  signedIn: () => {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        resolve({ uid: user.uid, email: user.email });
      });
    });
  },

  logout: () => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.stack || err.message));
        });
    });
  }
};
