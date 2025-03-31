import { useState, useEffect } from 'react'
import axios from "axios"
import md5 from "blueimp-md5"
import './App.css'
const public_key=import.meta.env.VITE_PUBLIC_KEY
const private_key=import.meta.env.VITE_PRIVATE_KEY


function App() {
  const [info, setInfo] = useState(null)

  const fetchInfo = async () => {
    try{
      const ts = Date.now().toString()
      const hash = md5(ts + private_key + public_key)
      const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`

      const res = await axios.get(url)
      setInfo(res.data)
      console.log(res.data)
    } catch (err) {
      console.log("Error Fetching Data from Marvel API:", err)
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
