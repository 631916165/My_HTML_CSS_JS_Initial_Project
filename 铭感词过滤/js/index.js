let area = document.getElementById('area');
let input = document.getElementById('input');
let res = document.getElementById('res');
let reg = /sb|垃圾/g;

input.onclick = function() {
    let a = area.value.replace(reg,'*');
    res.innerText = a;
}