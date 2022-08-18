$(function () {
  // nav-메뉴만
  // $("ul.gnb>li").hover(
  //   function () {
  //     $("ul.sub").stop().slideDown();
  //   },
  //   function () {
  //     $("ul.sub").stop().slideUp();
  //   }
  // );
  // nav-배경포함
  // $("ul.gnb>li, .navBg").hover(
  //   function () {
  //     $("ul.sub, .navBg").stop().slideDown();
  //   },
  //   function () {
  //     $("ul.sub, .navBg").stop().slideUp();
  //   }
  // );

  //nav-각자
  $("ul.gnb>li").hover(
    function () {
      $(this).find("ul.sub").stop().slideDown();
    },
    function () {
      $(this).find("ul.sub").stop().slideUp();
    }
  );

  // slide-위아래
  // let slideI = 0;
  // setInterval(function () {
  //   if (slideI < 2) {
  //     slideI++;
  //   } else {
  //     slideI = 0;
  //   }
  //   $(".slide ul").animate({ top: -100 * slideI + "%" });
  // }, 2900);

  // slide-좌우

  let slideI = 0;
  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    $(".slide ul").animate({ left: -100 * slideI + "%" }, 500);
  }, 2900);
});
