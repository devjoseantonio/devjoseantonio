window.onload = function () {
  var mainContent = document.getElementById("main-content");
  var footer = document.getElementById("footer");
  var contentHeight = footer.offsetHeight;
  mainContent.style.paddingBottom = contentHeight + "px";
};
