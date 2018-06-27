//  Filter system

$(document).ready(function() {

  $(".filter-button").click(function() {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');

    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

});

// Navigation

function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// hamburger colour change
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $(".hamburger").addClass("changeColor");
    }
    if ($(this).scrollTop() < 200) {
      $(".hamburger").removeClass("changeColor");
    }
  });

});
