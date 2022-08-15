import { TaskFilters } from './components/TaskFilters'
import { SearchBar } from './components/SearchBar'
import { Task } from './components/Task'
import { TaskList } from './components/Tasklist'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
`

const taskList = [
  { text: 'Do coding challenge', completed: false },
  { text: 'Do coding challenge', completed: true },
  { text: 'Do coding challenge', completed: false }
]

export const App = () => {
  return (
    <>
      <Title>#Todo</Title>
      <TaskFilters />
      <SearchBar />
      <TaskList>
        {
          taskList.map((task, id) => (
            <Task key={id} text={task.text} completed={task.completed} />
          ))
        }
      </TaskList>
    </>
  )
}
