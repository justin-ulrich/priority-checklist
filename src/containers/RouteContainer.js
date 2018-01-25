import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import * as filterActions from '../actions/filterActions';
import * as taskListActions from '../actions/taskListActions';
import TaskListContainer from './TaskListContainer.js';
import NewTask from './NewTask';
import EditTask from './EditTask';

class RouteContainer extends React.Component {
  componentWillMount() {
    this.props.filterActions.initializeFilters();
    this.props.taskListActions.loadList();
  }

 render() {
   return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={TaskListContainer} />
        <Route path='/new' component={NewTask} />
        <Route path='/task/:id' component={EditTask} />
      </div>
    </BrowserRouter>
   );
 } 
}

RouteContainer.propTypes = {
  filterActions: PropTypes.object.isRequired,
  taskListActions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterActions: bindActionCreators(filterActions, dispatch),
    taskListActions: bindActionCreators(taskListActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteContainer);