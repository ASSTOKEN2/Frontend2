import React from "react"
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="container-fluid">
            <div className="navbar navbar-expand-sm bg-white">
                <div className="container-fluid pt-5">

                    <div class="container-fluid">


                        <Link className="navbar-brand" to='/'>
                            <img src={require('../Dashboard/img/logo2.png')} style={{ width: '144px' }} alt="" />
                        </Link>


                    </div>

                    <ul class="navbar-nav">
                        <div className="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link px-4" id="common_txt" to="#"><h4>About</h4></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link px-4" id="common_txt" to="#"><h4>Services</h4></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link px-4" id="common_txt" to={`/investment`}><h4>Investments</h4></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link px-4" id="common_txt" to="#"><h4>Property</h4></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link px-4" id="common_txt" to="/dashboard"><h4>Dashboard</h4></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link px-4" id="common_txt" to="#"><h4>Resources</h4></Link>
                            </li>
                        </div>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">
                                <button className="btn btn-light btn-outline-secondary text-nowrap px-4 py-0 border border-1 border-dark" id="common_txt"><h4 className="px-5">Log In</h4></button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/signup">
                                <button className="btn btn-primary text-nowrap px-4 py-0" id="btn_signup"><h4 className="px-5">Sign Up</h4></button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div >



        </div >
    );
}