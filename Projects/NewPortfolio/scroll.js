const scrollElements = document.querySelectorAll('.skills, .projects, .contact');

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
  );
};

const displayScrollElement = (element) => {
  element.classList.add('active');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 90)) {
      displayScrollElement(el);
    }
  });
};

// Add scroll event listener
window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Initial check for elements in view
handleScrollAnimation(); 