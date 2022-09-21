// 객체 배열로 선언하기
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const img = document.getElementsByClassName("popup_inner")[0];
line1.addEventListener("click", () => {
  img.style.backgroundImage = "url(img/clickme/1.png)";
  img.style.display = "block";
});

line2.addEventListener("click", () => {
  img.style.display = "block";
  img.style.backgroundImage = "url(img/clickme/2.png)";
});

line3.addEventListener("click", () => {
  img.style.display = "block";
  img.style.backgroundImage = "url(img/clickme/3.png)";
});

line4.addEventListener("click", () => {
  img.style.display = "block";
  img.style.backgroundImage = "url(img/clickme/4.png)";
});

document.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (y > 600) {
    document.getElementById("navbar").style.backdropFilter = "blur(10px)";
  } else {
    document.getElementById("navbar").style.backdropFilter = "none";
  }
  //   document.getElementById("navbar").style.backgroundColor("red");
});

const show_menu = document.getElementsByClassName("show_menu")[0];
const menuBtn = document.getElementById("btn-menu");
const inMenuBtn = document.getElementsByClassName("bx-menu")[0];
const rightMenu = document.getElementsByClassName("rightBar")[0];

menuBtn.addEventListener("click", () => {
  rightMenu.classList.toggle("show_menu");
  inMenuBtn.classList.toggle("bx-menu");
  inMenuBtn.classList.toggle("bxs-x-square");
});
