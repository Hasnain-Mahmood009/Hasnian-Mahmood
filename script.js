var menu = document.getElementById("menu");
var menu_icon = document.getElementById("menu_icon");
var cancel_menu = document.getElementById("cancel_icon");
var men = document.querySelectorAll(".header_animate");

for(let i = 0;i < men.length;i++){
    men[i].addEventListener("click", (e) =>{
        e.preventDefault();
        menu.style.top  = "-681px"
    })
}
menu_icon.addEventListener("click", ()=>{
    menu.style.top = "-75px"
})
cancel_menu.addEventListener("click", ()=>{
    menu.style.top  = "-681px"
})

var time = gsap.timeline();

time.from(".header_animate",{
    y:-100,
    opacity:0,
    duration: 1,
    delay: .2,
    stagger:.1
})
time.from(".menu .button",{
    x:50,
    opacity:0,
    duration:.8
})
time.from(".home_animation_1",{
    x: -200,
    opacity:0,
    duration: .7,
    stagger:.3
})
time.from(".home_animation_2",{
    y:-100,
    opacity:0,
    duration:.7,
    stagger:.5
})
time.from(".home_image_animation",{
    x:22,
    opacity:0,
    duration: .7
})
gsap.from(".feature_animation_1", {
    x:-150,
    opacity:0,
    duration:.7,
    scrollTrigger:{
        trigger:".feature_animation_1",
        scroller:"body",
        start:"top 80%",
        scrub:1,
        end:"top 50%"
    }
})
gsap.from(".feature_animation_2",{
    x:150,
    opacity:0,
    duration:.7,
    scrollTrigger:{
        trigger:".feature_animation_1",
        scroller:"body",
        start:"top 80%",
        scrub:1,
        end:"top 50%"
    }
})
gsap.from(".feature_animation_3",{
    y:150,
    opacity:0,
    duration:.7,
    scrollTrigger:{
        trigger:".feature_animation_1",
        scroller:"body",
        start:"top 80%",
        scrub:1,
        end:"top 50%"
    }
})
gsap.from(".skill_animation",{
    y:100,
    opacity:0,
    duration:.7,
    scrollTrigger:{
        trigger:".skill_animation",
        scroller:"body",
        start:"top 80%",
        scrub:1,
        end:"top 50%"
    }
})
gsap.from(".portfolio_animation",{
    scale: 0.5,
    duration:.7,
    opacity:0,
    scrollTrigger:{
        trigger:".portfolio_animation",
        scroller:"body",
        scrub:1,
        start:"top 70%",
        end:"top 40%",
    }
})
gsap.from(".contact_heading_animation",{
    scale: 0.5,
    duration:.7,
    opacity:0,
    scrollTrigger:{
        trigger:".contact_heading_animation",
        scroller:"body",
        scrub:1,
        start:"top 70%",
        end:"top 50%",
    }
})
gsap.from(".contact_left_container_animation",{
    x:-50,
    duration:.7,
    opacity:0,
    scrollTrigger:{
        trigger:".contact_left_container_animation",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from(".contact_right_container_animation",{
    x:100,
    duration:.7,
    opacity:0,
    scrollTrigger:{
        trigger:".contact_left_container_animation",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
});

// Initialize EmailJS
(function() {
    emailjs.init("6oDVE6Ra8eN3WKSbZ");
})();

// Click event directly on send_btn
document.getElementById("send_btn").addEventListener("click", function () {
    var form = document.getElementById("contact_form");

    emailjs.sendForm('service_m7n55cf', 'template_s4ny07l', form)
      .then(function(response) {
         alert("Message sent successfully! ✅");
         console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
         alert("Failed to send the message. ❌ Please try again later.");
         console.log("FAILED...", error);
      });

    form.reset(); // Form clear karna optional
});

gsap.registerPlugin(ScrollToPlugin);

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((menuItem , idx) => {
    menuItem.addEventListener("click", (e) =>{
        e.preventDefault();
        gsap.to(window, {
            duration:1,
            scrollTo: ".section-" + (idx + 1),
            ease: "power2.inOut"
        })
    })
})

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// const lastMenuItems = document.querySelectorAll(".last_container_menu .menu-item");

// lastMenuItems.forEach((menuItem, idx) => {
//     menuItem.addEventListener("click", (e) => {
//         e.preventDefault();
//         // Scroll ko appropriate section tak le jao
//         gsap.to(window, {
//             duration: 1,
//             scrollTo: ".section-" + (idx + 1),
//             ease: "power2.inOut"
//         });
//     });
// });