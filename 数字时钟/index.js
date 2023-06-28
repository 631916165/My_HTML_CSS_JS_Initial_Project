const houre1 = document.getElementById("hour");
const minutee1 = document.getElementById("minutes");
const seconde1 = document.getElementById("seconds");
const ampme1 = document.getElementById("ampm");



function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    //判断是上午还是下午
    if (h > 12) {
        h = h-12;
        ampm = "PM";
    }
    // console.log(h);
    // console.log(m);
    // console.log(s);

    h = h < 10 ? "0" +h : h;
    m = m < 10 ? "0" +m : m;
    s = s < 10 ? "0" +s : s;

    houre1.innerText = h;
    minutee1.innerText = m;
    seconde1.innerText = s;
    ampme1,(innerText = ampm);


    setTimeout(()=> {
        updateClock();
    },1000);
}


updateClock();



