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
var butnPol=document.getElementById("butnP"),
    butnPir=document.getElementById("btn-pir");

clicked=()=>{
  document.querySelector("div.container-fluid").style="-webkit-filter: saturate(0%) grayscale(100%) brightness(9%) contrast(10%);";

  document.querySelector("form").style="width: 70%; height:70%; z-index:6; visibility: visible;"
}

butnPol.onclick=()=>{
  clicked();
};
butnPir.onclick=()=>{
  clicked();
};



function setTable(table) {
    document.getElementById('table_choice').innerHTML = table;
  }

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
  document.getElementById("poolLab").style=`    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(15, 168, 35, 0.336) 0%, rgba(10, 126, 29, 0.411) 49%, rgba(3, 63, 13, 0.452) 100%);`
  document.getElementById("piraLab").style=`background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(27,205,104,0) 49%, rgba(5, 85, 18, 0.329) 100%);`
 }
 });
 document.getElementById("piramid").addEventListener('click', function(){
  if(document.getElementById("piramid").checked==true){
  document.getElementById("piraLab").style=`    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(15, 168, 35, 0.336) 0%, rgba(10, 126, 29, 0.411) 49%, rgba(3, 63, 13, 0.452) 100%);`
  document.getElementById("poolLab").style=`background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(27,205,104,0) 49%, rgba(5, 85, 18, 0.329) 100%);`
 }
 });
 //----------------------------------
   
