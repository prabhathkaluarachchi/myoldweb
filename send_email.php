<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Set the recipient email address
    $to = "fmprabhath@gmail.com";
    
    // Set the email subject
    $subject = "New message from $name";
    
    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Set the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Email sent successfully
        echo "<script>alert('Your message has been sent. Thank you!');</script>";
    } else {
        // Error sending email
        echo "<script>alert('Sorry, there was an error sending your message. Please try again later.');</script>";
    }
}
?>
