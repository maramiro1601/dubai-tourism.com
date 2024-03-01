<?php
// Database configuration
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = ""; // Default XAMPP password (empty)
$dbname = "flight_booking";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the form
$name = $_POST['name'];
$email = $_POST['email'];
$departure = $_POST['departure'];
$destination = $_POST['destination'];
$travelDate = $_POST['travel-date'];
$selectedSeats = $_POST['selectedSeats'];
$totalPrice = $_POST['totalPrice']; // Make sure to add this field to your form

// Prepare and bind parameters in the SQL statement
$stmt = $conn->prepare("INSERT INTO bookings (name, email, departure, destination, travel_date, selected_seats, total_price) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $name, $email, $departure, $destination, $travelDate, $selectedSeats, $totalPrice);

// Execute the statement and check for success
if ($stmt->execute()) {
    echo "Booking successfully submitted!";
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
