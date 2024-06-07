var taskListArray = [];
var currentEditTaskId = null;

function addTask(){
 var taskName = document.getElementById("input-box").value;
 if(taskName === ""){
   alert("You must input a task!");
} else {
     if (currentEditTaskId) {
       let obj = taskListArray.find(m => m.taskId == currentEditTaskId);
       obj.taskName = taskName;
       currentEditTaskId = null;
    }else{
       var todoObject ={
       taskId: taskListArray.length + 1,
       taskName: taskName
       };
       taskListArray.push(todoObject);
     }
    renderTaskList();
    document.getElementById("input-box").value = "";
  }
}

function renderTaskList(){
   document.getElementById("list-container").innerHTML = "";
   for (var index = 0; index < taskListArray.length; index++){
      let dynamicLi = document.createElement("li");
      dynamicLi.textContent = taskListArray[index].taskName;
      let button = document.createElement("button");
      button.innerHTML = "Delete";
      button.addEventListener("click",deleteTask);
      button.taskId = taskListArray[index].taskId;
      dynamicLi.appendChild(button);
      let span = document.createElement("span");
      span.innerHTML = "Edit";
      span.addEventListener("click",editTask);
      span.taskId = taskListArray[index].taskId;
      dynamicLi.appendChild(span);

      document.getElementById("list-container").appendChild(dynamicLi);
   }
   const remove = document.getElementById("removeAll");
   if (taskListArray.length > 1){
      remove.classList.remove("hidden");
   }else{
      remove.classList.add("hidden");
   }
   taskName = "";
}

function deleteTask(event){
 let index = taskListArray.findIndex(m=>m.taskId == event.target.taskId);
 taskListArray.splice(index,1);
 renderTaskList()
}

function editTask(event){
   let obj = taskListArray.find(m=>m.taskId == event.target.taskId);
   document.getElementById("input-box").value = obj.taskName;
   currentEditTaskId = obj.taskId; // Set the edit tracker
}
 function removeAllTasks(){
   taskListArray.splice(0);
   renderTaskList()
 }


//  setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   document.getElementById("time").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }