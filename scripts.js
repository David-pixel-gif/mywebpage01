// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Add hover effect for the call-to-action button
    const ctaButton = document.querySelector('.cta');
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', () => {
            ctaButton.style.boxShadow = "0 8px 20px rgba(255, 204, 0, 0.5)";
        });
        ctaButton.addEventListener('mouseout', () => {
            ctaButton.style.boxShadow = "none";
        });
    }

    // Show a dynamic greeting based on time
    const header = document.querySelector('header h1');
    if (header) {
        const currentHour = new Date().getHours();
        let greeting = "Welcome!";
        if (currentHour < 12) {
            greeting = "Good Morning!";
        } else if (currentHour < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }
        header.innerText = `${greeting} Explore Top IoT Projects for Beginners!`;
    }

    // Dynamic service list animation (optional, adjust if needed)
    const services = document.querySelectorAll('.services ul li');
    services.forEach((service, index) => {
        setTimeout(() => {
            service.style.opacity = "1";
            service.style.transform = "translateX(0)";
        }, index * 200); // Staggered animation
    });

    // Smooth scroll for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Project card hover effect
    document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });

    // Filter projects by category
    const filterProjects = (category) => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card) => {
            if (category === 'all' || card.classList.contains(category)) {
                card.style.display = 'block'; // Show the card
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });
    };

    // Add event listeners for category filter buttons
    document.querySelectorAll('.category-filter button').forEach((button) => {
        button.addEventListener('click', (e) => {
            const category = e.target.getAttribute('onclick').match(/filterProjects\('(.*?)'\)/)[1];
            filterProjects(category);
        });
    });
});
