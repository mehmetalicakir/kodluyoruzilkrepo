// document.querySelector("#myName").innerHTML = prompt("İsminizi Giriniz: ");

function showTime() {
    const today = new Date().getTime();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    document.getElementById("myClock").innerText = h;
    document.getElementById("myClock").textContent = h;
    setTimeout(showTime, 1000);
  }

  showTime();