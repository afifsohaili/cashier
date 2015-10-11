var Receipts = new Mongo.Collection("receipts");
Collections.Receipts = Receipts;

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Collections.Receipts.find().count() === 0) {
      Collections.Receipts.insert({
        items: [
          {
            identifier: "14213",
            name: "Bawal Crepe - Bidang 60",
            price: 30.99,
            quantity: 10
          },
          {
            identifier: "12345",
            name: "Batik Shawl",
            price: 20.50,
            quantity: 10
          }
        ]
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish("receipt", function(receiptId) {
    return Receipts.find({ _id: receiptId });
  });
  Meteor.publish("shopReceipts", function(shopId) {
    return Receipts.find({ shopId: shopId });
  });
}
