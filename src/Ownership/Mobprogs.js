import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

const Mobprog = () => {
    const dispatch = useDispatch()

    const ref = useRef(null)
    const courtesyRef = useRef(null)
    const deliveryRef = useRef(null)

    const scroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    const courtesy = () => {
        courtesyRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    const delivery = () => {
        deliveryRef.current?.scrollIntoView({behavior: 'smooth'});
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
        <div ref={startRef} className="fin-services mobprog" onMouseOver={mouseOver}>
            <div className="fin-services-header">
                <div className="fin-services-header-subtitle">
                    lamborghini
                </div>
                <div className="fin-services-header-title">
                    mobility <br /> program
                </div>
                <div onClick={scroll} className="fin-services-header-btn">
                    {'>'}
                </div>
            </div>
        </div>
        <div ref={ref} className="fin-services-content">
            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        UTMOST CONVENIENCE, EVEN IF YOU HAVE A BREAKDOWN
                    </div>
                    <div className="fin-services-content3-text">
                        With the Lamborghini Excellence Mobility Program, owners of new vehicles with standard or extended warranty coverage and owners of vehicles with active Selezione Lamborghini Certified Pre-Owned program that fall within the specified warranty period get the ultimate in assistance convenience.
                        Lamborghini Excellence Mobility offers, free of charge, the use of a Courtesy Car for the period the covered vehicle is off the road and vehicle Pick-up & Delivery service by a Lamborghini representative.
                    </div>
                    <div className="mobprog-refs">
                        <div className="mobprog-ref">
                            <div onClick={courtesy} className="fin-services-header-btn">
                                {'>'}
                            </div>
                            <div className="ref-text">
                                Find out about our Courtesy Car service
                            </div>
                        </div>
                        <div className="mobprog-ref">
                            <div onClick={delivery} className="fin-services-header-btn">
                                {'>'}
                            </div>
                            <div className="ref-text">
                                Find out about our Pick-up and Delivery service
                            </div>
                        </div>
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/mobility_program/moblity_program_over_01_m.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
           <div style={{justifyContent: 'start'}} ref={courtesyRef} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/mobility_program/mobility_program_over_02.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        COURTESY CAR
                    </div>
                    <div className="fin-services-content5-text">
                        If you bring your vehicle to an official Lamborghini Dealer or Service Point for mechanical or body repair, servicing, accessory installation or any other type of work that will require you to leave the vehicle with them, you will be offered a courtesy car, either a Lamborghini Urus or another available model. <br /> <br />
                        The courtesy car service, which must be booked in advance, is completely free of charge and is provided for the entire period your Lamborghini remains in the service center, with no mileage limits attached.
                    </div>
                </div>
                
            </div>
            <div ref={deliveryRef} className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        PICK UP & DELIVERY
                    </div>
                    <div className="fin-services-content3-text">
                        You can ask for pick-up and delivery of your Lamborghini from/to your home or other address you provide with a simple telephone call.
                        Pick-up & Delivery service is completely free-of-charge and is really useful when commitments prevent you from delivering your vehicle in person, allowing you to optimize the management and stay of your vehicle at the official Lamborghini Dealer/Service Point.                    </div>
                    <span style={{fontSize: '14px', opacity: '0.6', position:'relative', top: '20px', lineHeight: '1.8'}}>
                        *The service can be booked subject to verification that your Dealer is a member of the Lamborghini Excellence Mobility Program. To request the Courtesy Car or Pick-up & Delivery service, you will need to contact your dealer in advance to check availability.
                    </span>
                    </div>
                    
                <div className="fin-services-content3-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/mobility_program/mobility_program_over_03.jpg" className="fin-services-content3-img"/>
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

export default Mobprog