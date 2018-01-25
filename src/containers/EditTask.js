import React from 'react';
import {Container} from 'semantic-ui-react';
import RouterButton from '../components/RouterButton';

export default class EditTask extends React.Component {
  render() {
    const {match} = this.props;

    return (
      <Container>
        <RouterButton title='Back' route='/' />
        <h1>Edit task {match.params.id}</h1>
      </Container>
    );
  }
}