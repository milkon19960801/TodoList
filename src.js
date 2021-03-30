const doFunction = function () {    
    let userinput = document.getElementById('todo');
    const ul = document.getElementById('List');
    let li = document.createElement('li');
    li.addEventListener('click',eventHandler);
    li.innerHTML = userinput.value;
    ul.appendChild(li);
}


function eventHandler(event){
    if(event.type == 'click'){
        event.target.className = 'checked';
    }else{
        console.log("error!");
    }
}
