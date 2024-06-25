
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Validate the form fields
        var isValid = validateForm();

        // If the form is not valid, prevent submission
        if (!isValid) {
            event.preventDefault();
        }
    });

    function validateForm() {
        var isValid = true;

        // Get form field values
        var last_name = document.getElementById('fullname').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        // Validate Name
        if (name === '') {
            showValidationMessage('name', 'Name is required.');
            isValid = false;
        }
        
        // Validate Email
        if (email === '') {
            showValidationMessage('email', 'Email is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showValidationMessage('email', 'Please enter a valid email address.');
            isValid = false;
        }

        // Validate Message
        if (message === '') {
            showValidationMessage('message', 'Message is required.');
            isValid = false;
        }

        return isValid;
    }

    function showValidationMessage(fieldId, message) {
        var field = document.getElementById(fieldId);
        var errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        field.parentElement.appendChild(errorMessage);
    }

    function clearValidationMessages() {
        var errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(message) {
            message.remove();
        });
    }

    function validateEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

  