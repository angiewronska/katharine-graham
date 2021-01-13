const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: "top 85%",
    end: "bottom 50%",
    scrub: true,
  }
});
tl.to(".p1", {opacity: 1, marginTop:0, duration: 3})
tl.to(".p2", {opacity: 1, marginTop:0, duration: 3})
tl.to(".p3", {opacity: 1, marginTop:0, duration: 3})
tl.to(".text__quote", {scale: 1, opacity:1, duration: 3})
tl.to(".text__quote-author", {opacity:1, duration: 3})
tl.to(".p4", {opacity: 1, marginTop:0, duration: 3})
tl.to(".p5", {opacity: 1, marginTop:0, duration: 3})
tl.to(".p6", {opacity: 1, marginTop:0, duration: 3})

tl.to(".biography__image", {opacity: 1, marginTop:0, duration: 3})
tl.to(".biography__text-headline", {opacity: 1, marginTop:0, duration: 3})
tl.to(".p7", {opacity: 1, marginTop:0, duration: 3})
tl.to(".p8", {opacity: 1, marginTop:0, duration: 3})
tl.to(".p9", {opacity: 1, marginTop:0, duration: 3})
tl.to(".p10", {opacity: 1, marginTop:0, duration: 3})

const headline1 = document.querySelector(".header__title-main"),
    mySplitText = new SplitText(headline1, {type:"words"}),
    splitTextTimeline = gsap.timeline();

gsap.set(headline1, {perspective:400});

function kill(){
  splitTextTimeline.clear().time(0);
  mySplitText.revert();
}
kill();
mySplitText.split({type:"lines"}) 
splitTextTimeline.from(mySplitText.lines, {
  duration: 0.9, 
  opacity:0, 
  rotationX:-120, 
  force3D:true, 
  transformOrigin:"top center -150", 
  stagger: 0.1,
});

const headline2 = document.querySelector(".header__title-secondary");
gsap.to(headline2, {opacity:1, marginTop:20, delay:1, duration:1.5})