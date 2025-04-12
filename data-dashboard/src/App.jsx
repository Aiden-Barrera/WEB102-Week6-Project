import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Sidebar from './components/SideBar'
import ViewMore from './components/ViewMore'

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Sidebar />}>
                <Route index element={<Home />}/>
                <Route path="/classes" element={<h1>Classes Page</h1>}/>
                <Route path="/viewMore/:classIndex" element={<ViewMore />} />
            </Route>
        </Routes>
    )
}

export default App