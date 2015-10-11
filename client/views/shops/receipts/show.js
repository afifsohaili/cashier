var template = Template.shopReceiptsShow;
template.rendered = function() {
  $('.collapsible').collapsible({
    accordion: false
  });
}

template.events({
  "click .accept": function() {
    Meteor.call("acceptView", this._id);
  },
  "click .reject": function() {
    Meteor.call("rejectView", this._id);
  }
});

template.helpers({
  isOwner: function() {
    return Roles.userIsInRole(Meteor.userId(), "admin");
  }
});
