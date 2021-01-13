const sliderItems = document.getElementsByClassName('item');
let arrowPrev,
    arrowNext,
    dots,
    years;

const createDots = () => {
  const sliderDots = document.getElementById('slider__dots');
  const dot = document.createElement('li');
  dot.setAttribute('class', 'slider__dots-dot')
  sliderDots.append(dot);
}

const createTimeline = (i) => {
  const sliderTimeline = document.getElementById('slider__timeline');
  const timelineYear = document.createElement('li');
  let yearValue = document.querySelectorAll('.item > .item-text > .item-text--year')
  timelineYear.setAttribute('class', 'slider__timeline-year')
  timelineYear.innerHTML = yearValue[i].innerText;
  sliderTimeline.append(timelineYear);
}

for(i=0; i<sliderItems.length; i++) {
  createDots(i);
  createTimeline(i);
}

arrowPrev = document.getElementById('arrow-prev');
arrowNext = document.getElementById('arrow-next');
dots = document.querySelectorAll('.slider__dots-dot');
years = document.querySelectorAll('.slider__timeline-year');
let slideIndex = 0;

const showSlides = (index) => {
  if ( index >= sliderItems.length - 1 ) {
    slideIndex = -1;
  }
  else if ( index < 0 ) { 
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
}

showSlides(slideIndex)

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
      showSlides(i);
  })
})

years.forEach((year, i) => {
  year.addEventListener('click', () => {
      showSlides(i);
  })
})

arrowPrev.addEventListener('click', () => showSlides(--slideIndex));
arrowNext.addEventListener('click', () => showSlides(++slideIndex));












