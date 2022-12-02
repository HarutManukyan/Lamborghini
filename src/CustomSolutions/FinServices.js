import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"
import { useNavigate } from 'react-router-dom'

import { AiOutlineClose } from 'react-icons/ai'

const FinServices = () => {
    const [allCountries, setAllCountries] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ref = useRef(null)
    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    const scroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    return (
        <>  
        <div ref={startRef} className="fin-services" onMouseOver={mouseOver}>
            <div className="fin-services-header">
                <div className="fin-services-header-subtitle">
                    lamborghini
                </div>
                <div className="fin-services-header-title">
                    financial <br /> services
                </div>
                <div onClick={scroll} className="fin-services-header-btn">
                    {'>'}
                </div>
            </div>
        </div>
        <div ref={ref} className="fin-services-content">
            <div className="fin-services-content1">
                <div className="asasas">
                    <div className="fin-services-content1-logo-div">
                        <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/logo_LFS_main_black_HR-logo-ok-1.png" className="fin-services-content1-logo" />
                    </div>
                    <div className="fin-services-content1-text">
                        Envision yourself driving a technologically advanced, cutting edge Lamborghini. Can you feel its strength and power from behind the steering wheel? Good. Now consider this.
                        Why only imagine it when, thanks to Lamborghini Financial Services, you could actually drive off in your very own Lamborghini?
                        Now you can lie back, and enjoy your bespoke Lamborghini, thanks to Lamborghini Financial Services.
                    </div>
                </div>
                <div className="fin-services-content1-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/landing/over/lfs_landing_rev_over_01.jpg" className="fin-services-content1-img"/>
                </div>
            </div>
            <div className="fin-services-content2">
                <div className="fin-services-content2-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/landing/over/lfs_landing_over_01.jpg" className="fin-services-content2-img"/>
                </div>
                <div className="fin-services-content2-text">
                    Lamborghini Financial Services offers flexible leasing and financing solutions to provide you with an incredible experience and Lamborghini ownership.
                    Whether you prefer to lease or purchase your dream car, we understand your needs and will be sure to give you our utmost support and to guide you in your new, or pre-owned, selection. 
                    Realize your dreams by visiting your local Authorized Lamborghini Dealer, and let them pave the way for a brand new, seamless experience.
                    Be unstoppable. Start your exclusive journey with Lamborghini Financial Services.
                </div>
            </div>
            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        IN EUROPE, MIDDLE EAST AND AFRICA YOUR ADVENTURE AWAITS    
                    </div>
                    <div className="fin-services-content3-text">
                        Now is the perfect time to learn about Lamborghini's latest innovations and embark on an adventure with Lamborghini Financial Services.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={() => setAllCountries(true)} className="fin-services-content5-aust country">
                            view all the countries
                        </div>
                    </div>
                </div>
                <div className="a">
                    <img src="https://w0.peakpx.com/wallpaper/179/866/HD-wallpaper-lamborghini-lamborghini-aventador-svj-car-green-car-sport-car-supercar.jpg" className="fin-services-content3-img"/>
                </div>
            </div>

            {
                allCountries && 
                <div className="all-europe-countries">
                    <div className="all-countries">
                        <div className="all-countries-close-div">
                            <AiOutlineClose onClick={() => setAllCountries(false)} className="all-countries-close"/>
                        </div>
                        <div className="all-countries-europe">
                            <div className="all-countries-europe-left">
                                <div onClick={() => navigate('/Italy')} className="fin-services-content5-aust europe-btn">
                                    italy
                                </div>
                                <div onClick={() => navigate('/Russia')} className="fin-services-content5-aust europe-btn">
                                    russia
                                </div>
                            </div>
                            <div className="all-countries-europe-middle">
                                <div onClick={() => navigate('/Uk')} className="fin-services-content5-aust europe-btn">
                                    united kingdom
                                </div>
                                <div onClick={() => navigate('/Germany')} className="fin-services-content5-aust europe-btn">
                                    germany
                                </div>
                            </div>
                            <div className="all-countries-europe-right">
                                <div onClick={() => navigate('/SaudiArabia')} className="fin-services-content5-aust europe-btn">
                                    saudi arabia
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            } 

            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://c4.wallpaperflare.com/wallpaper/565/521/102/lamborghini-lamborghini-aventador-svj-car-lamborghini-aventador-wallpaper-preview.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2022/08_19_urus_perf/gate_urus_og.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://images.hdqwalls.com/wallpapers/lamborghini-huracan-evo-red-front-4k-ph.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        FIND YOUR THRILL IN ASIA PACIFIC
                    </div>
                    <div className="fin-services-content5-text">
                        There's a journey ahead of you. Intensify your day and rule the road with your Lamborghini. Let Lamborghini Financial Services help you on this thrilling adventure.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={() => navigate('/Australia')} className="fin-services-content5-aust country">
                            australia
                        </div>
                        <div onClick={() => navigate('/Japan')} className="fin-services-content5-japan country">
                            japan
                        </div>
                        <div onClick={() => navigate('/Singapore')} className="fin-services-content5-sing country">
                            singapore
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        FULFILL YOUR DREAM IN
                        AMERICA AND CANADA
                    </div>
                    <div className="fin-services-content3-text">
                        Driving a Lamborghini does not have to just be a dream. Unlock new possibilities and Lamborghini Financial Services will light up your road and make it real.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={() => navigate('/Usa')} className="fin-services-content5-usa country">
                            Usa
                        </div>
                        <div onClick={() => navigate('/Canada')} className="fin-services-content5-canada country">
                            canada
                        </div>
                    </div>
                </div>
                <div className="fin-services-content3-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/landing/s/corrette/lfs_landing_rev_over_02.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default FinServices