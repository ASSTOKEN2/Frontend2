import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import indexService from '../../../services/indexService';
const DashHeader = () => {
    const initialDetails = {

        user: {
            username: "",
            role: "",
            image: ""
        },
        total: "",
        images: "",
        avatar: ""
    }
    const [cookies, setCookies] = useCookies(['token'])
    const [Details, setDetails] = useState(initialDetails)
    const id = cookies.token
    const responses = (id) => {
        indexService.index(id)
            .then((response) => {
                setDetails(response.data)

            })
            .catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {

        responses(id)
    }, [id])
    return (
        <div className="container-fluid g-0">
            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className="header_iner d-flex justify-content-between align-items-center">
                        <div className="sidebar_icon d-lg-none">
                            <i className="ti-menu"></i>
                        </div>
                        <div className="serach_field-area">
                            <div className="search_inner">
                                <form action="client.github.io/#/dashboard">
                                    <div className="search_field">
                                        <input type="text" placeholder="Search here..." />
                                    </div>
                                    <button type="submit">
                                        <img src={require("../img/icon_search.svg")} alt="" />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="header_right d-flex justify-content-between align-items-center">
                            <div className="header_notification_warp d-flex align-items-center">
                                <li>
                                    <a href="client.github.io/#/dashboard">
                                        <img src={require("../img/bell.svg")} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="client.github.io/#/dashboard">
                                        <img src={require("../img/msg.svg")} alt="" />
                                    </a>
                                </li>
                            </div>
                            <div className="profile_info">
                                {(function () {
                                    if (!Details.user.image) {
                                        return <div className="avatar-xs"><span className="avatar-title rounded-circle bg-soft-primary text-primary">{Details.avatar}</span></div>

                                    } else {
                                        return <img src={Details.user.image} />
                                    }
                                })(Details.user.image)

                                }
                                <div className="profile_info_iner">
                                    <p>Welcome {Details.user.role}!</p>
                                    <h5>{Details.user.username}</h5>
                                    <div className="profile_info_details">
                                        <Link to="/profile">My Profile <i className="ti-user"></i></Link>
                                        <a href="#">Settings <i className="ti-settings"></i></a>
                                        <a href="">Log Out <i className="ti-shift-left"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashHeader