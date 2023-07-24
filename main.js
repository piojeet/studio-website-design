function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()



var crsr = document.querySelector("#cursor")
var main = document.querySelector("#main")
main.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+20+"px"
  crsr.style.top = dets.y+20+"px"
})


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers:true,
        start: "top -27%",
        end: "top 0",
        scrub:3
    }
})
tl.to("#page1 h1",{
    x:-70,
    duration:1
    
},'anim')

tl.to("#page1 h2",{
    x:100
},'anim')

tl.to("#page1 video",{
    width:"90%",
    y:"-7rem"
},'anim')


var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: "#page1 h1",
      scroller: "#main",
      // markers:true,
      start: "top -150%",
      end: "top -340%",
      scrub: 3
  }
})

tl2.to("#main",{
  backgroundColor:"#fff"
},'anim')


var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: "#page1 h1",
      scroller: "#main",
      // markers:true,
      start: "top -470%",
      end: "top 0",
      scrub: 3
  }
})

tl3.to("#main",{
  backgroundColor:"#000"
},'anim')




// var boxes = document.querySelectorAll(".box")
// boxes.forEach(function(elem){
// elem.addEventListener("mouseenter",function(){
//   var att = elem.getAttribute("data-image")
//   crsr.style.width = "300px"
//   crsr.style.height = "250px"
//   crsr.style.borderRadius = "0"
//   crsr.style.backgroundImage = `url(${att})`
//   // console.log(att)
// })

// elem.addEventListener("mouseleave",function(){
//   elem.style.backgroundColor = "transparent"
// })
// })





var li = document.querySelectorAll("#nav #home")
var purple = document.querySelector("#purple")
li.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){

    purple.style.display = "block"
    purple.style.opacity = "1"
    // purple.style.transition = "1"
  })

  elem.addEventListener("mouseleave", function(){

    purple.style.display = "none"
    purple.style.opacity = "0"
  })
})





var li = document.querySelectorAll("#nav #Work")
var purple2 = document.querySelector("#purple2")
li.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){

    purple2.style.display = "block"
    purple2.style.opacity = "1"
    // purple.style.transition = "1"
  })

  elem.addEventListener("mouseleave", function(){

    purple2.style.display = "none"
    purple2.style.opacity = "0"
  })
})




var li = document.querySelectorAll("#nav #studio")
var purple3 = document.querySelector("#purple3")
li.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){

    purple3.style.display = "block"
    purple3.style.opacity = "1"
    // purple.style.transition = "1"
  })

  elem.addEventListener("mouseleave", function(){

    purple3.style.display = "none"
    purple3.style.opacity = "0"
  })
})





var li = document.querySelectorAll("#nav #contact")
var purple4 = document.querySelector("#purple4")
li.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){

    purple4.style.display = "block"
    purple4.style.opacity = "1"
    // purple.style.transition = "1"
  })

  elem.addEventListener("mouseleave", function(){

    purple4.style.display = "none"
    purple4.style.opacity = "0"
  })
})






// function myfunction(){
//  var bg = document.addEventListener('click', function(e){
//     bg.style.backgroundColor = "red"
//   })

// }