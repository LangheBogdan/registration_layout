$(document).ready(function () {
  $(".visibleSpan").click(function () {
    $("#hidden-content").slideDown();
    $(".hiddenSpan").show();
    $(".visibleSpan").hide();
  });
  $(".hiddenSpan").click(function () {
    $("#hidden-content").slideUp();
    $(".hiddenSpan").hide();
    $(".visibleSpan").show();
  });
  // 	get the value from all text input if all values are  true add class to button on change
  $("#first_name, #last_name, #user_email, #phone").on("change", function () {
    if (
      $("#first_name").val() &&
      $("#last_name").val() &&
      $("#user_email").val() &&
      $("#phone").val()
    ) {
      $("#submitBtn").addClass("valid");
    } else {
      $("#submitBtn").removeClass("valid");
    }
  });
  $("#promo_code").on("change", function () {
    if ($("#promo_code").val()) {
      console.log($("#promo_code"));
      $("#icon").css("fill", "#0099ff");
      $("#promoWrapper").css("background-color", "#d9ecff");
    } else {
      $("#icon").css("fill", "#a7b2c3");
      $("#promoWrapper").css("background-color", "#d3dde9");
    }
  });
  function updateElementClass() {
    if ($(window).width() >= 768) {
      $("#logNone").addClass("d-none");
    } else {
      $("#logNone").removeClass("d-none");
    }
  }

  $(window).on("resize", updateElementClass);
});
