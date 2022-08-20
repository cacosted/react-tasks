import { useEffect, useState } from 'react'

export const useLocalStorage = (keyName, initialValue) => {
  const [storeItem, setStoreItem] = useState(initialValue)

  const setNewValue = (value) => {
    const stringData = JSON.stringify(value)
    localStorage.setItem(keyName, stringData)
    setStoreItem(value)
  }
  const getStoreItem = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }

  useEffect(() => {
    const storeStarter = getStoreItem(keyName) ?? initialValue
    setStoreItem(storeStarter)
  }, [])

  return [
    storeItem,
    setNewValue
  ]
}
