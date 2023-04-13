function catClicked() {
    var confettiSettings = {
      target: 'confetti',
      max: 100,
      size: 1,
      animate: true,
      props: ['circle', 'square', 'triangle', 'line'],
      colors: [[255, 0, 0], [0, 255, 0], [0, 0, 255]]
    };
  
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}