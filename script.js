// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mengambil nilai dari form
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        
        // Di sini Anda bisa menambahkan logika untuk mengirim data form
        console.log('Form submitted:', formValues);
        
        // Reset form
        this.reset();
        alert('Pesan telah terkirim!');
    });
}

// Animasi scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = '#fff';
    }
}); 