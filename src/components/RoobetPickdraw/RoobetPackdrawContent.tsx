import Image from 'next/image'
import React, {   ReactNode } from 'react' 


type allprops = {
    classes?: string; 
    icon: string; 
    children?: ReactNode;
}


const RoobetPackdrawContent:React.FC<allprops> = ({
    classes = "", 
    icon, 
    children
}) => {
  return (
    <div className={`contant-blk-wrap ${classes}`}> 
        <span><Image src={icon} width={21} height={21} alt=''/></span>
        <div className='rpd-blk-main-contents'>
            {children}
        </div>
    </div>
  )
}
export default RoobetPackdrawContent
