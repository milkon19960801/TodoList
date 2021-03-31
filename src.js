let myStorage = window.sessionStorage;

window.onload = function(){
    readLocalStorage();
}
const readLocalStorage =  function(){
    for(let i = 0;i<myStorage.length;i++){
        if(myStorage.key(i) == "IsThisFirstTime_Log_From_LiveServer"){
            continue;
        }
        let val = myStorage.getItem(myStorage.key(i));
        let li = createElement();
        li.innerHTML = val;
        li.appendChild(createButton());
        document.getElementById('List').appendChild(li);
    }
}
const doFunction = function () {
    myStorage.setItem(Date.now(), document.getElementById('todo').value);
    let li = createElement();
    li.innerHTML = document.getElementById('todo').value;
    li.appendChild(createButton());
    document.getElementById('List').appendChild(li);
}
const createElement = function(){
    let li = document.createElement('li');
    li.addEventListener('click',eventHandler);
    return li;
}
const createButton = function(){
    const button = document.createElement('BUTTON');
    button.className = 'deleteButton';
    button.addEventListener('click',function(){
       button.parentElement.remove();
       button.remove();
    })
    button.innerHTML = 'Delete';
    return button
}
function eventHandler(event){
    if(event.type == 'click'){
        event.target.className = 'checked';
    }else{
        console.log("error!");
    }
}