window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
})

window.addEventListener("scroll",function(){
    var logo = document.getElementsByClassName("myLogo");
    logo.className.toggle("sticky", window.scrollY>0);
})
