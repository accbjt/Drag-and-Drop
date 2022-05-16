import React, { useState, cloneElement, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getCurrentScreenSize = () => {
  const small = window.matchMedia("(max-width: 640px)");

  if (small.matches) {
    return 'vertical';
  }

  return 'horizontal';
};

const DragAndDropContainer = ({ children }) => {
  const [items, setItems] = useState(children);

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction={getCurrentScreenSize()}>
        {(provided) => (
          <div
            className="flex flex-wrap gap-5 justify-center"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable key={item.props.draggableId} draggableId={item.props.draggableId} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {cloneElement(item, { dragHandleProps: provided.dragHandleProps })}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DragAndDropContainer;
