let input = document.getElementById('val');
let show = document.getElementById('show');

let arr = ['红烧肉','王者荣耀','英雄联盟'];
input.onkeyup = function() {
    show.style.display = 'block';
    let str = '';
    arr.forEach((item) => {
        let res = item.indexOf(input.value);
        if (res != -1) {
            str += '<p>'+item+'</p>';
        }
    })
    // console.log(str);
    if (!input.value || !str) {
        show.innerHTML = '<p>没有搜索到相关的内容</p>';
    }
    else {
        show.innerHTML = str;
    }
}

input.onblur = function() {
    show.style.display = 'none';
    input.value = '';
}