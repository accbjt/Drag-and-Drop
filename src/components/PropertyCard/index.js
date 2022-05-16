import React, { useState } from 'react';
import {
  Card, CardHeader, CardContent, CardFooter,
} from '../ui-library/Card';
import Button from '../ui-library/Button';
import DragAndDrop, { ItemDragHandle } from '../ui-library/DragAndDrop';

const getCurrentStatus = (status) => {
  if (status === 'todo') {
    return 'To do';
  }

  return 'Done';
};

const PropertyCard = ({ property }) => {
  const { orderNumber, address, image, status } = property;
  const [currentStatus, setCurrentStatus] = useState(status);

  return (
    <Card>
      <DragAndDrop.ItemDragHandle>
        <CardHeader>
          <div className="flex items-end justify-between pt-0.5 px-4">
            <div className="text-xxs text-gray-400">{orderNumber}</div>
            <div className="font-bold text-red-500 text-sm">2/12/22</div>
          </div>
        </CardHeader>
        <CardContent>
          <img
            className="-top-8 absolute"
            src={image}
          />
        </CardContent>
      </DragAndDrop.ItemDragHandle>
      <CardFooter>
        <div className="flex flex-col">
          <div className="flex font-semibold justify-center items-center text-xxs h-5">
            {address}
          </div>
          <Button
            onClick={() => setCurrentStatus(currentStatus === 'todo' ? 'done' : 'todo')}
            isDone={currentStatus === 'done'}
          >
            {getCurrentStatus(currentStatus)}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
