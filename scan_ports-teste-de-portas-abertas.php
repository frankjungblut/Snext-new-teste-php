<?php
header('Content-Type: application/json');

$response = [
    "client_ip" => "192.168.0.1",
    "ports" => [
        "80" => "open",
        "443" => "open"
    ]
];

echo json_encode($response);
?>
