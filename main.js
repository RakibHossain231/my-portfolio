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