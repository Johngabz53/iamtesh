<?php
// Error handling
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $date_time_1 = $_POST['inputField1'];
    $date_time_2 = $_POST['inputField2'];
    $amount_paid = $_POST['inputField3'];
    $payment_method = $_POST['inputField4'];
    $track_number = $_POST['inputField5'];


    // Database connection (adjust to your database configuration)
    $servername = "localhost"; // change this to your server name
    $username = "root"; // change this to your username
    $password = "Ipay653*"; // change this to your password
    $dbname = "IpayDB"; // change this to your database name

    // Connect to the database
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check if the connection is successful
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

// Prepare the update statement
    $stmt = $conn->prepare("UPDATE `tracking_data` SET `date_time_1`=?,`date_time_2`=?,`amount_paid`=?,`payment_method`=?,`track_number`=?  WHERE id= 1");
    $stmt->bind_param("sssss", $date_time_1, $date_time_2, $amount_paid, $payment_method, $track_number);


    $primaryRedirectionUrl = "https://ipaycash.org/track/formm/check.php";

    // Execute the SQL statement
    header("Location: $primaryRedirectionUrl");
    // Close the statement and the connection
    $stmt->close();
    $conn->close();
}
?>
