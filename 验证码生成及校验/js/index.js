function yanzhen() {
    let arr = ['0','1','2','3','4','5','6','7','8',
    '9','a','b','c','d','e','f'];

    let str = '';
    for (let i=0;i<6;i++) {
        let num = Math.round(Math.random()*(15-0)+0);
        str += arr[num];
    }
    return str
}

function a(nume) {
    const b = document.getElementById('inputcode');
    if (b.value == nume) {
        alert('输入正确');
    }
    else {
        alert('输入错误');
    }
}

document.getElementsByTagName('a')[0].onclick = function() {
    var h = yanzhen();
    document.getElementById('checkcode').innerText = h;
    console.log(h);


    document.getElementById('btn').onclick = function() {
        a(h);
    }
}