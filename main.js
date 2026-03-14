var typed = new Typed(".text", {
    strings:["Cyber Security Enthusiast", "Networking Learner", "Future Security Analyst"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Navbar links
const navLinks = document.querySelectorAll('.navbar a');

// Sections
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(sec => {
        const sectionHeight = sec.offsetHeight;
        const sectionTop = sec.offsetTop - 100; // header height adjust
        const sectionId = sec.getAttribute('id');

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === '#' + sectionId){
                    link.classList.add('active');
                }
            });
        }
    });
});


const form = document.getElementById('message-form'); 
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', function(e){
    e.preventDefault(); // prevents page reload

    const formData = new FormData(form);

    fetch('https://formspree.io/f/mwvrqapo', { // my Formspree endpoint
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            successMsg.classList.add('show'); // show success box
            form.reset(); // reset inputs

            // hide after 5 seconds
            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 5000);
        } else {
            alert("Oops! Something went wrong. Please try again.");
        }
    })
    .catch(error => {
        console.error(error);
        alert("Oops! Error submitting the form.");
    });
});


// Mobile version - Updated for better functionality
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const body = document.body;

// Toggle menu on hamburger click
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navbar.classList.toggle('show');
    
    // Add/remove body class for overlay
    if (navbar.classList.contains('show')) {
        body.classList.add('menu-open');
        // Change hamburger icon to X (optional)
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        body.classList.remove('menu-open');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show');
        body.classList.remove('menu-open');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Close menu when clicking outside
window.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !hamburger.contains(e.target) && navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        body.classList.remove('menu-open');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        body.classList.remove('menu-open');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Handle window resize - close menu if window becomes larger than mobile breakpoint
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        navbar.classList.remove('show');
        body.classList.remove('menu-open');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});