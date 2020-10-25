import { db } from '../firebase/config';

const addDataFirestore = (data) => {
  db.collection('users')
    .add(data)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
};

export default addDataFirestore;
