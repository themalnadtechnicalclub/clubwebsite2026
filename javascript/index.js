// gsap.registerPlugin(ScrollTrigger)

var navIcon = document.getElementById('nav-icon1');
var menu = document.querySelector(".menu-screen");



navIcon.addEventListener('click', function () {
    navIcon.classList.toggle('open');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const footer = document.querySelector('.contact')
footer.addEventListener('click', function () {
    navIcon.classList.toggle('open');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
})


const loader = document.querySelector('.loader');

function hideLoader() {
    if (loader) {
        loader.style.display = 'none';
    }
}

window.addEventListener('load', hideLoader);

// Fallback: Force hide loader after 5 seconds
setTimeout(hideLoader, 5000);

const loading = document.querySelectorAll(".team-card-1 img")
for (i = 0; i < loading.length; i++) {
    loading[i].setAttribute('loading', 'lazy')
}
const Gallery = document.querySelectorAll(".gallery img")
for (i = 0; i < Gallery.length; i++) {
    Gallery[i].setAttribute('loading', 'lazy')
}

const foot = document.querySelector(".contact a")
foot.href = './contact.html'

const copy = document.querySelector(".copyright p").innerHTML = `Copyright <a href="#"><i class="fa-regular fa-copyright"></i></a> The Malnad Technical Club🚀.`

// gsap.to('.project-heading' ,{
//   ScrollTrigger: {
//     trigger: ".project",
//     start: 'top 10px',
//   },
//   y:'-100vh'
// })

// gasp.to('.project',{
//   ScrollTrigger: {
//     trigger: ".project",
//     start: 'top 10px',
//   }
// })

// window.addEventListener('scroll', function() {
//   if (window.scrollY > 0) {
//       document.body.classList.add('scrolling');
//   } else {
//       document.body.classList.remove('scrolling');
//   }
// });


// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    const heroWrapper = document.querySelector('.hero-wrapper');
    const movingElements = document.querySelectorAll('[data-speed]');

    if (movingElements.length > 0) {
        // Parallax Mouse Move Effect
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            movingElements.forEach(el => {
                const speed = el.getAttribute('data-speed');
                const xOffset = x * speed;
                const yOffset = y * speed;

                // Use translate3d for better performance
                el.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
            });
        });
    }

    // Device orientation for mobile (optional but nice)
    window.addEventListener('deviceorientation', (e) => {
        const x = e.gamma; // -90 to 90
        const y = e.beta; // -180 to 180
        // Clamp values and apply (simplified)
    });
});
