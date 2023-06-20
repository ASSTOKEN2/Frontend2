import React from 'react'
import SideBar from '../SideBar/SideBar'
import { BiWallet } from 'react-icons/bi'
import { BsArrowUpRight } from 'react-icons/bs'
import './Tokens.css'
const Tokens = () => {
    return (


        <div className='sb' >
            <div className='grid-1'>
                <div className='box-1'>

                    <div className='ngrid'>
                        <div className='twl'>
                            <p className='tw'>WALLET BALANCE</p>
                            <br />
                            <h2 className='twh'>$1500</h2>
                        </div>
                        <div className='twl'>
                            <h2 className='twh' >Token</h2>
                            <br />
                            <p className='tw'>1 ETH = $1000</p>
                        </div>
                        <div className='twl'>
                            <p className='tw'>TOKEN BALANCE</p>
                            <br />
                            <h2 className='twh'>700</h2>

                        </div>
                    </div>

                </div>
                <div>
                    <div className='box-3'><b>Transactions</b>
                        <div className='box3b'>
                            <div className='box-3s btn rounded-pill' style={{ backgroundColor: "#0066f5" }}>
                                <b style={{ color: "white" }}><BiWallet height='50%' width='25%' />  Buy Tokens</b>
                            </div>
                            <div className='box-3s btn-white rounded-pill' style={{ border: " 1px solid #0066f5" }}>
                                <b style={{ color: "#0066f5" }}><BsArrowUpRight height='50%' width='25%' />  Sell Tokens</b>
                            </div>
                        </div>

                    </div>
                </div>




            </div>

            <SideBar />
        </div>


    )
}

export default Tokens