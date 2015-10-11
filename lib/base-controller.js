Controllers.ApplicationController = RouteController.extend({
  layoutTemplate: "applicationLayout",

  onBeforeAction: function () {
    if (Meteor.userId()) {
      this.next();
    } else {
      this.render("atForm");
    }
  }
});
