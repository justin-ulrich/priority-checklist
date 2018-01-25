export const cardType = 'CARD';

export const cardSource = {
  beginDrag(props, monitor, component) {
    return props.task;
  }
};

export const collectSource = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

export const cardTarget = {
  hover(props, monitor, component) {
    const dragItem = monitor.getItem();
    const hoverItem = props.task;
    if (dragItem.id === hoverItem.id || !monitor.isOver()) {
      return;
    }
    props.moveTask(dragItem, hoverItem);
  }
};

export const collectTarget = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};