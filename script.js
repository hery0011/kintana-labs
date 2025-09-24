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

// Floating social icons on scroll
const socialFloat = document.getElementById('social-float');

window.addEventListener('scroll', () => {
    if(window.scrollY > 400){ // tu peux ajuster la distance
        socialFloat.classList.add('show');
    } else {
        socialFloat.classList.remove('show');
    }
});

// Scroll horizontal portfolio avec molette
const portfolio = document.querySelector('#portfolio .portfolio');
portfolio.addEventListener('wheel', (e) => {
    e.preventDefault();
    portfolio.scrollBy({
        left: e.deltaY < 0 ? -100 : 100,
        behavior: 'smooth'
    });
});

// Swipe mobile pour portfolio
let isDown = false;
let startX;
let scrollLeft;

const portfolioSection = document.querySelector('#portfolio .portfolio');

portfolioSection.addEventListener('mousedown', (e) => {
    isDown = true;
    portfolioSection.classList.add('active');
    startX = e.pageX - portfolioSection.offsetLeft;
    scrollLeft = portfolioSection.scrollLeft;
});

portfolioSection.addEventListener('mouseleave', () => {
    isDown = false;
    portfolioSection.classList.remove('active');
});

portfolioSection.addEventListener('mouseup', () => {
    isDown = false;
    portfolioSection.classList.remove('active');
});

portfolioSection.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - portfolioSection.offsetLeft;
    const walk = (x - startX) * 2; // vitesse
    portfolioSection.scrollLeft = scrollLeft - walk;
});


