let li = document.getElementsByTagName('li');
let p = document.getElementsByTagName('p');

for (let i=0;i<li.length;i++) {
    li[i].index = i;

    li[i].onmouseover = function() {
        this.style.backgroundColor = 'yellow';
        console.log(this.index);
        for (let j=0;j<p.length;j++) {
            p[j].style.display = 'none';
        }
        p[this.index].style.display = 'block';
    }
    li[i].onmouseout = function() {
        li[i].style.backgroundColor = '#eee';
    }
}