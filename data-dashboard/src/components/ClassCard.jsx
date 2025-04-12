import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
import './../App.css'
const ClassCard = ({item, level}) => {
    const navigate = useNavigate()
    const [spellsbyClass, setSpellsByClass] = useState(null)

    const fetchSpells = async () => {
        try {
            const res = await axios.get(`https://www.dnd5eapi.co/api/2014/classes/${item?.index}/spells`)
            if (level != -1){
                console.log("Here: ", level)
                const filteredSpells = res.data?.results.filter((spell) => spell.level === level)
                setSpellsByClass(filteredSpells)
            } else {
                setSpellsByClass(res.data?.results)
            }
        } catch (err) {
            console.log("Error Fetching Spells: ", err)
        }

    }

    useEffect(()=> {
        fetchSpells()
    }, [item, level])

    const handleClick = () => {
        navigate(`/viewMore/${item?.name}`, {
            state: {
                classItem: item,
                spells: spellsbyClass
            }
        })
    }

    return (
        <>
           <div className="spell-grid">
                <div>{item?.name}</div>
                {spellsbyClass?.length !== 0 ? spellsbyClass?.slice(0, 3)?.map((spell, index) => (
                    <React.Fragment key={index}>
                        <div>{spell?.name ?? "N/A"}</div>
                        <div>{spell?.level ?? "N/A"}</div>
                    </React.Fragment>
                )) : (
                    <>
                    <div>N/A</div>
                    <div>N/A</div>
                    <div>N/A</div>
                    <div>N/A</div>
                    <div>N/A</div>
                    <div>N/A</div>
                    </>
                )}
                {spellsbyClass?.length !== 0 && (
                    <button style={{ padding: "4px 10px" }} onClick={handleClick}>▶️</button>
                )}
            </div>
        </>
    )
}

export default ClassCard