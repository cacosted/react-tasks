export const Task = ({ text, completed }) => {
  return (
    <li>
      <input type='checkbox' defaultChecked={completed} />
      <span>{text}</span>
    </li>
  )
}
