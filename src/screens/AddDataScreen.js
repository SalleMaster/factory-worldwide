import React, { useState, useEffect } from 'react';
import addDataFirestore from '../hooks/addDataFirestore';
import Alert from '../components/Alert';

const AddDataScreen = () => {
  const [fullName, setFullName] = useState('');
  const [balance, setBalance] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [alert, setAlert] = useState({
    showAlert: false,
    status: '',
    message: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      fullName,
      balance,
      isActive,
      registered,
      state,
      country,
    };

    addDataFirestore(data, setAlert);

    setFullName('');
    setBalance(0);
    setIsActive(false);
    setRegistered(false);
    setState('');
    setCountry('');
  };

  useEffect(() => {
    if (alert.showAlert) {
      setTimeout(() => {
        setAlert({
          showAlert: false,
          success: '',
          message: '',
        });
      }, 5000);
    }
  }, [alert, setAlert]);

  return (
    <div className='add-data-screen'>
      <header className='add-data-header'>
        <h1>Add Users Data</h1>
      </header>
      <div className='container'>
        {alert.showAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
        <div className='form-wrapper'>
          <form onSubmit={submitHandler}>
            <h3>Add User</h3>
            <div className='form-group'>
              <label className='form-label'>Full Name:</label>
              <input
                required
                type='text'
                name='fullName'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Balance:</label>
              <input
                required
                type='number'
                name='balance'
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
              />
            </div>
            <div className='form-group checkbox'>
              <label className='form-label'>Is Active:</label>
              <input
                type='checkbox'
                name='isActive'
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
            </div>
            <div className='form-group checkbox'>
              <label className='form-label'>Registered:</label>
              <input
                type='checkbox'
                name='registered'
                checked={registered}
                onChange={(e) => setRegistered(e.target.checked)}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>State:</label>
              <input
                required
                type='text'
                name='state'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Country:</label>
              <input
                required
                type='text'
                name='country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <button type='submit'>Dodaj</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDataScreen;
