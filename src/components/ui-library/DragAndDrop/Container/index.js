import React, { useState, cloneElement, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useResizeObserver from '@react-hook/resize-observer'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getCurrentScreenSize = (clientWidth) => {
  if (clientWidth <= 640) {
    return 'vertical';
  }

  return 'horizontal';
};

const Container = ({ children }) => {
  const [items, setItems] = useState(children);
  const [clientWidth, setClientWidth] = useState(0);

  useResizeObserver(document.body, (entry) => {
    setClientWidth(entry.target.clientWidth);
  })

  const onDragEnd = (result) => {
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

  useEffect(() => {
    setItems(children);
  }, [children]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction={getCurrentScreenSize(clientWidth)}>
        {(provided) => (
          <div
            className="flex flex-wrap gap-5 justify-center"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => {
              return (
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
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Container;
