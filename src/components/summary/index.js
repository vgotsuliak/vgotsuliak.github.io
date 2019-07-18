import React from 'react';
import Text from '../../shared/text';
import Images from '../../services/images';

class Summary extends React.Component {
  render() {
    return (
      <div>
        <img src={Images.avatarPhoto} />
        <Text value="Viacheslav Gotsuliak" />
      </div>
    );
  }
}

export default Summary;
