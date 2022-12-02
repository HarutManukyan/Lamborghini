import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

const Services = () => {
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
        <div ref={startRef} className="fin-services service" onMouseOver={mouseOver}>
            <div className="fin-services-header">
                <div className="fin-services-header-subtitle color">
                    lamborghini
                </div>
                <div className="fin-services-header-title color">
                    financial <br /> services
                </div>
                <div onClick={scroll} className="fin-services-header-btn srvice-btn">
                    {'>'}
                </div>
            </div>
        </div>
        <div ref={ref} className="fin-services-content">
            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        CERTIFIED REPAIRS AND ORIGINAL SPARE PARTS
                    </div>
                    <div className="fin-services-content3-text">
                        You can count on Lamborghini’s After Sales service to deliver excellent quality, reliability and performance in any condition thanks to the qualified support of our official Lamborghini network of Dealers and Service Points.
                   <br />     Certified technicians guarantee service geared toward maintaining the integrity of your vehicle to ensure impeccable and perfect functionality regardless of age and mileage.
                   <br />    If your vehicle requires repair or restoration work, only original spare parts will be used and in accordance with the manufacturer’s specifications in order to ensure the highest standards of quality.
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/service/after_sales_service_over_01_0.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/service/after_sales_service_over_02_m.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        ORIGINAL SPARE PARTS
                    </div>
                    <div className="fin-services-content5-text">
                        Our goal has always been to satisfy and exceed the expectations of our customers in terms of quality and service and our spare parts are built and distributed to reflect that goal.
                        Preserving the efficiency of your Lamborghini means preserving the synergy between the elements.
                        The only solution to maintain the superiority and exclusivity of your vehicle intact over time is to use original spare parts. Only components that comply with the specifications of each model can restore the vehicle to its original high comfort and efficiency levels for optimum performance, quality and safety.
                    </div>
                </div>
            </div>
            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        TRAINING AND CERTIFICATION   
                    </div>
                    <div className="fin-services-content3-text">
                        Located in Sant’Agata Bolognese and designed to provide training and refresher courses to After Sales staff, the Lamborghini Training Academy is on a mission to provide the needed skills to achieve Customer Experience excellence and the highest standards of service quality.
                        Training is led by a team of experts who make sure the dealership staff becomes the perfect representation of the Lamborghini spirit. This spirit is all about precision, attention to details and technological evolution.
                        Work on your vehicle will be done by highly specialized and certified professionals – always.
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/service/after_sales_service_over_03.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/service/after_sales_service_over_04.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <div className="fin-services-content3-title service-content-title">
                        CLASSIC SPARE PARTS
                    </div>
                    <div className="fin-services-content3-text service-content-text">
                        Classic Spare Parts is the service that makes it possible to replace the components of classic Lamborghini vehicles while preserving their authenticity and increasing their value. Use of original spare parts is essential for the preservation, maintenance and restoration of classic models from Sant’Agata Bolognese.
                        The spare parts come from a classic spare parts warehouse or are manufactured on request by the original suppliers. If a specific spare part is not available, it can be faithfully reproduced from the original drawings and technical specifications of the materials used.
                    </div>
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

export default Services