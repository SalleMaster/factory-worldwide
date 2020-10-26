import { db } from '../firebase/config';

const addDataFirestore = (data, setAlert) => {
  db.collection('users')
    .add(data)
    .then(function (docRef) {
      setAlert({
        showAlert: true,
        status: 'success',
        message: `Document written with ID: ${docRef.id}`,
      });
    })
    .catch(function (error) {
      setAlert({
        showAlert: true,
        status: 'danger',
        message: `Error writting document: ${error}`,
      });
    });
};

export default addDataFirestore;
