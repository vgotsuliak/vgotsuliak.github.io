import React from 'react';
import PropTypes from 'prop-types';

class Text extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  }
  render() {
    return (<span>{this.props.value}</span>);
  }
}

export default Text;
