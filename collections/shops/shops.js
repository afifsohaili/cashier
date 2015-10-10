Collections.Shops = new Meteor.Collection("shop");

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
  Meteor.publish("shop", function(shopId) {
    if (this.userId && Roles.userIsInRole(this.userId, "admin")) {
      return Collections.Shops.find({ _id: shopId }, { limit: 1 });
    }
  });
}
