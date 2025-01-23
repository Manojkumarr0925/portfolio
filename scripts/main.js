document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.tab-container');

    containers.forEach(container => {
        const tabs = container.querySelectorAll('.tab-menu li');
        const contents = container.querySelectorAll('.tab-content');

        // Initialize by showing the first tab content of each section
        const firstTab = tabs[0];
        const firstContent = contents[0];
        
        firstTab.classList.add('active');
        firstContent.style.display = 'block';

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const target = container.querySelector(this.dataset.target);

                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.style.display = 'none');

                this.classList.add('active');
                target.style.display = 'block';
            });
        });
    });
});
