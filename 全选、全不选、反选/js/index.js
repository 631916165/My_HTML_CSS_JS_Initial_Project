//获取元素
let btn = document.getElementsByTagName('button');
let input = document.getElementsByTagName('input');

//全选
btn[0].onclick = function() {
    for (let i=0;i<input.length;i++) {
        input[i].checked = true;
    }
}

//全不选
btn[1].onclick = function() {
    for (let i=0;i<input.length;i++) {
        input[i].checked = false;
    }
}

//反选
btn[2].onclick = function() {
    for (let i=0;i<input.length;i++) {
        input[i].checked = !input[i].checked;
    }
}