import * as firebase from 'firebase';

const config = {

};

firebase.initializeApp(config);

const database = firebase.database();
database.ref().set({
  name: 'Gaby Halley',
  age: 39,
  isSingle: false,
  location: {
    city: 'Atlanta',
    country: 'United States'
  }
});

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data removed');
//   })
//   .catch((e) => {
//     console.log('Data not removed', e);
//   });

database.ref('isSingle').set(null);