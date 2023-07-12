//没有click类的时候，进行添加，同时让文本进行赋值，繁殖清空click，同时文本值为空

let lis = document.getElementsByTagName('li');

for (let i=0;i<lis.length;i++) {
    lis[i].onclick = function() {
        let res = this.getAttribute('class');
        console.log('res');
        if (!res) {
            this.setAttribute('class','click');
            this.innerText = '座位已选';
        }
    }
}