Router.route("/receipts/:_id", {
  name: "receipts.show",
  waitOn: function() {
    return [
      Meteor.subscribe("receipt", this.params._id),
      Meteor.subscribe("requestedView", this.params._id)
    ];
  },
  data: function() {
    return {
      receipt: Collections.Receipts.findOne({ _id: this.params._id })
    }
  },
  action: function() {
    var requestQuery = Collections.Viewers.find({
      viewerId: Meteor.userId(),
      receiptId: this.params._id
    }, { limit: 1 });
    if(requestQuery.count() === 0) {
      this.render("notAuthorized");
    } else {
      var request = requestQuery.fetch()[0];
      if (request.accepted) {
        this.render("shopReceiptsShow");
      } else {
        this.render("notAuthorized");
      }
    }
  }
});
