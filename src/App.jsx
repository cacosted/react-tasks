function App () {
  return (
    <>
      <h1>#Todo</h1>
      <nav>
        <ul>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </nav>
      <input type='text' placeholder='add details' />
      <button>Add</button>
      <ul>
        <li>
          <input type='checkbox' /><span>Do coding challenge</span>
        </li>
        <li>
          <input type='checkbox' /><span>Do coding challenge</span>
        </li>
        <li>
          <input type='checkbox' /><span>Do coding challenge</span>
        </li>
      </ul>
    </>
  )
}

export default App
