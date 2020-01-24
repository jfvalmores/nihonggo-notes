import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  description: {
    fontWeight: 400,
    fontSize: 15
  }
});

const getItems = () =>
  [
    { id: 'item-1', label: 'a', content: 'あ' },
    { id: 'item-2', label: 'i', content: 'い' },
    { id: 'item-3', label: 'u', content: 'う' },
    { id: 'item-4', label: 'e', content: 'え' },
    { id: 'item-5', label: 'o', content: 'お' }
  ];

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid,
  margin: `0 0 ${grid}px 0`,
  borderRadius: 2,
  borderWidth: 2,
  borderStyle: 'solid',
  color: 'rgb(9, 30, 66)',
  textAlign: 'center',
  fontSize: 30,
  fontWeight: 600,
  
  // change background colour if dragging
  background: isDragging ? 'rgb(222, 235, 255)' : 'rgb(255, 255, 255)',
  boxShadow: isDragging ? 'rgb(165, 173, 186) 2px 2px 1px' : '',
  borderColor: isDragging ? 'rgba(9, 30, 66, 0.71)' : 'transparent',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'rgb(255, 235, 230)' : 'rgb(235, 236, 240)',
  padding: grid,
  width: 150
});

const HiraganaListv2 = () => {
  const [items, setItems] = useState(getItems());

  const classes = styles();

  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const data = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(data);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {item.content} 
                    <div className={classes.description}>
                      <span>{item.label}</span>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}



export default HiraganaListv2;