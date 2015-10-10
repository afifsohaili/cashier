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
