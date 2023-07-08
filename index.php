<!DOCTYPE html>
<html>
<head>
<title>ПУЛЯ бильярд</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <script>
      const now=new Date(moment());
    </script>
</head>
<body>
  
<div class="container-fluid">
    <div id="myCarousel" class="carousel slide" data-interval="false" data-pause="true">
      <div class="carousel-inner">
        <div class="carousel-item active POOL" data-bs-interval="false">
          <img src="https://infodesign.by/pulya/wp-content/uploads/2023/06/pool-1.png" class="image-pool">
            <div class="d-flex justify-content-center">
<button class="btn btn-pool" id="btnpool"></button>
            </div>
        </div>

        <div class="carousel-item PIRA" data-bs-target="" data-bs-interval="false">
        <img class="image-pira" src="https://infodesign.by/pulya/wp-content/uploads/2023/06/piremid-1.png">
          <div class="d-flex justify-content-center">
            <button class="btn btn-piramid" id="btnpira"></button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" id="prevButton" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" id="nextButton" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
 
  <div class="nav-container">
      <div class="container-fluid" >
        <a class="brand" href="#"><b class="bold" id="bullet"></b><a id="bar"><a></a>
        <button class="btn btn-f" type="button" id="wikipedia" onclick="window.open('https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4', '_blank')"><b></b></button>
      </div>
  </div>

  <div class="bottom-blocks">
    <div class="billText" id="billiard"></div>
    <div class="sideText" id="sider">
      <img src="https://infodesign.by/pulya/wp-content/uploads/2023/04/pira-img.png" class="ball"><h6 class="_text" id="_main-text"></h6>
          <br>
          <a style="font-size:1.2vh; color: #bfbfbf;" id="gpt"></a>
        </div>
  </div>
  <div class="bottom"><hr style="background: rgba(0, 0, 0, 0.151); width: 99vw; margin-left: -1vw; margin-top: 3%; height:0.1vh;"></div>
</div> 
<div class="form-cont">
<form class="booking" id="FORMM" onsubmit=" function(e){e.preventDefault(); submitHandler();} alert('p1');" >
<div class="close">
   <input type="button" class="btn btn-close" id="close"></input>
</div>
 <div class="back">
 </div>
 <p class="h2" id="upperTXT"></p>
 <br>
     <div class="form-group">
       <input type="text" name="username" id="username" class="form-control" placeholder="" required>
     </div>    
    <div class="btn-group btn-group" data-toggle="">
      <label class="btn btn-custom tab-pool" id="poolLab">
       <input type="radio" class="tabs" name="options" id="pool" autocomplete="off" required hidden>
       <img src="https://infodesign.by/pulya/wp-content/uploads/2023/04/pool-btn.png" class="ch.pool" height="98%">
      </label>
      <label class="btn btn-custom tab-pira" id="piraLab">
        <input type="radio" class="tabs" name="options" id="piramid" autocomplete="off" required hidden>
        <img src="https://infodesign.by/pulya/wp-content/uploads/2023/04/piramides-btn.png" class="ch.pira" height="98%">
      </label>
    </div> 
  <div class="DT" style="margin-top: 1.3%;">
    <div class="form-group date1">
      <input type="date" id="date" class="form-control" required min=`${now}`>
    </div>
    <div class="form-group time1">
        <select class="form-control custom-select" id="customSelect-time" required>
          <option selected value="none" id="time"></option>
          <option value="19:00" id="T1"></option>
          <option value="20:00" id="T2"></option>
          <option value="21:00" id="T3"></option>
          <option value="22:00" id="T4"></option>
          <option value="23:00" id="T5"></option>
          <option value="00:00" id="T6"></option>
          <option value="01:00" id="T7"></option>
        </select>
    </div>
  </div>
    <div class="input-group">
      <select class="form-control custom-select" id="customSelect-duration" required>
        <option selected value="none" id="duration"></option>
        <option value="1" id="D1" required></option>
        <option value="2" id="D2" required></option>
        <option value="3" id="D3" required></option>
        <option value="4" id="D4" required></option>
        <option value="5" id="D5" required></option>
        <option value="6" id="D6" required></option>
        <option value="7" id="D7" required></option>
        <option value="8" id="D8" required></option>
      </select>
    </div><br>
<input type="submit" id="btner" class="btn btn-primary btn-val" value="">
</form>
</div>
    <?php wp_footer(); ?>
    <?php

function checker_ajax_handler(){

  if(isset($_POST)){

    $Table=$_POST['table'];
 
    $userStart=$_POST['userStart'];
 
    $userStop=$_POST['userFinish'];
 
 //запрос к airtable
 
 
 $url = "https://api.airtable.com/v0/appv7IDze9p0Jiuqn/tblU7fYjwOlji0VxM/?filterByFormula=AND(table='{$Table}', OR( AND({$userStart}>startTS, {$userStart}<finishTS) ), AND({$userStop}>startTS, {$userStop}<finishTS))";
 
 $options = [
   'http' => [
     'Content-Type' => "application/json",
     'header' => "Authorization: Bearer keyCk4dfCMdYgVGoD"
   ]
 ];
 
 $context = stream_context_create($options);
 $response = file_get_contents($url, false, $context);
 
 if ($response === false) {
   // Обработка ошибки
   echo "Ошибка при выполнении запроса";
 } else {
   //Json в массив
   $data = json_decode($response, true);
 
   // Проверка наличия данных
   if (isset($data['records'])) {
     $recordsCount = count($data['records']);
     $response = 'isExist';
   } else {
     $response = 'clear';
   }
 }
 
 
         
   }
   $response = json_encode($response);
   echo $response;

   die();
 }
 add_action( 'wp_ajax_checker_ajax_handler', 'checker_ajax_handler' );
 add_action( 'wp_ajax_nopriv_checker_ajax_handler', 'checker_ajax_handler' );
?>

</body> 
</html>