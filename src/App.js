import React, { useState, useEffect } from 'react';
import PropertyCard from './components/PropertyCard';
import DragAndDrop from './components/ui-library/DragAndDrop';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:8080/properties')
          .then(res => res.json());

          setProperties(response);
      } catch (err) {
        console.log(err);
      }
    };

    if (!properties.length) {
      fetchProperties();
    }
  }, [properties]);

  return (
    <div className="m-5">
      <DragAndDrop.DragAndDropContainer>
        {properties.map(property => {
          return (
            <DragAndDrop.DragAndDropItem key={property.id} draggableId={`drag-${property.id}`}>
              <PropertyCard property={property} />
            </DragAndDrop.DragAndDropItem>
          );
        })}
      </DragAndDrop.DragAndDropContainer>
    </div>
  );
}

export default App;
