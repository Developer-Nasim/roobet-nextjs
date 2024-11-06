import Image from 'next/image'
import React, { MouseEventHandler, ReactNode } from 'react'
import Button from '../Button'

type AllProps = {
    availity:string;
    availityStatus:"available" | "not_available";
    classes?:string; 
    mainStatusText:string;
    mainStatusBg:string;
    mainStatusIcon:string; 
    mainStatusIconWidth?:number; 
    mainStatusIconHeight?:number; 
    children?:ReactNode;
    infoClick?:MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    bonusClick?:MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;

}


const DsOfferblk:React.FC<AllProps> = ({
    availity,
    availityStatus= "available",
    classes = "",
    mainStatusText,
    mainStatusBg,
    mainStatusIcon,
    mainStatusIconWidth,
    mainStatusIconHeight,
    infoClick,
    bonusClick,
    children
}) => {
  return (
    <div className={`dsoffer-blk ${classes}`}>
        <div className="status">
            <Image src={mainStatusBg} fill alt='' className='bg'/>
            <Image src={mainStatusIcon} width={mainStatusIconWidth} height={mainStatusIconHeight} alt=''/>
            {mainStatusText}
        </div>
        <div className="dsoffer-blk-details">
            {children}
            <div className="dsoffer-blk-details-btns">
                <Button btype='button' classes='infoBtn' onclick_event={infoClick}>
                    <Image src="/assets/img/info.svg" width={16.47} height={16.47} alt=''/>
                    </Button>
                <Button btype='button' onclick_event={bonusClick}> 
                    <b>Get your bonus</b>
                    <span><Image src="/assets/img/arrow.svg" width={16.47} height={16.47} alt=''/></span>
                </Button>
            </div>
        </div>
        <p><span className={availityStatus}></span> {availity}</p>
    </div>
  )
}

export default DsOfferblk
