//menu button 
function clickMenu(el) {
    menuIconAnimation(el);
    showMenu();
}

function menuIconAnimation(el) {
    el.classList.toggle('change');
}

function showMenu() {
    console.log('showMenu');
    let navbar = document.getElementsByClassName('nav')[0];
    navbar.classList.toggle('hideNav');
}

//