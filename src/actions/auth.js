import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error("Error during login:", error);
    });
  }
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut().then(() => {
      console.log("Logged out successfully");
    }).catch((error) => {
      console.error("Error during logout:", error);
    });
  }
};
