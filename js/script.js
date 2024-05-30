/*  Typing  */
var typed = new Typed("#typing", {
  strings: ["Larry Daniels", "Designer", " Developer"],
  typeSpeed: 60,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
});
/* Navbar Fixed */
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var height = $(".home").outerHeight();
    if (scroll > height) {
      $(".navbar").css("background-color", "#FFF");
      $(".navbar a").css("color", "#000");
    }
    if (scroll < height) {
      $(".navbar").css("background-color", "transparent");
      $(".navbar a").css("color", "#fff");
    }
  });
});

/*  Filter Portfoilio Img  */
$(document).ready(function () {
  $(".portfolio-item").isotope(function () {
    itemSelector: ".item-port";
  });

  $(".filterGallery ul li").click(function () {
    $(".filterGallery ul li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $(".portfolio-item").isotope({
      filter: selector,
    });
    return false;
  });
});

/* Owl Carsoul  */
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

/* counter */
var counted = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-target");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        },
      );
    });
    counted = 1;
  }
});

/*   Change Color Option Fun  */
$(".icon-setting  i").click(function () {
  $(".options").toggle();
});
var lis = $(".options ul li");
lis.eq(0).css("backgroundColor", "#344055");
lis.eq(1).css("backgroundColor", "#DFC2F2");
lis.eq(2).css("backgroundColor", "#EBDAF7");
lis.eq(3).css("backgroundColor", "#ECEAED");
lis.click(function () {
  var color = $(this).css("backgroundColor");
  $("h1,h2,h3,h4,h5,h6").css("color", color);
});
/* Anmation About Section */
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var height = $(".home").outerHeight();
    if (scroll > height) {
      $(".skill-progress span").addClass("progress-anmation");
    }
  });
});
