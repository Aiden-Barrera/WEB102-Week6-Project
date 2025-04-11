import { useState, useEffect } from 'react'
import axios from "axios"
import {Routes, Route} from 'react-router-dom'
import './../App.css'
import Dashboard from './Dashboard'

function Home() {
  const [info, setInfo] = useState(null)
  const [totalClasses, setTotalClasses] = useState(0)
  const [totalSpells, setTotalSpells] = useState(0)
  const [highestSpell, setHighestSpell] = useState(0)

  const fetchInfo = async () => {
    try{
      const res = await axios.get("https://www.dnd5eapi.co/api/2014/classes")
      setInfo(res.data.results)
      setTotalClasses(res.data.count)
      const res1 = await axios.get("https://www.dnd5eapi.co/api/2014/spells")
      setTotalSpells(res1.data.count)
      const res2 = await axios.get("https://www.dnd5eapi.co/api/2014/classes/wizard/spells")
      setHighestSpell(res2.data.count)
      console.log(res2.data)
    } catch (err) {
      console.log("Error Fetching Data from DnD API:", err)
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return (
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <div style={{ display: "flex", justifyContent: 'space-evenly', gap: "10px" }}>
          <div className='api-card'>
            <h1>{totalClasses}</h1>
            <h2>Total No. of Classes</h2>
          </div>
          <div className='api-card'>
            <h1>{totalSpells}</h1>
            <h2>Total No. of Spells</h2>
          </div>
          <div className='api-card'>
            <h1>{highestSpell}</h1>
            <h2>Class: Wizard has the Most Spells</h2>
          </div>
          <div className='api-card' style={{ padding: "0 2%" }}>
            <img src="/dnd.png" alt="dnd" style={{ width: "225px", height: "auto", borderRadius: "16px" }} />
          </div>
        </div>
        <Dashboard info={info} />
      </div>
  )
}

export default Home
