
$(document).ready(function() {
var calculatorInput = 500;
  $('input[type=range]').rangeslider({
    polyfill: false,
    onSlide: function(position, value) {

        budget = value.toLocaleString();

        $('.price').text(budget);
        calculatorInput = value;
      }
  });

  var scopeCalculator = 'facebook';
  var calculatorFactor = 1;

  function calculateBudget(){
    if (scopeCalculator === 'facebook') {
      var calcOutput = calculatorInput / calculatorFactor;
      output = calcOutput.toFixed(0);
      $('.estimate-price').text(numberWithCommas(output) + ' People')
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
  function calculateEngagement() {
    reach = parseInt(calculatorInput);
    var m = -0.00000000198;
    var selectInt = parseFloat(0.84,10);
    if (scopeCalculator === 'facebook') {
      var engagement = (m * reach) + 0.02;
      var engagementCat = engagement + selectInt;
      var percentageEngagement = engagementCat * 100;
      var engagementPeople = percentageEngagement * reach/100;
      decimalPlaces = engagementPeople.toFixed(0);
      $('.engagementPeople').text("That means you can expect over " + decimalPlaces + " credible mentions to be happening around your brand. ");
    }
    else if (scopeCalculator === 'twitter') {
      var engagement = (m * reach) + 0.04;
      var engagementCat = engagement + selectInt;
      var percentageEngagement = engagementCat * 100;
      var engagementPeople = percentageEngagement * reach/100;
      decimalPlaces = engagementPeople.toFixed(0);
      $('.engagementPeople').text("That means you can expect over " + decimalPlaces + " credible mentions to be happening around your brand. ");
      }
    else if (scopeCalculator === 'instagram') {
      var engagement = (m * reach) + 0.05;
      var engagementCat = engagement + selectInt;
      var percentageEngagement = engagementCat * 100;
      var engagementPeople = percentageEngagement * reach/100;
      decimalPlaces = engagementPeople.toFixed(0);
      $('.engagementPeople').text("That means you can expect over " + decimalPlaces + " credible mentions to be happening around your brand. ");
    }
    else if (scopeCalculator === 'youtube') {
      var engagement = (m * reach) + 0.06;
      var engagementCat = engagement + selectInt;
      var percentageEngagement = engagementCat * 100;
      var engagementPeople = percentageEngagement * reach/100;
      decimalPlaces = engagementPeople.toFixed(0);
      $('.engagementPeople').text("That means you can expect over " + decimalPlaces + " credible mentions to be happening around your brand. ");
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
          calculateEngagement();
        });
      });

});
