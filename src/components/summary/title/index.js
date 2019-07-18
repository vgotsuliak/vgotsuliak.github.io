import React from 'react';
import withStyles from 'react-jss';
import Text, { size, color } from '../../../shared/text';
import Texts from '../../../services/texts';
import styles from './style.js';

class Title extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.title}>
        <Text value={Texts.viacheslavGotsuliak} size={size.BIG} />
        <Text value={Texts.softwareEngineer} size={size.MEDIUM} color={color.GRAY} />
      </div>
    );
  }
};

export default withStyles(styles)(Title);
