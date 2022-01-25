var menuIcon= document.querySelector(".menuIcon");
var sideIBar= document.querySelector(".sideBar");
var mainBody =document.querySelector(".mainBody")

menuIcon.onclick = function(){
sideIBar.classList.toggle("smallSideBar");
mainBody.classList.toggle("largeBody")

}


