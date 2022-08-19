import { Task } from '../Task'
import trashIcon from '../../assets/trash.svg'
const RegularTasks = ({ tasks, completeTask }) => {
  return (
    tasks.map((task, id) => (
      <Task key={id} text={task.text} completed={task.completed} completeTask={completeTask} />
    ))
  )
}

const CompletedTasks = ({ tasks, completeTask }) => {
  return (
    <div>
      {
        tasks.map((task, id) => (
          <div key={id}>
            <Task text={task.text} completed={task.completed} completeTask={completeTask} />
            <img src={trashIcon} alt='Delete' />
          </div>
        ))
      }
      <button>Delete all</button>
    </div>
  )
}
export const TaskList = ({ activeTab, completeTask, tasks }) => {
  let taskArray = [...tasks]
  if (activeTab === 'Active') {
    taskArray = tasks.filter(task => !task.completed)
  }
  if (activeTab === 'Completed') {
    const completedTasks = tasks.filter(tasks => tasks.completed)
    return <CompletedTasks tasks={completedTasks} completeTask={completeTask} />
  }
  return <RegularTasks tasks={taskArray} completeTask={completeTask} />
}
