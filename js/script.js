const scrlBtn = document.querySelectorAll("#scrollToTopBtn");

scrlBtn.forEach((scrlBtntn) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrlBtntn.classList.remove("hidden");
    } else {
      scrlBtntn.classList.add("hidden");
    }
  });

  scrlBtntn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
