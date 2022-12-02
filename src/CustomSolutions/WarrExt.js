import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

const WarrExt = () => {
    const dispatch = useDispatch()

    const ref = useRef(null)

    const scroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    
    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    return (
        <>  
        <div ref={startRef} className="fin-services warr" onMouseOver={mouseOver}>
            <div className="fin-services-header">
                <div className="fin-services-header-subtitle">
                    lamborghini
                </div>
                <div className="fin-services-header-title">
                    warranity <br /> extensions
                </div>
                <div onClick={scroll} className="fin-services-header-btn">
                    {'>'}
                </div>
            </div>
        </div>
        <div ref={ref} className="fin-services-content">
            <div className="fin-services-content1">
                <div className="asasas">
                    <div style={{fontSize: '25px', fontWeight: 'bold'}}>
                        DRIVE WORRY-FREE WITH OUR THREE-YEAR WARRANTY
                    </div>
                    <div className="fin-services-content1-text">
                        With us, you get more than the highest performance; you also get the guarantee of reliability and protection that allows for a supreme, worry-free driving experience.
                        On all new vehicles – starting from the date of delivery and under normal conditions of use – Lamborghini provides a three-year, unlimited-mileage warranty*.
                        This means guaranteed peace of mind for you from 0 to 3 years and 0 to infinite mileage. But it doesn’t have to end there because you can keep it for longer thanks to our Warranty Extension program. Or you can secure it through our Selezione program.

                        *Warranty conditions may vary by country. 
                        Official Lamborghini Dealers and Service Points are able to provide detailed information on the terms and conditions of the warranty coverage provided for your vehicle.
                    </div>
                </div>
                <div className="fin-services-content1-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/warranty_extension/warranty_extension_over_01_0.jpg" className="fin-services-content1-img"/>
                </div>
            </div>
            <div className="fin-services-content2">
                <div className="fin-services-content2-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/warranty_extension/warranty_extension_over_02_0.jpg" className="fin-services-content2-img"/>
                </div>
                <div className="fin-services-content2-text">
                    <div style={{fontSize: '25px', fontWeight: 'bold'}}>
                        “EXTENDED PROTECTION” FOR THE MAXIMUM PROTECTION
                    </div>
                    Lamborghini Financial Services offers flexible leasing and financing solutions to provide you with an incredible experience and Lamborghini ownership.
                    Whether you prefer to lease or purchase your dream car, we understand your needs and will be sure to give you our utmost support and to guide you in your new, or pre-owned, selection. 
                    Realize your dreams by visiting your local Authorized Lamborghini Dealer, and let them pave the way for a brand new, seamless experience.
                    Be unstoppable. Start your exclusive journey with Lamborghini Financial Services.
                </div>
            </div>
            <div className="after-sales">
                <div className="after-sales-content">
                    <div className="after-sales-subtitle">
                        LAMBORGHINI AFTER SALES
                    </div>
                    <div className="after-sales-title">
                        BROWSE THE <br />
                        BROCHURE
                    </div>
                    <div className="after-sales-btn">
                        <a className="brochure-plus" target={'blank'} href="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/brochure/After_Sales_ING.pdf">+</a>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default WarrExt