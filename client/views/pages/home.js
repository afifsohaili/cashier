var template = Template.pagesHome;

template.events({
  "submit #connect": function(e) {
    e.preventDefault();
    var accessCode = $("#shop-code").val();
    Meteor.call("requestView", Meteor.userId(), accessCode);
    Router.go("/");
  }
});
