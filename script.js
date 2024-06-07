const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("You must input a task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let button = document.createElement("button");
        button.innerHTML = "Delete";
        li.appendChild(button);
        let span = document.createElement("span");
        span.innerHTML = "Edit";
        li.appendChild(span);
    }
    inputBox.value="";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
},false);
