var template = Template.pagesHome;

template.events({
  "submit #connect": function(e) {
    e.preventDefault();
    var accessCode = $("#shop-code").val();
    Meteor.call("requestView", Meteor.userId(), accessCode);
    Meteor.subscribe("shopCurrentReceipt", accessCode, function() {
      var shopCurrentReceiptId = Collections.Shops.
        findOne({ accessCode: accessCode }).currentReceipt;
      Router.go("receipts.show", { _id: shopCurrentReceiptId });
    });
  }
});
