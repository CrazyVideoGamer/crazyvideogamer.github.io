function github(){
    window.open('https://www.github.com/crazyvideogamez', target='_top');
}

var body = document.body,
    html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );

let prevScrollpos = window.pageYOffset, currentScrollPos = undefined;
window.onscroll = function() {
    currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName('nav')[0].style.top = '0px';
        document.getElementsByClassName('github-corner')[0].style.top = '0px';
    } else {
        if (currentScrollPos > 35 || height === 783) {
            document.getElementsByTagName('nav')[0].style.top = "-84px";
            document.getElementsByClassName('github-corner')[0].style.top = '-84px';
        }
    }
    prevScrollpos = currentScrollPos;
}