function get1class(elem) {
    return document.getElementsByClassName(elem);
}

function get1id(elem) {
    return document.getElementById(elem);
}

var signup1 = get1class("up");
var signin1 = get1class("in");
var signinform1 = get1id("signin");
var signupform1 = get1id("signup");
var form1 = get1class("form1");
var log12 = get1class("log1");
var new12 = get1id("newsta1");
var searchbox1 = get1class("search-bar");

signin1[0].classList.toggle("out");

signup1[0].addEventListener("click", function () {
  signin1[0].classList.toggle("out");
  signup1[0].classList.toggle("out");
  // above 2 line is for toggle function
    signinform1.style.display = "none";
    signupform1.style.display = "flex";
     form1[0].style.height = "540px";

});

signin1[0].addEventListener("click", function () {
   signup1[0].classList.toggle("out");
    signin1[0].classList.toggle("out");
    // above 2 line is for toggle function
   
 signinform1.style.display = "flex";
 signupform1.style.display = "none";
 // signupform1.style.height="200px"
    
});

log12[0].addEventListener('click', function () {
    // alert(log12[0])
    //document.body.classList.toggle("log1o");
    //log12[0].classList.toggle("form21");
    new12.classList.toggle("log1o");
    form1[0].classList.toggle("form21");
    searchbox1[0].style.display = "none";
});


var inputgr = document.querySelectorAll("#signin input[type='button']");
console.log(inputgr.length);
console.log(inputgr[1]);

inputgr[1].addEventListener('click', function () {
    form1[0].classList.toggle("form21");
     searchbox1[0].style.display = "block";
});

var inputgrup = document.querySelectorAll("#signup input[type='button']");
console.log(inputgr.length);
console.log(inputgr[1]);

 inputgrup[1].addEventListener('click', function () {
     form1[0].classList.toggle("form21");
     
     searchbox1[0].style.display = "block";
 });


