document.querySelector("#myName").innerHTML = prompt("İsminizi Giriniz: ");

function showTime(){
  var date = new Date();
  var d = date.getDay();
  var h = date.getHours(); 
  var m = date.getMinutes(); 
  var s = date.getSeconds(); 
  

  switch(d){
    case 1: d = "Pazartesi";
    break;
    case 2: d = "Salı";
    break;
    case 3: d = "Çarşamba";
    break;
    case 4: d = "Perşembe";
    break;
    case 5: d = "Cuma";
    break;
    case 6: d = "Cumartesi";
    break;
    case 7: d = "Pazar";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + "  " + d;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();