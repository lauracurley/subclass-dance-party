var makeNapoleonDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="napoleon" src="napoleon.gif">');
  this.setPosition(top, left);
};

makeNapoleonDancer.prototype = Object.create(makeDancer.prototype);
makeNapoleonDancer.prototype.constructor = makeNapoleonDancer;
makeNapoleonDancer.prototype.oldStep = makeDancer.prototype.step; //OMG!!!!

makeNapoleonDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
};