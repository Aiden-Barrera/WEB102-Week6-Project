import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [info, setInfo] = useState(null)
  const [totalClasses, setTotalClasses] = useState(0)
  const [totalSpells, setTotalSpells] = useState(0)

  const fetchInfo = async () => {
    try{
      const res = await axios.get("https://www.dnd5eapi.co/api/2014/classes")
      setInfo(res.data.results)
      setTotalClasses(res.data.count)
      const res1 = await axios.get("https://www.dnd5eapi.co/api/2014/spells")
      setTotalSpells(res1.data.count)
      console.log(res.data)
    } catch (err) {
      console.log("Error Fetching Data from DnD API:", err)
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <>
      <div style={{display: "flex", justifyContent: 'space-evenly'}}>
        <div className='api-card' style={{margin: 0 }}>
          <h1>{totalClasses}</h1>
          <h2>Total No. of Classes</h2>
        </div>
        <div className='api-card' style={{margin: 0}}>
          <h1>{totalSpells}</h1>
          <h2>Total No. of Spells</h2>
        </div>
        <div className='api-card' style={{margin: 0, padding: "0 2%"}}>
          <img src="/dnd.png" alt="dnd" style={{width: "225px", height: "auto", borderRadius: "16px"}} />
        </div>
      </div>
      <Dashboard info={info} />
    </>
  )
}

export default App
