$(function () {
  // nav-menu
  /* $("ul.gnb>li").hover(
    function () {
      $("ul.sub").stop().slideDown();
    },
    function () {
      $("ul.sub").stop().slideUp();
    }
  );
  nav-bg
  $("ul.gnb>li, .navBg").hover(
    function () {
      $("ul.sub, .navBg").stop().slideDown();
    },
    function () {
      $("ul.sub, .navBg").stop().slideUp();
    }
  ); */

  //nav-this
  $("ul.gnb>li").hover(
    function () {
      $(this).find("ul.sub").stop().slideDown();
    },
    function () {
      $(this).find("ul.sub").stop().slideUp();
    }
  );

  // slide-left,right
  /* var slideI = 0;
    setInterval(function(){
      if(slideI<2){
        slideI++;
      }else{
        slideI=0;
      }
      $('.slide ul').animate({left:-100*slideI + "%"},500)
    },2900); */

  // slide-up,down
  /* var slideI = 0;
  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    $(".slide ul").animate({ top: -100 * slideI + "%" });
  }, 2900); */

  // slide-fade in,out
  $(".slide ul li").eq(0).siblings().hide();
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

  // 공지사항,갤러리
  $(".board .btn li").first().addClass("on");
  $(".frame>ul").first().fadeIn(0);

  $(".board .btn li a").click(function () {
    $(".board .btn li").removeClass("on");
    $(this).parent().addClass("on");

    var i = $(this).parent().index();

    $(".frame>ul").fadeOut(0);
    $(".frame>ul").eq(i).fadeIn();
  });
});
