$(document).ready(function(){
var xPosition = ($(document).width() / 2) + "px";
var yPosition = ($(window).height() / 2) + "px";
var endAnimateListen = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  var clearPage = function(clickedPic, removedPic1, removedPic2){   // Clear page function after selection of character
    var clicked = $('#' + clickedPic);
    var removed1 = $('#' + removedPic1)
    var removed2 = $('#' + removedPic2)
      clicked.one('click', function(){
      removed1.addClass('animated fadeOutUp');
      removed2.addClass('animated fadeOutUp');
      });
    };




  $('.page-wrapper').fadeIn('slow');    //  Whole page fade in

/* Queue to load characters once page loads, inline flex is used for equal spacing along same line.
Animate.css used for addClass effects. */

  $('#select-picture-smith').css('display', 'inline-flex').addClass('animated fadeInDown');
  $('#select-picture-smith').one(endAnimateListen, function(){
    $('#select-picture-neo').css('display', 'inline-flex').addClass('animated fadeInDown');
  });
  $('#select-picture-neo').one(endAnimateListen,function(){
    $('#select-picture-morpheus').css('display', 'inline-flex').addClass('animated fadeInDown');
  });

/* On click make images on left and right move to center and images not clicked fade out  */
  $('#select-picture-smith').click(clearPage('select-picture-smith', 'select-picture-neo', 'select-picture-morpheus'), function(){
      $('.text-background1').animate({'left' : '33%' });
  });
  $('#select-picture-neo').click(clearPage('select-picture-neo', 'select-picture-smith', 'select-picture-morpheus'));
  $('#select-picture-morpheus').click(clearPage('select-picture-morpheus', 'select-picture-neo', 'select-picture-smith'), function(){
      $('.text-background3').animate({'right' : '33%' });
  });


});
