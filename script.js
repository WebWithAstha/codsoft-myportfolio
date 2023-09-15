function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

  var menu = document.querySelector("#menu-div")
  document.querySelector(".close").addEventListener("click",function(){
    gsap.to(menu,{
      transform:"translateY(-100%)"
    })
  })
  document.querySelector(".menuicon").addEventListener("click",function(){
    gsap.to(menu,{
      transform:"translateY(0)"
    })
  })
  document.querySelectorAll("#menu-div h4 a").forEach(function(h){
    h.addEventListener("click",function(){
      gsap.to(menu,{
        transform:"translateY(-100%)"
      })
    })
  })


  var c = document.querySelector("#cursor")
  document.querySelector("#main").addEventListener("mousemove",function(dets){
    c.style.top= dets.y+"px"
    c.style.left= dets.x+"px"
  })
  document.querySelectorAll(".project").forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
      gsap.to(c,{
        scale:1,
        opacity:1,
        transform:"translate(-50%,-50%)"
      })
    })
    elem.addEventListener("mouseleave",function(dets){
      gsap.to(c,{
        scale:0,
        opacity:0
      })
    })

  })


gsap.from("#p1box1,#p1box2",{
    opacity:0,
    stagger:.4,
    x:-100
  })
gsap.from("#page2forhead h1",{
    opacity:0,
    stagger:.4,
    y:50,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page2forhead",
      start:"top 85%",
      end:"top -50%",
    }
  })

gsap.from(".icon-box img",{
  opacity:0,
    transform:"translate(-50%,-50%)",
    top:"50%",
    left:"50%",
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page3forhead",
      start:"50% 40%",
      end:"top -50%",
    }
  })
  
gsap.from(".progress-fill",{
    duration:1,
    background:"linear-gradient(to right,red,yellow)",
    width:"0%",
      scrollTrigger:{
        scroller:"#main",
        trigger:"#page3forhead",
        start:"50% 40%",
        end:"top -50%",
        // markers:true
      }
})

gsap.from("#page5 .conts",{
    duration:1,
    // x:10,
    // y:-100,
    opacity:0,
    stagger:.2,
    height:"0",
      scrollTrigger:{
        scroller:"#main",
        trigger:"#page5",
        start:"0% 60%",
        end:"top -50%",
        // markers:true
      }
})
gsap.from("#page5 #mailbox",{
    duration:1,
    y:200,
    opacity:0,
    stagger:.2,
    height:"0%",
      scrollTrigger:{
        scroller:"#main",
        trigger:"#page5 #p5row",
        start:"0% 50%",
        end:"top -50%",
        // markers:true
      }
})