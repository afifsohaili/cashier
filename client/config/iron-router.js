Router.configure({
  layoutTemplate: "ApplicationLayout",
  controller: "Controllers.ApplicationController"
});

Router.onRun("materializeFlashMessages");
Router.onAfterAction("materializeFlashMessages");
