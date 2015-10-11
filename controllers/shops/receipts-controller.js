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
  onBeforeAction: function() {
    Meteor.call("makeCurrentReceipt", this.params._id);
    this.next();
  },
  waitOn: function() {
    return [
      Meteor.subscribe("receipt", this.params._id),
      Meteor.subscribe("receiptViewers", this.params._id),
    ];
  },
  data: function() {
    return {
      receipt: Collections.Receipts.findOne({ _id: this.params._id }),
      viewers: Collections.Viewers.find({ receiptId: this.params._id }).fetch()
    };
  },
  action: function() {
    this.render("shopReceiptsShow");
  }
});
