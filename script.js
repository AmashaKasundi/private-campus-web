/**
 * Campus Website Logic
 * Handles: Smooth Scrolling, Image Previews, and Form Submission
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PROFILE IMAGE PREVIEW ---
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');

    if (imageInput) {
        imageInput.addEventListener('change', function() {
            const file = this.files[0];
            
            if (file) {
                // Validate if the file is actually an image
                if (!file.type.startsWith('image/')) {
                    alert('Please select an image file.');
                    return;
                }

                const reader = new FileReader();
                
                // When the file is read, replace the camera icon with the image
                reader.onload = function(e) {
                    imagePreview.innerHTML = `<img src="${e.target.result}" alt="Profile Preview" style="width:100%; height:100%; object-fit:cover;">`;
                };
                
                reader.readAsDataURL(file);
            }
        });
    }

    // --- 2. REGISTRATION FORM SUBMISSION ---
    const regForm = document.getElementById('regForm');

    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            // Prevent the page from refreshing
            e.preventDefault();

            // Collect some basic data to show the user
            const fullName = regForm.querySelector('input[placeholder="Full Name"]').value;

            // In a real app, you'd send this data to a database here
            console.log("Form Data Submitted for:", fullName);

            // Visual feedback
            alert(`Thank you, ${fullName}! Your registration has been submitted successfully.`);
            
            // Optional: Reset the form after submission
            regForm.reset();
            imagePreview.innerHTML = `<span>📷</span>`;
        });
    }

    // --- 3. DYNAMIC SCROLLING EFFECT ---
    // This ensures that clicking links doesn't "jump" but glides.
    // Note: We already added 'scroll-behavior: smooth' in CSS, 
    // but this JS part handles specific edge cases.
    const navLinks = document.querySelectorAll('.nav-links a, .cta-button, .sidebar a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Only trigger if it's an internal link (starts with #)
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Optional: Close mobile menu here if you build one later
                    console.log(`Scrolling to: ${targetId}`);
                }
            }
        });
    });
});