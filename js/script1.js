document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('booking-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Create a FormData object, passing the form as a parameter to gather all form data
        var formData = new FormData(form);

        // Use the Fetch API to send the form data to the server asynchronously
        fetch('submit.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Here you can handle the response from the server, such as displaying a success message
            alert(data); // Or update the DOM with custom success/error messages
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    });
});
