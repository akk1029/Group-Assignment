function changeTheme() {
    // Select your element using indexing.
    var mode = document.getElementsByTagName('link')[2];
    var image = document.getElementsByTagName('img')[1];

    // Change the value of href attribute
    // to change the css sheet.
    if (mode.getAttribute('href') == 'css/lightmode.css') {
        mode.setAttribute('href', 'css/darkmode.css');
        image.setAttribute('src', 'images/darkmode.png');
    } else {
        mode.setAttribute('href', 'css/lightmode.css');
        image.setAttribute('src', 'images/lightmode.png');
    }
}
