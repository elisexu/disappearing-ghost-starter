$(".hide-button").click(function() {
  $("img").hide();
})

$(".show-button").click(function() {
  $("img").show();
})

$(".update-img-button").click(function() {
  $("img").attr("src", "https://cdn.glitch.com/db6e707c-f072-4f0d-a9bc-d8a0553fcd3d%2Fcuteghosts.jpg?v=1604513586026")
});

$(".message-button").click(function() {
  let input = $("input").val();
  $(".message").append("<p>"+ input + "<p>");
});

$(".name-button").click(function() {
  let name = $("input").val();
  $("h1").text("My name is " + name);
});