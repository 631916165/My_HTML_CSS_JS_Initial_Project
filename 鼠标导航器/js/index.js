//先获取鼠标的x，y坐标
//给div进行位置赋值,left,top

let div = document.getElementById('div');

document.onmousemove = function(e) {
    let event = e || window.event;
    div.style.left = event.clientX-div.clientWidth/2+'px';
    div.style.top = event.clientY-div.clientHeight/2+'px';
}