import React, { ReactEventHandler, ReactNode } from 'react'
import Button from '../Button'
import RoobetPackdrawContent from './RoobetPackdrawContent';


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
    <RoobetPackdrawContent 
        icon={icon}
    >
        <h2><b>VIP</b> Rewards</h2>
        <p>Et quoniam inedia gravi adflictabantur, locum petivere Paleas nomine, vergentem in mare, valido muro firmatum, ubi conduntur nunc usque commeatus distribui militibus omne latus Isauriae defendentibus adsueti. circumstetere igitur hoc</p>
    </RoobetPackdrawContent>
    {children}
    <Button btype='button' onclick_event={btnCick}>{btnType === "register" ? <>Start <b>NOW !</b></> : <><b>Register</b></>} </Button>
    </div>
  )
}

export default RoobetPackSingle
