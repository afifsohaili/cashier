Router.route("/shop/receipts/new", {
  controller: "Controllers.ShopController",
  name: "shop.receipts.new",
  data: function() {
    return { id: "yo" };
  },
  action: function() {
    this.render("shopReceiptsNew");
  }
});
