let imageItems = [...document.querySelectorAll('.img-wrap')];
let titles = [...document.querySelectorAll('.home-des')];
let cardItems = [...document.querySelectorAll('.card-wrap')];
let homeforms = [...document.querySelectorAll('.home-fade-wrap')];

// intersection observer API

let options = {
  // default root for observer is 0px margin (so the edge of the page)
  // once the observed element passes the threshold, the action is applied to the element
  rootMargin: '0px',
  threshold: 0.1
}

let options2 = {
  rootMargin: '0px',
  threshold: .2
}

let options3 = {
  rootMargin: '0px',
  threshold: .1
}
// callback function
let setItemActive = (entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('card-fade');
    }
  })
});

let setItemActive2 = (entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('form-fade');
    }
  })
});


// callback function
let setItemActive3 = (entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  })
});



// creating the observer instance and pass the callback funcion and options
let observer = new IntersectionObserver(setItemActive, options);
let observer2 = new IntersectionObserver(setItemActive2, options2);
let observer3 = new IntersectionObserver(setItemActive3, options3);


cardItems.forEach((card, index) => {
  observer.observe(card);
})

homeforms.forEach((form, index) => {
  observer2.observe(form);
})

imageItems.forEach((item, index) => {
  item.children[0].style.backgroundImage = `url(./images/homeimg/${index+1}.jpg)`;
  observer3.observe(item);
})

titles.forEach((title, index) => {
  observer3.observe(title);
})
