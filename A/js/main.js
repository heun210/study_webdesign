$(function () {
  //nav
  $("ul.gnb>li").hover(
    function () {
      //   $("ul.sub, .navbg").stop().slideDown();
      $(this).find("ul.sub").stop().slideDown();
    },
    function () {
      //   $("ul.sub, .navbg").stop().slideUp();
      $(this).find("ul.sub").stop().slideUp();
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
    // $(".slide ul").animate({ left: -100 * slideI + "%" }, 500);
    // $(".slide ul").animate({ top: -100 * slideI + "%" });
    $(".slide ul li").eq(slideI).siblings().fadeOut();
    $(".slide ul li").eq(slideI).fadeInt();
  }, 2900);

  //tab

  $("ul.btn li").first().addClass("on");
  $(".frame>ul").first().fadeIn(0);

  $(".btn li a").click(function () {
    $(".btn li").removeClass("on");
    $(this).parent().addClass("on");

    var i = $(this).parent().index();
    $(".frame>ul").fadeOut(0);
    $(".frame>ul").eq(i).fadeIn(0);
  });
});
