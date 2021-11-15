$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $("ul").addClass("black");
  } else {
    $("ul").removeClass("black");
  }
});
