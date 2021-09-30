import React from 'react';

const ElementWithCondition: React.FC<{ isShow: boolean }> = ({ isShow, children }) => {
  if (!isShow) {
    return null;
  }

  return (
    <>
      {children}
    </>
  );
};

export default ElementWithCondition;
