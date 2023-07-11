window.onload = function() {
    let timer = 10;
    setInterval(() => {
        timer--;
        document.getElementById('jump').innerText = timer;
        if (timer==0) {
            location.href = '../index.html'
        }
    },1000)
}
document.getElementsByTagName('button')[0].onclick = function() {
    location,href = '../index.html'
}