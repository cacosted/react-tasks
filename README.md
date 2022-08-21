# ReactList - Todo app

![Preview Design]()

This is a solution of Todo app challenge from [Dev Challenges](http://devchallenges.io).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Installation](#installation)

## Overview

### The challenge

Users should be able to:

- Add a new task.
- Complete a task.
- Toggle between All, Active and Completed.
- Remove one or all tasks under the Completed tab.
- Store the data in local storage that when I refresh the page I can still see my progress.

### Links

- Live Demo: [Demo](https://cacosted-tasks.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- JavaScript ES6+
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Vite](https://vitejs.dev/) - Bundle tool
- [Standard](https://standardjs.com/) - Linter

### What I learned

This was an interesting challenge to practice with React.

Created `customs hooks` to improve readability of components and simplify the use of logic in components.
```js
//This hook is helpful to handle the localStorage data saving.
export const useLocalStorage = (keyName, initialValue) => {
  const [storeItem, setStoreItem] = useState(initialValue)
  
  //Here you can save a new value for the giving key, thanks to this function you don't have to worry about the parsing.
  const setNewValue = (value) => {
    const stringData = JSON.stringify(value)
    localStorage.setItem(keyName, stringData)
    setStoreItem(value)
  }

  // Similar to setNewValue, this function helps you to get the data from the given key in localStorage without worrying about parsing.
  const getStoreItem = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }

  // Here is set the first value of the given key, if there is no values is set to the initialValue parameter.
  useEffect(() => {
    const storeStarter = getStoreItem(keyName) ?? initialValue
    setStoreItem(storeStarter)
  }, [])

  return [
    storeItem,
    setNewValue
  ]
}

// Usage
//Note: this is very similar to react's useState hook, the only difference is that you have to set a keyname as first the argument.
const [storageValue, setStorageValue] = useLocalStorage('key_name',initialValue)
```

Created `activeState` css helper function to add the blue border on tabs when they are active. This is trigger with the components props.
```js
const activeState = css`
  border-bottom: 2px solid ${color.main};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background-color: ${color.main};
    border-radius: 4px 4px 0px 0px;
  }
`
// When the component is active the `activeState` css is added.
export const TaskTab = styled.div`
  position: relative;
  min-width: 90px;
  padding-block: 1em;
  font-weight: ${weight.semiBold};
  cursor: pointer;
  ${props => props.active === true ? activeState : ''};
`
```

Made the code less compact but more verbose
```js
//hooks/useTasks.js

//I prefer to create a constant to hold the array updating and then set that variable in the `setTasks()` function.
//In this way the code set function looks cleaner and is more understandable what is changing and how.
const createTask = (newTask) => {
  if (newTask.trim()) {
    const updatedTasks = [
      ...tasks,
      { text: newTask, completed: false }
    ]
    setTasks(updatedTasks)
  }
}

const completeTask = ({ target }) => {
  const currentId = target.parentElement.id
  
  const updatedTasks = tasks.map(task => {
    if (task.text === currentId) return { ...task, completed: !task.completed }
    return task
  })

  setTasks(updatedTasks)
}

const deleteTask = ({ target }) => {
  const currentId = target.id
  const updatedTasks = tasks.filter(task => task.text !== currentId)
  setTasks(updatedTasks)
}

const deleteAllTasks = () => {
  const updatedTasks = tasks.filter(task => !task.completed)
  setTasks(updatedTasks)
}
```

Last but not least, this is the cool tip that I get from the bobby's article.
```js
//There are different ways to do this but I think this approach looks cleaner and understandable
const newArray = array.map(item => {
    if (item.id === expectedId) return { ...item, completed: !item.completed }
    return item
})

```

### Useful resources

- [Styled Components docs](https://styled-components.com/docs) - The official documentation of styled components, this resource was very useful to understand this package.

- [LocalStorage Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - This is a great article to understand the basis of `LocalStorage`. With this I could implement the `persistent data` feature.

- [Curso Introducción a React](https://platzi.com/cursos/react/) - This is a great course to learn the basis of `react`. This was really helpful in the `localStorage` section to create and use a `custom hook`.

- [Trash icon by mithun](https://freeicons.io/profile/714) - This icon is free to use and very helpful for the `delete` functionality.

- [Update Object's properties in Array](https://bobbyhadz.com/blog/javascript-update-property-of-object-in-array) - This was an excellent article to get a new idea of how to update object's properties inside an Array of objects.

- [Refactor React Components](https://www.youtube.com/watch?v=1zYf4Yw1jqs&t=341s) - This is a great video from `@midudev` to understand the why and how to use the `custom hooks` in order to make the code cleaner.

## Author

- Dev Challenges - [@cacosted](https://devchallenges.io/portfolio/cacosted)
- Twitter - [@cacosted](https://www.twitter.com/cacosted)

## Installation

To test this project by yourself first clone the repository, then you can use this commands:

Install project
```
npm install
```

Run local server
```
npm run dev
```

Build project
```
npm run build
```

Preview Build
```
npm run preview
```
