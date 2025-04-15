import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Task1 from './components/Task1/Task1'
import About from "./components/Task1/About"
import Contact from "./components/Task1/Contact"
import Form from "./components/Task1/Form"
import Home from './components/Home'
import Task2 from './components/Task2/Dashboard'
import Profile from './components/Task2/Profile'
import Settings from './components/Task2/Settings'
import DynamicRoute from './components/Task3/DynamicRoute'
import UserDashboard from './components/Task3/UserDashboard'
import UserProfile from './components/Task3/UserProfile'

import './App.css'

function App() {
    return (
        <>
            <BrowserRouter  basename={import.meta.env.BASE_URL}>
                <Routes>
                    <Route path='/' element={<Home />}>  </Route>

                    {/* For Task 1 */}
                    <Route path='/task1' element={<Task1 />}>
                        <Route path='about' element={<About />}>  </Route>
                        <Route path='contact' element={<Contact />}>  </Route>
                        <Route path='form' element={<Form />}>  </Route>
                    </Route>

                    {/* For Task 2 */}
                    <Route path='/dashboard' element={<Task2 />}>
                        <Route path='profile' element={<Profile />}>  </Route>
                        <Route path='settings' element={<Settings />}>  </Route>
                    </Route>

                    {/* For Task 3 */}
                    <Route path='/dynamic-route' element={<DynamicRoute />}> 
                        <Route path='user/:id' element={<UserDashboard/>}>
                            <Route path='profile' element={<UserProfile/>}> </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
