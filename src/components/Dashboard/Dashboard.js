import React from 'react'
import DashNav from './body/DashNav'
// import './css/bootstrap1.css'
// import './css/style1.css'
import './css/metisMenu.css'
import DashBody from './body/DashBody'
import { Outlet } from 'react-router-dom'
import DashHeader from './body/DashHeader'
const Dashboard = () => {
    return (
        <div>
            <DashNav />
            <section className="main_content dashboard_part">
                <DashHeader />
                <Outlet />
            </section>

        </div>
    )
}

export default Dashboard