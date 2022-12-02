import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../../redux/slices/navSlice"

import { AiOutlineClose } from 'react-icons/ai'

const Uk = () => {
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
            <div style={{backgroundImage: 'url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/uk/lfs_uk_hero_01.jpg)'}} ref={startRef} className="fin-services" onMouseOver={mouseOver}>
                <div style={{color: 'whitesmoke'}} className="fin-services-header">
                    <div className="fin-services-header-subtitle">
                       financial services
                    </div>
                    <div className="fin-services-header-title">
                        United kingdom
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
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/uk/s/corrette/lfs_uk_s_01_m.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/arabi_saudia/arabi_saudia_s_02_m.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://c4.wallpaperflare.com/wallpaper/198/706/361/lamborghini-aventador-lp700-4-red-supercar-autumn-trees-wallpaper-preview.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://images.hdqwalls.com/wallpapers/lamborghini-huracan-evo-red-front-4k-ph.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        SOLUTIONS PERSONAL CONTRACT PLAN (PCP)
                    </div>
                    <div className="fin-services-content5-text">
                        Solutions is our flexible finance plan designed so you can drive a new or pre-owned Lamborghini sooner than you think.
                        If you plan to trade in your vehicle regularly or want to reduce the repayment period, or simply want to keep your options open for a while, then this is the ideal plan for you.
                        With lower monthly payments and flexible terms to fit your needs, this plan is a smart alternative to a cash purchase or traditional financing.
                    </div>
                </div>
                
            </div>
            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        HIRE PURCHASE
                    </div>
                    <div className="fin-services-content3-text">
                        Hire Purchase is a simple and straightforward way to finance your Lamborghini. <br />
                        If you want to own your new or pre-owned Lamborghini at the end of your finance plan, then this is the option for you. <br />
                        Once you have chosen your Lamborghini and decided on your deposit, simply select the best repayment period to fit your needs. The remaining balance is divided equally over the term of the loan and, when it is all paid off, you will own your own Lamborghini.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={() => setPersonalBenefit(true)} className="fin-services-content5-aust country">
                            benefits for you
                        </div>
                    </div>
                </div>
                <div className="a">
                    <img style={{width: '1200px'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/uk/over/corrette/lfs_uk_over_rev_01_m.jpg" className="fin-services-content3-img"/>
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
                    <img style={{width: '1200px', height: '700px'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/uk/lfs_uk_over_01.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        LEASE PURCHASE
                    </div>
                    <div className="fin-services-content5-text">
                        Lease Purchase enables you to finance your Lamborghini with lower monthly payments by deferring an agreed amount until the end of the contract. <br />
                        If you are looking for long-term ownership while reducing your monthly repayments, then this plan is perfect for you.
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

export default Uk