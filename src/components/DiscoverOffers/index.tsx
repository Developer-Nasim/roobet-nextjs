import React from 'react'
import DsOfferblk from './DsOfferblk'
import './style.css'
import Image from 'next/image'

const DiscoverOffers = () => {
  return (
    <section className='discoveroffers'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="dsoffer-wrap">
                        <h4>Discover our <b>Offers</b></h4>
                        <div className="row">
                            <div className="col-lg-4"> 
                                <DsOfferblk 
                                    availity="BONUS Available"
                                    availityStatus="available" 
                                    mainStatusText="Profitable"
                                    mainStatusIconWidth={13}
                                    mainStatusIconHeight={13}
                                    mainStatusBg="/assets/img/blue-status.png"
                                    mainStatusIcon="/assets/img/arrowup.png"
                                >
                                    <Image src={"/assets/img/sb11.png"} alt='' width={330} height={200} objectFit='cover'/>
                                </DsOfferblk>
                            </div>
                            <div className="col-lg-4">
                                <DsOfferblk 
                                    availity="BONUS Available"
                                    availityStatus="available" 
                                    mainStatusText="Popular"
                                    mainStatusIconWidth={18}
                                    mainStatusIconHeight={18}
                                    mainStatusBg="/assets/img/piprple-status.png"
                                    mainStatusIcon="/assets/img/fire.png"
                                >
                                    <Image src={"/assets/img/4kfsss1.png"} alt='' width={330} height={200} objectFit='cover'/>
                                </DsOfferblk>
                            </div>
                            <div className="col-lg-4">
                                <DsOfferblk 
                                    availity="BONUS Unavailable"
                                    availityStatus="not_available" 
                                    mainStatusText="Popular"
                                    mainStatusIconWidth={18}
                                    mainStatusIconHeight={18}
                                    mainStatusBg="/assets/img/piprple-status.png"
                                    mainStatusIcon="/assets/img/fire.png"
                                >
                                    <Image src={"/assets/img/4kfsss1.png"} alt='' width={330} height={200} objectFit='cover'/>
                                </DsOfferblk>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DiscoverOffers
