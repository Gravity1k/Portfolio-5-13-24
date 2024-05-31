function toggleMenu() {
    document.querySelector('.ham').classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
}


function handleResize() {
    if (window.innerWidth >= 960) {
        document.querySelector('.ham').classList.remove('active');
        document.querySelector('.navbar').classList.remove('active');
        document.querySelector('.header').classList.remove('active');
    }
}


window.addEventListener('resize', handleResize);

// Initial check
handleResize();


function resetNavbarAndHam() {
    document.querySelector('.navbar').classList.remove('active');
    document.querySelector('.ham').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            // Remove "active" class from all navigation links
            navbarLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Add "active" class to the clicked navigation link
            link.classList.add('active');

            // Reset .navbar and .ham
            resetNavbarAndHam();

            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});