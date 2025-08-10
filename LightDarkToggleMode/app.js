$(document).ready(function () {
  $("#darkToggle").click(function () {
    $("body").toggleClass("dark");

    if ($("body").hasClass("dark")) {
      $("#darkToggle").text("Light Mode").css({
        border: "1px solid #fff",
        borderRadius: "5px",
      });
      $("body").css("background", "#000");
      $("#head-content, #paragraf-content").css("color", "#fff");
    } else {
      $("#darkToggle").text("Dark Mode");
      $("body").css("background", "#fff");
      $("#head-content, #paragraf-content").css("color", "#000");
    }
  });
});
