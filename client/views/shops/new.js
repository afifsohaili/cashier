AutoForm.hooks({
  addShop: {
    onSuccess: function () {
      FlashMessages.send("Shop registered!");
      Router.go("dashboard");
    }
  }
});
