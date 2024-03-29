var Shops = new Meteor.Collection("shops");
Collections.Shops = Shops;

Schemas.shop = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  logo: {
    type: String,
    label: "Logo Image URL"
  }
});

if (Meteor.isServer) {
  Meteor.publish("shop", function(ownerId) {
    return Collections.Shops.find({ ownerId: ownerId }, { limit: 1 });
  });
  Meteor.publish("shopCurrentReceipt", function(accessCode) {
    return Shops.find({ accessCode: accessCode }, { limit: 1 });
  });

  Meteor.methods({
    makeCurrentReceipt: function(receiptId) {
      Collections.Shops.update({ ownerId: Meteor.userId() }, {
        $set: {
          currentReceipt: receiptId
        }
      });
    },
    addShop: function(modifier) {
      check(modifier, Schemas.shop);
      _.extend(modifier, {
        ownerId: Meteor.userId(),
        accessCode: Meteor.uuid().substring(0, 6)
      });
      var docId = Collections.Shops.insert(modifier);
      return docId;
    }
  });
}
