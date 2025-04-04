import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error("Error during login:", error);
    });
  }
};