Router.route("/shop/receipts/new", {
  controller: "Controllers.ShopController",
  name: "shop.receipts.new",
  action: function() {
    this.render("shopReceiptsNew");
  }
});

Router.route("/shop/receipts/:_id", {
  controller: "Controllers.ShopController",
  name: "shop.receipts.show",
  waitOn: function() {
    return Meteor.subscribe("receipt", this.params._id);
  },
  data: function() {
    return Collections.Receipts.findOne({ _id: this.params._id });
  },
  action: function() {
    this.render("shopReceiptsShow");
  }
});
