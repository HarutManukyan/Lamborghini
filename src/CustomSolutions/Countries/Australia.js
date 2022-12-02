import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../../redux/slices/navSlice"

import { AiOutlineClose } from 'react-icons/ai'

const Australia = () => {
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
            <div style={{backgroundImage: 'url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/australia/lfs_australia_og.jpg)'}} ref={startRef} className="fin-services" onMouseOver={mouseOver}>
                <div style={{color: 'whitesmoke'}} className="fin-services-header">
                    <div className="fin-services-header-subtitle">
                       financial services
                    </div>
                    <div className="fin-services-header-title">
                        australia
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
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/australia/s/corrette/lfs_australia_s_01_m.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://cdn.motor1.com/images/mgl/LKMJm/s1/lamborghini-aventador-svj.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/story/hero_image/2017-lambo-centenario-1001x565.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://images.hdqwalls.com/wallpapers/lamborghini-huracan-evo-red-front-4k-ph.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        FINANCE PRODUCTS
                    </div>
                    <div className="fin-services-content5-text">
                        Choosing a Lamborghini is a very personal thing, and we think finance should be just as personal. We are here to help you create an individually tailored solution that’s perfect for your budget, your lifestyle, and your new Lamborghini.
                    </div>
                </div>
                
            </div>
            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        PERSONAL FINANCE
                        Consumer Loans
                    </div>
                    <div className="fin-services-content3-text">
                        A Consumer Loan is a fast and affordable way to quickly finance your new Lamborghini. If you want to enjoy your Lamborghini sooner, then this could be the solution for you. You can personalize your Consumer Loan by selecting the term, paying a deposit, or tailoring your repayments to suit your lifestyle.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={() => setPersonalBenefit(true)} className="fin-services-content5-aust country">
                            benefits for you
                        </div>
                    </div>
                </div>
                <div className="a">
                    <img style={{width: '1200px'}} src="https://resource.digitaldealer.com.au/image/16977493525c9c1a0594af8647578484_0_0.jpg" className="fin-services-content3-img"/>
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
                                Personalize your loan to suit your needs and lifestyle
                            </div>
                            <div className="benefits-content-text">
                                Select from loan terms of up to seven years
                            </div>
                            <div className="benefits-content-text">
                                Maximize your savings with a competitive fixed interest rate
                            </div>
                        </div>
                        <div className="benefits-content-right">
                            <div className="benefits-content-text">
                                Pay no account fees or annual fees
                            </div>
                            <div className="benefits-content-text">
                                Secure your loan for your new Lamborghini – no additional security required for approved applicants
                            </div>
                            <div className="benefits-content-text">
                                Reduce your monthly repayments by adding a balloon payment at the end of your loan term or paying a deposit upfront
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1200px', height: '700px'}} src="https://img.remediosdigitales.com/98d544/lamborghini-aventador-svj84/840_560.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        BUSINESS FINANCE
                        Chattel Mortgage
                    </div>
                    <div className="fin-services-content5-text">
                        Whether you’re a sole trader or a large company, business finance with Lamborghini Financial Services makes sense. We’ll help tailor your vehicle finance to suit your business needs, so you can be confident you’ll achieve the best business outcome at a competitive price.
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
                                Personalize your loan to suit your business needs
                            </div>
                            <div className="benefits-content-text">
                                Select from loan terms of up to five years
                            </div>
                            <div className="benefits-content-text">
                                Reduce your business costs with a competitive fixed interest rate
                            </div>
                            <div className="benefits-content-text">
                                Pay no account fees or annual fees
                            </div>
                        </div>
                        <div className="benefits-content-right">
                            <div className="benefits-content-text">
                                Reduce your monthly repayments by adding a balloon payment at the end of your loan term or paying a deposit upfront
                            </div>
                            <div className="benefits-content-text">
                                Tax-deductible depreciation and interest
                            </div>
                            <div className="benefits-content-text">
                                GST is payable on the cost of the asset
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

export default Australia