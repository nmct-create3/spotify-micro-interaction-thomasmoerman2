document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".js-toggle");
  const iconAdd = document.querySelector(".icon--add");
  const iconClose = document.querySelector(".icon--check");

  toggle.addEventListener("click", () => {
    console.log("click");

    if (iconAdd.classList.contains("hidden")) {
      iconAdd.classList.remove("hidden");
      iconClose.classList.add("hidden");
    } else {
      iconAdd.classList.add("hidden");
      iconClose.classList.remove("hidden");
    }
  });
});
