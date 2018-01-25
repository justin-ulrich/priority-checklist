import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import {Button} from 'semantic-ui-react';

class RouterButton extends React.Component {
  render() {
    const {title, icon, floated, route, history} = this.props;

    return (
      <Button 
        icon={icon} 
        floated={floated} 
        onClick={() => history.push(route)} 
        className={icon ? 'icon-button' : ''}>
          {title}
      </Button>
    );
  } 
}

RouterButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  floated: PropTypes.string,
  route: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(RouterButton);