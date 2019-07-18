import React from 'react';
import experienceData from '../../../data/experience';
import Education from './education';
import Work from './work';

class Experience extends React.Component {

  render() {
    return (
      <div>
        <Education data={experienceData.education} />
        <Work data={experienceData.work} />
      </div>
    );
  }

}

export default Experience;
