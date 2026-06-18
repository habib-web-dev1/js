const clickEvent = document
  .getElementById("list-num-3")
  .addEventListener("click", function (event) {
    console.log("list clicked");
    event.stopPropagation();
  });
document.getElementById("list-ol").addEventListener("click", function () {
  console.log("ol clicked");
});
document.getElementById("sec-main").addEventListener("click", function () {
  console.log("section clicked");
});
