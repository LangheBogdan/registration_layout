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
});
