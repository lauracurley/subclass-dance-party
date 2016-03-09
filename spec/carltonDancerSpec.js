describe('carltonDancer', function() {
  var carltonDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    carltonDancer = new makecarltonDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(carltonDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should not have a step function that makes carlton blink', function() {
    sinon.spy(carltonDancer.$node, 'toggle');
    carltonDancer.step();
    expect(carltonDancer.$node.toggle.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(carltonDancer, 'step');
      expect(carltonDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      //clock.tick(timeBetweenSteps); THIS IS NOT NECESSARY!!!

      expect(carltonDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(carltonDancer.step.callCount).to.be.equal(2);
    });
  });
});
