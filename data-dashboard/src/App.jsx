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
          <h2>Total # of Classes</h2>
          <p>{totalClasses}</p>
        </div>
        <div className='api-card' style={{margin: 0}}>
          <h2>Total # of Spells</h2>
          <p style={{fontSize: "18px"}}>{totalSpells}</p>
        </div>
        <div className='api-card' style={{margin: 0}}>
          <h2>Total # of Spells</h2>
          <p>{totalSpells}</p>
        </div>
      </div>
      <Dashboard info={info} />
    </>
  )
}

export default App
