//dark / light theme switching //////////////////////////////////////////////////////////////////////////////////
function themeSwitch() {

    let nightIcon = document.getElementById('night');
    let dayIcon = document.getElementById('day');
    let switcher = document.getElementById('switcher');
    let state = switcher.getAttribute.theme;

    dayIcon.style.display.block;
    nightIcon.style.display.none;
    // document.getElementById('switcher').style.flexDirection.reverse;
    console.log("themeswitch");
}