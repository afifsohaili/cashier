Template.shopLayout.rendered = function() {
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
};

Template.shopLayout.events({
  "click #log-out": function(e) {
    e.preventDefault();
    AccountsTemplates.logout();
    FlashMessages.send("You have successfully signed out");
  }
});
