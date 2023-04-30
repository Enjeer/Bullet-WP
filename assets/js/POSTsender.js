postSend=(username, table, time, date, duration)=>{

//------------------------------------------------\\
  username=(username);
  table=(table);
  time=(time);
  date=(date);
  _duration=(duration);

  var frVar=`${date}`,
      currDate=new Date(frVar);

    const DateTime=currDate.toISOString().split('T')[0];
    

  preDuration_=moment(_duration, "H:mm");
  preDuration=new Date(preDuration_);
  var duration=preDuration.getHours(),
  answer=0;
  var end_duration=duration*3600;

  const [hours, minutes]=time.split(':');

  const formDate=new Date(DateTime);
        formDate.setHours(hours);
        formDate.setMinutes(minutes);
    const finDate=(moment ( (formDate), 'ddd MMM DD YYYY HH:mm:ss GMTZZ')).format('YYYY-MM-DD HH:mm');


  const U_StartTS=formDate.getTime();
  const U_FinTS=new Date(moment(formDate).add(duration, 'hours')).getTime(); 
  





// Открытие соединение и запрос
check = async function(){

let promise = new Promise((resolve,reject)=>{



//CHECK_FUNCTION--------------------------------------------------------Check

const checkformData = new FormData();
checkformData.append('U_table', table);
checkformData.append('U_StartTS', U_StartTS);
checkformData.append('U_FinTS', U_FinTS);

const xhr = new XMLHttpRequest();
xhr.open('POST', './checker.php');  
xhr.onload = function() {
  if (xhr.status === 200) {
    if (xhr.response === 'denied') {
      answer += 1;
      console.log(answer);
    } else if (xhr.response === 'accepted') {
      // do something
    }
  } else {
    console.log('Request failed. Returned status of ' + xhr.status);
  }
};
xhr.send(checkformData);


//----------------------------------------------------------------------!Check

   console.log(answer);
  if(answer>0){
     resolve('NO');
  }else{
     resolve('YES');
  }
});

  var telegramMessage=`ПОСТУПИЛ ЗАКАЗ.
  %0AИмя - ${username}.
  %0AВыбранный стол - ${table} .
  %0AДата и время - ${finDate} .
  %0AПродолжительность - ${duration} час(а) `;


  let result=await promise;


if(result!='NO'){

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      alert('Забронировано!');
    } else if (this.readyState === 4 && this.status !== 200) {
      console.log('Ошибка: ' + this.status);
    }
  };
  
  xhr.open('POST', './airSender.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(`action=airSender&Table=${table}&Name=${username}&ST=${finDate}&Duration=${end_duration}`);

    }else{
    alert(`Время занято`);
  };
}
check();
}
