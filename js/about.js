const animated = document.querySelectorAll('.animatedOnView');

const options = {
  threshold: 0,
  rootMargin: "0px 0px -60px 0px"
}

const fill = new IntersectionObserver((entries, fill) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add("animate");
    fill.unobserve(entry.target);
  })
}, options)

animated.forEach(elt => {
  fill.observe(elt);
});