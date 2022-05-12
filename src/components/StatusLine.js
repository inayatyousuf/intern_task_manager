import Task from "./Task";
export default function StatusLine(props) {
    const { status, tasks, addTask, deleteTask, addEmptyTask, moveTask } = props;
  
    let taskList, tasksForStatus;
  
    function handleAddEmpty() {
      addEmptyTask(status);
    }
  
    if (tasks) {
      tasksForStatus = tasks.filter((task) => {
        return task.status === status;
      });
    }
  
    if (tasksForStatus) {
      taskList = tasksForStatus.map((task) => {
        return (
          <Task
            addTask={(task) => addTask(task)}
            deleteTask={(id) => deleteTask(id)}
            moveTask={(id, status) => moveTask(id, status)}
            key={task.id}
            task={task}
          />
        );
      });
    }
  
    return (
      <div className="statusLine" style={{width: "100%",
      margin: '0 0.5rem', border:"1px solid white", padding:"0 1rem"}}>
        <h3 style={{ fontWeight: '500', margin: '1rem 0'}}>{status}</h3>
        {taskList}
        <button
        style={{
          border:"none",
          padding: ' 0.6rem 0.9rem',
          backgroundColor: 'white',
          fontWeight: '800',
          borderRadius: '50%',
          fontSize: '1rem',
          margin:"1rem 0.25rem"
        }}
        onClick={handleAddEmpty} className="button addTask">
          +
        </button>
      </div>
    );
  }