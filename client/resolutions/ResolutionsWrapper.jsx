import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection('resolutions');

export default class ResolutionsWrapper extends TrackerReact(React.Component) {

  constructor() {
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions")
      }
    };
  }

  componentWillUnmount() {
    this.state.subscription.resolutions.stop();
  }

  resolutions() {
    return Resolutions.find().fetch();
  }

  render() {
    let res = this.resolutions();

    return (
      <div>
        <h1>My Resolutions</h1>
        <ResolutionsForm />
        <div>
          <ul className='resolutions'>
            { res.map( resolution => <ResolutionSingle key={ resolution._id } resolution={ resolution } /> ) }
          </ul>
        </div>
      </div>
    );
  }
}
