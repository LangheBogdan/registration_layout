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
});
