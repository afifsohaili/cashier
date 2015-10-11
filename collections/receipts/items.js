Schemas.item = new SimpleSchema({
  name: {
    type: String,
    label: "Item Name",
  },
  quantity: {
    type: Number,
    label: "Quantity"
  },
  unitPrice: {
    type: Number,
    decimal: true,
    label: "Unit Price"
  }
});

if (Meteor.isServer) {
  Meteor.methods({
    addItemToReceipt: function(modifier, doc) {
      check(modifier.$set, Schemas.item);
      var docId;

      _.extend(modifier.$set, { identifier: Meteor.uuid() });
      if (doc) {
        Collections.Receipts.update(doc, { $push: { items: modifier.$set } });
        docId = doc;
      } else {
        var shop = Collections.Shops.findOne({ ownerId: Meteor.userId() });
        docId = Collections.Receipts.insert({
          shopId: shop._id,
          items: [modifier.$set]
        });
      }

      return docId;
    }
  });
}
