import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'
import { modelSelector } from "../redux/slices/singleNewSlice"

const SingleModel = () => {
    const [justId, setJustId] = useState(1)

    const dispatch = useDispatch()

    const ref = useRef(null)

    const scroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    
    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }


    const {background, subtitle, title, powerCv, powerKw, fastest, maxSpeed, section1, section2, section3, section4, section5, section6, section7, modelImages} = useSelector(modelSelector) 

    const justLeft = () => {
        if (justId == 1) {
            setJustId(modelImages.length - 1);
        } else {
            setJustId(justId - 1);
        }
      }

      const justRight = () => {
        if (justId == modelImages.length) {
            setJustId(1);
        } else {
            setJustId(justId + 1);
        }
      }

      


    return (
        <>  
        <div style={{backgroundImage: `url(${background})`}} className=" single-model" onMouseOver={mouseOver}>
            <div className=" single-model-header">
                <div className="single-model-header-subtitle">
                    {subtitle}
                </div>
                <div className="single-model-header-title">
                    {title}
                </div>
                <div onClick={scroll} className="single-model-header-btn">
                    {'>'}
                </div>
            </div>
            <div className="single-model-stats">
                <div className="single-model-power header-stat">
                    power (CV)/power (kw) <br /> {powerCv}/{powerKw}
                </div>
                <div className="single-model-speed header-stat">
                    max. speed <br /> {maxSpeed} km/h
                </div>
                <div className="single-model-100 header-stat">
                    0-100 km/h <br /> {fastest}
                </div>
            </div>
        </div>
        <div ref={ref} className="single-model-content">
            {
                section1.map(({img, title, text}) => (
                    <div className="single-model-content1">
                        <div className="fin-services-content1-img-div">
                            <img src={img} className="single-model-content5-img"/>
                        </div>
                        <div className="asasas">
                            <div className="single-model-content5-title">
                                {title}
                            </div>
                            <div className="single-model-content1-text">
                                {text}
                            </div>
                        </div>
                        
                    </div>
                ))
            }

            {
                section2.map(({img, title, text}) => (
                    <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                        <div className="fin-services-content5-img-div">
                            <img style={{width: '1300px', height: '700px'}} src={img} className="fin-services-content5-img"/>
                        </div>
                        <div className="fin-services-content5-texts">
                            <div style={{marginTop: '250px'}} className="fin-services-content5-title">
                                {title}
                            </div>
                            <div className="fin-services-content5-text">
                                {text}
                            </div>
                        </div>
                        
                    </div>
                ))
            }

            {
                section3.map(({img, title, text}) => (
                    <div className="fin-services-content5">

                        <div className="fin-services-content5-texts">
                            <div style={{marginTop: '250px'}} className="fin-services-content5-title">
                                {title}
                            </div>
                            <div  className="fin-services-content5-text">
                                {text}
                            </div>
                        </div>
                        <div className="fin-services-content5-img-div">
                            <img style={{width: '1000px', height: '550px'}} src={img} className="fin-services-content3-img"/>
                        </div>
                    </div>
                ))
            }

            {
                section4.map(({img1, img2}) => (
                    <div className="single-model-content4">
                        <div className="fin-services-content4-img1-div">
                            <img src={img1} className="single-model-content4-img1"/>
                        </div>
                        <div className="fin-services-content4-img2-div">
                            <img src={img2} className="single-model-content4-img2"/>
                        </div>
                    </div>
                ))
            }
           {
            section5.map(({img, title, text}) => (
                <div className="single-model-content5">
                    <div className="fin-services-content5-img-div">
                        <img src={img} className="single-model-content5-img"/>
                    </div>
                    <div className="fin-services-content5-texts">
                        <div className="single-model-content5-title">
                            {title}
                        </div>
                        <div className="single-model-content5-text">
                            {text}
                        </div>
                    </div>
                </div>
            ))
           }
            {
                section6.map(({img, title, text}) => (
                    <div className="fin-services-content5">
                        <div className="fin-services-content5-img-div">
                            <img style={{width: '1300px', height: '700px'}} src={img} className="fin-services-content5-img"/>
                        </div>
                        <div className="fin-services-content5-texts">
                            <div style={{marginTop: '250px'}} className="fin-services-content5-title">
                                {title}
                            </div>
                            <div className="fin-services-content5-text">
                                {text}
                            </div>
                        </div>
                        
                    </div>
                ))
            }

            {
                section7.map(({displacement, maxPower, speed, acceleration, consuption, emission}) => (
                    <div className="stats">
                        <div className="stats-title">
                            TECHNICAL SPECIFICATIONS
                        </div>
                        <div className="stat-info">
                            <div className="single-stat">
                                DISPLACEMENT
                            </div>
                            <div className="stat">
                                {displacement}
                            </div>
                        </div>
                        <div className="stat-info">
                            <div className="single-stat">
                                MAX. POWER (KW/CV)
                            </div>
                            <div className="stat">
                                {maxPower}
                            </div>
                        </div>
                        <div className="stat-info">
                            <div className="single-stat">
                                TOP SPEED
                            </div>
                            <div className="stat">
                                {speed}
                            </div>
                        </div>
                        <div className="stat-info">
                            <div className="single-stat">
                                ACCELERATION 0-100 KM/H (0-62 MPH)
                            </div>
                            <div className="stat">
                                {acceleration}
                            </div>
                        </div>
                        <div className="stat-info">
                            <div className="single-stat">
                                COMBINED CONSUMPTION *
                            </div>
                            <div className="stat">
                                {consuption}
                            </div>
                        </div>
                        <div className="stat-info">
                            <div className="single-stat">
                                COMBINED CO2 EMISSIONS *
                            </div>
                            <div className="stat">
                                {emission}
                            </div>
                        </div>
                    </div>
                ))
            }

            {
                modelImages.map(({id, img}) => (
                    <div style={id == justId ? {backgroundImage: `url(${img})`} : {display: 'none'}} className="just-images">
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
        
        </>
    )
}

export default SingleModel
