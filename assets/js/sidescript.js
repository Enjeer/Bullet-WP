var carousel = document.getElementById('myCarousel');
 var myElement=document.querySelector("a.navbar-brand");
 var bill=document.getElementById("billiard");
 var side=document.getElementById("sider");




//FADE-----------------------------------------------
function fade(bill) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            bill.style.display = 'none';
        }
        bill.style.opacity = op;
        bill.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 15);
}

function unfade(bill) {
    var op = 0.1;  // initial opacity
    bill.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        bill.style.opacity = op;
        bill.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 8);
}

function fade(side) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            side.style.display = 'none';
        }
        side.style.opacity = op;
        side.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 15);
}

function unfade(side) {
    var op = 0.1;  // initial opacity
    side.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        side.style.opacity = op;
        side.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 8);
}
//---------------------------------------------------
//ONCLICK--------------------------------------------


function setTable(table) {
    document.getElementById('table_choice').innerHTML = table;
  }

  var butnPol=document.getElementById("btnpool"),
    butnPir=document.getElementById("btnpira");

clicked=()=>{
  document.querySelector("div.container-fluid").style="-webkit-filter: saturate(00%) grayscale(100%) brightness(9%) contrast(10%);";

  document.querySelector("form").style="width: 46%; height:70%; z-index:6; visibility: visible;"
  document.getElementById('close').style="z-index:7;"
}

butnPol.onclick=()=>{
  clicked();
};
butnPir.onclick=()=>{
  clicked();
};

//---------------------------------------------------

//close butn-----------------------------------------

var closeButn=document.getElementById('close');

closeButn.addEventListener('click', function(){
  
          document.querySelector("div.container-fluid").style="-webkit-filter: saturate(100%) grayscale(0%) brightness(100%) contrast(100%);";

          document.querySelector("form").style="width: 0%; height:0%; z-index:-1; visibility: hidden;"
          document.getElementById('close').style="z-index:-1;"

});

//---------------------------------------------------


var myCarousel = new bootstrap.Carousel(carousel, {
});

var pooltxt=`<h2 style="color:#424242;">ПУЛ</h2>
             <h5 style="color:#4f4f4f;">ОСОБЕННОСТИ И ПРАВИЛА</h5>
             <br>
             <h6 style="color:#757575;">Пул (англ. Pool) - одна из самых популярных разновидностей бильярда. 
             Основное отличие пула от пирамиды заключается в количестве шаров и правилах игры. 
             В пуле используют 16 шаров, включая один белый, который используется для ударов. 
             Правила игры также отличаются, в пуле используется правило "карамболь", когда шары могут попадать в лузы не напрямую,
              а после удара от другого шара. 
             Основная задача игроков - забивать шары в лузы, следуя определенной последовательности.
             В пуле очень важна точность ударов и стратегическое мышление.</h6>
             <a style="font-size:1.2vh; color: #bfbfbf;">Написано нейросетью GPT</a>
            `,
    piramidtxt=`<h2 style="color:#424242;">ПИРАМИДА</h2>
                <h5 style="color:#4f4f4f;">ОСОБЕННОСТИ И ПРАВИЛА</h5>
                <br>
                <h6 style="color:#757575;">В игре в пирамиду, известной как московская пирамида, используется 15 шаров, включая 14 белых и 1 красный,
                который является наивысшим по достоинству и называется "королём". 
                Основной целью игрока является забивание шаров в лузы в определенной последовательности 
                и блокирование доступа к лузам для противника. Правила игры отличаются от пула и включают в себя такие элементы,
                как "подкрутка" и "подпрыгивание". Игра в пирамиду требует 
                стратегическое мышление и умение анализировать ситуацию на столе. 
                </h6>
                <a style="font-size:1.2vh; color: #bfbfbf;">Написано нейросетью GPT</a>`

var active="pool",
    passive="pira",
    helper,
    info;

    document.getElementById("billiard").innerHTML=pooltxt;

const colors=()=>{
  if(info=="pool"){
   fade(bill);
   fade(side);
   setTimeout(() => {
    bill.innerHTML=pooltxt;
    unfade(bill);
    unfade(side);
   }, 600);

  }else{
    fade(bill);
    fade(side);
   setTimeout(() => {
    bill.innerHTML=piramidtxt;
    unfade(bill);
    unfade(side);
   }, 600);
  
  }
}

  var prevButton = document.getElementById('prevButton'),
      nextButton = document.getElementById('nextButton');

  prevButton.addEventListener('click', function() {
  prevButton.disabled=true;
  myCarousel.prev();

  helper=passive;
  passive=active;
  active=helper;

  info=active;
  colors();

  console.log(active +" активен");
  setTimeout(() => {
    prevButton.disabled=false;
  }, 1000);
  myCarousel.pause();
})

nextButton.addEventListener('click', function() {
  nextButton.disabled=true;
  myCarousel.next();

  helper=passive;
  passive=active;
  active=helper;

  info=active;
  colors();

  console.log(active +" активен");
  setTimeout(() => {
    nextButton.disabled=false;
  }, 1000);
  myCarousel.pause();
})
//---------------------------toggler
document.getElementById("pool").addEventListener('click', function(){
  if(document.getElementById("pool").checked==true){
  document.getElementById("poolLab").style=`#4a515e;
  background: radial-gradient(circle, rgba(223,223,223,0) 45%, rgba(214,90,49,0.6587009803921569) 100%);`
  document.getElementById("piraLab").style=`background: #4a515e;`
 }
 });
 document.getElementById("piramid").addEventListener('click', function(){
  if(document.getElementById("piramid").checked==true){
  document.getElementById("piraLab").style=`background: rgb(223,223,223);
  background: radial-gradient(circle, rgba(223,223,223,0) 45%, rgba(214,90,49,0.6587009803921569) 100%);`
  document.getElementById("poolLab").style=`background: #4a515e`
 }
 });
 //----------------------------------
   
