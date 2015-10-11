Router.route("/shop/dashboard", {
  controller: "Controllers.ShopController",
  name: "dashboard",
  waitOn: function() {
    return [
      Meteor.subscribe("shop", { ownerId: Meteor.userId() })
    ];
  },
  action: function() {
    this.render("shopDashboard");
  }
});
