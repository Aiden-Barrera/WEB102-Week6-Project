import { useState, useEffect } from 'react'
import axios from "axios"
import './../App.css'
const ClassCard = ({item, level}) => {
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


    return (
        <>
           <div className="spell-grid">
                <div>{item?.name}</div>
                {spellsbyClass?.length !== 0 ? spellsbyClass?.slice(0, 3)?.map((spell, index) => (
                    <>
                    <div key={`name-${index}`}>{spell?.name ?? "N/A"}</div>
                    <div key={`level-${index}`}>{spell?.level ?? "N/A"}</div>
                    </>
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
            </div>

        </>
    )
}

export default ClassCard