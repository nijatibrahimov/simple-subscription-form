<?php

	if($_POST['name'] && $_POST['fin']){
    $to = "nohavegoodidea@gmail.com";
    $from = "nohavegoodidea@gmail.com";
    $first_name = $_POST['name'];
    $subject = "Subject";
    $message = "сообщение от " . $first_name;

    $headers = "From: " . $from;

    $send = mail($to, $subject, $message, $headers);
		
    if($send) {
			echo json_encode(array('success' => true, 'message' => 'yes'));
		} else {
			echo json_encode(array('success' => false, 'message' => 'no'));
		}
		
	} else {
		echo json_encode(array('success' => false, 'message' => ''));
	};

?>