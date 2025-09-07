document.addEventListener('DOMContentLoaded', function () {
    // 1. Define the path to the current page
    const currentPage = window.location.pathname.split('/').pop();

    // 2. Define the HTML for the navigation menu.
    // To add a new link in the future, just add a new <li> item here.
    const navHTML = `
        <nav class="bg-white p-4 rounded-lg shadow-md">
            <h2 class="font-bold text-lg mb-4 border-b pb-2">Navigation</h2>
            <ul class="space-y-2">
                <li><a href="index.html" class="font-bold text-blue-600 hover:underline">Home</a></li>
                <li><a href="units.html" class="font-bold text-blue-600 hover:underline mt-3 block">Units & Notation</a></li>
                <li><a href="algebra.html" class="font-bold text-blue-600 hover:underline mt-3 block">Core Algebra</a></li>
                <li><a href="trigonometry.html" class="font-bold text-blue-600 hover:underline mt-3 block">Trigonometry</a></li>
                <li><a href="sine_wave_fundamentals.html" class="font-bold text-blue-600 hover:underline mt-3 block">Sine Wave Fundamentals</a></li>
                <li><a href="vectors.html" class="font-bold text-blue-600 hover:underline mt-3 block">Vectors</a></li>
                <li><a href="calculus.html" class="font-bold text-blue-600 hover:underline mt-3 block">Calculus</a></li>
                <li><a href="mechanics.html" class="font-bold text-blue-600 hover:underline mt-3 block">Applied Mechanics</a></li>
                <li><a href="ac_circuits.html" class="font-bold text-blue-600 hover:underline mt-3 block">AC Circuit Analysis</a></li>
                <li><a href="linear_methods.html" class="font-bold text-blue-600 hover:underline mt-3 block">Linear Methods</a></li>
                <li><a href="advanced_calculus.html" class="font-bold text-blue-600 hover:underline mt-3 block">Advanced Calculus</a></li>
                <li><a href="numerical_methods.html" class="font-bold text-blue-600 hover:underline mt-3 block">Numerical Methods</a></li>
                <li><a href="economics.html" class="font-bold text-blue-600 hover:underline mt-3 block">Financial Economics</a></li>
                <li><a href="statistics.html" class="font-bold text-blue-600 hover:underline mt-3 block">Statistics</a></li>
                            </ul>
        </nav>
    `;

    // 3. Insert the HTML into the placeholder div
    const navPlaceholder = document.getElementById('navigation-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
    }

    // 4. Add the 'active' class to the correct link
    const navLinks = navPlaceholder.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});