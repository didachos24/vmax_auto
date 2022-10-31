window.onscroll = function() {
    if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight -2) {
        const element = document.querySelector('.social-bar');
        element.style.display = "none";
    } else {
        const element = document.querySelector('.social-bar');
        element.style.display = "block"
    }
}