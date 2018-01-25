import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Container, Grid, Checkbox, Button} from 'semantic-ui-react';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import * as filterActions from '../actions/filterActions';
import * as utils from '../utils';
import '../styles/Filters.css';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  render() {
    const {dueDate, overdueOnly} = this.props.filters;

    const getTaskCount = () => {
      let filteredList = utils.getFilteredList(this.props.taskList, dueDate, overdueOnly);
      return filteredList ? filteredList.length : 0;
    };

    const changeDueDate = (date) => {
      this.props.filterActions.updateDueDate(date);
    };

    const toggleOverdueOnly = () => {
      this.props.filterActions.updateOverdueOnly(!overdueOnly);
    };

    return (
      <Container>
        <Grid id='filter-bar' verticalAlign='middle'>
          <Grid.Column verticalAlign='middle' width={ 3 }>
            <span>{getTaskCount()} tasks</span>
          </Grid.Column>
          <Grid.Column verticalAlign='middle' width={5}>
            <span id='calendar-label' style={{paddingRight: '15px', fontSize: '14px', display: 'inline-block'}}>Due by</span>
            <SingleDatePicker
              showDefaultInputIcon
              date={dueDate}
              onDateChange={changeDueDate}
              focused={this.state.focused}
              onFocusChange={({focused}) => this.setState({focused})}
              numberOfMonths={1}
              isOutsideRange={() => {
                return false;
              }}
            />
          </Grid.Column>
          <Grid.Column verticalAlign='middle' width={5}>
            <Checkbox toggle label='Overdue only' checked={overdueOnly} onClick={toggleOverdueOnly} />
          </Grid.Column>
          <Grid.Column verticalAlign='middle' width={3}>
            <Button id='setting-button' floated='right' icon='setting' className={'icon-button'} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  taskList: PropTypes.array.isRequired,
  filterActions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    filters: state.filters,
    taskList: state.taskList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterActions: bindActionCreators(filterActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);