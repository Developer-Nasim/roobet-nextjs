import Link from 'next/link'
import React, { ReactNode } from 'react'


type BlkProps = {
    classes?: string;
    title: string;
    children?: ReactNode;
}


const HeroBlkItem: React.FC<BlkProps> = ({classes,title,children}) => {
  return (
    <Link href={"/"} className={`HeroBlkItem ${classes}`}>
        <div className="HeroBlkItem-imgs">
            {children}
        </div>
        <p>{title}</p>
    </Link>
  )
}

export default HeroBlkItem
