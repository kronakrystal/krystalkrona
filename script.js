const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar)  {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


if (close)  {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function addToCart(){
    var x = document.getElementById("cartNum").innerHTML;
    var y = Number(x) + 1;
    document.getElementById("cartNum").innerHTML = y;
}

function addToCar(){
    var x = document.getElementById("cartNum").innerHTML;
    var y = Number(x) - 1;
    document.getElementById("cartNum").innerHTML = y;
}