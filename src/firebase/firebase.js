import * as firebase from 'firebase';

const config = {
};

firebase.initializeApp(config);

const database = firebase.database();


database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763
})
database.ref('expenses').push({
  description: 'Phone bill',
  note: '',
  amount: 5900,
  createdAt: 976123498763
})
database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 1200,
  createdAt: 976123498763
})

// database.ref('notes').push({
//   title: 'To Do',
//   body: 'Go for a run'
// });

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const { name, job: { title, company } } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company}`);
// });

// database.ref().update({
//   name: 'Gaby',
//   'job/title': 'FullStack Engineer',
//   'job/company': 'Scribd'
// })
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(40);
// }, 3500);
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
// setTimeout(() => {
//   database.ref('age').set(39);
// }, 10500);


// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Gaby Halley',
//   age: 39,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Atlanta',
//     country: 'United States'
//   }
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data removed');
//   })
//   .catch((e) => {
//     console.log('Data not removed', e);
//   });

// database.ref('isSingle').set(null);
