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
}

Schemas.receipt = new SimpleSchema({
  id: {
    type: String,
    label: "ID"
  },
  abilities: {
    type: Array,
    autoform: {
      template: "materialize_alternative"
    }
  },
  "abilities.$": {
    type: Object,
    autoform: {
      template: "materialize"
    }
  },
  "abilities.$.subject": {
    label: "",
    max: 255,
    type: String
  },
  "abilities.$.level": {
    label: "Standard/Form",
    type: String
  }
});
