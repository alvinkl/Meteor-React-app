Resolutions = new Mongo.Collection('resolutions');

Meteor.publish('allResolutions', function() {
  return Resolutions.find();
});

Meteor.publish('userResolutions', function() {
  console.log(this.userId);
  return Resolutions.find({user: this.userId});
});
