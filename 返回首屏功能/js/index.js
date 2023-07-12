//当用户滑动滚动条到400px，返回按钮显示，小于400时隐藏
//点击返回按钮时，滚动条恢复原位
let gotop = document.getElementsByClassName('go-top')[0];
window.onscroll = function() {
    let res = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(res);
    if (res >= 400) {
        gotop.style.display = 'block';
    }
    else {
        gotop.style.display = 'none';
    }
}

gotop.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}