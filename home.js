document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
        
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!target.closest('.header')) {
            navbar.classList.remove('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const name = "Srikar Sameer";
    const firstChar = name.charAt(0);
    const restOfName = name.substring(1);
    const staticElement = document.getElementById('static-char');
    const animatedElement = document.getElementById('animated-text');

    staticElement.textContent = firstChar;

    let i = 0;
    let isDeleting = false;

    function typeWriter() {
      if (isDeleting) {
        if (i >= 0) {
          animatedElement.innerHTML = restOfName.substring(0, i);
          i--;
          setTimeout(typeWriter, 100); 
        } else {
          isDeleting = false;
          setTimeout(typeWriter, 500); 
        }
      } else {
        if (i < restOfName.length) {
          animatedElement.innerHTML += restOfName.charAt(i);
          i++;
          setTimeout(typeWriter, 50); 
        } else {
          isDeleting = true;
          setTimeout(typeWriter, 1000); // Pause before deleting
        }
      }
    }
    typeWriter();
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