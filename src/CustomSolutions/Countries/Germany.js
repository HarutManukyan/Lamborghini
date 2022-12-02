import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../../redux/slices/navSlice"

import { AiOutlineClose } from 'react-icons/ai'

const Germany = () => {
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
            <div style={{backgroundImage: 'url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/germany/lfs_germany_hero_01.jpg)'}} ref={startRef} className="fin-services" onMouseOver={mouseOver}>
                <div style={{color: 'whitesmoke'}} className="fin-services-header">
                    <div className="fin-services-header-subtitle">
                       financial services
                    </div>
                    <div className="fin-services-header-title">
                        germany
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
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/germany/s/lfs_germany_s_01_m.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/germany/s/lfs_germany_s_03.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/germany/s/lfs_germany_s_02_m.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/russia/over/lfs_russia_over_rev_01_m.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                    LEASING
                    </div>
                    <div className="fin-services-content5-text">
                        If you want to drive a sports car and experience that unique Lamborghini feeling, while being able to plan with certainty and maintaining financial flexibility, our leasing options* let you fulfill this dream. You don’t have to own a Lamborghini to drive a Lamborghini. <br />
                        Our leasing offers allow you to exchange your vehicle for a new one at the end of the contract period. At the same time, you can take advantage of low monthly installments, as they are based on the vehicle's service life. <br />
                        Once you have chosen your Lamborghini and set your down payment amount, simply select a term between 12 and 60 months, and your annual mileage.
                    </div>
                </div>
                
            </div>
            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        FINANCE
                    </div>
                    <div className="fin-services-content3-text">
                        If you dream of owning your own sports car without compromising your financial flexibility, our attractive finance models* are the ideal solution: once you have chosen your Lamborghini and the amount of your down payment, simply select a repayment period of between 24 and 48 months for contracts with final installments, and between 12 and 60 months for contracts without final installments. When concluding a contract with your Lamborghini dealer, you can also agree on a final installment that reduces your monthly payments during the contract term. No matter which option you choose, once you have paid the last installment or the final installment, the vehicle will be yours. Not just a Lamborghini. Your Lamborghini.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={() => setPersonalBenefit(true)} className="fin-services-content5-aust country">
                            benefits for you
                        </div>
                    </div>
                </div>
                <div className="a">
                    <img style={{width: '1200px'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/germany/over/lfs_germany_over_rev_01.jpg" className="fin-services-content3-img"/>
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
                    <img style={{width: '1200px', height: '700px'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/financial/2021/germany/over/lfs_usa_over_01%20%281%29.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        INSURANCE
                    </div>
                    <div className="fin-services-content5-text">
                        In line with your preferred financial service, we work with you to develop an insurance solution* exclusively for Lamborghini series vehicles.
                        If you are over 25, you can apply to your authorized Lamborghini dealer for an insurance policy for the area covered by the member states of the EU, plus Switzerland, Liechtenstein, Monaco, Great Britain and Norway - without any restrictions on the group of drivers or mileage.
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

export default Germany