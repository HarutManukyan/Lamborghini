import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useEffect, useRef, useState } from "react"

const PreOwned = () => {
    const dispatch = useDispatch()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    return (
        <div ref={startRef}>
            {
                
                    <div 
                        style={{
                            backgroundImage: `url(https://www.hdcarwallpapers.com/walls/lamborghini_huracan_tecnica_2022_5k_9-HD.jpg)`, 
                            backgroundRepeat: 'no-repeat', 
                            height: '100vh', 
                            backgroundSize: 'cover'
                        }} 
                        className='huracan-wrapper' onMouseOver={mouseOver}
                    >
                        <div className="huracan">
                            <div style={{fontSize: '45px'}} className="huracan-title">
                                selezione lamborghini
                            </div>
                            <div style={{textAlign: 'end', fontSize: '100px'}} className="huracan-model">
                                sertified pre- <br /> owned program
                            </div >
                        </div>
                    </div>
                
            }
            <div className="about-huracan">
                <div className="about-huracan-texts">
                    <div className="about-huracan-title">
                        <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/Selezione/2020/logo.png"/>
                    </div>
                    <div className="about-huracan-text">
                        Selezione Lamborghini Certified Pre-Owned is the official program that guarantees total peace of mind and safety for new buyers of pre-owned Lamborghini cars. 
                        The pre-owned Lamborghini is selected based on a thorough certification process and prepared for sale by qualified technicians of the House of the Raging Bull, using exclusively original spare parts.
                        Customers can also take advantage of the Lamborghini warranty and roadside assistance service for up to 24 months. 
                        The Selezione Lamborghini Certified Pre-Owned program is only available at the Authorized Dealerships and Service Centers. 
                    </div>
                </div>
                <div className="about-huracan-img">
                    <img className="about-img" src="https://images.news18.com/ibnlive/uploads/2021/03/1614856100_lamborghini-urus_18.jpg?impolicy=website&width=0&height=0"/>
                </div>
            </div>
            <div className="about-huracan">
                <div className="about-huracan-img">
                    <img style={{marginRight: '50px'}} className="about-img" src="https://images.wallpaperscraft.com/image/single/lamborghini_urus_lamborghini_car_194087_1366x768.jpg"/>
                </div>
                <div className="about-huracan-texts">
                    <div className="about-huracan-title">
                        THE SELEZIONE LAMBORGHINI
                        CERTIFIED PRE-OWNED WARRANTY  
                    </div>
                    <div className="about-huracan-text">
                        Lamborghini pre-owned cars in the Selezione program are covered by an additional Lamborghini warranty ranging from a minimum of 12 to a maximum of 24 months. The warranty covers parts and labor and ensures that all operations are carried out by qualified Lamborghini technicians using only original components. 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreOwned