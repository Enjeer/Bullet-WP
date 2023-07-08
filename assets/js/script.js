
submitHandler=function(e){ 
  alert('gay');
  e.preventDefault();
  console.log('asdasd');
    // здесь можно обрабатывать данные формы
var username=document.getElementById("username").value,
         datePrev=document.getElementById("date").value,table,r1,r2,
         time=document.getElementById("customSelect-time").value,
         rad1=document.getElementById("pool"),
         rad2=document.getElementById("piramid"),
         duration=document.getElementById("customSelect-duration").value,
         r1=rad1.checked,r2=rad2.checked;
         var base_url = window.location.origin;  
 
     timeVer=function(){
       if(time==""){
         return time='none';
       }else{
         return secTime=time;
       }
     }
 
     getTable=function(){
         if(r1==true){
           return table='Пул';
         }else if(r2==true){
           return table='Пирамида';
         }else{
           return table='none';
         }
     }
     durationVer=function(){
         if(duration=='none'){
          return duration='none';
         }else{
          return duration;
         }
     }

     run=function(){
     const now=new Date(moment());
     date = new Date(datePrev);
             if(date!='none'&&(date.getFullYear()>=now.getFullYear()&&(date.getMonth()==now.getMonth()&&date.getDate()>=now.getDate())||date.getMonth()>now.getMonth())){
                if(time!='none'){
                  if(duration!='none'){
                    postSend(username, table, time, date, duration); 
                    console.log('asd');
                   }else{
                     alert(_dur);
                   }
                }else{
                 alert(_tim);
                }
             }else{
               alert(_dat);
             }
     }
 getTable();
 
 timeVer();
 
 durationVer();
 
 run();
}; 

form=document.querySelector('form')
