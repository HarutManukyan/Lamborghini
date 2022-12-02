import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../../redux/slices/navSlice"

import { AiOutlineClose } from 'react-icons/ai'

const Canada = () => {
    const [personalBenefit, setPersonalBenefit] = useState(false)
    const [businessBenefit, setBusinessBenefit] = useState(false)

    const dispatch = useDispatch()

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
        <div>
            <div style={{backgroundImage: 'url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/canada/lfs_canada_hero_01_0.jpg)', backgroundPosition: 'center'}} ref={startRef} className="fin-services" onMouseOver={mouseOver}>
                <div style={{color: 'whitesmoke'}} className="fin-services-header">
                    <div className="fin-services-header-subtitle">
                        financial services
                    </div>
                    <div className="fin-services-header-title">
                        canada
                    </div>
                    <div onClick={scroll} className="conn-btn">
                        {'>'}
                    </div>
                </div>
            </div>

            <div ref={ref} className="fin-services-content3">
                <div className="asasas">
                    <div className="about-huracan-title">
                        <img className="count-img" src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/logo_LFS_main_black_HR-logo-ok-1.png'/> 
                    </div>
                    <div className="fin-services-content3-title">
                        Welcome to Lamborghini Financial Services, where pure performance design meets a unique financial solution.
                    </div>
                    <div className="fin-services-content3-text">
                        Are you ready to start your journey with us? <br />
                        No matter whether you seek a new or pre-owned Lamborghini, you can expect the best performance from our finance programs and services. 
                        Learn about the benefits of our leasing programs and flexible financing options, designed with the utmost attention to detail to meet your every need.
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/canada/s/lfs_canada_s_01_m.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/canada/s/lfs_canada_s_02.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/usa/s/lfs_usa_s_02_m.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/canada/s/lfs_canada_s_04_m.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        LEASING
                    </div>
                    <div className="fin-services-content5-text">
                        Leasing with Lamborghini Financial Services is a flexible and smart alternative that opens up your options beyond traditional financing or cash purchases. With flexible terms, mileage options, and no security deposit required, a lease contract can be customized to meet your driving habits.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={() => setPersonalBenefit(true)} className="fin-services-content5-aust country">
                            benefits for you
                        </div>
                    </div>
                </div>
                
            </div>
            
            {
                personalBenefit && 
                <div className="benefits">
                    <div  className="benefits-close">
                        <AiOutlineClose onClick={() => setPersonalBenefit(false)} className="benefits-close-btn"/>
                    </div>
                    <div className="benefits-title">
                        BENEFITS FOR YOU
                    </div>
                    <div className="benefits-content">
                        <div className="benefits-content-left">
                            <div className="benefits-content-text">
                                Flexible terms that fit your lifestyle
                            </div>
                            <div className="benefits-content-text">
                                No security deposit required
                            </div>
                            <div className="benefits-content-text">
                                Potential tax benefits (talk to your tax consultant)
                            </div>
                            <div className="benefits-content-text">
                                Attractive insurance deductible requirements
                            </div>
                        </div>
                        <div className="benefits-content-right">
                            <div className="benefits-content-text">
                            Total loss waiver
                            </div>
                            <div className="benefits-content-text">
                                Continuous warranty coverage
                            </div>
                            <div className="benefits-content-text">
                                Eliminates the uncertainty of resale value due to economic and other outside factors
                            </div>
                            <div className="benefits-content-text">
                                You can upgrade your vehicle at lease-end, so you're always driving with the latest technology and innovations
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1200px', height: '700px'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/canada/over/lfs_canada_over_rev_01.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                    CONDITIONAL SALE FINANCING
                    </div>
                    <div className="fin-services-content5-text">
                        To own a Lamborghini is to possess something revolutionary. And the dream of owning such an extraordinary supercar is at your fingertips with Lamborghini Financial Services Canada. We offer an array of finance terms that can help you spread the cost of your Lamborghini over the term most appropriate for your needs.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={() => setBusinessBenefit(true)} className="fin-services-content5-aust country">
                            benefits for you
                        </div>
                    </div>
                </div>
            </div>

            {
                businessBenefit && 
                <div className="benefits">
                    <div  className="benefits-close">
                        <AiOutlineClose onClick={() => setBusinessBenefit(false)} className="benefits-close-btn"/>
                    </div>
                    <div className="benefits-title">
                        BENEFITS FOR YOU
                    </div>
                    <div className="benefits-content">
                        <div className="benefits-content-left">
                            <div className="benefits-content-text">
                                Often means initial up -front cash payment, is not required, and many costs can be included in your retail installment contract
                            </div>
                            <div className="benefits-content-text">
                                No mileage limitations can mean time spent driving and enjoying your vehicle
                            </div>
                            <div className="benefits-content-text">
                                Flexible terms that best suit your requirements
                            </div>
                        </div>
                        <div className="benefits-content-right">
                            <div className="benefits-content-text">
                                Attractive insurance deductible requirements
                            </div>
                            <div className="benefits-content-text">
                                After payments are completed, you are in control of your vehicle’s future – keep it, sell it, or do whatever you choose
                            </div>
                        </div>
                    </div>
                </div>
            }
           
            <div className="disclaimer-container">
                <div className="disclaimer">
                    DISCLAIMER
                </div>
                <div className="">
                    Important information: Because we do not know your personal objectives, please consider whether these products are appropriate for your circumstances. Before acting on any of the information on this website, please seek independent tax advice. Full terms and conditions are available upon application. Available only to approved applicants of Lamborghini Financial Services, Australian Credit Licence 389344 . Subject to credit assessment. Fees, charges, T&Cs apply.
                <br />  Volkswagen Financial Services Australia Pty Limited ABN 20 097 071 460, trading as Lamborghini Financial Services, Australian Credit Licence 389344.
                <br />  View the Target Market Determination for our Financial Services products here.
                </div>
            </div>

        </div>
    )
}

export default Canada