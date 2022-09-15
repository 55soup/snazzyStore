document.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (y > 600) {
    document.getElementById("navbar").style.backdropFilter = "blur(10px)";
  } else {
    document.getElementById("navbar").style.backdropFilter = "none";
  }
  //   document.getElementById("navbar").style.backgroundColor("red");
});

let line1 = document.getElementById("line1");
let popup_img = document.getElementsByClassName("popup_inner")[0];
line1.onclick = changeImg;

function changeImg() {
  line1.style.display("block");
}
