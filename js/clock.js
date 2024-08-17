function clock() {
    let time = new Date();

    let Hours = time.getHours();
    let Minutes = time.getMinutes();
    let Seconds = time.getSeconds();

    let typeoftime = Hours >= 12 ? 'PM' : 'AM';

    Hours = Hours % 12;
    if (Hours == 0) {
        Hours = 12;
    }
    Minutes = Minutes < 10 ? '0' + Minutes : Minutes;
    Seconds = Seconds < 10 ? '0' + Seconds : Seconds;

    let currenttime = Hours + ':' + Minutes + ':' + Seconds + ' ' + typeoftime;

    document.getElementById('clock').textContent = currenttime
}

function randoncordinate() {
    let pos = document.getElementById('current-time');

    let clockWidth = pos.offsetWidth;
    let clockHeight = pos.offsetHeight;

    let width = window.innerWidth;
    let height = window.innerHeight;

    width = width - clockWidth;
    height = height - clockHeight;

    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);

    console.log('Random Coordinates:', x, y);

    move(x, y);
}

function move(x , y) {
    let pos = document.getElementById('current-time');

    pos.style.left = x +'px';
    pos.style.top = y + 'px';
}

clock();
setInterval(clock, 1000);
setInterval(randoncordinate, 5000);

