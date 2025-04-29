document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            document.querySelector("header").classList.toggle("light-theme");
            document.querySelectorAll("header nav ul li a").forEach(link => {
                link.classList.toggle("light-theme");
            });
            themeToggle.classList.toggle("light-theme");
        });
    }

    // Smooth scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById(this.getAttribute('href').substring(1));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Tabs with fade animation
    document.querySelectorAll('.tab-container').forEach(container => {
        const tabs     = container.querySelectorAll('.tab-menu li');
        const contents = container.querySelectorAll('.tab-content');

        // Init first tab
        tabs[0].classList.add('active');
        contents[0].classList.add('active','fade-tab');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const target = container.querySelector(this.getAttribute('data-target'));
                // reset
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active','fade-tab'));
                // activate
                this.classList.add('active');
                target.classList.add('active','fade-tab');
            });
        });
    });

    // Home section fade-in
    document.querySelectorAll('#home .fade-in').forEach((el,i) => {
        setTimeout(() => el.classList.add('visible'), i * 700);
    });
});
