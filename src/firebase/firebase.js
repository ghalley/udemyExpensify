import * as firebase from 'firebase';

const config = {
};

firebase.initializeApp(config);

const database = firebase.database();
database.ref().set({
  name: 'Gaby Halley',
  age: 39,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  location: {
    city: 'Atlanta',
    country: 'United States'
  }
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data removed');
//   })
//   .catch((e) => {
//     console.log('Data not removed', e);
//   });

// database.ref('isSingle').set(null);
