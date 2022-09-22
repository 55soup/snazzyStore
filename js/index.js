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

const show_menu = document.getElementsByClassName("show_menu")[0];
// const color_menu = document.getElementsByClassName("active")[0];
const color_menu = document.getElementById("active");
const menuBtn = document.getElementById("btn-menu");
const inMenuBtn = document.getElementsByClassName("bx-menu")[0];
const inInMenuBtn = document.getElementsByClassName("bx")[0];

document.addEventListener("scroll", () => {
  let y = window.scrollY;
  let nav_inner = document.querySelectorAll(".nav_item a");
  if (y > 600) {
    document.getElementById("navbar").style.backgroundColor =
      "rgb(255, 255, 255, 0.5)"; /** 바탕 반투명 */
    for (let i = 0; i < nav_inner.length; i++) {
      /** nav바 글씨바꿈 */
      nav_inner[i].style.color = "black";
    }
    inMenuBtn.style.color = "black";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    for (let i = 0; i < nav_inner.length; i++) {
      nav_inner[i].style.color = "white";
    }
    inMenuBtn.style.color = "white";
  }
  //   document.getElementById("navbar").style.backgroundColor("red");
});

const rightMenu = document.getElementsByClassName("rightBar")[0];
menuBtn.addEventListener("click", () => {
  inMenuBtn.classList.toggle("bx-menu");
  inMenuBtn.classList.toggle("bxs-x-square");
  rightMenu.classList.toggle("show_menu");
  inInMenuBtn.classList.toggle("active");
});
