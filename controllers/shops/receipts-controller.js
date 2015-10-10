Router.route("/shop/receipts/new", {
  controller: "Controllers.ShopController",
  name: "shop.receipts.new",
  action: function() {
    this.render("shopReceiptsNew");
  }
});
