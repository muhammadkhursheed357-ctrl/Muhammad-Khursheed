document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Navbar Scroll Effect (Adds slight blur/opacity when scrolled)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });

    // 3. Lightbox Logic for Portfolio
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (lightbox && lightboxImg && galleryItems.length > 0) {
        // Open lightbox
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgUrl = item.getAttribute('data-image');
                lightboxImg.src = imgUrl;
                lightbox.classList.remove('hidden');
                
                // Trigger animation after removing hidden class
                setTimeout(() => {
                    lightbox.classList.remove('opacity-0');
                    lightboxImg.classList.remove('scale-95');
                    lightboxImg.classList.add('scale-100');
                }, 10);
                
                // Prevent background scrolling
                document.body.style.overflow = 'hidden';
            });
        });

        // Close lightbox function
        const closeLightbox = () => {
            lightbox.classList.add('opacity-0');
            lightboxImg.classList.remove('scale-100');
            lightboxImg.classList.add('scale-95');
            
            // Wait for animation to finish before hiding
            setTimeout(() => {
                lightbox.classList.add('hidden');
                lightboxImg.src = ''; // clear source
                document.body.style.overflow = ''; // restore scrolling
            }, 300);
        };

        // Close via button
        lightboxClose.addEventListener('click', closeLightbox);

        // Close via clicking background
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Close via ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
                closeLightbox();
            }
        });
    }
});
