// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  //debugger;
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  //this.$node = node;
  //this.$node = $('');
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  var that = this;
  setTimeout(function() {
    that.step();
  }, that.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  console.log('STYLESETTINGS: ', styleSettings);
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function () {

  var carltonSettings = {
    position: 'absolute',
    top: '0',
    left: '100px'
  };

  var napoleonSettings = {
    position: 'absolute',
    top: '0',
    left: '500px'
  };

  for (var i = 0; i < window.dancers.length; i++) { 
    console.log(window.dancers[i]);
    if (window.dancers[i] instanceof makeCarltonDancer) {
      carltonSettings.top = (parseInt(carltonSettings.top) + 50).toString() + 'px';
      window.dancers[i].$node.css(carltonSettings);
    } else if (window.dancers[i] instanceof makeNapoleonDancer) {
      napoleonSettings.top = (parseInt(napoleonSettings.top) + 50).toString() + 'px';
      window.dancers[i].$node.css(napoleonSettings);
    }
  }
};

makeDancer.prototype.napoleonCrowd = function () {

  var napoleonSettings = {
    position: 'absolute',
    top: '62%',
    left: '-100px'
  };

  for (var i = 0; i < window.dancers.length; i++) { 
    if (window.dancers[i] instanceof makeNapoleonDancer) {
      napoleonSettings.left = (parseInt(napoleonSettings.left) + 100).toString() + 'px';
      window.dancers[i].$node.css(napoleonSettings);
    }
  }
};

