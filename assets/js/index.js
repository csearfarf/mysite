// Get DOM elements
const navbar = document.getElementById('mainNavbar');
const hamburger = document.getElementById('hamburger');
const sidenav = document.getElementById('sidenav');
const closeBtn = document.getElementById('closeBtn');

// Toggle sidenav when hamburger is clicked
hamburger.addEventListener('click', () => {
    sidenav.style.width = '250px';
});

// Close sidenav when close button is clicked
closeBtn.addEventListener('click', () => {
    sidenav.style.width = '0';
});

// Close sidenav automatically if screen is resized to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidenav.style.width = '0';
    }
});

// Listen to scroll events to toggle navbar background, text color, and shadow
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Add 'scrolled' class once we pass 50px scroll
        navbar.classList.add('scrolled');
    } else {
        // Remove 'scrolled' class if we're near the top
        navbar.classList.remove('scrolled');
    }
});


// Function to set up an Intersection Observer for a given selector and animation class
function setupObserver(selector, animationClass) {
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    // Unobserve the element if you want the animation to run only once
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Observe each element that matches the selector
    document.querySelectorAll(selector).forEach((elem) => {
        observer.observe(elem);
    });
}

// Set up observers for the slide-in-left and slide-in-top animations
setupObserver('.animate-slide-left', 'slide-in-left');
setupObserver('.animate-slide-top', 'slide-in-top');


var btn = document.getElementById('btn-up');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

btn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
//Adjust scroll offset if you have a fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const yOffset = -70; // adjust if you have a fixed navbar
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});