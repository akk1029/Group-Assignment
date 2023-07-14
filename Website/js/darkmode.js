function changeTheme() {
    // Select your element using indexing.
    var mode = document.getElementsByTagName('link')[2];
    var image = document.getElementsByTagName('img')[1];

    // Change the value of href attribute to change the css sheet.
    // change the value of src to change the colormode icon
    if (mode.getAttribute('href') == 'css/lightmode.css') {
        mode.setAttribute('href', 'css/darkmode.css');
        image.setAttribute('src', 'images/darkmode2.0.png');
    } else {
        mode.setAttribute('href', 'css/lightmode.css');
        image.setAttribute('src', 'images/lightmode.png');
    }
}
