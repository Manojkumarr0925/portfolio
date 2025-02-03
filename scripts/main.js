document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle functionality
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            document.querySelector("header").classList.toggle("light-theme");
            document.querySelectorAll("header nav ul li a").forEach((link) => {
                link.classList.toggle("light-theme");
            });
            themeToggle.classList.toggle("light-theme");
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Tab functionality
    const containers = document.querySelectorAll('.tab-container');
    containers.forEach(container => {
        const tabs = container.querySelectorAll('.tab-menu li');
        const contents = container.querySelectorAll('.tab-content');

        // Initialize by showing the first tab content of each section
        if (tabs.length > 0 && contents.length > 0) {
            tabs[0].classList.add('active');
            contents[0].style.display = 'block';
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                const targetId = this.getAttribute('data-target');
                const target = container.querySelector(targetId);

                if (target) {
                    // Remove active class from all tabs and hide all contents
                    tabs.forEach(t => t.classList.remove('active'));
                    contents.forEach(c => c.style.display = 'none');

                    // Add active class to the clicked tab and show the corresponding content
                    this.classList.add('active');
                    target.style.display = 'block';
                }
            });
        });
    });

    // Fade-in animation for home section
    const homeElements = document.querySelectorAll('#home .fade-in');
    homeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 700); // Staggered delay for each element (300ms delay between elements)
    });
});