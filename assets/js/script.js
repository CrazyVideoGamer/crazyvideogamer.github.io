function github(){
    window.open('https://www.github.com/crazyvideogamez', target='_top');
}

let prevScrollpos = window.pageYOffset, currentScrollPos = undefined;
window.onscroll = function() {
    currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName('nav')[0].style.top = '0px';
    } else {
        if (currentScrollPos > 35) {
            document.getElementsByTagName('nav')[0].style.top = "-64px";
        }
    }
    prevScrollpos = currentScrollPos;
}