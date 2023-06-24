import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import indexService from '../../../services/indexService';
import "../css/style1.css"

const DashBody = () => {
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
        <div style={{padding: "0 100px 0 100px"} }>
            <div className="main_content_iner ">
                <div className="container-fluid plr_30 body_white_bg pt_30">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="single_element">
                                <div className="quick_activity">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="quick_activity_wrap">
                                                <div className="single_quick_activity">
                                                    <h4 id="heading_4">Total Blogs</h4>
                                                    <h3 id="heading_3"><span className="counter">{Details.total}</span></h3>
                                                    <div className="icon-div" style={{ position: "relative", left: "40%" }}>
                                                        <div className="icon">
                                                            +
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single_quick_activity">
                                                    <h4 id="heading_4">Total Images</h4>
                                                    <h3 id="heading_3"> <span className="counter">{Details.images}</span></h3>
                                                    <div className="icon-div" style={{ position: "relative", left: "40%" }}>
                                                        <div className="icon">
                                                            +
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single_quick_activity">
                                                    <h4 id="heading_4">Uploaded Blogs</h4>
                                                    <h3 id="heading_3"> <span className="counter">0</span></h3>
                                                    <p id="para">Manage</p>
                                                </div>
                                                <div className="single_quick_activity">
                                                    <h4 id="heading_4">Uploaded Images</h4>
                                                    <h3 id="heading_3"> <span className="counter">0</span></h3>
                                                    <p id="para">Manage</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div >
                </div >
            </div >








            <div className="footer_part">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="footer_iner text-center">
                                <p>
                                    2023 © Influence - Designed by<a href="client.github.io/">
                                        pablo-codes</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBody