let vs = {
    java: 6.1,
    py: 11.2,
    js: 13.22,
    php: 16.47,
    asm: 17.8,
    c: 19.85,
    swift: 24.6,
    cpp: 27.5,
    html: 60 + 55.85,

    ff: 118.66
};

let ve = {
    java: 11.1,
    py: 13.4,
    js: 16.43,
    php: 17.87,
    asm: 19.9,
    c: 24.8,
    swift: 28.0,
    cpp: 31.5,
    html: 118.46,

    ff: 120.16
};


let crr = 0.4;

function playcode(ctype) {

    let vid = document.getElementById('vid');

    vid.currentTime = vs[ctype] + crr;

    vid.play();

    var calcdur = (ve[ctype] - vs[ctype]) * 1000;

    console.log(calcdur);

    document.getElementsByClassName('mainvid')[0].style.display = 'block'
    document.getElementsByClassName('tit')[0].style.opacity = "0";

    setTimeout(() => {
        vid.pause();
        if (ctype != 'ff') {
            playcode('ff');
        }
        else {
            document.getElementsByClassName('mainvid')[0].style.display = 'none';
            document.getElementsByClassName('tit')[0].style.opacity = "1";
        }
    }, calcdur);

}