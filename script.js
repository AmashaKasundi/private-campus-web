// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');

    ctaButton.addEventListener('click', () => {
        alert('Registration is currently open for the 2026 Academic Year!');
    });
});