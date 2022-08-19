import { StyledTask } from './styles'

export const Task = ({ text, completed, completeTask }) => {
  return (
    <StyledTask id={text}>
      <input id={text} type='checkbox' checked={completed} onChange={completeTask} />
      <span style={{ textDecoration: completed ? 'line-through' : '' }}>{text}</span>
    </StyledTask>
  )
}
