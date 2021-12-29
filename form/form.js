let userFormDom = document.querySelector("#userForm");
userFormDom.addEventListener('submit', formHandler);

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

function formHandler(event){
    event.preventDefault();
    const USER_NAME = document.querySelector("#username");
    const SCORE = document.querySelector("#score");
    if(USER_NAME.value && SCORE.value){
    addItem(USER_NAME.value , SCORE.value);
    USER_NAME.value =""
    SCORE.value =""
    }else{
        alert('Eksik Giriş Yapıldı', 'danger')
    }
}


let userListDOM = document.querySelector("#userList");

const addItem = (username,score) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML= `${username}<span class="badge bg-primary rounded-pill">${score}</span>`;
    liDOM.classList.add("list-group-item" ,"d-flex" , "justify-content-between" , "align-items-center")
    userListDOM.append(liDOM);
}
