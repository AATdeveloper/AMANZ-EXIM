<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact Us - AgriGlobal Exports</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <!-- Navigation menu -->
  </header>
  <main>
    <h2>Contact Us</h2>
    <form action="php/contact-form-handler.php" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      
      <button type="submit">Send Message</button>
    </form>
    <p>Or contact us via WhatsApp:</p>
    <a href="https://wa.me/919876543210" target="_blank">
      <img src="images/whatsapp-icon.png" alt="WhatsApp">
    </a>
  </main>
  <footer>
    <!-- Footer content -->
  </footer>
</body>
</html>
