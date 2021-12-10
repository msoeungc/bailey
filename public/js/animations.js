let imageItems = [...document.querySelectorAll('.img-wrap')];
let titles = [...document.querySelectorAll('.home-des')];
let carouselItems = [...document.querySelectorAll('.carousel-wrap')];

// intersection observer API

let options = {
  rootMargin: '0px',
  threshold: 0.1
}

let options2 = {
  // default root for observer is 0px margin (so the edge of the page)
  // once the observed element passes the threshold, the action is applied to the element
  rootMargin: '0px',
  threshold: .2
}

// callback function
let setItemActive = (entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('carousel-fade');
    }
  })
});


// callback function
let setItemActive2 = (entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  })
});
// creating the observer instance and pass the callback funcion and options
let observer = new IntersectionObserver(setItemActive, options);
let observer2 = new IntersectionObserver(setItemActive2, options2);

carouselItems.forEach((carousel, index) => {
  observer.observe(carousel);
})


imageItems.forEach((item, index) => {
  item.children[0].style.backgroundImage = `url(./images/homeimg/${index+1}.jpg)`;
  observer2.observe(item);
})

titles.forEach((title, index) => {
  observer2.observe(title);
})
