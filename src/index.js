import 'bootstrap';
import './sass/main.scss';

// All nav items positioned in the right hand side
let navItems = document
    .getElementsByClassName('navbar-nav')[1]
    .querySelectorAll('.nav-item');

/**
 * Remove all the CSS if the nav is left
 */
document.querySelector('nav').addEventListener('mouseleave', () => {
    for(let navItem of navItems) navItem.querySelector('.dropdown-menu').style = '';
});

/**
 * Foreach nav item, add a translate effect to it's neighbours when hovered
 */
for(let navItem of navItems){
    navItem.addEventListener('mouseenter', (e) => {
        translate(e.target); // Right
        translate(e.target, false); // Left
    });
}

/**
 * Add translate CSS to each previous and next dropdown menu item
 *
 * @param navItem
 * @param direction
 * @param offset
 */
function translate(navItem, direction = true, offset = 0){
    navItem.querySelector('.dropdown-menu').style = `transform: translate(-${direction ? 50 + (4 * offset) : 50 - (4 * offset)}%, 3%);`;

    // To the right
    if(navItem.nextElementSibling !== null && direction)
        translate(navItem.nextElementSibling, direction, ++offset);

    // To the left
    if(navItem.previousElementSibling !== null && !direction)
        translate(navItem.previousElementSibling, direction, ++offset);
}





