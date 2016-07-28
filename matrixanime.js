$(document).ready(function(){
// Clear page function for selection of character
  var clearPage = function(clickedPic, removedPic1, removedPic2){
    $('#' + clickedPic).on('click', function(){
      $('#' + removedPic1).addClass('animated fadeOutUp');
      $('#' + removedPic2).addClass('animated fadeOutUp');
    //  $('.select-character').hide();
    });
  };


  //  Whole page fade in
  $('.page-wrapper').fadeIn('slow');
  // Queue to load other characters
  $('#select-picture-smith').css('display', 'inline-flex');
  $('#select-picture-smith').addClass('animated fadeInDown');
  $('#select-picture-smith').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#select-picture-neo').css('display', 'inline-flex');
    $('#select-picture-neo').addClass('animated fadeInDown');
  });
  $('#select-picture-neo').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    $('#select-picture-morpheus').css('display', 'inline-flex');
    $('#select-picture-morpheus').addClass('animated fadeInDown');
  });
  // Animate to quiz on click of character
  $('#select-picture-smith').on('click', clearPage('select-picture-smith', 'select-picture-neo', 'select-picture-morpheus'));
  $('#select-picture-neo').on('click', clearPage('select-picture-neo', 'select-picture-smith', 'select-picture-morpheus'));
  $('#select-picture-morpheus').on('click', clearPage('select-picture-morpheus', 'select-picture-neo', 'select-picture-smith'));
});
