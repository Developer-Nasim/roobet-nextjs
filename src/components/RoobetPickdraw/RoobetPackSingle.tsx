import Image from 'next/image'
import React, { ReactEventHandler, ReactNode } from 'react'
import Button from '../Button'


type allprops = {
    classes?: string; 
    icon: string;
    btnType: "startnow" | "register";
    btnCick?: ReactEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    children?: ReactNode;
}


const RoobetPackSingle:React.FC<allprops> = ({
    classes = "", 
    icon,
    btnType,
    btnCick,
    children
}) => {
  return (
    <div className={`rpd-blk ${classes}`}> 
        <span><Image src={icon} width={21} height={21} alt=''/></span>
        <div className='rpd-blk-contents'>
            <div>
                {children}
            </div>
            <Button btype='button' onclick_event={btnCick}>{btnType === "register" ? <>Start <b>NOW !</b></> : <><b>Register</b></>} </Button>
        </div>
    </div>
  )
}

export default RoobetPackSingle
