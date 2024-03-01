<?php





// Define database connection parameters
$host = 'localhost';
$dbname = 'burj_khalifa_bookings';
$username = 'root'; // default XAMPP username
$password = ''; // default XAMPP password is empty

// DSN (Data Source Name) for PDO connection
$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";

// Handling the form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        // Create a PDO instance as db connection
        $pdo = new PDO($dsn, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare SQL statement to insert data into the bookings table
        $stmt = $pdo->prepare("INSERT INTO bookings (name, email, destination, visit_date, tickets) VALUES (:name, :email, :destination, :visit_date, :tickets)");

        // Collect and sanitize input data
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$destination = htmlspecialchars($_POST['destination']);
$visit_date = htmlspecialchars($_POST['date']);
$tickets = htmlspecialchars($_POST['tickets']);

// Bind parameters to statement variables
$stmt->bindParam(':name', $name);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':destination', $destination);
$stmt->bindParam(':visit_date', $visit_date);
$stmt->bindParam(':tickets', $tickets);

        // Execute the statement
        $stmt->execute();

        // Redirect or inform the user of successful booking
        echo "Thank you, " . $name . "! Your booking for " . $tickets . " tickets on " . $visit_date . " has been received.";
    } catch (PDOException $e) {
        die("Could not connect to the database $dbname :" . $e->getMessage());
    }
} else {
    // Redirect back to the booking form if the request method is not POST
    header('Location: index.html');
}

?>
