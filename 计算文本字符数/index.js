//取出元素
const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

//监听书写框事件，类似于while
textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

//先书写框的值的长度传递给totalCounter进行更新，然后用书写框的最大值减去现在书写框值的长度，就是剩余字符长度
function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}