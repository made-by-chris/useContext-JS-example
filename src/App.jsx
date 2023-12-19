import { useContext } from 'react'
import {AuthContext} from './contexts/AuthContext'

function App() {
  const {user, login} = useContext(AuthContext)
  const handleLogin = () => {
    login({email, password})
  }
  return (
    <>
     {user?.name}
     <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default App
