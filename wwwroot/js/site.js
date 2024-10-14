// site.js

function toggleHighContrast() {
    const body = document.body;
    body.classList.toggle('high-contrast');

    // Optional: You can also update the button text or any other UI feedback here.
    const button = document.getElementById('toggle-contrast-button');
    if (body.classList.contains('high-contrast')) {
        button.innerText = 'Disable High Contrast Mode';
    } else {
        button.innerText = 'Enable High Contrast Mode';
    }
}
