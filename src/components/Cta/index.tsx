import React from 'react'
import Image from 'next/image'
import Ctaform from './ctaform'
import "./style.css"
const Cta = () => {
  return (
    <section className='cta-area'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="cta-wrap">
                        <div className="cta-imgs"> 
                            <Image src="/assets/img/character_foss2.png"    width={317}   height={277}  alt=''/>
                        </div>
                        <Ctaform/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta
