import React from 'react';
import {Container, Header} from 'semantic-ui-react';
import RouterButton from '../components/RouterButton';
import Filters from '../components/Filters.js';
import TaskList from './TaskList.js';
import '../styles/TaskListContainer.css';

export default class TaskListContainer extends React.Component {
  render() {
    return (
      <Container>
        <Header as='h1' className='container-header'>Prioritized Task List</Header>
        <RouterButton title='New' route='/new' />
        <Filters />
        <TaskList />
      </Container>
    );
  }
}