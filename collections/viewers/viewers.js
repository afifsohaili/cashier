var Viewers = new Meteor.Collection("viewers");
Collections.Viewers = Viewers;

if (Meteor.isServer) {
  Meteor.publish("receiptViewers", function(receiptId) {
    return Viewers.find({ receiptId: receiptId, announced: false });
  });
  Meteor.publish("requestedView", function(receiptId) {
    return Viewers.find({ viewerId: this.userId, receiptId: receiptId });
  });
  Meteor.methods({
    requestView: function(userId, accessCode) {
      if (userId && accessCode) {
        var shop = Collections.Shops.findOne({ accessCode: accessCode }),
            currentBill = shop.currentReceipt;

        Viewers.insert({
          viewerId: userId,
          receiptId: currentBill,
          announced: false
        });
      }
    },
    acceptView: function(receiptId) {
      Viewers.update(receiptId, { $set: {
        announced: true,
        accepted: true
      }});
    },
    rejectView: function(receiptId) {
      Viewers.update(receiptId, { $set: {
        announced: true,
        accepted: false
      }});
    }
  });
}
