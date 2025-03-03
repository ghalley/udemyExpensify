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

database.ref('age').set(37);

database.ref('location/city').set('New York');

database.ref('attributes').set({
  height: 73,
  weight: 185
})