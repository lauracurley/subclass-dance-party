var makeTaxiDancerLeft = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="taxiLeft" src="taxi_left.gif">');
  this.setPosition(top, left);
};

makeTaxiDancerLeft.prototype = Object.create(makeDancer.prototype);
makeTaxiDancerLeft.prototype.constructor = makeTaxiDancerLeft;
makeTaxiDancerLeft.prototype.oldStep = makeDancer.prototype.step; //OMG!!!!

makeTaxiDancerLeft.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
};