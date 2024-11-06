import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'
import  './style.css'
const Footer = () => {
  return (
    <footer>
        <div className="footer-widget"> 
            <div className="container">
                <div className="row">
                    <div className="footer-top-wrap">
                        <Link href={"/"}><Image src={"/assets/img/logo.png"} alt='' width={234} height={47}/></Link>
                        <ul>
                            <li><Button btype='anchor' classes='inActive' href="/">Contat us</Button></li>
                            <li><Button btype='anchor' classes='inActive' href="/">Stay updated</Button></li>
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
        <div className="footer-widget"> 
            <div className="container">
                <div className="row">
                    <div className="footer-middle-wrap">
                        <ul>
                            <li>
                                <h6>Legals</h6>
                                <Link href={"/"}>Terms of service</Link>
                                <Link href={"/"}>Privacy policy</Link>
                                <Link href={"/"}>Responsible gambling</Link>
                            </li>
                            <li>
                                <h6>Casino reviews</h6>
                                <Link href={"/"}>Best online casinos </Link>
                                <Link href={"/"}>Casinos by payment methods </Link> 
                            </li>
                            <li>
                                <h6>Casino reviews</h6> 
                                <Link href={"/"}>All free slots </Link>
                                <Link href={"/"}>Slots by providers </Link>
                            </li>
                            <li>
                                <h6>Languages</h6>
                                <Link href={"/"}>English (Canada)  </Link>
                                <Link href={"/"}>French </Link> 
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
        <div className="footer-widget"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
    
                        <div className="footer-bottom-wrap">
                            <p><b>Responsible Gambling</b> We are not responsible for any losses due to casino gambling or betting on betting sites linked to any of our bonus offers. The player is responsible for the amount he/she is willing and able to play for. Do not gamble or bet with money you cannot afford to lose. Do not chase your losses. Players have a responsibility to check the gambling laws in their country or jurisdiction, and they should do so before gambling at any online gambling site.
                            </p>
                            <p><b>Please note :</b> Offers on our site are subject to change or cancellation. We always recommend that the player review the terms and conditions and verify the bonus directly on the casino/betting company website.
                            18 years and older, new customers only, T&C Apply, play responsibly <Link href={'www.begambleaware.org'}>www.begambleaware.org</Link></p>
                        </div>
 

                    </div> 
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12"> 

                    <p className='copyrights'>2024 Copyrights © roobetreloads.com All rights reserved.</p>

                </div> 
            </div>
        </div>
    </footer>
  )
}

export default Footer
