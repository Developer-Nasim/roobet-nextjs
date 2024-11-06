import React from 'react'
import Button from '../Button'
import HeroBlkItem from './HeroBlkItem'
import Image from 'next/image'

const WelcomeHero = () => {
  return (
    <section className='welcomehero'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="welcomehero-blk">
                        <div className="welcomehero-content">
                            <h2>Welcome to  <b>RoobetReloads.com</b></h2>
                            <p>Earn exclusives rewards, discover a new experience</p>
                            <Button btype="button">Register <b>now!</b></Button>
                        </div>
                        <div className="welcome-items">
                            <HeroBlkItem title="CRAZY Jackpot" classes='firstblk'>
                                <Image src="/assets/img/car.png" alt="" width={91} height={43}  />
                            </HeroBlkItem>
                            <HeroBlkItem title="Exclusives  BONUS" classes='firstblk'>
                                <Image src="/assets/img/car.png" alt="" width={91} height={43}  />
                            </HeroBlkItem>
                            <HeroBlkItem title="VIP  Rewards" classes='firstblk'>
                                <Image src="/assets/img/car.png" alt="" width={91} height={43}  />
                            </HeroBlkItem>
                        </div>
                        <Image src="/assets/img/character_foss.png"  
                        layout="responsive"
                        width={16}  
                        height={9}  
                        sizes="100vw"  
                        alt=''/>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WelcomeHero
