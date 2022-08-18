$(function () {
  // 메뉴
  $(".subMenu").slideUp(0); // 메뉴 일단 다 슬라이드업
  $(".mainMenu").mouseenter(function () {
    // 마우스 들어오면
    $(this).find(".subMenu").stop().slideDown("fast"); // 해당 서브메뉴 슬라이드다운
    $(this)
      .parent()
      .mouseleave(function () {
        // 마우스 떠나면 (자기 자신 포함)
        $(this).find(".subMenu").stop().slideUp("fast");
      });
  });

  // 슬라이드
  var num = 0;
  $(".slide li").eq(num).fadeIn(0); // 첫번째 요소 페이드인
  setInterval(function () {
    if (num < 2) {
      num++;
    } else {
      num = 0;
    }
    $(".slide li").fadeOut("slow"); // 모두 페이드아웃
    $(".slide li").eq(num).fadeIn("slow"); // 다음 이미지 페이드인}, 3000);
  });

  // 공지사항 갤러리
  $(".board .btn li").first().addClass("on");
  $(".frame > div").first().fadeIn(0);
  $(".board .btn li a").click(function () {
    $(".board .btn li").removeClass("on");
    $(this).parent().addClass("on");
    var i = $(this).parent().index();
    $(".frame > div").fadeOut(0);
    $(".frame > div").eq(i).fadeIn(0);
  });
  // 팝업창
  $(".popupOpen").click(function () {
    $(".popup").fadeIn(0);
  });
  $(".popup a").click(function () {
    $(".popup").fadeOut(0);
  });
});
