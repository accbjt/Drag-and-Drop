import React from 'react';

const Card= ({ children }) => {
  return (
    <div className='bg-pippen-gray h-40 rounded-lg w-52 overflow-hidden'>
      {children}
    </div>
  );
};

export default Card;
