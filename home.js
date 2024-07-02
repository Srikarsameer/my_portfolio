document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuIcon.style.display = 'block';
        // closeIcon.style.display = 'block';
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!target.closest('.header')) {
            navbar.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();  
        
         
        const formData = new FormData(contactForm);
         
        for (let [name, value] of formData.entries()) {
            console.log(name, value);
        }
        
         
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Form submitted successfully!');  
            
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to submit form. Please try again.'); // Optional error message
        });
    });
});