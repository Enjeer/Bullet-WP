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
  
console.log(table + 'tt');

$.ajax({
     url : my_ajax_object.ajax_url,
     type : 'POST',
     action : 'checker_ajax_handler',
     data : {
        table : table,
        userStart : U_StartTS,
        userFinish : U_FinTS
     },
    success : function(response){
       if(response=='isExist'){
        console.log(nope);
       }else{
        console.log(yup);
       }
    },
    error: function(errorThrown){
      console.log(errorThrown);
    }

});

// Открытие соединения и запрос
/*
  var telegramMessage=`ПОСТУПИЛ ЗАКАЗ.
  %0AИмя - ${username}.
  %0AВыбранный стол - ${table} .
  %0AДата и время - ${finDate} .
  %0AПродолжительность - ${duration} час(а) `;


  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      alert('Забронировано!');
    } else if (this.readyState === 4 && this.status !== 200) {
      console.log('Ошибка: ' + this.status);
    }
  };
  
  xhr.open('POST', '/wp-content/themes/Injeer/airSender.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(`action=airSender&Table=${table}&Name=${username}&ST=${finDate}&Duration=${end_duration}`);*/
  };