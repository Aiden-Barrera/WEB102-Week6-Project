import { useState, useEffect } from 'react'
import axios from "axios"
import './../App.css'
import ClassCard from './ClassCard'

const Dashboard = ({info}) => {
    const [searched, setSearched] = useState("")
    const [filteredInfo, setFilteredInfo] = useState([])
    const [selectedLevel, setSelectedLevel] = useState(-1)
    const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    useEffect(()=> {
        setFilteredInfo(info)
    }, [info])

    const handleSubmit = async () => {
        if (searched === "") {
            setFilteredInfo(info)
            return
        } 
        try {
            console.log(selectedLevel)
            const res = await axios.get(`https://www.dnd5eapi.co/api/2014/classes/${searched.toLowerCase()}`)
            console.log(res.data)
            setFilteredInfo([res.data])
        } catch (err){
            console.log("Error when searching by class name")
        }
    }

    useEffect(()=>{
        console.log(searched)
    }, [searched])

    return (
        <>
            <div className='api-card'>
                <h1>Discover Spells by Classes and Levels in D&D Ver. 5</h1>
                {/* Section for searching and selecting levels for spells by Class*/}
                <div style={{ display: "flex", gap: "15px", fontSize: "12px"}}>
                    <input type='text' value={searched} onChange={(e) => setSearched(e.target.value)} style={{fontSize: "12px"}}/>
                    <select value={selectedLevel} onChange={(e) => setSelectedLevel(Number(e.target.value))}>
                        <option value="">Select Level for Spell</option>
                        {levels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                    <button onClick={handleSubmit}>Submit</button>
                </div>

                <div className="spell-grid header">
                    <div>Class Name</div>
                    <div>Spell #1</div>
                    <div>Level</div>
                    <div>Spell #2</div>
                    <div>Level</div>
                    <div>Spell #3</div>
                    <div>Level</div>
                </div>

                {/* Section for displaying the information */}
                <div style={{display: "flex", flexDirection: "column"}}>
                    {filteredInfo?.map((item, index) => (
                        <ClassCard key={index} item={item} level={selectedLevel}/>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Dashboard