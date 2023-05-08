import { useEffect, useState } from 'react'
import './App.css'
import googleOneTap from 'google-one-tap'

const options = {
  client_id: import.meta.env.VITE_CLIENT_ID,
  auto_select: false,
  cancel_on_tap_outside: false,
  context: "signin"
}

function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("userCreds")
    ? JSON.parse(localStorage.getItem("userCreds"))
    : null
  )

  useEffect(() => {
    if(!loginData) {
      googleOneTap(options, async (res) => {
        console.log(res)
      })
    }
  }, [])

  return (
    <div>
      Hello
    </div>
  )
}

export default App
