const navBar = document.querySelector(".navBar");
let navTop = navBar.offsetTop;


window.onscroll= function(){

    handleStickyNavBarScroll();
 

}

function handleStickyNavBarScroll(){
    if(window.scrollY >= navTop)navBar.classList.add("fix-navbar");
    
    else navBar.classList.remove("fix-navbar");

}


