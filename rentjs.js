function get1class(elem) {
    return document.getElementsByClassName(elem);
}

function get1id(elem) {
    return document.getElementById(elem);
}

var signup1 = get1class("up");

signup1[0].addEventListener('click', function () {
    var signin1 = get1class("in");
    alert(signin1);
    
    console.log(signin1[0].style) ;
    
});