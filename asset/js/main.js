/** 언어선택*/
$("#langBtn").on("click", function () {
  url = $("#langList").val();
  window.open(url);
});

// 메인슬라이드
const mainSlide = new Swiper(".slide1 .swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  },
  pagination: {
    el: " .swiper-pagination",
    type: "fraction",
    clickable: true,
  },
});
const mainSlide2 = new Swiper(".slide2 .swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    prevEl: " .prev",
    nextEl: " .next",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
});
mainSlide2.autoplay.stop();
const bannerSlide = new Swiper(".sc-bannerslide .swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 3,
  spaceBetween: 43,
  navigation: {
    prevEl: " .prev",
    nextEl: " .next",
  },
  pagination: {
    el: ".control-area .swiper-pagination",
    type: "fraction",
    clickable: true,
  },
});

$(".slide-nav").on("click", function (e) {
  e.preventDefault();
  if ($(this).parent().hasClass("slide1")) {
    // 주요뉴스
    mainSlide2.autoplay.stop();
    if ($(".slide1").find(".play-wrap .play").hasClass("on")) {
      // 정지상태
      mainSlide.autoplay.stop();
    } else {
      mainSlide.autoplay.start();
    }
  } else {
    // 시민
    mainSlide.autoplay.stop();
    if ($(".slide2").find(".play-wrap .play").hasClass("on")) {
      // 정지상태
      mainSlide2.autoplay.stop();
    } else {
      if (!mainSlide2.autoplay.running) {
        mainSlide2.autoplay.start();
      }
    }
  }
  $(".slide-nav").removeClass("on").parents().removeClass("act");
  $(this).addClass("on").parents().addClass("act");
});

slideArr = [mainSlide, mainSlide2, bannerSlide];

$(".swiper .play-wrap").on("click", function () {
  idx = $(this).data("slide");
  if ($(this).find(".pause").hasClass("on")) {
    slideArr[idx].autoplay.pause();
    $(this).find(".pause").removeClass("on").siblings().addClass("on");
  } else {
    slideArr[idx].autoplay.start();
    $(this).find(".play").removeClass("on").siblings().addClass("on");
  }
});

$(".sc-relate button").on("click", function () {
  if ($(this).hasClass("on")) {
    $(".sc-relate button").removeClass("on").siblings().stop().slideUp();
  } else {
    $(".sc-relate button").removeClass("on").siblings().stop().slideUp();
    $(this).addClass("on").siblings().stop().slideDown();
  }
});

$(".sc-relate .relate-sitebox li:first-child").on("keydown", function (e) {
  keyCode = e.keyCode;
  if (keyCode === 9 && e.shiftKey) {
    $(".sc-relate button").removeClass("on").siblings().stop().slideUp();
  }
});
$(".sc-relate .relate-sitebox li:last-child").on("keydown", function (e) {
  keyCode = e.keyCode;
  if (keyCode === 9 && !e.shiftKey) {
    $(".sc-relate button").removeClass("on").siblings().stop().slideUp();
  }
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 400) {
    $(".btn-top").addClass("show");
  } else {
    $(".btn-top").removeClass("show");
  }
});
$(".btn-top").on("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
