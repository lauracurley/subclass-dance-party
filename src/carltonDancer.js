var makeCarltonDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="carltonDancer"><img class="test" src="carltonDancer.gif"></span>');
  this.setPosition(top, left);
};

makeCarltonDancer.prototype = Object.create(makeDancer.prototype);
makeCarltonDancer.prototype.constructor = makeCarltonDancer;
makeCarltonDancer.prototype.oldStep = makeDancer.prototype.step; //OMG!!!!

makeCarltonDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  //this.$node.toggle();
};