document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(lnk => lnk.classList.remove('active')); // Remove 'active' from all links
            link.classList.add('active'); // Add 'active' to the clicked link
        });
    });
});

