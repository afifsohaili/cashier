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
