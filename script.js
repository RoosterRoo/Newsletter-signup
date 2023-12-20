document.querySelector(".newsletter").addEventListener("click", function () {
  document.querySelector(".signup-img").style.display = "none";
  document.querySelector(".signup-content").style.display = "none";
  document.querySelector(".confirm").style.display = "block";

  document.querySelector(".container").style.margin = "5em 0 0 0";
  document.querySelector(".confirm").classList.add("active");
});
