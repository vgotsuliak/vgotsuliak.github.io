import React from 'react';
import withStyles from 'react-jss';
import Text, { size } from '../../shared/text';
import Images from '../../services/images';
import Texts from '../../services/texts';
import Avatar from '../../shared/avatar';
import Title from '../../shared/title';
import styles from './style.js';

class Summary extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.summary}>
        <div className={classes.side}>
          <Avatar photo={Images.avatarPhoto} />
        </div>
        <div className={classes.main}>
          <Title />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Summary);
