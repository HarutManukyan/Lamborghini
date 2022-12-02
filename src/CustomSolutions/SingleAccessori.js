import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { accessoriSelector, setNavIsShown } from "../redux/slices/navSlice"

import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'
import { VscChromeClose } from 'react-icons/vsc'

const SingleAccessori = () => {
    const [img, setImg] = useState(1)
    const [closeBrochure, setCloseBrochure] = useState(true)

    const dispatch = useDispatch()

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const right = () => {
        if (img == accessoryCarousel.length) {
            setImg(1);
        } else {
            setImg(img + 1);
        }
    };

    const left = () => {
        if (img == 1) {
            setImg(accessoryCarousel.length - 1);
        } else {
            setImg(img - 1);
        }
    };

    const brochureCloser = () => {
        setCloseBrochure(false)
    }

    const {name, accessoryCarousel, brochure, section1, section2, section3, section4, section5, brochureImg} = useSelector(accessoriSelector)

    return (
        <div ref={startRef} className="single-accessori">
             {
                accessoryCarousel.map(({id, src}) => (
                    <div style={id == img ? {backgroundImage: `url(${src})`, backgroundRepeat: 'no-repeat', height: '70vh', backgroundSize: 'cover', backgroundPosition: 'center'}: {display: 'none'}} className='sing-accessori-carousel' onMouseOver={mouseOver}>
                        <div className="huracan">
                            <div className="huracan-title">
                                models
                            </div>
                            <div className="huracan-model">
                                Aventador
                            </div >
                            <div className="arrows">
                                <div className="arrow-left-div arrow-div" onClick={left}>
                                    <img className="arrow-left arrow" src={leftArrow}/>
                                </div>
                                <div onClick={right} className="arrow-right-div arrow-div">
                                    <img className="arrow-right arrow" src={rightArrow}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

            {
                closeBrochure && <div className="sticky">
                    <div className="single-accessori-brochure">
                        <div className="single-accessori-brochure-text">
                            Want to discover all the accessories? Check the brochure
                        </div>
                        <div className="single-accessori-brochure-btn-div">
                            <a href={brochure} target='blank' className="single-accessori-brochure-btn">
                                Check the brochure
                            </a>
                        </div>
                        <div className="single-accessori-brochure-close-div">
                            <VscChromeClose onClick={brochureCloser} className="single-accessori-brochure-close"/>
                        </div>
                    </div>
                </div>
            }

            <div className="fin-services-content5" style={{justifyContent: 'start'}}>
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1300px', height: '700px'}} src={section1.img} className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-type">
                        {section1.type}
                    </div>
                    <div className="fin-services-content5-title">
                        {section1.title}
                    </div>
                    <div className="fin-services-content5-text">
                        {section1.text}
                    </div>
                </div>
            </div>

            <div className="fin-services-content1">
                <div className="asasas">
                    <div className="fin-services-content5-type">
                        {section2.type}
                    </div>
                    <div className="fin-services-content3-title">
                        {section2.title}
                    </div>
                    <div className="fin-services-content1-text">
                        {section2.text}                   
                    </div>
                </div>
                <div className="fin-services-content1-img-div">
                    <img src={section2.img} className="fin-services-content1-img"/>
                </div>
            </div>

            <div className="fin-services-content5" style={{justifyContent: 'start'}}>
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1300px', height: '700px'}} src={section3.img} className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-type">
                        {section3.type}
                    </div>
                    <div className="fin-services-content5-title">
                        {section3.title}
                    </div>
                    <div className="fin-services-content5-text">
                        {section3.text}
                    </div>
                </div>
            </div>

            <div className="fin-services-content1">
                <div className="asasas">
                    <div className="fin-services-content5-type">
                        {section4.type}
                    </div>
                    <div className="fin-services-content3-title">
                        {section4.title}
                    </div>
                    <div className="fin-services-content1-text">
                        {section4.text}                   
                    </div>
                </div>
                <div className="fin-services-content1-img-div">
                    <img src={section4.img} className="fin-services-content1-img"/>
                </div>
            </div>

            <div className="fin-services-content5" style={{justifyContent: 'start'}}>
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1300px', height: '700px'}} src={section5.img} className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-type">
                        {section5.type}
                    </div>
                    <div className="fin-services-content5-title">
                        {section5.title}
                    </div>
                    <div className="fin-services-content5-text">
                        {section5.text}
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${brochureImg})`}} className="after-sales">
                <div style={{paddingTop: '10%'}} className="after-sales-content">
                    <div className="after-sales-subtitle">
                        ACCESSORI ORIGINALI
                    </div>
                    <div style={{textTransform: 'uppercase'}} className="after-sales-title">
                        check THE <br />
                        BROCHURE
                    </div>
                    <div className="after-sales-btn">
                        <a className="brochure-plus" target={'blank'} href="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/brochure/After_Sales_ING.pdf">+</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleAccessori