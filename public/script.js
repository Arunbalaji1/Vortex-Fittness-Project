function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".carousel-item");
  var items_card = document.querySelectorAll(".carousel-item .card");
  var maxHeight = 0;

  items.forEach(function (item) {
    if (item.offsetHeight > maxHeight) {
      maxHeight = item.offsetHeight;
    }
  });

  items.forEach(function (item) {
    item.style.height = maxHeight + "px";
  });
  items_card.forEach(function (item_card) {
    item_card.style.height = maxHeight + "px";
  });
});

const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
/*  */
