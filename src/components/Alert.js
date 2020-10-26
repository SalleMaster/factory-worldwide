import React from 'react';

const Alert = ({ status, message }) => {
  return (
    <div className={status === 'success' ? 'alert success' : 'alert fail'}>
      {status === 'success' ? (
        <i className='fas fa-clipboard-check'></i>
      ) : (
        <i className='far fa-file-excel'></i>
      )}
      {message}
    </div>
  );
};

export default Alert;
