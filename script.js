document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('h2, ul li, .profile-photo, .experience-photo, .skills-photo');
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
    });
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });
    
    elements.forEach(el => {
        observer.observe(el);
    });
});
