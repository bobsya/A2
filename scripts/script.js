 document.addEventListener('DOMContentLoaded', function() {

  var svg2 = new Walkway({
    selector: '#triangle',
    duration: 4000,
    easing: 'linear'
  }).draw(function() {
    console.log('Finished triangle!');
  });
});
