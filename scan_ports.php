<?php
header('Content-Type: application/json');

function get_client_ip_env() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if (getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if (getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if (getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if (getenv('HTTP_FORWARDED'))
        $ipaddress = getenv('HTTP_FORWARDED');
    else if (getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';

    return $ipaddress;
}

$host = get_client_ip_env();
$ports = array(21, 25, 80, 81, 110, 143, 443, 465, 587, 2525, 3306, 3389);
$results = array();

foreach ($ports as $port) {
    $connection = @fsockopen($host, $port, $errno, $errstr, 2);
    if (is_resource($connection)) {
        $results[$port] = 'open';
        fclose($connection);
    } else {
        $results[$port] = 'closed';
    }
}

echo json_encode(['client_ip' => $host, 'ports' => $results]);
?>
