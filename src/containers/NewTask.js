import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {Container, Header, Button, Form, Input} from 'semantic-ui-react';
import RouterButton from '../components/RouterButton';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import * as taskListActions from '../actions/taskListActions';
import _ from 'lodash';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      location: '',
      dueDate: null,
      focused: false
    };
  }

  render() {
    const {taskList, history} = this.props;

    const getMax = (name) => {
      return _.maxBy(taskList, name);
    }

    const handleSave = () => {
      if (!this.state.description || !this.state.location || !this.state.dueDate) {
        return;
      }

      let maxId = getMax('id');
      let maxPriority = getMax('priority');
      let newTask = {
        id: maxId ? maxId.id + 1 : 1,
        priority: maxPriority ? maxPriority.priority + 1 : 1,
        description: this.state.description,
        location: this.state.location,
        entryDate: moment().startOf('date'),
        dueDate: this.state.dueDate,
        expedited: false
      };
      
      this.props.taskListActions.addTask(taskList, newTask);
      history.push('/');
    }

    const handleDescriptionChange = (event) => {
      this.setState({description: event.target.value});
    };

    const handleLocationChange = (event) => {
      this.setState({location: event.target.value});
    };

    return (
      <Container>
        <Header as='h1' className='container-header'>Create New Task</Header>
        <Button onClick={handleSave}>Save</Button>
        <RouterButton title='Cancel' route='/' />
        <Form style={{paddingTop: '15px'}}>
          <Form.Field>
            <label>Task</label>
            <Input placeholder='Task description...' value={this.state.description} onChange={handleDescriptionChange} />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input placeholder='Location...' value={this.state.location} onChange={handleLocationChange} />
          </Form.Field>
          <Form.Field>
            <label>Due Date</label>
            <SingleDatePicker
              showDefaultInputIcon
              date={this.state.dueDate}
              onDateChange={(date) => this.setState({dueDate: date})}
              focused={this.state.focused}
              onFocusChange={({focused}) => this.setState({focused})}
              numberOfMonths={1}
              isOutsideRange={() => {
                return false;
              }}
            />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

NewTask.propTypes = {
  taskList: PropTypes.array.isRequired,
  taskListActions: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    taskList: state.taskList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskListActions: bindActionCreators(taskListActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewTask));