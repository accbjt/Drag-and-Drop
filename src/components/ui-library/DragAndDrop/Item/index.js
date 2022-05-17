import React, { createContext, useContext } from 'react';

export const DragAndDropItemContext = createContext(null);
export const useDragAndDropItem = () => {
  const context = useContext(DragAndDropItemContext);

  if (!context) {
    throw new Error('useDragAndDrop can only be used in <DragAndDrop.Item>');
  }

  return context;
};

const Item = ({ children, dragHandleProps }) => (
  <DragAndDropItemContext.Provider value={{ dragHandleProps }}>
    {children}
  </DragAndDropItemContext.Provider>
);

export default Item;
