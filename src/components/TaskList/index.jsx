import { Task } from '../Task'
import trashIcon from '../../assets/trash.svg'
import { CompletedContainer, CompletedCard, DeleteIcon, DeleteAllButton } from './styles'

const RegularTasks = ({ tasks, completeTask }) => {
  return (
    tasks.map((task, id) => (
      <Task key={id} text={task.text} completed={task.completed} completeTask={completeTask} />
    ))
  )
}

const CompletedTasks = ({ tasks, completeTask, deleteTask, deleteAllTasks }) => {
  const completedTasks = tasks.filter(tasks => tasks.completed)
  return (
    <CompletedContainer>
      {
        completedTasks.map((task, id) => (
          <CompletedCard key={id}>
            <Task text={task.text} completed={task.completed} completeTask={completeTask} />
            <DeleteIcon id={task.text} src={trashIcon} alt='Delete' onClick={deleteTask} />
          </CompletedCard>
        ))
      }
      <DeleteAllButton onClick={deleteAllTasks}>
        <span>Delete all</span>
      </DeleteAllButton>
    </CompletedContainer>
  )
}

export const TaskList = ({ activeTab, completeTask, deleteTask, deleteAllTasks, tasks }) => {
  let taskArray = [...tasks]

  if (activeTab === 'Active') {
    taskArray = tasks.filter(task => !task.completed)
  }

  if (activeTab === 'Completed') {
    return <CompletedTasks tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} deleteAllTasks={deleteAllTasks} />
  }

  return <RegularTasks tasks={taskArray} completeTask={completeTask} />
}
