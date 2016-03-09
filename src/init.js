$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //makeBlinkyDancer
    //var dancerType = $(this).data('dancer-type');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; //eg window.makeBlinkyDancer

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);

    $('.napoleon').on('click', function(event) {
      $('.napoleon').addClass('animated shake rotateIn').
        one('webkitAnimationEnd animationend',
        function() {
          $(this).removeClass('animated shake fadeInRightBig');
        });
    });



    


    
  });

  $('.lineUp').on('click', function(event) {
    window.makeDancer.prototype.lineUp();
  });

  $('.streetParty').on('click', function(event) {
    window.makeDancer.prototype.napoleonCrowd();
  });

  // Adds a shake animation to Carlton when he's clicked on

});

var distance = Math.sqrt(Math.pow( Math.abs(top - top), 2) + Math.pow( Math.abs(left - left), 2));



