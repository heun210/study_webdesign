$(function () {
  //nav
  $("ul.gnb>li").hover(
    function () {
      $("ul.sub").stop().slideDown();
    },
    function () {
      $("ul.sub").stop().slideUp();
    }
  );

  //slide
  var slideI = 0;
  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    $(".slide ul").animate({ top: -100 * slideI + "%" });
  }, 2900);

  //tab
  $(".board .btn li").first().addClass("on");
  $(".frame >ul").first().fadeIn(0);

  $(".board .btn li a").click(function () {
    $(".board .btn li").removeClass("on");
    $(this).parent().addClass("on");
    var i = $(this).parent().index();
    $(".frame>ul").fadeOut(0);
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
