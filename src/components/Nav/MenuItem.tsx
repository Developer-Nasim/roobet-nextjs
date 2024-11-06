import Link from 'next/link'
import React, { ReactNode } from 'react'
type MenuItemProps = {
    src?: string;
    width?: number;
    height?: number;
    children: ReactNode;
  
  };
export const MenuItem:React.FC<MenuItemProps> =  () => {
    return (
      <Link href={"/"}>
      {/* <Image src={src} alt='' width={width} height={height}/> */}
      Roobet</Link>
    )
  }