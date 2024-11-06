import Image from 'next/image'
import Link from 'next/link'
import { MenuItem } from './MenuItem'
import Button from '../Button'
import './style.css'

 



const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-wrap">

              {/* logo and menu */}
              <div className="logo-menu-wrap">
                <Link href={"/"}><Image width={47} height={49} src="/assets/img/logo.svg" alt='roobet logo'/></Link>
                <nav>
                  <ul>
                    <li><MenuItem src="/assets/img/menu-logo.svg" width={17} height={17}>Roobet</MenuItem></li>
                    <li><MenuItem src="/assets/img/vector.png" width={13} height={13}>Packdraw</MenuItem></li>
                    <li><MenuItem src="/assets/img/menuimg.svg" width={11.98} height={5.77}>Foss Casino</MenuItem></li> 
                  </ul>
                </nav>
              </div>

              {/* header action */}
              <div className="header-action">
                <Button btype='button' classes='inActive' >Login</Button>
                <Button btype='button'>Register</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
