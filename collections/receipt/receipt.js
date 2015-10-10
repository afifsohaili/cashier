Collections.Receipts = new Mongo.Collection("receipts");

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Collections.Receipts.find().count() === 0) {
      Collections.Receipts.insert({
        items: [
          {
            name: "Bawal Crepe - Bidang 60",
            price: 30.99,
          },
          {
            name: "Batik Shawl",
            price: 20.50,
          }
        ]
      });
    }
  });
}
