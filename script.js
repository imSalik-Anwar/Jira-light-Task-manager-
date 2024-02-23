let addTaskbtnDiv = document.getElementById("add-task-btn-div")
let toDo = document.getElementById("to-do")
let taskNumber = 1;

let addTaskbtn = document.createElement("button")
addTaskbtn.className = "add-task-btn"
addTaskbtn.innerHTML = "Add new task"
addTaskbtnDiv.prepend(addTaskbtn)

addTaskbtn.addEventListener("click", addTask)

function addTask(eventDetails){
    // add new task to to-do coulmn
    let task = document.createElement("div")
    task.className = "task"
    task.innerHTML = `Task ${taskNumber++}`
    task.setAttribute("contenteditable", "true")
    toDo.prepend(task)
    task.focus()
    // if taskis left empty, delete it
    task.addEventListener("blur", (eventDetails) => {
        let targetTask = eventDetails.target
        if(!targetTask.innerHTML.trim()){
            targetTask.remove()
        }
    })
    // create options to changes task status
    let status = document.createElement("select")
    status.id = "status"
    status.innerHTML = `<option value="to-do">To-do</option>
    <option value="in-progress">In-progress</option>
    <option value="completed">Completed</option>
    <option id="delete" value="delete">Delete</option>`
    task.append(status)

    // change task's position when task status is changed
    status.addEventListener("change", (eventDetails) => {
        let Status = eventDetails.target.value
        if(Status == "delete"){
            const response = confirm("Are you sure you want to delete the task?");
            if(response){
                task.remove()
            } else {

            }
        } else {
            document.getElementById(Status).prepend(task)
        }
    })

}