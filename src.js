const doFunction = function () {
    let li = document.createElement('li');
    li.addEventListener('click',eventHandler);
    li.innerHTML = document.getElementById('todo').value;
    li.appendChild(createButton());
    document.getElementById('List').appendChild(li);
}

const createButton = function(){
    const button = document.createElement('BUTTON');
    button.className = 'x_button';
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