import React from 'react'
import Login from '../user/login'
import Admin from '../user/role/Admin'
import User from '../user/role/User'
import Trainee from '../user/role/Trainee'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error from '../user/role/Error'
import Dashboard from '../dashboard/Dashboard'
import TopBarExample from '../header/header'

const Routers = () => {

    return (
        <Router>
            <TopBarExample />
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/user" element={<User />} />
                <Route exact path="/trainee" element={<Trainee />} />
                <Route exact path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}
export default Routers;
