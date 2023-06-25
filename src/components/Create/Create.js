import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie'
import styles from "../propertyListing/propertyListing.module.css";
import indexService from '../../services/indexService'
import { Link, useNavigate } from "react-router-dom";
import { MdModeEditOutline } from 'react-icons/md'
const data =
{
    title: "",
    value: "",
    unit: "",
    available: "",
    address: "",
    image: ""
}
    ;
const Create = () => {
    let initialDetails = {
        files: { 0: {}, length: "" }
    }

    const navigate = useNavigate();


    const [cookies, setCookies] = useCookies(['token'])

    const [Details, setDetails] = useState(initialDetails)

    const [property, setProperty] = useState(data)
    const [file, setfile] = useState("")




    useEffect(() => {
        (() => {
            if (file) {
                console.log(Details.files)
                document.getElementById('img').style.backgroundImage = `url(${file})`
            }
        })()
    }, [file])



    const handleImageChange = event => {


        const pic = event.target.files
        if (pic.length == 1) {
            setDetails({ ...Details, ['files']: event.target.files[0] })

            const uri = URL.createObjectURL(event.target.files[0])

            setfile(uri)

        }
    };

    const handlePostChange = event => {

        const { name, value } = event.target;

        setProperty({ ...property, [name]: value });
    };


    const Post =
        async (event) => {

            event.preventDefault();
            console.log(Details.files)
            const formData = new FormData();
            formData.append("file", Details.files);
            formData.append("upload_preset", "sYmb@l1C");

            axios.post(`https://api.cloudinary.com/v1_1/dyevylpk8/image/upload`, formData).then((response) => {
                if (response.data.secure_url) {
                    const oldurl = response.data.secure_url
                    // const newurl = oldurl.includes()
                    // const url = newurl[0] + ".png"

                    indexService.create(cookies.token, { property: property, url: oldurl }).then((response) => {
                        navigate('/dashboard')
                    }).catch((error) => {
                        console.log(error)
                    })

                }
            })
                .catch((error) => {
                    console.log(error);
                });
            ;
        }
    return (
        <div className={styles.container}>
            <div className={styles.listWrap}>
                <div className={styles.listingCont}>
                    <div className={styles.listingImg} id='img' style={{ alignItems: 'center', display: 'flex', width: '300px', height: '300px', backgroundColor: '#0066f5', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '300px,300px' }}>
                        <label htmlFor="files"><h4><MdModeEditOutline size={'30px'} />Edit</h4></label>
                        <input onChange={handleImageChange} type='file' id='files' name='files' style={{ display: 'none' }} />
                    </div>
                    <div className={styles.listingInfo}>

                        <div className={styles.infoCont}>
                            Title:
                            <p className={styles.infoTitle}><input onChange={handlePostChange} value={property.title} name='title' /></p>
                            Price:
                            <p className={styles.infoValue}><input onChange={handlePostChange} value={property.value} name='value' /></p>

                            <p className={styles.unit}>Unit:<input onChange={handlePostChange} value={property.unit} name='unit' /></p>
                            <p className={styles.available}>
                                Available Unit:<input onChange={handlePostChange} value={property.available} name='available' />
                            </p>
                            <p className={styles.address}>Address: <input onChange={handlePostChange} value={property.address} name='address' /></p>
                            <p className={styles.propertyId}>
                                Property Id: <input onChange={handlePostChange} value={property.propertyId} name='propertyId' />
                            </p>
                            <button className="btn btn-primary" onClick={Post} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create
