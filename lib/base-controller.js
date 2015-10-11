Controllers.ApplicationController = RouteController.extend({
  layoutTemplate: "applicationLayout",

  onBeforeAction: [Filters.authenticate]
});
