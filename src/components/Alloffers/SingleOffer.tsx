import Image from 'next/image'
import React, { ReactEventHandler, ReactNode } from 'react'
import Button from '../Button'

type allprops = {
    classes?:string;
    img:string;
    clickOnInfo?: ReactEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    clickOnBonus?: ReactEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    children: ReactNode 
}


const SingleOffer:React.FC<allprops> = ({
    classes = "",
    img,
    clickOnInfo,
    clickOnBonus,
    children
}) => {
  return (
    <div className={`singleOffers ${classes}`}>
        <div className="singleOffers_contents">
            <Image src={img} width={180} height={55} alt=''/>
            <div>
                {children}
            </div>
        </div>
        <div className="singleOffers_buttons">
            <Button btype='button' classes='infoBtn' onclick_event={clickOnInfo}>
                <Image src="/assets/img/info.svg" width={24} height={24} alt=''/>
            </Button>
            <Button btype='button' onclick_event={clickOnBonus}> 
                Get your BONUS
            </Button> 
        </div>
    </div>
  )
}

export default SingleOffer
