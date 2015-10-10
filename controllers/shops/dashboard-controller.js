Router.route("/shop/dashboard", {
  controller: "Controllers.ShopController",
  name: "dashboard",
  action: function() {
    this.render("shopDashboard");
  }
});
