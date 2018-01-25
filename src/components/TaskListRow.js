import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react';
import {DragSource, DropTarget} from 'react-dnd';
import moment from 'moment';
import RouterButton from '../components/RouterButton';
import * as dragDrop from '../dragDrop';
import '../styles/TaskListRow.css';

class TaskListRow extends React.Component {
  render() {
    const {task, isDragging, connectDragSource, connectDropTarget} = this.props;
    const opacity = isDragging ? 0 : 1;
    const today = moment().startOf('date');

    const expediteTask = () => {
      this.props.expediteTask(task);
    };

    const getExpediteLink = () => {
      if (!task.expedited) {
          return (<a onClick={expediteTask} style={{cursor: 'pointer'}}>Expedite</a>);
      }
    };

    const getTableCellId = (column) => {
      return 'task_' + task.id + '_' + column;
    }

    return connectDragSource(connectDropTarget(
      <tr key={task.id} id={'task_' + task.id} style={{ opacity: opacity, cursor: 'move' }}>
        <Table.Cell id={getTableCellId('priority')}>
          <span className={task.expedited ? 'expedited-task' : ''}>
            {task.priority}
            <sup>{task.expedited ? ' Expedited': ''}</sup>
          </span>
        </Table.Cell>
        <Table.Cell id={getTableCellId('description')}>{task.description}</Table.Cell>
        <Table.Cell id={getTableCellId('location')}>{task.location}</Table.Cell>
        <Table.Cell id={getTableCellId('entryDate')}>{moment(task.entryDate).format('L')}</Table.Cell>
        <Table.Cell id={getTableCellId('dueDate')}>
          <span className={moment(task.dueDate).isBefore(today) ? 'overdue-task' : ''}>
            {moment(task.dueDate).format('L')}
            <sup>{moment(task.dueDate).isBefore(today) ? ' Overdue' : ''}</sup>
          </span>
        </Table.Cell>
        <Table.Cell id={getTableCellId('action')}>
          {getExpediteLink()}
          <RouterButton icon='edit' floated='right' route={'/task/' + task.id} />
        </Table.Cell>
      </tr>
    ));
  }
}

TaskListRow.propTypes = {
  task: PropTypes.object.isRequired,
  moveTask: PropTypes.func.isRequired,
  expediteTask: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

export default 
  DragSource(dragDrop.cardType, dragDrop.cardSource, dragDrop.collectSource)(
    DropTarget(dragDrop.cardType, dragDrop.cardTarget, dragDrop.collectTarget)(
      TaskListRow
    )
  );