postSend=(username, table, time, date, duration)=>{


//------------------------------------------------\\
  username=(username);
  table=(table);
  time=(time);
  date=(date);
  _duration=(duration);

  var DateTime=`${date} ${time}`,
  preDuration_=moment(_duration, "H:mm");

  UserDate=new Date(DateTime);
  preDuration=new Date(preDuration_);
  
  var userY=UserDate.getFullYear(),
      userMon=UserDate.getMonth()+1,
      userD=UserDate.getDate(),
      userH=UserDate.getHours(),
      userMin=UserDate.getMinutes(),
      duration=preDuration.getHours(),
      answer=0;
    
//------------------------------------------------\\  
//body - username - table - time - date - duration\\


//GET DATA FROM AITABLE-------------------------------------------------GDFA

//var Airtable = require('airtable');
      var url = "https://api.airtable.com/v0/appv7IDze9p0Jiuqn/Tasks";
      var key = "keyCk4dfCMdYgVGoD";
      var tgBOT= `https://api.telegram.org/bot5743621724:AAErCluP0nFuZKwp8vTDw7gy6bjKWCrCEug/sendMessage?chat_id=-891328291&text=`;

// Создайте объект XMLHttpRequest
var xhr = new XMLHttpRequest();


xhr.open("GET", url, true);
// Установите заголовки для аутентификации и формата данных
xhr.setRequestHeader("Authorization", "Bearer "+key);
xhr.setRequestHeader("Content-Type", "application/json");


// Назначьте обработчик события для выполнения действий при получении ответа
xhr.onreadystatechange = async function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response.records);

// Откройте соединение и отправьте запрос на получение данных




let promise = new Promise((resolve,reject)=>{

for (var i = 0; i < response.records.length; i++) {
  var A_table = response.records[i].fields.Table,
      A_duration = response.records[i].fields.Duration,
      EndTime = new Date(response.records[i].fields["End Time"]);
      console.log(A_table);


var endY=EndTime.getFullYear(),
endMon=EndTime.getMonth()+1,
endD=EndTime.getDate(),
endH=EndTime.getHours(),
endMin=EndTime.getMinutes();

  parsedDate=`${endY}-${endMon}-${endD} ${endH}:${endMin}`;


//CHECK_FUNCTION--------------------------------------------------------Check

check=()=>{
if(A_table==table&&endY==userY&&endMon==userMon&&endD==userD&&endH==userH&&endMin>=userMin){
  return answer+=1;
}else if(A_table==table&&endY==userY&&endMon==userMon&&endD==userD&&endH-A_duration<userH+duration&&userH<endH){
  return answer+=1;
}else if(A_table==table&&endY==userY&&endMon==userMon&&endD==userD&&(userH+duration>endH-A_duration)&&(userH<=endH-A_duration)){
  return answer+=1;
}else{
console.log(endY, userY);
console.log(endMon, userMon);
console.log(endD, userD);
console.log(endH, userH);
console.log(A_duration, duration);
console.log(endMin, userMin);
}
}

//----------------------------------------------------------------------!Check
check();
}
   console.log(answer);
  if(answer>0){
     resolve('NO');
  }else{
     resolve('YES');
  }
});


  //----------------------------------------------------------------------!GDFA

  var telegramMessage=`ПОСТУПИЛ ЗАКАЗ.
  %0AИмя - ${username}.
  %0AВыбранный стол - ${table} .
  %0AДата и время - ${DateTime} .
  %0AПродолжительность - ${duration} час(а) `;
  var end_duration=duration*3600;


  let result=await promise;


if(result!='NO'){
    console.log(duration);
    alert('Забронировано удачно');
    console.log(end_duration);
    console.log('YES');
    fetch(`${tgBOT}${telegramMessage}`)
                 .catch(err=>alert(`1`+err));

                 var xhr1 = new XMLHttpRequest();
                    xhr1.open("POST", url);

                    // Установите заголовки для аутентификации и формата данных
                      xhr1.setRequestHeader("Authorization", "Bearer "+key);
                      xhr1.setRequestHeader("Content-Type", "application/json");

                                      // Устанавливаем тело запроса с данными для создания записи
                                      var data = {

                                        "fields": {
                                          "Name": username,
                                          "Table": table,
                                          "Start Time": DateTime,
                                          "Duration": end_duration
                                        }
                                  };
                                xhr1.send(JSON.stringify(data));
    }else{
    alert(`Время занято`);
  };
  }//fir
 }//async
 xhr.send();
}
