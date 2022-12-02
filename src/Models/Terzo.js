import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setNavIsShown } from "../redux/slices/navSlice";

import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'

const Terzo = () => {
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
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/terzo-elemento/gallery/gallery_7.jpg"
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/terzo-elemento/gallery/gallery_8.jpg"
        },
        {
            id: 3,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/terzo-elemento/gallery/gallery_6.jpg"
        },
        {
            id: 4,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/terzo-elemento/gallery/gallery_5.jpg"
        },
        {
            id: 5,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/terzo-elemento/gallery/gallery_4.jpg"
        },
        {
            id: 6,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/terzo-elemento/gallery/gallery_3.jpg"
        },
        {
            id: 7,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/terzo-elemento/gallery/gallery_2.jpg"
        },
        {
            id: 8,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/terzo-elemento/gallery/gallery_1.jpg"
        },
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
            <div style={{backgroundImage: `url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/terzo-millennio/header/header_Terzo-Millennio.jpg)`}} className=" single-model" onMouseOver={mouseOver}>
                <div className=" single-model-header">
                    <div className="single-model-header-subtitle">
                        concept car
                    </div>
                    <div className="single-model-header-title">
                        terzo millenio
                    </div>
                    <div onClick={scroll} className="single-model-header-btn">
                        {'>'}
                    </div>
                </div>
            </div>

            <div className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1300px', height: '700px'}} src="https://images.drive.ru/i/0/5a01761fec05c4ac4200003a.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div style={{marginTop: '250px'}} className="fin-services-content5-title">
                        THE SUPER SPORTS CAR OF THE FUTURE
                    </div>
                    <div className="fin-services-content5-text">
                        Automobili Lamborghini looks to the future with a visionary approach, carrying our core values to extremes. Dictating the requirements of the third millennium, the Terzo Millennio combines energy efficiency and innovative materials to forge a path in the electric super sports car segment, guaranteeing the purest driving experience.
                    </div>
                </div>
            </div>

            <div className="terzo-info">
                <div className="terzo-content">
                    <div className="terzo-subtitle">
                        LAMBORGHINI TERZO MILLENNIO DEVELOPS THROUGH 4 PILLARS:
                    </div>
                    <div className="terzo-text">
                        ENERGY, MATERIALS INNOVATION, VEHICLE ARCHITECTURE AND POWERTRAIN, SOUND AND EMOTION.
                    </div>
                </div>
            </div>

            <div className="fin-services-content5">
                <div className="fin-services-content5-texts">
                    <div style={{marginTop: '250px'}} className="fin-services-content5-title">
                        ENERGY
                    </div>
                    <div  className="fin-services-content5-text">
                        The power source is electricity instead of gasoline. Electrical systems are extremely efficient, allowing kinetic energy to be recovered to generate power. In order to exploit the opportunities offered by electric drivetrains, the battery system must be symmetrical and oriented toward power in order to ensure high levels of performance and the greatest possible level of energy regeneration. Lamborghini aims to develop an innovative supercapacitor that is able to fill the gap, in terms of energy density, with existing batteries.
                    </div>
                </div>
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1000px', height: '550px'}} src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/terzo-millennio/header/header_Terzo-Millennio-mobile.jpg' className="fin-services-content3-img"/>
                </div>
            </div>

            <div className="single-model-content4">
                <div className="fin-services-content4-img1-div">
                    <img src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/terzo-millennio/s/Lamborghini-Terzo-Millennio-s-3_M.jpg' className="single-model-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src='https://cdn.motor1.com/images/mgl/pnBmr/s1/lamborghini-terzo-millennio.webp' className="single-model-content4-img2"/>
                </div>
            </div>
            
            <div className="single-model-content5">
                <div className="fin-services-content5-img-div">
                    <img src='https://www.tadviser.ru/images/thumb/2/20/Lambo-2.jpg/840px-Lambo-2.jpg' className="single-model-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="single-model-content5-title">
                        MATERIALS INNOVATION
                    </div>
                    <div className="single-model-content5-text">
                        The design objectives include a reduction in weight and an increase in the availability of electrical energy through the use of composite structural materials for storing electricity, such as a rechargeable battery. The goal is to perfect nanomaterial technology, distributing nanocharges into the CFK panels that comprise the vehicle’s body and components, which will therefore act as electrical storage devices.
                    </div>
                </div>
            </div>

            <div className="fin-services-content5">
                <div className="fin-services-content5-texts">
                    <div style={{marginTop: '250px'}} className="fin-services-content5-title">
                        VEHICLE ARCHITECTURE AND POWERTRAIN
                    </div>
                    <div  className="fin-services-content5-text">
                        Among the advantages of an electrical propulsion system is the possibility to power a system of electrical components through the use of cables. Lamborghini intends to exploit this opportunity to generate torque directly at the wheels. The challenge consists of creating a technology that allows the power density positioned inside the wheels to be increased to the level required by an all-wheel-drive super sports car, while simultaneously keeping unsprung mass under control.
                    </div>
                </div>
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1000px', height: '550px'}} src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/terzo-millennio/header/header_Terzo-Millennio-mobile.jpg' className="fin-services-content3-img"/>
                </div>
            </div>

            <div className="single-model-content4">
                <div className="fin-services-content4-img1-div">
                    <img src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/terzo-millennio/s/Lamborghini-Terzo-Millennio-s-7_M.jpg' className="single-model-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/terzo-millennio/s/Lamborghini-Terzo-Millennio-s-6_M.jpg' className="single-model-content4-img2"/>
                </div>
            </div>
            
            <div className="single-model-content5">
                <div className="fin-services-content5-img-div">
                    <img src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/terzo-millennio/s/Lamborghini-Terzo-Millennio-s-8_M.jpg' className="single-model-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="single-model-content5-title">
                        SOUND AND EMOTION
                    </div>
                    <div className="single-model-content5-text">
                        The adoption of an electric drivetrain demands the creation of a new sonic signature to replace that of the current V12 engine. Thorough investigation is required to assess the advantages deriving from the new powertrain, while leaving behind no opportunity to generate a voice unique to  the Terzo Millennio. The visionary design is the fullest expression of a completely new technology, incorporating redesigned aerodynamics, architecture and powertrain.
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

export default Terzo