import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../../redux/slices/navSlice"

import { AiOutlineClose } from 'react-icons/ai'

const Japan = () => {
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
            <div style={{backgroundImage: 'url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/japan/lfs_japan_hero_01a_0.jpg)', backgroundPosition: 'center'}} ref={startRef} className="fin-services" onMouseOver={mouseOver}>
                <div style={{color: 'whitesmoke'}} className="fin-services-header">
                    <div className="fin-services-header-subtitle">
                        financial services
                    </div>
                    <div className="fin-services-header-title">
                        japan
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
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/japan/s/lfs_japan_s_01_m.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/japan/s/lfs_japan_s_03_m.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/japan/over/lfs_japan_over_rev_01_m.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/japan/s/lfs_japan_s_04_m.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                    HYPER PREMIUM PLAN
                    </div>
                    <div className="fin-services-content5-text">
                        Bringing Lamborghini’s high-performance closer to you. <br />
                        By deferring part of the vehicle price as the final payment amount, you can significantly reduce the amount of your monthly payments. <br />
                        Final payment method <br />
                        (1) Switch to a new Lamborghini <br />
                        (2) Pay the deferred price in installments <br />
                        (3) Pay the deferred price as a one-time payment. <br />
                        <br /><br />
                        * The “Hyper Premium Plan” is not a guarantee of purchasing a vehicle at a deferred price.
                    </div>
                </div>
                
            </div>
            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        AUTO LEASE PROGRAM
                    </div>
                    <div className="fin-services-content3-text">
                        Package together all the vehicle maintenance costs.<br />
                        With this plan, you can enjoy driving a Lamborghini with only a fixed monthly lease fee.<br />
                        <br /><br />
                        Processing method when the lease expires<br />
                        (1) Replace the vehicle<br />
                        (2) Lease again<br />
                        (3) Return the vehicle<br />
                        The most common option is to return the vehicle (residual value settlement between the lease company and the customer)
                        <br /><br />
                        * In the event of (1) or (3), the residual value will be calculated using an open-ended method.                    
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={() => setPersonalBenefit(true)} className="fin-services-content5-aust country">
                            benefits for you
                        </div>
                    </div>
                </div>
                <div className="a">
                    <img style={{width: '1200px'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/japan/over/corrette/lfs_japan_over_rev_01a.jpg" className="fin-services-content3-img"/>
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
                                No need to have a lump sum for purchase funds
                            </div>
                            <div className="benefits-content-text">
                                Streamline vehicle management operations
                            </div>
                        </div>
                        <div className="benefits-content-right">
                            <div className="benefits-content-text">
                                The lease fee is fixed and cash flow is stabilized
                            </div>
                            <div className="benefits-content-text">
                                The lease fee can be processed as an expense*
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1200px', height: '700px'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/japan/over/lfs_japan_over_01_m.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                    OWNER’S PLAN
                    </div>
                    <div className="fin-services-content5-text">
                      Freely choose the number of payments. If you use a bonus combined payment, you can make monthly payments with plenty of leeway.
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
                                Freely set the number of payments from 17 options in a simple and easy to understand method ranging up to seven years (84 payments)
                            </div>
                        </div>
                        <div className="benefits-content-right">
                            <div className="benefits-content-text">
                                Get the Lamborghini that you want to drive.
                                (This plan can be used for all models.)
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

export default Japan