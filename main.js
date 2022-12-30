$(document).ready(function() {
  $("#show-more-button").click(function() {
    $("#hidden-content").slideToggle();
    $(this).find("svg").css("transform", "rotate(180deg)");
    $(this).text(function(i, text){
      return text === "Show Less" ? "Show More" : "Show Less";
    });
  });
});
