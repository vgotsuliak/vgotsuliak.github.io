import React from 'react';
import withStyles from 'react-jss';
import { string } from 'prop-types';
import styles from './style';

class Avatar extends React.Component {
  static propTypes = {
    photo: string,
  }
  render() {
    const { photo, classes } = this.props;
    return (
      <div className={classes.avatar}>
        <img src={photo} className={classes.avatarImage} alt="Avatar" />
      </div>
    );
  }
};

export default withStyles(styles)(Avatar);
