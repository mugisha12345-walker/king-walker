 // Load saved values from localStorage
        window.addEventListener('DOMContentLoaded', function() {
            document.getElementById('name').value = localStorage.getItem('contact_name') || '';
            document.getElementById('email').value = localStorage.getItem('contact_email') || '';
            document.getElementById('message').value = localStorage.getItem('contact_message') || '';
        });

        // Save values to localStorage on input
        document.getElementById('name').addEventListener('input', function(e) {
            localStorage.setItem('contact_name', e.target.value);
        });
        document.getElementById('email').addEventListener('input', function(e) {
            localStorage.setItem('contact_email', e.target.value);
        });
        document.getElementById('message').addEventListener('input', function(e) {
            localStorage.setItem('contact_message', e.target.value);
        });

        // Optional: Clear localStorage on form submit
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            localStorage.removeItem('contact_name');
            localStorage.removeItem('contact_email');
            localStorage.removeItem('contact_message');
            alert('Message sent!');
            this.reset();
        });