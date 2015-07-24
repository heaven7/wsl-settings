Meteor.publish(null, function () {
    return Settings.find();
});
