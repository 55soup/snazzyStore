document.addEventListener("scroll", () => {
  let y = window.scrollY;
  console.log(y);
  if (y > 600) {
    document.getElementById("navbar").style.backdropFilter = "blur(10px)";
  } else {
    document.getElementById("navbar").style.backdropFilter = "none";
  }
  //   document.getElementById("navbar").style.backgroundColor("red");
});
