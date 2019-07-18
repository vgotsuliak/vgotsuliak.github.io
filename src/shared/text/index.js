import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'react-jss';
import styles from './style.js';

const size = {
  BIG: 'BIG',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
}

const color = {
  BLACK: 'BLACK',
  GRAY: 'GRAY',
}

class Text extends React.Component {

  static propTypes = {
    value: PropTypes.string,
    size: PropTypes.oneOf([size.BIG, size.MEDIUM, size.SMALL]),
    color: PropTypes.oneOf([color.BLACK, color.GRAY])
  }

  static defaultProps = {
    size: size.BIG,
    color: color.BLACK,
  }

  render() {
    return (
      <span className={this.getStyle()}>
        {this.props.value}
      </span>
    );
  }

  getStyle = () => {
    const { classes, size:textSize, color:textColor } = this.props;
    return classNames({
      [classes.big]: textSize === size.BIG,
      [classes.medium]: textSize === size.MEDIUM,
      [classes.small]: textSize === size.SMALL,
      [classes.black]: textColor === color.BLACK,
      [classes.gray]: textColor === color.GRAY,
    });
  }
}

export default withStyles(styles)(Text);
export { size, color };
