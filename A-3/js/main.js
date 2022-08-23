$(function () {
  //nav
  $("ul.gnb>li").hover(
    function () {
      $(this).find("ul.sub").slideDown();
    },
    function () {
      $(this).find("ul.sub").slideUp();
    }
  );

  //slide
  //   $(".slide ul li").eq(0).siblings().hide();
  var slideI = 0;
  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    $(".slide ul li").eq(slideI).siblings().fadeOut();
    $(".slide ul li").eq(slideI).fadeIn();
  }, 2900);

  //tab
  //   $(".board .btn li").first().addClass("on");
  //   $(".frame>ul").first().fadeIn(0);

  //   $(".board .btn li a").click(function () {
  //     $(".board .btn li").removeClass("on");
  //     $(this).parent().addClass("on");

  //     var i = $(this).parent().index();

  //     $(".frame>ul").fadeOut(0);
  //     $(".frame>ul").eq(i).fadeIn(0);
  //   });

  //tab
  $(".board .btn li").first().addClass("on");
  $(".frame>ul").first().fadeIn();

  $(".board .btn li a").click(function () {
    $(".board .btn li").removeClass("on");
    $(this).parent().addClass("on");

    var i = $(this).parent().index();

    $(".frame >ul").fadeOut(0);
    $(".frame>ul").eq(i).fadeIn(0);
  });

  //popup
  $(".popupOpen").click(function () {
    $(".popup").fadeIn(0);
  });
  $(".closeBtn").click(function () {
    $(".popup").fadeOut(0);
  });
});
