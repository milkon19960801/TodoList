let myStorage = window.localStorage;

window.onload = function(){
    readLocalStorage();
}
const readLocalStorage =  function(){
   
    for(let i = 0;i<myStorage.length;i++){
        let val = myStorage.getItem(myStorage.key(i));
        let li = createElement();
        li.innerHTML = val;
        li.appendChild(createButton());
        document.getElementById('List').appendChild(li);
    }
}
const doFunction = function () {
    let uniqValue = Date.now();
    myStorage.setItem(uniqValue, document.getElementById('todo').value);
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
    //    localStorageRemoveItem(button);
    })
    button.innerHTML = 'Delete';
    return button
}

// const localStorageRemoveItem = function(button){
//     for(let i = 0;i<myStorage.length;i++){
//         if(button.parentElement.value == myStorage.getItem(myStorage.key(i))){
//             myStorage.removeItem(localStorage.key(i));
//         }
//     }
// }

function eventHandler(event){
    if(event.type == 'click'){
        event.target.className = 'checked';
    }else{
        console.log("error!");
    }
}