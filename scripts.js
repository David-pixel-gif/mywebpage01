// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Add hover effect for call-to-action button
    const ctaButton = document.querySelector('.cta');
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.boxShadow = "0 8px 20px rgba(255, 204, 0, 0.5)";
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.boxShadow = "none";
    });

    // Show a dynamic greeting based on time
    const header = document.querySelector('header h1');
    const currentHour = new Date().getHours();
    let greeting = "Welcome!";
    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    header.innerText = `${greeting} Need Help with Your Information Systems or Programming Projects?`;

    // Add dynamic service list animation
    const services = document.querySelectorAll('.services ul li');
    services.forEach((service, index) => {
        setTimeout(() => {
            service.style.opacity = "1";
            service.style.transform = "translateX(0)";
        }, index * 200); // Staggered animation
    });
});
