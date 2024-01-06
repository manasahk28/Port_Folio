
    document.addEventListener('DOMContentLoaded', function () {
        // Get all the skills links
        let skillsLinks = document.querySelectorAll('.box a');

        // Add a click event listener to each skills link
        skillsLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                // Toggle the 'active' class on the clicked link
                link.classList.toggle('active');
            });
        });
    });

   /*dark mode*/
   
    document.addEventListener('DOMContentLoaded', function () {
        // Get the button element
        let toggleButton = document.getElementById('toggleButton');

        // Add a click event listener to the button
        toggleButton.addEventListener('click', function () {
            // Toggle the 'dark-mode' class on the body element
            document.body.classList.toggle('dark-mode');

            // Toggle the 'dark-text' class on all elements with the 'text' class
            document.querySelectorAll('.text, .name, .heading, .descri, .contact span').forEach(function (element) {
                element.classList.toggle('dark-text');
            });

            // Toggle the 'dark-nav' class on the navbar
            let navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.classList.toggle('dark-nav');
            }
        });
    });

    

