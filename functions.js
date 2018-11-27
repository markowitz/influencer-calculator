
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
  function calculateBudget(){
    if (scopeCalculator === 'facebook') {
      var basic = 9;
      var follower = 1000;
      var calcOutput = calculatorInput * follower / basic;
      output = calcOutput.toFixed(0);
      $('.estimate-price').html('<b style="color: #77c1aa;font-weight:bolder">' + output + '+</b>' + ' People');
    }
    else if (scopeCalculator === 'twitter') {
        var basic = 6;
        var follower = 1000;
     var calcOutput = calculatorInput * follower / basic;
      output = calcOutput.toFixed(0);
      $('.estimate-price').html('<b style="color: #77c1aa;font-weight:bolder">' + output + '+</b>' + ' People');
      }
    else if (scopeCalculator === 'instagram') {
      var basic = 8;
        var follower = 1000;
     var calcOutput = calculatorInput * follower / basic;
      output = calcOutput.toFixed(0);
      $('.estimate-price').html('<b style="color: #77c1aa;font-weight:bolder">' + output + '+</b>' + ' People');
    }
    else if (scopeCalculator === 'youtube') {
      var basic = 15;
        var follower = 1000;
     var calcOutput = calculatorInput * follower / basic;
      output = calcOutput.toFixed(0);
      $('.estimate-price').html('<b style="color: #77c1aa;font-weight:bolder">' + output + '+</b>' + ' People');
    }
  }
  function calculateEngagement() {
    var reach = $('.estimate-price').text();
    var intReach = parseInt(reach);
    var m = -0.00000000198;
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
            $('.engagementText').html('A benchmark for this campaign would be an engagement rate of between  ' + '<br>' + '<b>' + '<span style="color: #77c1aa">' + minimumDec + '%' +  '</span>' + ' and ' + '<span style="color: #77c1aa">' + maximumDec + '%' + '</span>' + '.' + '</b>');
            $('.engagementPeople').html("That means you can expect over " + '<b style="color: #77c1aa">' + decimalPlaces + '</b>' + " credible mentions to be happening around your brand. ");
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
          $('.engagementText').html('A benchmark for this campaign would be an engagement rate of between  ' + '<br>' + '<b>' + '<span style="color: #77c1aa">' + minimumDec + '%' +  '</span>' + ' and ' + '<span style="color: #77c1aa">' + maximumDec + '%' + '</span>' + '.' + '</b>');
          $('.engagementPeople').html("That means you can expect over " + '<b style="color: #77c1aa">' + decimalPlaces + '</b>' + " credible mentions to be happening around your brand. ");
      }
    }
    else if (scopeCalculator === 'instagram') {
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
          $('.engagementText').html('A benchmark for this campaign would be an engagement rate of between  ' + '<br>' + '<b>' + '<span style="color: #77c1aa">' + minimumDec + '%' +  '</span>' + ' and ' + '<span style="color: #77c1aa">' + maximumDec + '%' + '</span>' + '.' + '</b>');
          $('.engagementPeople').html("That means you can expect over " + '<b style="color: #77c1aa">' + decimalPlaces + '</b>' + " credible mentions to be happening around your brand. ");
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
          $('.engagementText').html('A benchmark for this campaign would be an engagement rate of between  ' + '<br>' + '<b>' + '<span style="color: #77c1aa">' + minimumDec + '%' +  '</span>' + ' and ' + '<span style="color: #77c1aa">' + maximumDec + '%' + '</span>' + '.' + '</b>');
          $('.engagementPeople').html("That means you can expect over " + '<b style="color: #77c1aa">' + decimalPlaces + '</b>' + " credible mentions to be happening around your brand. ");
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
