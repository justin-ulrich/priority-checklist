import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Container, Table, Icon} from 'semantic-ui-react';
import TaskListRow from '../components/TaskListRow.js';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import * as utils from '../utils';
import * as taskListActions from '../actions/taskListActions';
import '../styles/TaskList.css';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.moveTask = this.moveTask.bind(this);
    this.expediteTask = this.expediteTask.bind(this);
  }

  moveTask(dragTask, hoverTask) {
    this.props.taskListActions.updateList(this.props.taskList, dragTask, hoverTask);
    this.props.taskListActions.updatePriority(this.props.taskList);
  }

  expediteTask(task) {
    this.props.taskListActions.expeditePriority(this.props.taskList, task);
    this.props.taskListActions.updatePriority(this.props.taskList);
  }

  render() {
    const {dueDate, overdueOnly} = this.props.filters;
    const tableHeaders = ['PRIORITY', 'TASK', 'LOCATION', 'ENTRY DATE', 'DUE DATE', 'ACTION'];

    return (
      <Container>
        <Table id='task-list' striped className={this.props.taskList.length > 0 ? '' : 'hidden'}>
          <Table.Header>
            <Table.Row>
              {tableHeaders.map((tableHeader, i) => {
                return (
                  <Table.HeaderCell id={i} key={i}>{tableHeader}</Table.HeaderCell>
                );
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {utils.getFilteredList(this.props.taskList, dueDate, overdueOnly).map((task, i) => {
              return (
                <TaskListRow 
                  index={i}
                  key={task.id}
                  task={task}
                  moveTask={this.moveTask}
                  expediteTask={this.expediteTask} 
                />
              );
            })}
          </Table.Body>
        </Table>
        <div className={'loading-message' + (this.props.taskList.length > 0 ? ' hidden' : '')}>
          <Icon loading name='spinner' />{' Loading...'}
        </div>
      </Container>
    );
  }
}

TaskList.propTypes = {
  filters: PropTypes.object.isRequired,
  taskList: PropTypes.array.isRequired,
  taskListActions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    filters: state.filters,
    taskList: state.taskList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskListActions: bindActionCreators(taskListActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(TaskList));