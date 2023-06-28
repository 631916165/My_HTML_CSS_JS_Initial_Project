//获取两个随机数
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

//取出相应的元素
const questione1 = document.getElementById("question");
const forme1 = document.getElementById("form");
const inpute1 = document.getElementById("input");
const scoree1 = document.getElementById("score");

//获取score的本地储存的值，并解析json值，转换为javascript的值
let score = JSON.parse(localStorage.getItem("score"));

//因为刚开始没有分数，所以，如果答错，会导致程序错误
if (!score) {
    score = 0;
}

//更新分数
scoree1.innerText = `score：${score}`;
// console.log(num1);
// console.log(num1);
//更新题目
questione1.innerText = `${num1}乘以${num2}等于多少？`;

//计算答案
const correctAns = num1 * num2;


//用于分数的计算
forme1.addEventListener("submit",()=>{
    const userAns = +inpute1.value;
    if (userAns === correctAns) {
        score++;
        updateloaclStorage()
    }else {
        score--;
        updateloaclStorage()
    }

});


//将值储存到score的字段中，将javascript的值转换为json字符串
function updateloaclStorage() {
    localStorage.setItem("score",JSON.stringify(score));
}