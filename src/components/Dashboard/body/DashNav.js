import React from 'react'
import { RiSettingsLine, RiImageLine, RiNewspaperFill } from 'react-icons/ri'
import { HiHomeModern } from 'react-icons/hi2'
import { HiHome } from 'react-icons/hi'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const DashNav = () => {
    return (
        <nav className="sidebar">
            <div className="logo d-flex justify-content-between">
                <a href="/"><img src={require("../img/logo.png")} style={{ width: '200px' }} alt="" /></a>
                <div className="sidebar_close_icon d-lg-none">
                    <i className="ti-close"></i>
                </div>
            </div>
            <ul id="sidebar_menu" className="metismenu">
                <li className="bars">
                    <Link to='/dashboard'>
                        <HiHome size={'2rem'} color='#0d6efd' />
                        <span className='bars-span'>Dashboard</span>
                    </Link>
                </li>

                <li className="bars">
                    <Link to='/apps'>
                        <RiNewspaperFill size={'2rem'} color='#0d6efd' />
                        <span className='bars-span' >Apps</span>
                    </Link>
                </li>
                <li className="bars">
                    <Link to='/dashboard/property'>
                        <HiHomeModern size={'2rem'} color='#0d6efd' />
                        <span className='bars-span'>Properties</span>
                    </Link>
                </li>
                <li className="bars">
                    <Link to='/profile'>
                        <BiUserCircle size={'2rem'} color='#0d6efd' />
                        <span className='bars-span'>Profile</span>
                    </Link>
                </li>
                <li className="bars">
                    <Link to='/images'>
                        <RiImageLine size={'2rem'} color='#0d6efd' />
                        <span className='bars-span'>Images</span>
                    </Link>
                </li>
                <li className="bars">
                    <Link to='/settings'>
                        <RiSettingsLine size={'2rem'} color='#0d6efd' />
                        <span className='bars-span'>Settings</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default DashNav