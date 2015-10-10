Controllers.ApplicationController = RouteController.extend({
  layoutTemplate: "applicationLayout",

  onBeforeAction: function () {
    this.next();
  }
});

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
