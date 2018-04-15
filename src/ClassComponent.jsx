import React from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {
  render() {
    return <h3>{this.props.name}</h3>;
  }
}

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ClassComponent;
