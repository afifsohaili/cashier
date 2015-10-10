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

      _.extend(modifier.$set, { identifier: Meteor.uuid() });
      Collections.Receipts.update(doc, { $push: { items: modifier.$set } });

      return doc;
    }
  });
}
