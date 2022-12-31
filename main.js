$(document).ready(function () {
  $(".visibleSpan").click(function () {
    $("#hidden-content").show();
    $(".hiddenSpan").show();
    $(".visibleSpan").hide();
  });
  $(".hiddenSpan").click(function () {
    $("#hidden-content").hide();
    $(".hiddenSpan").hide();
    $(".visibleSpan").show();
  });
  $("#form").validate({
    rules: {
      first_name: {
        required: true,
      },
      last_name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        phoneUS: true,
      },
    },
    submitHandler: function (form) {
      if ($(form).valid()) {
        $("#submitBtn").removeClass("disabled").addClass("enabled");
      } else {
        $("#submitBtn").removeClass("enabled").addClass("disabled");
      }
    },
  });
});
