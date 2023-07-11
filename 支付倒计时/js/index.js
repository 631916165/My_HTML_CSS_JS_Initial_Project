document.getElementsByTagName('button')[1].onclick = function() {
    let res = window.confirm('你确定要支付吗');
    if (res) {
        location.href = './pay.html';
    }
}