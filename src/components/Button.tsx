import Link from 'next/link';
import React, {MouseEventHandler, ReactNode } from 'react'

type BtnProps = {
    btype: "button" | "submit" | "reset" | "anchor";
    href?:string;
    classes?:string;
    children?:ReactNode;
    onclick_event?:MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

const Button:React.FC<BtnProps> = ({btype = "button",href = "",classes = "",children,onclick_event}) => {
  return (
    <>
        {btype === "anchor" ?
            <Link href={href}  className={`theme-btn ${classes}`} onClick={onclick_event}>{children}</Link>
        :
            <button type={btype} className={`theme-btn ${classes}`} onClick={onclick_event}>{children}</button>
        }
        
    
    </>
  )
}

export default Button
