import React from 'react';
import { useDragAndDropItem } from '.';

const ItemDragHandle = ({ children }) => {
  const { dragHandleProps } = useDragAndDropItem();

  return (
    <div {...dragHandleProps}>
      {children}
    </div>
  );
};

export default ItemDragHandle;
