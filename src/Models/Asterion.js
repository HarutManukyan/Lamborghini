import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setNavIsShown } from "../redux/slices/navSlice";

import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'

const Asterion = () => {
    const [justId, setJustId] = useState(1)

    const dispatch = useDispatch()

    const ref = useRef(null)

    const scroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    
    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const justImages = [
        {
            id: 1,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/asterion/gallery/Lamborghini-Asterion-02.jpg"
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/asterion/gallery/Lamborghini-Asterion-01.jpg"
        },
        {
            id: 3,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/asterion/gallery/Lamborghini-Asterion-03.jpg"
        }
      ]

      const justLeft = () => {
        if (justId == 1) {
            setJustId(justImages.length - 1);
        } else {
            setJustId(justId - 1);
        }
      }

      const justRight = () => {
        if (justId == justImages.length) {
            setJustId(1);
        } else {
            setJustId(justId + 1);
        }
      }

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    return (
        <div ref={startRef}>
            <div style={{backgroundImage: `url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/asterion/header/header_Asterion.jpg)`}} className=" single-model" onMouseOver={mouseOver}>
                <div className=" single-model-header">
                    <div className="single-model-header-subtitle">
                        concept car
                    </div>
                    <div className="single-model-header-title">
                        asterion
                    </div>
                    <div onClick={scroll} className="single-model-header-btn">
                        {'>'}
                    </div>
                </div>
                <div className="single-model-stats">
                    <div className="single-model-power header-stat">
                        power (CV)/power (kw) <br /> 610/449
                    </div>
                    <div className="single-model-speed header-stat">
                        max. speed <br /> 320 km/h
                    </div>
                    <div className="single-model-100 header-stat">
                        0-100 km/h <br /> 3.0
                    </div>
                </div>
            </div>

            <div className="fin-services-content1">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        DRIVABILITY
                    </div>
                    <div className="fin-services-content1-text">
                        The Lamborghini Asterion is a unique vehicle, exploring unchartered territories with its curvy and sensual design. The luxury and the elegance are at the heart of the Asterion driving experience, as demonstrated by the use of special materials such as aluminium, forged carbon fiber and titanium.             
                    </div>
                </div>
                <div className="fin-services-content1-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/asterion/gallery/Lamborghini-Asterion-02.jpg" className="fin-services-content1-img"/>
                </div>
            </div>

            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1200px', height: '550px'}} src="https://cdn.motor1.com/images/mgl/gv1Eo/s3/lamborghini-asterion.webp" className="fin-services-content5-img"/>
                    <img style={{width: '705px', height: '450px'}} src="https://cdn.motor1.com/images/mgl/gv1Eo/s3/lamborghini-asterion.webp" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        ARCHIVE AND CERTIFICATION
                    </div>
                    <div className="fin-services-content5-text">
                        The Polo Storico <span className="classics-span">Archive</span> contains all the information relating to the models manufactured in Sant’Agata Bolognese in the past, from the first sketches to the production files and the original technical drawings.
                    <br />    Under the supervision of the Comitato dei Saggi (Experts Committee), Polo Storico also offers an exclusive <span className="classics-span">Certification of Authenticity</span> service that verifies the originality of each individual component. This service is only possible because of the detailed information available in the Polo Storico Archive.
                    </div>
                </div>
            </div>

            <div className="stats">
                <div className="stats-title">
                    TECHNICAL SPECIFICATIONS
                </div>
                <div className="stat-info">
                    <div className="single-stat">
                        DISPLACEMENT
                    </div>
                    <div className="stat">
                        5,204 cm³ (317.6 cu.in.)
                    </div>
                </div>
                <div className="stat-info">
                    <div className="single-stat">
                        MAX. POWER (KW/CV)
                    </div>
                    <div className="stat">
                        610 CV (449 kW) @ 8,250 RPM
                    </div>
                </div>
                <div className="stat-info">
                    <div className="single-stat">
                        TOP SPEED
                    </div>
                    <div className="stat">
                        320 km/h (199 mph)
                    </div>
                </div>
                <div className="stat-info">
                    <div className="single-stat">
                        ACCELERATION 0-100 KM/H (0-62 MPH)
                    </div>
                    <div className="stat">
                    3,0 s
                    </div>
                </div>
                <div className="stat-info">
                    <div className="single-stat">
                        TRANSMISSION *
                    </div>
                    <div className="stat">
                        4 wheel drive system, front wheels driven by electric motors
                    </div>
                </div>
            </div>

            {
                justImages.map(({id, src}) => (
                    <div style={id == justId ? {backgroundImage: `url(${src})`} : {display: 'none'}} className="just-images">
                        <div className="just-arrows">
                            <div className="just-arrow-left">
                                <img onClick={justLeft} className="arrow just-arrow" src={leftArrow}/>
                            </div>
                            <div className="just-arrow-right">
                                <img onClick={justRight} className="arrow just-arrow" src={rightArrow}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Asterion