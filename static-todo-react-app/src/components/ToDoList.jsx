function ToDoList() {
    let taskArray = ["Learn React", "Build a Project", "Read Documentation", "Relax and Digest"]
    return (
        <div>
           
            <ul className="todo-list">
                <li>{taskArray[0]}</li>
                 <li>{taskArray[1]}</li>
                  <li>{taskArray[2]}</li>
            </ul> 
        </div>

    )

}

export default ToDoList;
