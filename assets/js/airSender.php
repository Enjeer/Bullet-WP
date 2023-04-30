<?php
add_action('wp_ajax_airSender', 'airSender_callback');
add_action('wp_ajax_nopriv_airSender', 'airSender_callback');

function airSender_callback() {

   $Table = $_POST['Table'];
   $Name = $_POST['Name'];
   $Date = $_POST['ST'];
   $Duration= $_POST['Duration'];


   $client = new Client();

   $response = $client->get('https://api.airtable.com/v0/appv7IDze9p0Jiuqn/Tasks', [
    'headers' => [
        'Authorization' => 'Bearer keyCk4dfCMdYgVGoD',
        'Content-Type' => 'application/json',
    ],
    'json' => [
        'fields' => [
            'Name' => $Name,
            'Table' => $Table,
            'Start Time' => $Date,
            'Duration' => $Duration,
        ],
    ],
]);

$data = json_decode($response->getBody(), true);
echo 'done';
}
?>