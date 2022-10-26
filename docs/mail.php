<?php 

  echo "It's AshishAntil07's email sender. Thanks for visiting!";
  if(isset($_POST['submit'])){
    if(!(empty($_POST['name'] || empty($_POST['from'])))){
      mail("ashishantil248@gmail.com", $_POST['from'], "Sent from: "+$_POST['from']+"\nName: "+$_POST['name']+"\n\n"+$_POST['message'], "From: "+$_POST['from']); 
    }
  }

?>