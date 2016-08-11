$(document).ready(function(){
// Clear page function for selection of character
var xPosition = ($(document).width() / 2) + "px";
var yPosition = ($(window).height() / 2) + "px";
  var clearPage = function(clickedPic, removedPic1, removedPic2){
    var clicked = $('#' + clickedPic);
    var removed1 = $('#' + removedPic1)
    var removed2 = $('#' + removedPic2)
    var endAnimateListen = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      clicked.on('click', function(){
      removed1.addClass('animated fadeOutUp');
      removed2.addClass('animated fadeOutUp').one(endAnimateListen, function(){
          $('.text-background1').animate({'left' : '33%' });
          $('.text-background3').animate({'right' : '33%' });
        });
      });
    };



//  Whole page fade in --------------------------------
  $('.page-wrapper').fadeIn('slow');
// Queue to load other characters --------------------
  $('#select-picture-smith').css('display', 'inline-flex').addClass('animated fadeInDown');
  $('#select-picture-smith').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#select-picture-neo').css('display', 'inline-flex').addClass('animated fadeInDown');
  });
  $('#select-picture-neo').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $('#select-picture-morpheus').css('display', 'inline-flex').addClass('animated fadeInDown');
  });

  // Animate to quiz on click of character -----------------------------------
  $('#select-picture-smith').click(clearPage('select-picture-smith', 'select-picture-neo', 'select-picture-morpheus'));
  $('#select-picture-neo').click(clearPage('select-picture-neo', 'select-picture-smith', 'select-picture-morpheus'));
  $('#select-picture-morpheus').click(clearPage('select-picture-morpheus', 'select-picture-neo', 'select-picture-smith'));

  // Move picture to center of page on click

});
