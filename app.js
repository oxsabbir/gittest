const menubar = document.getElementById("menuBtn")
const navBar = document.getElementById("navBar")
const close = document.getElementById("close")

console.log(menubar)

menubar.addEventListener("click", () => {
  console.log("clicked")
  navBar.style.opacity = "1"
})

close.addEventListener("click", () => {
  navBar.style.opacity = "0"
})
