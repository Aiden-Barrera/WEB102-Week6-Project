import { useLocation } from 'react-router-dom'

const ViewMore = () => {
    const location = useLocation()
    const { classItem, spells } = location.state || {}

    return (
        <div className='more-info-card' style={{padding: "20px", minWidth: "500px"}}>
            <h1>{classItem?.name}</h1>
            <div className="spell-list" style={{display: "flex", flexDirection: "column"}}>
                <h2>Additional Spells:</h2>
                <div style={{display:"flex", flexDirection: "column", gap: "10px", marginBottom: "20px"}}>
                    {spells?.slice(3, 15)?.map((spell, i) => (
                        <>
                            <div style={{display: 'flex', gap: "15px", fontSize: "21px"}}>
                                <p style={{margin: 0}}>{spell.name}</p>
                                <p style={{margin: 0}}>Level: {spell.level}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewMore