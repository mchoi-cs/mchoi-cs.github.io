/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 



//ANIMATION FOR MAIN PAGE... 
//TAKEN FROM: https://github.com/kateFrontend/js-auto-text-effect/blob/main/script.js
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const textEl2 = document.getElementById('text2');
const text2 = 'Project Portfolio';
const text = 'Michelle Choi';

let idx = 0;
let speed = 300;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if (idx <= text.length) {
        setTimeout(writeText, speed);
    } else {
        // Enable the speed input field when text is fully written
        speedEl.removeAttribute('disabled');
    }
}
writeText2();
function writeText2() {
    textEl2.innerText = text2.slice(0, idx);

    idx++;

    if (idx <= text2.length) {
        setTimeout(writeText2, speed);
    } else {
        // Enable the speed input field when text is fully written
        speedEl.removeAttribute('disabled');
    }
}

speedEl.addEventListener('change', (e) => {
    speed = 300 / e.target.value;
    // Start writing immediately when speed changes
    idx = 0;
    writeText();
});


//




// Get a reference to the button and the target section
const scrollButton = document.getElementById('scrollButton');
const targetSection = document.getElementById('targetSection');

// Add a click event listener to the button
scrollButton.addEventListener('click', () => {
  // Scroll to the target section when the button is clicked
  targetSection.scrollIntoView({ behavior: 'smooth' }); // 'smooth' for smooth scrolling
});


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
