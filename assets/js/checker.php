<?php
add_action('wp_ajax_checker', 'checker_callback');
add_action('wp_ajax_nopriv_checker', 'checker_callback');

function checker_callback() {

   $U_table = $_POST['U_table'];
   $AS = $_POST['A_StartTS'];
   $AF = $_POST['A_FinTS'];
   $US= $_POST['U_StartTS'];
   $UF = $_POST['U_FinTS'];

$client = new Client();

$response = $client->get('https://api.airtable.com/v0/appv7IDze9p0Jiuqn/Tasks', [
    'headers' => [
        'Authorization' => 'Bearer keyCk4dfCMdYgVGoD',
        'Content-Type' => 'application/json',
    ],
    'query' => [
        'fields' => ['Table', 'startTS', 'finishTS'],
    ],
]);

$data = json_decode($response->getBody(), true);
 echo "console.log(gay)";
foreach ($data['records'] as $record) {
    $A_table = $record['fields']['table'],
    $AS = $record['fields']['startTS'],
    $AF = $record['fields']['finishTS'];   

    if($A_table==$U_table){
       if(($UF>$AS && $UF<$AF) || ($US>$AS && $US<$AF)){
          echo('denied');
       }
    }else{
         echo('accepted');
    }   
}
}
?>