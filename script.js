// Initialize AOS (Animate on Scroll)
AOS.init({ duration: 1000, once: true });

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

var menuicon = document.getElementById("menu_icon_id");
var navlink = document.querySelector(".nav-links");

menuicon.addEventListener("click", function(){
    if(navlink.style.left == "0px"){
        navlink.style.left = "771px";
    }else{ 
        navlink.style.left = "0";
    }
})