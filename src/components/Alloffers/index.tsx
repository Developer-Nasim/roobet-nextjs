import React from 'react'
import "./style.css"
import SingleOffer from './SingleOffer'
import LatestVideos from '../LatestVideos'

const AllOffers = () => {
  return (
    <section className='alloffers'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h4>All our <b>Offers</b></h4>
                    <div className="all_the_offers">
                        <SingleOffer img="/assets/img/fslittle.png"> 
                            <p><b>100</b> FREE SPINS
                                <small>SWEET BONANZA</small>
                            </p>
                            <p>Bet
                                <small>$1</small>
                            </p>
                            <p>Wager
                                <small>$10.000</small>
                            </p> 
                        </SingleOffer> 
                        <SingleOffer img="/assets/img/littleban4k2.png"> 
                            <p><b>$4.000</b> FREE SPINS
                                <small>SWEET BONANZA</small>
                            </p>
                       
                            <p>Wager to collect
                                <small>$500.000</small>
                            </p> 
                        </SingleOffer> 
                        <SingleOffer img="/assets/img/littleban4k.png"> 
                            <p><b>VIP Rewards</b>  
                                <small>Wager and earn VIP REWARDS</small>
                            </p>
                            <p>
                                <span className='dashline'></span>
                            </p>
                            <p>
                                <span className='dashline'></span>
                            </p> 
                        </SingleOffer> 
                        <SingleOffer img="/assets/img/littleban4k.png"> 
                            <p><b>Montly jackpot</b> 
                                <small>Win Lamborghini and others</small>
                            </p>
                            <p>
                                <span className='dashline'></span>
                            </p>
                            <p>
                                <span className='dashline'></span>
                            </p> 
                        </SingleOffer> 
                    </div>
                </div>
                {/*  all videos */}
                <div className="col-lg-12">
                    <LatestVideos/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AllOffers
