Router.route("/shop/dashboard", {
  controller: "Controllers.ShopController",
  name: "dashboard",
  waitOn: function() {
    return [
      Meteor.subscribe("shop", Meteor.userId(), function() {
        debugger;
        Meteor.subscribe("shopReceipts", Collections.Shops.findOne()._id);
      })
    ];
  },
  data: function() {
    return {
      receipts: Collections.Receipts.find().fetch();
    }
  }
  action: function() {
    this.render("shopDashboard");
  }
});
