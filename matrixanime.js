$(document).ready(function(){
// Clear page function for selection of character
  var clearPage = function(clickedPic, removedPic1, removedPic2){
    var xPosition = ($(document).width() / 2) + "px";
    var yPosition = ($(window).height() / 2) + "px";
    $('#' + clickedPic).on('click', function(){
      $('#' + removedPic1).addClass('animated fadeOutUp');
      $('#' + removedPic2).addClass('animated fadeOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $('.text-background').animate({'left' : xPosition});
        });
      });
    };



//  Whole page fade in --------------------------------
  $('.page-wrapper').fadeIn('slow');
  // Queue to load other characters
  $('#select-picture-smith').css('display', 'inline-flex').addClass('animated fadeInDown');
  $('#select-picture-smith').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#select-picture-neo').css('display', 'inline-flex').addClass('animated fadeInDown');
  });
  $('#select-picture-neo').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $('#select-picture-morpheus').css('display', 'inline-flex').addClass('animated fadeInDown');
  });

  // Animate to quiz on click of character -----------------------------------
  $('#select-picture-smith').click(clearPage('select-picture-smith', 'select-picture-neo', 'select-picture-morpheus'));

  $('#select-picture-neo').on('click', clearPage('select-picture-neo', 'select-picture-smith', 'select-picture-morpheus'));
  $('#select-picture-morpheus').on('click', clearPage('select-picture-morpheus', 'select-picture-neo', 'select-picture-smith'));

  // Move picture to center of page on click

});
