let spinnerWrapper = document.querySelector('.loader-container');

window.addEventListener('load', function () {
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});