let but = document.getElementById('but');
let div = document.getElementsByTagName('div');
let span = document.getElementsByTagName('span');
let timeer = null;

but.onclick = function() {
    let num = 0;
    if (timeer == null) {
        timeer = setInterval(() => {
            num +=10;
            div[1].style.width = num+'px';
            span[0].innerText = Math.ceil(num/400*100);
            if (num==400) {
                clearInterval(timeer);
            }
        },100);
    }
}