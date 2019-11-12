// $(document).ready(function(){
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 50) {
//             $('#back-to-top').fadeIn();
//         } else {
//             $('#back-to-top').fadeOut();
//         }
//     });
//     // scroll body to 0px on click
//     $('#back-to-top').click(function () {
//         $('#back-to-top').tooltip('hide');
//         $('body,html').animate({
//             scrollTop: 0
//         }, 800);
//         return false;
//     });
    
//     $('#back-to-top').tooltip('show');

// });

// $(function() {

//     var $btn = $('#btnTop');
//     var $home = $('#topSection');
//     var startpoint = $home.scrollTop() + $home.height();

//     $(window).on('scroll', function() {
//         if($(window).scrollTop() > startpoint) {
//             $btn.show();
//         } else {
//             $btn.hide();
//         }
//     });
// });

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } 
    else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});