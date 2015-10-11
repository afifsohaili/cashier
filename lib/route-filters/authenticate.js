Filters.authenticate = function () {
  if (Meteor.userId()) {
    this.next();
  } else {
    this.render("atForm");
  }
}

