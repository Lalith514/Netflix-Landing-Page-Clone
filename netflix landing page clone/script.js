const languageDropdown = document.getElementById("language-btn")
const faqListItem = document.querySelectorAll(".inner-container ul li")

languageDropdown.addEventListener("click", () => {
  document.getElementById("language-dropdown").classList.toggle("show")
})

faqListItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("show")
  })
})