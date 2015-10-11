Template.applicationLayout.events({
  "click #log-out": function(e) {
    e.preventDefault();
    AccountsTemplates.logout();
    FlashMessages.send("You have successfully signed out");
  }
});
