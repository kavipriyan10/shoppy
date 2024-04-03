// const nav= document.querySelector('.side-nav')
// const menu= document.querySelector('.nav-menu')

// menu.addEventListener('click',()=>{
//     nav.style.display = "block"
// })
 
// const side = document.querySelector('.side-nav')
// const ind = document.getElementById('.index')

// ind.addEventListener('click',() =>{
//     side.style.display ="none"
// })
var sidenav = document.querySelector(".side-nav")

function showNov(){
    sidenav.style.left = "0"
}
function cancelNov(){ 
    sidenav.style.left = "-55%"
}