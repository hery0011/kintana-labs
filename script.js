// Scroll fade-in
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Header parallax
const headerBg = document.querySelector('.header-bg');
window.addEventListener('scroll', () => {
    let offset = window.scrollY;
    headerBg.style.transform = `translateY(${offset * 0.5}px)`;
});
