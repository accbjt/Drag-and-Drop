import React from 'react';

const CardContent = ({ children }) => {
  return (
    <div className="flex h-26 items-center justify-center overflow-hidden relative">
      {children}
    </div>
  );
};

export default CardContent;
