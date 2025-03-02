import * as firebase from 'firebase';

const config = {
  // configs
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Gaby Halley'
});
