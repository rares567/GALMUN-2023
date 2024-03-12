// Set the date we're counting down to
/*
var countDownDate = new Date("Oct 31, 2019 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m ";// + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
*/

$(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 200) {
        $("nafdsv").addClass("fixed-top");
        $("navfds").removeClass("static-top");
      } else {
        $("navfsdf").addClass("static-top");
        $("navsdfsd").removeClass("fixed-top");
      }
    });
    jQuery("body").prepend('<div id="loader">Loading...</div>');
    jQuery(document).ready(function() {
      jQuery("#loader").remove();
    });
  
    //$('.dropdown-menu').addClass('invisible'); //FIRST TIME INVISIBLE
  
    // ADD SLIDEDOWN ANIMATION TO DROPDOWN-MENU
    $(".dropdown").on("show.bs.dropdown", function(e) {
      $(".dropdown-menu").removeClass("invisible");
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .slideDown();
    });
  
    // ADD SLIDEUP ANIMATION TO DROPDOWN-MENU
    $(".dropdown").on("hide.bs.dropdown", function(e) {
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .slideUp();
    });
    ////////////////////////////////////////////////////////////////////////////////
    if ($(window).width() < 200) {
      $("#applyLink").removeClass(".applyB");
    }
    $(".dropdown-toggle").click(false);
  
    $(window).load(function() {
      // Animate loader off screen
      //$(".se-pre-con").fadeOut("slow");
      $(".loader").hide();
      $("#page-loader").hide();
      $(".se-pre-con").hide();
    });
  
    //paste this code under the head tag or in a separate js file.
    // Wait for window load
  });
  
  window.onscroll = function() {
    scrollFunction(), scrollFunctionXd();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-1000px";
    }
  }
  /*
  $(function() {
      var h1Height = $('#navbar').height(); // get height of h1 tag
      h1Height += 25;
      $('li a').click(function (e) {
          e.preventDefault();
          var target = $(this.hash);
          $('html, body').animate({
              scrollTop: target.offset().top - h1Height // scroll to h3 minus height of h1
          }, 1000);
          return false;
      });
    });
  */
  //Get the button
  var mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  
  function scrollFunctionXd() {
    if (screen.width > 800) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        $("#myBtn").fadeOut(250);
      }
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  