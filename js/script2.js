function toggleModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === "none" ? "block" : "none";
}
function sendEmail(coFounderName) {
    // Example function to simulate sending an email
    alert(`Message successfully sent to ${coFounderName}!`);
    // Here, you would typically gather the form data and send it to a server-side script (e.g., PHP) to actually send the email.
    // Close the modal after sending the message
    toggleModal(`${coFounderName.toLowerCase()}ContactForm`);
}
