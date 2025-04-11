import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Sidebar from './components/SideBar'

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Sidebar />}>
                <Route index element={<Home />}/>
                <Route path="/classes" element={<h1>Classes Page</h1>}/>
            </Route>
        </Routes>
    )
}

export default App