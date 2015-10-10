AutoForm.hooks({
  addItemToReceipt: {
    onSuccess: function (type, doc) {
      Router.go("shop.receipts.show", { _id: doc });
    }
  }
});
