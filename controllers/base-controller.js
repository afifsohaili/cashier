ApplicationController = RouteController.extend({
  layoutTemplate: "applicationLayout",

  onBeforeAction: function () {
    this.next();
  }
});

Router.route("/", {
  name: "home",
  action: function() {
    this.render("pagesHome");
  }
});
