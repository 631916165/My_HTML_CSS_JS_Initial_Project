//获取类元素
const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

//相当于python的print
console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);


//这里是窗口监听事件，如果已经滚动了的像素值大于文章内容的长度减去文章上面的内容再减去外边框的margin50px，就给导航栏的类添加一个active的样式，导航栏变黑，反之去掉名为active的类
window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});