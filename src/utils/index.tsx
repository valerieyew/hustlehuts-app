export const setLocalStorage = (name: string, value: any, strigify = true) => {
    if (strigify) {
      return localStorage.setItem(name, JSON.stringify(value))
    } else {
      return localStorage.setItem(name, value)
    }
  }
  
  export const getLocalStorage = (name: string, parse = true) => {
    try {
      if (parse) {
        return JSON.parse(localStorage.getItem(name) || "{}")
      } else {
        return localStorage.getItem(name)
      }
    } catch (e) {
      return undefined
    }
  }
  
  export const removeLocalStorage = (name: string) => {
    localStorage.removeItem(name)
  }