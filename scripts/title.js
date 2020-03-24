var title = document.getElementById("title");

document.body.addEventListener(
  "mousemove",
  function(e) {

    var width = window.innerWidth;
    var height = window.innerHeight;

    var x = -(e.clientX - (width / 2)) / (width / 25);

    var y = -(e.clientY - (height / 2)) / (height / 25);

    title.style["text-shadow"] =
      x +
      "px" + " " +
      y +
      "px" +
      " #d3d3d3";
  });