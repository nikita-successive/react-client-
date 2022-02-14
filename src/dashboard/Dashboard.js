import React from 'react';
import { useState } from "react";
import Admin from '../user/role/Admin';
import Trainee from '../user/role/Trainee';
import User from '../user/role/User';
import '../../src'

const Dashboard= ()=>{
    const [adminn] = useState(false);
    const [trainee] = useState(false);
    const [userss ] = useState(false);
    
    return(
        <div className="dashboard">
            <h1>Welcome to Dashboard Page</h1>
            {adminn && <Admin/>}
            {userss && <User/>}
            {trainee && <Trainee/>}
        </div>
        
    )
}
export default Dashboard;
