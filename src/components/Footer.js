import React from 'react';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className='footer'>
      <div className='fotter-wrapper'>
        <p>
          <span>{currentYear}</span> &copy; - radovanović
        </p>
      </div>
    </footer>
  );
};

export default Footer;
