import React from 'react'
import DashNav from './body/DashNav'
import './css/metisMenu.css'
import { HiChatAlt2 } from "react-icons/hi";
import DashBody from './body/DashBody'
import { Outlet } from 'react-router-dom'
import DashHeader from './body/DashHeader'
import Right from '../right/Right'
const Dashboard = () => {
    return (
        <div>
            <DashNav />
            <section className="main_content dashboard_part">
                <DashHeader />
                <div className='sb' >
                    <Outlet />
                    <Right />
                    <div style={{ width: '30px' }}>
                        <HiChatAlt2 size='100%' color='#0066f5' />
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Dashboard