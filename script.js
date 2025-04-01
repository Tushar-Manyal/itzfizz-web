document.addEventListener('DOMContentLoaded', function() {
    // Initial animations with GSAP
    const tl = gsap.timeline();
    
    tl.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    })
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.7")
    .to('.cta-button', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.7")
    .to('.image-container', {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.7");
    
    // Mouse movement effect for images
    const imageContainers = document.querySelectorAll('.image-container');
    
    imageContainers.forEach(container => {
        container.addEventListener('mousemove', function(e) {
            const speed = parseFloat(container.getAttribute('data-speed')) || 0.05;
            const rect = container.getBoundingClientRect();
            
            // Calculate mouse position relative to container
            const xPos = (e.clientX - rect.left) / rect.width - 0.5;
            const yPos = (e.clientY - rect.top) / rect.height - 0.5;
            
            // Apply subtle movement to the image based on mouse position
            const img = container.querySelector('.hero-image');
            gsap.to(img, {
                x: xPos * 20 * speed,
                y: yPos * 20 * speed,
                duration: 0.8,
                ease: "power2.out"
            });
        });
        
        container.addEventListener('mouseleave', function() {
            const img = container.querySelector('.hero-image');
            gsap.to(img, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });
    });
});
