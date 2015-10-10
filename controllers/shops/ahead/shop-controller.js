Controllers.ShopController = RouteController.extend({
  layoutTemplate: "shopLayout",

  onBeforeAction: function () {
    this.next();
  }
});
