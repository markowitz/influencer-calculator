
$(document).ready(function() {

  $('input[type=range]').rangeslider({
    polyfill: false
  });
  var range = $('.input-range');
  var value = $('.price');
  var x = value.html(range.attr('value'));
  range.on('input', function(){
        value.html(this.value);
    });

    $('.channel .btn').click(function(){

        $('.channel .btn').removeClass('active');
        $(this).addClass('active');

      });
});
