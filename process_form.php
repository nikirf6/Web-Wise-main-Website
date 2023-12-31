<?php
if (isset($_POST['submit'])){
    $first_Name = $_POST['first_name'];
    $last_Name = $_POST['last_name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

$mailTo = "emonahmad96@artistrydesign.net";
    $headers = "From: $emailFrom";

    if (mail($mailTo, "Subject: Contact Form Submission", $message, $headers)) {
        // Email sent successfully
        header("Location:success.html");
        exit();
    } else {
        // Email sending failed
        header("Location: index.php?mailsend=error");
        exit();
    }
}
?>
