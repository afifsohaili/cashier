var template = Template.shopReceiptsShow;
template.rendered = function() {
  $('.collapsible').collapsible({
    accordion: false
  });
}

template.events({
  "click .accept": function() {
    var receiptId = $(this).data("request-id");
    Meteor.call("acceptView", receiptId);
  },
  "click .reject": function() {
    var receiptId = $(this).data("request-id");
    Meteor.call("rejectView", receiptId);
  }
});
