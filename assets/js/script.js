btn=document.getElementById("btner");
btn.onclick = function(){
  document.querySelector('form').addEventListener('submit', submitter = function(event) {
    event.preventDefault();
    // здесь можно обрабатывать данные формы
  var username=document.getElementById("username").value,
         datePrev=document.getElementById("date").value,table,r1,r2,
         time=document.getElementById("customSelect-time").value,
         rad1=document.getElementById("pool"),
         rad2=document.getElementById("piramid"),
         duration=document.getElementById("customSelect-duration").value,
         r1=rad1.checked,r2=rad2.checked;
         var base_url = window.location.origin;  
 
     nameVer=function(){
       if(username==""){
         return username ='none';
       }else{
         return secName=username;
       }
     }
 
     timeVer=function(){
       if(time==""){
         return time='none';
       }else{
         return secTime=time;
       }
     }
 
     dateVer=function(){
       if(date==""){
         return date='none';
       }else{
         return secDate=date;
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
       if(username!='none'){
          if(table!=='none'){
             if(date!='none'&&(date.getFullYear()>=now.getFullYear()&&(date.getMonth()==now.getMonth()&&date.getDate()>=now.getDate())||date.getMonth()>now.getMonth())){
                if(time!='none'){
                  if(duration!='none'){
            
                    postSend(username, table, time, date, duration); 
                    console.log(table); console.log(time);

                   }else{
                     alert(_dur);
                   }
                }else{
                 alert(_tim);
                }
             }else{
               alert(_dat);
             }
          }else{
           alert(_tab);
          }
       }else{
         alert(_nam);
       }
     }
 getTable();
 
 nameVer();
 
 timeVer();
 
 dateVer();
 
 durationVer();
 
 run();
}); 
document.querySelector('form').removeEventListener('submit', submitter());
}