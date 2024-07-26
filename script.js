function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function sendEmail() {
    (function() {
        emailjs.init("-eXWauXVA4I9GCbLsn"); // Replace with your EmailJS user ID
    })();

    const serviceID = 'service_x4u8o1i'; // Replace with your EmailJS service ID
    const templateID = 'template_n3b2fzf'; // Replace with your EmailJS template ID

    var templateParams = {
        from_name: document.getElementById['Name'].value, // Corrected access method
        email_id: document.getElementById['Email'].value, // Corrected access method
        message: document.getElementById['Message'].value, // Corrected access method
    };

    emailjs.send(serviceID, templateID, templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
    });
}