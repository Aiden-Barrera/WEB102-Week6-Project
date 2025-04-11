import { Link, Outlet } from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <div style={{display: "flex", height: "100vh", overflow: "hidden"}}>
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: '250px',
                    height: '100vh',
                    backgroundColor: '#333333',
                    color: 'white',
                    padding: '20px',
                    boxSizing: 'border-box'
                }}>
                <h2>DnD Dashboard</h2>
                <ul style={{ listStyle: 'none', padding: 0, color: "#ffffff" }}>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/classes">Classes</Link></li>
                </ul>
                </div>

                <div style={{
                    marginLeft: '250px',
                    padding: '20px',
                    height: '100vh',
                    overflowY: 'auto',
                    boxSizing: 'border-box',}}
                >
                    <Outlet />
                </div>
            </div>
        </>
      )
}

export default Sidebar