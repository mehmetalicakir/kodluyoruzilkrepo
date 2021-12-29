let formDom = document.querySelector("#userForm");
formDom.addEventListener('submit', formSubmit);



function formSubmit(event){
    event.preventDefault();
    let scoreInfoDOM = document.querySelector("#score");
    console.log(scoreInfoDOM.value);
}