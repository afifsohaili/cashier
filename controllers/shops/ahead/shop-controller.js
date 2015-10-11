Controllers.ShopController = Controllers.ApplicationController.extend({
  layoutTemplate: "shopLayout",
  waitOn: function() {
    return Meteor.subscribe("shop", Meteor.userId());
  },
  data: function() {
    return Collections.Shops.findOne({ ownerId: Meteor.userId() });
  },
  onBeforeAction: [Filters.authenticate, function() {
    var shop = Collections.Shops.findOne({ ownerId: Meteor.userId() });
    if (shop) {
      this.next();
    } else {
      this.render("shopsNew");
    }
  }]
});
