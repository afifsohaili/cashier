Viewers = new Meteor.Collection("viewers");
Collections.Viewers = Viewers;

if (Meteor.isServer) {
  Meteor.publish("receiptViewers", function(receiptId) {
    return Viewers.find({ receiptId: receiptId, announced: false });
  });
  Meteor.methods({
    requestView: function(userId, receiptId) {
      if (userId && receiptId) {
        Viewers.insert({
          viewerId: userId,
          receiptId: receiptId,
          announced: false
        });
      }
    }
  });
}
