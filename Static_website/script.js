document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the intersection observer callback
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Play the video if it is in view
                if (entry.target.tagName === 'VIDEO') {
                    entry.target.play();
                }
            } else {
                entry.target.classList.remove('visible');
                
                // Pause the video if it is out of view
                if (entry.target.tagName === 'VIDEO') {
                    entry.target.pause();
                }
            }
        });
    };

    // Create an Intersection Observer with a threshold of 0.5
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    // Select and observe all cards
    const cards = document.querySelectorAll('.delayed-card-1, .delayed-card-2, .delayed-card-3, .delayed-card-4');
    cards.forEach(card => observer.observe(card));

    // Select and observe video elements
    const videos = document.querySelectorAll('.cards-video');
    videos.forEach(video => observer.observe(video));

    // Select and observe text elements inside the video overlay
    const textElements = document.querySelectorAll('.cards-title, .cards-text');
    textElements.forEach(text => observer.observe(text));

    // Select and observe contact form and contact info
    const contactForm = document.querySelector('.contact-form');
    const contactInfo = document.querySelector('.contact-info');

    if (contactForm) {
        observer.observe(contactForm);
    }

    if (contactInfo) {
        observer.observe(contactInfo);
    }
});
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('cardvid1-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const target = document.querySelector('.cardvid1');
    if (target) {
        observer.observe(target);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const animateElements = document.querySelectorAll('.cardvid2, .cardvid3');

    function handleScroll() {
        const windowHeight = window.innerHeight;

        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 50) {
                element.classList.add('in-view');
            } else {
                element.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});

