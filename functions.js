
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
      calculatorInput += 340;
      $('.price').text(calculatorInput);
      var reach = calculatorInput*50;
      var reachMargin = reach/100*10;

      if(calculatorInput >= 100 && calculatorInput <= 15000){
        $('.estimate-price').text(reach + '+ People')
        }
        else if(calculatorInput > 15000) {
            reach += reachMargin;
            $('.estimate-price').text(reach + '+ People')
        }
    }
    else if (scopeCalculator === 'twitter') {
        calculatorInput += 300;
        $('.price').text(calculatorInput);
      var reach = calculatorInput*50;
      var reachMargin = reach/100*10;

      if(calculatorInput >= 100 && calculatorInput <= 15000){
        $('.estimate-price').text(reach + '+ People')
        }
        else if(calculatorInput > 15000) {
            reach += reachMargin;
            $('.estimate-price').text(reach + '+ People')
        }
      }
    else if (scopeCalculator === 'instagram') {
      if($('.price').text() === 500) {
        var reach = calculatorInput*50;
        var reachMargin = reach/100*10;
      }
      calculatorInput += 500;
      var reach = calculatorInput*50;
      var reachMargin = reach/100*10;

      if(calculatorInput >= 100 && calculatorInput <= 15000){
        $('.estimate-price').text(reach + '+ People')
        }
        else if(calculatorInput > 15000) {
            reach += reachMargin;
            $('.estimate-price').text(reach + '+ People')
        }
    }
    else if (scopeCalculator === 'youtube') {
      calculatorInput += 670;
      var reach = calculatorInput*50;
      var reachMargin = reach/100*10;

      if(calculatorInput >= 100 && calculatorInput <= 15000){
        $('.estimate-price').text(reach + '+ People')
        }
        else if(calculatorInput > 15000) {
            reach += reachMargin;
            $('.estimate-price').text(reach + '+ People')
        }
    }
  }
  function calculateEngagement() {
    var reach = $('.estimate-price').text();
    var intReach = parseInt(reach);
    var m = -0.00000000198;
    var selectInt = parseFloat(0.84,10);
    if (scopeCalculator === 'facebook') {
      var engagement = (m * intReach) + 0.02;
      var engagementCat = engagement;
      var percentageEngagement = engagementCat * 100;
      var minimum = percentageEngagement - (0.20 * percentageEngagement);
      var minimumDec = minimum.toFixed(1);
      var maximum = percentageEngagement + (0.20 * percentageEngagement);
      var maximumDec = maximum.toFixed(1);
      var engagementPeople = percentageEngagement * intReach/100;
      decimalPlaces = engagementPeople.toFixed(0);

      if(percentageEngagement < 0.5 ){

        $('.engagementText').text("A benchmark for this campaign would be an engagement rate of between 0.5% and 1%. and A safe benchmark for this campaign would be to reach 146947 people");
        }
        else{
            $('.engagementText').html('A benchmark for this campaign would be an engagement rate of between  ' + '<br>' + '<b>' + '<span class="light-blue-text">' + minimumDec + '%' +  ' and ' + maximumDec + '%' + '</span>' + '.' + '</b>');
            $('.engagementPeople').text("That means you can expect over " + decimalPlaces + " credible mentions to be happening around your brand. ");
        }
    }
    else if (scopeCalculator === 'twitter') {
      var engagement = (m * intReach) + 0.02;
      var engagementCat = engagement;
      var percentageEngagement = engagementCat * 100;
      var minimum = percentageEngagement - (0.20 * percentageEngagement);
      var minimumDec = minimum.toFixed(1);
      var maximum = percentageEngagement + (0.20 * percentageEngagement);
      var maximumDec = maximum.toFixed(1);
      var engagementPeople = percentageEngagement * intReach/100;
      decimalPlaces = engagementPeople.toFixed(0);

      if(percentageEngagement < 0.5 ){

        $('.engagementText').text("A benchmark for this campaign would be an engagement rate of between 0.5% and 1%. and A safe benchmark for this campaign would be to reach 146947 people");
        }
        else{
            $('.engagementText').html('A benchmark for this campaign would be an engagement rate of between  ' + '<br>' + '<b>' + '<span class="light-blue-text">' + minimumDec + '%' +  ' and ' + maximumDec + '%' + '</span>' + '.' + '</b>');
            $('.engagementPeople').text("That means you can expect over " + decimalPlaces + " credible mentions to be happening around your brand. ");
        }
    }
    else if (scopeCalculator === 'youtube') {
      var engagement = (m * intReach) + 0.02;
      var engagementCat = engagement;
      var percentageEngagement = engagementCat * 100;
      var minimum = percentageEngagement - (0.20 * percentageEngagement);
      var minimumDec = minimum.toFixed(1);
      var maximum = percentageEngagement + (0.20 * percentageEngagement);
      var maximumDec = maximum.toFixed(1);
      var engagementPeople = percentageEngagement * intReach/100;
      decimalPlaces = engagementPeople.toFixed(0);

      if(percentageEngagement < 0.5 ){

        $('.engagementText').text("A benchmark for this campaign would be an engagement rate of between 0.5% and 1%. and A safe benchmark for this campaign would be to reach 146947 people");
        }
        else{
            $('.engagementText').html('A benchmark for this campaign would be an engagement rate of between  ' + '<br>' + '<b>' + '<span class="light-blue-text">' + minimumDec + '%' +  ' and ' + maximumDec + '%' + '</span>' + '.' + '</b>');
            $('.engagementPeople').text("That means you can expect over " + decimalPlaces + " credible mentions to be happening around your brand. ");
        }
    }
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
        $('.btn-engagement').click(function() {
          calculateEngagement();
          $('.engage').show();
        });
      });

});
