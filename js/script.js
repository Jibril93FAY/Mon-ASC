const scrlBtn = document.querySelectorAll("#scrollToTopBtn");

scrlBtn.forEach((scrlBtntn) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
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

const photos = document.querySelectorAll('#photos img');
        photos.forEach(photo => {
            photo.addEventListener('click', () => {
              window.open(photo.src, '_blank');
            });
        });