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
  let slideI = 0;
  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    $(".slide ul").animate({ top: -100 * slideI + "%" });
  }, 2900);

  tab;
  $(".tabMenu li").click(function () {
    $(".tabMenu>*, .tabItem>*").removeClass("on");
    $(this).addClass("on").next("ul").addClass("on");
  });
  $("contents .tab ul.notice li")
    .eq(0)
    .click(function () {
      $(".modal").fadeIn();
    });

  // $(".tabMenu li").click(function () {
  //   let idx = $(this).index();

  //   $(".tabItem>*").hide().removeClass("on");
  //   $(".tabItem>*").eq(idx).show().addClass("on");

  //   $(".tabMenu li").removeClass("on");
  //   $(this).addClass("on");
  // });
});
