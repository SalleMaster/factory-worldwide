import React, { useState } from 'react';
import addDataFirestore from '../hooks/addDataFirestore';

const AddDataScreen = () => {
  const [fullName, setFullName] = useState('');
  const [balance, setBalance] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

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

    addDataFirestore(data);

    setFullName('');
    setBalance(0);
    setIsActive(false);
    setRegistered(false);
    setState('');
    setCountry('');
  };

  return (
    <div className='add-data-screen'>
      <header className='add-data-header'>
        <h1>Ovde Možete Dodati Podatak</h1>
      </header>
      <div className='container'>
        <form onSubmit={submitHandler}>
          <h3>Dodaj Podatak</h3>
          <div className='form-group'>
            <label className='form-label'>
              Full Name:
              <input
                required
                type='text'
                name='fullName'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
          </div>
          <div className='form-group'>
            <label className='form-label'>
              Balance:
              <input
                required
                type='number'
                name='balance'
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
              />
            </label>
          </div>
          <div className='form-group'>
            <label className='form-label'>
              Is Active:
              <input
                type='checkbox'
                name='isActive'
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
            </label>
          </div>
          <div className='form-group'>
            <label className='form-label'>
              Registered:
              <input
                type='checkbox'
                name='registered'
                checked={registered}
                onChange={(e) => setRegistered(e.target.checked)}
              />
            </label>
          </div>
          <div className='form-group'>
            <label className='form-label'>
              State:
              <input
                required
                type='text'
                name='state'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </label>
          </div>
          <div className='form-group'>
            <label className='form-label'>
              Country:
              <input
                required
                type='text'
                name='country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
          </div>
          <button type='submit'>Dodaj</button>
        </form>
      </div>
    </div>
  );
};

export default AddDataScreen;
