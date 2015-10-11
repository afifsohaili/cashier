Router.route("/receipts/:_id", {
  name: "receipts.show",
  waitOn: function() {
    return Meteor.subscribe("receipt", this.params._id);
  },
  data: function() {
    return {
      receipt: Collections.Receipts.findOne({ _id: this.params._id })
    }
  },
  action: function() {
    this.render("shopReceiptsShow");
  }
});
