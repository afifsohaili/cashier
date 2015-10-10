Router.route("/shop/receipts/:_id/items/new", {
  controller: "Controllers.ShopController",
  name: "shop.receipts.items.new",
  waitOn: function() {
    return Meteor.subscribe("receipt", this.params._id);
  },
  data: function() {
    return Collections.Receipts.findOne({ _id: this.params._id });
  },
  action: function() {
    this.render("itemsNew");
  }
});
