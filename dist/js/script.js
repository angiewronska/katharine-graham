"use strict";

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: "top 85%",
    end: "bottom 50%",
    scrub: true
  }
});
tl.to(".p1", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
tl.to(".p2", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
tl.to(".p3", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
tl.to(".text__quote", {
  scale: 1,
  opacity: 1,
  duration: 3
});
tl.to(".text__quote-author", {
  opacity: 1,
  duration: 3
});
tl.to(".p4", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
tl.to(".p5", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
tl.to(".p6", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
tl.to(".biography__image", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
tl.to(".biography__text-headline", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
tl.to(".p7", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
tl.to(".p8", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
tl.to(".p9", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
tl.to(".p10", {
  opacity: 1,
  marginTop: 0,
  duration: 3
});
var headline1 = document.querySelector(".header__title-main"),
    mySplitText = new SplitText(headline1, {
  type: "words"
}),
    splitTextTimeline = gsap.timeline();
gsap.set(headline1, {
  perspective: 400
});

function kill() {
  splitTextTimeline.clear().time(0);
  mySplitText.revert();
}

kill();
mySplitText.split({
  type: "lines"
});
splitTextTimeline.from(mySplitText.lines, {
  duration: 0.9,
  opacity: 0,
  rotationX: -120,
  force3D: true,
  transformOrigin: "top center -150",
  stagger: 0.1
});
var headline2 = document.querySelector(".header__title-secondary");
gsap.to(headline2, {
  opacity: 1,
  marginTop: 20,
  delay: 1,
  duration: 1.5
});
"use strict";

var sliderItems = document.getElementsByClassName('item');
var arrowPrev, arrowNext, dots, years;

var createDots = function createDots() {
  var sliderDots = document.getElementById('slider__dots');
  var dot = document.createElement('li');
  dot.setAttribute('class', 'slider__dots-dot');
  sliderDots.append(dot);
};

var createTimeline = function createTimeline(i) {
  var sliderTimeline = document.getElementById('slider__timeline');
  var timelineYear = document.createElement('li');
  var yearValue = document.querySelectorAll('.item > .item-text > .item-text--year');
  timelineYear.setAttribute('class', 'slider__timeline-year');
  timelineYear.innerHTML = yearValue[i].innerText;
  sliderTimeline.append(timelineYear);
};

for (i = 0; i < sliderItems.length; i++) {
  createDots(i);
  createTimeline(i);
}

arrowPrev = document.getElementById('arrow-prev');
arrowNext = document.getElementById('arrow-next');
dots = document.querySelectorAll('.slider__dots-dot');
years = document.querySelectorAll('.slider__timeline-year');
var slideIndex = 0;

var showSlides = function showSlides(index) {
  if (index >= sliderItems.length - 1) {
    slideIndex = -1;
  } else if (index < 0) {
    index = sliderItems.length - 1;
    slideIndex = sliderItems.length - 1;
  }

  for (i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove('active');
    dots[i].classList.remove('active');
    years[i].classList.remove('active');
  }

  sliderItems[index].classList.add('active');
  dots[index].classList.add('active');
  years[index].classList.add('active');
};

showSlides(slideIndex);
dots.forEach(function (dot, i) {
  dot.addEventListener('click', function () {
    showSlides(i);
  });
});
years.forEach(function (year, i) {
  year.addEventListener('click', function () {
    showSlides(i);
  });
});
arrowPrev.addEventListener('click', function () {
  return showSlides(--slideIndex);
});
arrowNext.addEventListener('click', function () {
  return showSlides(++slideIndex);
});