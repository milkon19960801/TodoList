const doFunction = function () {    
    let userinput = document.getElementById('todo');
    const ul = document.getElementById('List');
    let li = document.createElement('li');
    
    li.innerHTML = userinput.value;
    ul.appendChild(li);  
}
document.getElementById('todo').onchange = doFunction;

let input = document.getElementById("todo");
if(input){
    input.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        doFunction;
    }
  });
  }
