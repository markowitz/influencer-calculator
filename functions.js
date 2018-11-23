
$(document).ready(function() {

  $('input[type=range]').rangeslider({
    polyfill: false,
    onSlide: function(position, value) {

        var budget = value.toLocaleString();

        $('.price').text(budget);
        calculatorInput = value;
      }
  });

  var scopeCalculator = 'facebook';
  var calculatorInput = 10000;
  var calculatorFactor = 1;

  function calculateBudget(){
    if (scopeCalculator === 'facebook') {
      var calcOutput = calculatorInput / calculatorFactor;
      output = calcOutput.toFixed(0);
      $('.estimate-price').text(numberWithCommas(output) + ' Reach')
    }
    else if (scopeCalculator === 'twitter') {
        var calcOutput = calculatorInput / calculatorFactor * 1.3;
        output = calcOutput.toFixed(0);
        $('.estimate-price').text(numberWithCommas(output) + ' People')
      }
    else if (scopeCalculator === 'instagram') {
      var calcOutput = calculatorInput / calculatorFactor * 1.3;
      output = calcOutput.toFixed(0);
      $('.estimate-price').text(numberWithCommas(output) + ' People')
    }
    else if (scopeCalculator === 'youtube') {
      var calcOutput = calculatorInput / calculatorFactor * 5;
      output = calcOutput.toFixed(0);
      $('.estimate-price').text(numberWithCommas(output) + ' views')
    }
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
        $('.btn-calculate').click(function() {
          if(!$('.channel .btn').hasClass('active')) {
            alert('please select a channel');
          }
      });
    $('.channel .btn').click(function(){
        $('.channel .btn').removeClass('active');
        $(this).addClass('active');
        scopeCalculator = $(this).attr('scope');
        $('.btn-calculate').click(function() {
          calculateBudget();
        });
      });

});
