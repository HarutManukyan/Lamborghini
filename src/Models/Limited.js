import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useEffect, useRef, useState } from "react"
import { MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import instance from '.././api/axios'
import { setSingleModel } from "../redux/slices/singleNewSlice"

const Limited = () => {
    const [img, setImg] = useState(1)
    const [modelsId, setModelId] = useState(1)
    const [justId, setJustId] = useState(1)
    const [model, setModel] = useState([])

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const carousel = [
        {
          id: 1,
          src: "https://images.hdqwalls.com/wallpapers/lamborghini-countach-lpi-2021-0h.jpg",
          title: 'Model'
        },
        {
          id: 2,
          src: "https://www.supercars.net/blog/wp-content/uploads/2020/09/2021-Lamborghini-Sian-Roadster-012-2160-scaled.jpg",
          title: 'Model'
        }
      ];

      const right = () => {
        if (img == carousel.length) {
          setImg(1);
        } else {
          setImg(img + 1);
        }
      };

      const left = () => {
        if (img == 1) {
          setImg(carousel.length - 1);
        } else {
          setImg(img - 1);
        }
      };

      const justImages = [
        {
            id: 1,
            src: "https://images4.alphacoders.com/116/1165650.jpg"
        },
        {
            id: 2,
            src: "https://www.hdcarwallpapers.com/walls/lamborghini_sian_fkp_37_4k_4-HD.jpg"
        },
        {
            id: 3,
            src: "https://www.supercars.net/blog/wp-content/uploads/2020/09/2021-Lamborghini-Sian-Roadster-010-2160-scaled.jpg"
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


      useEffect(() => {
        instance.get('limited')
            .then(res => setModel(res.data))
            .catch(err => console.log(err))
      }, [])

      const sian37 = () => {
        model.map((singleModel) => {
            console.log(singleModel)
            if(singleModel.subtitle == 'sian fkp 37'){
                const {background, subtitle, title, powerCv, powerKw, fastest, maxSpeed, section1, section2, section3, section4, section5, section6, section7, modelImages} = singleModel
                const mdelInfo = {
                    background,
                    subtitle, 
                    title, 
                    powerCv, 
                    powerKw, 
                    fastest,
                    maxSpeed, 
                    section1, 
                    section2, 
                    section3, 
                    section4, 
                    section5, 
                    section6, 
                    section7, 
                    modelImages
                }
                //console.log('modelTitle',aaa)
                 dispatch(setSingleModel(mdelInfo))
                 navigate('/LimitedModel')
            }
        })
      }

      const countach = () => {
        model.map((singleModel) => {
            if(singleModel.subtitle == 'countach lpi 800-4'){
                
                const {background, subtitle, title, powerCv, powerKw, fastest, maxSpeed, section1, section2, section3, section4, section5, section6, section7, modelImages} = singleModel
                const mdelInfo = {
                    background,
                    subtitle, 
                    title, 
                    powerCv, 
                    powerKw, 
                    fastest,
                    maxSpeed, 
                    section1, 
                    section2, 
                    section3, 
                    section4, 
                    section5, 
                    section6, 
                    section7, 
                    modelImages
                }
                
                 dispatch(setSingleModel(mdelInfo))
                 navigate('/LimitedModel')
            }
        })
      }

      const sianRoadster = () => {
        model.map((singleModel) => {
            if(singleModel.subtitle == 'sian roadster'){
                const {background, subtitle, title, powerCv, powerKw, fastest, maxSpeed, section1, section2, section3, section4, section5, section6, section7, modelImages} = singleModel
                const mdelInfo = {
                    background,
                    subtitle, 
                    title, 
                    powerCv, 
                    powerKw, 
                    fastest,
                    maxSpeed, 
                    section1, 
                    section2, 
                    section3, 
                    section4, 
                    section5, 
                    section6, 
                    section7, 
                    modelImages
                }
                 dispatch(setSingleModel(mdelInfo))
                 navigate('/LimitedModel')
            }
        })
      }

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    return (
        <div ref={startRef}>
            {
                carousel.map(({id, src}) => (
                    <div style={id == img ? {backgroundImage: `url(${src})`, backgroundRepeat: 'no-repeat', height: '100vh', backgroundSize: 'cover'}: {display: 'none'}} className='huracan-wrapper' onMouseOver={mouseOver}>
                        <div className="huracan">
                            <div className="huracan-title">
                                models
                            </div>
                            <div className="huracan-model">
                                Limited series
                            </div >
                            <div className="arrows">
                                <div className="arrow-left-div arrow-div" onClick={left}>
                                    <MdArrowBackIos className="arrow-left arrow" />
                                </div>
                                <div onClick={right} className="arrow-right-div arrow-div">
                                    <MdArrowForwardIos className="arrow-right arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="about-huracan">
                <div className="about-huracan-texts">
                    <div className="about-huracan-title">
                        <img style={{width: '500px', height: '100px', objectFit: 'cover'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/limited-series/sian%20fkp%2037.png"/>
                    </div>
                    <div className="about-huracan-text">
                        The Sián FKP 37, whose name means “lightning” in Bolognese dialect, is the first super sports car powered by a V12 with hybrid technology based on a supercapacitor. A real masterpiece of engineering and technology with an extraordinary design, both functional and futuristic, that elicits excitement right from the first glance.
                        Produced in just 63 units, the first few-off hybrid car boasts the lowest power-to-weight ratio of any other Lamborghini with a V12 engine, and its top speed exceeds 350 km/h.
                        With the first application of supercapacitors in the world in the hybrid segment, the Sián FKP 37 looks to the future without forgoing the emotions of a Lamborghini, and also paves the way for a new technology of autonomous actuation in the automotive world
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={sian37} className="fin-services-content5-usa country">
                            sian FKP 37
                        </div>
                    </div>
                </div>
                <div className="about-huracan-img">
                    <img className="about-img" src="https://www.wallpapertip.com/wmimgs/5-57467_lamborghini-sian-hybrid.jpg"/>
                </div>
            </div>
            <div className="about-huracan">
                <div className="about-huracan-img">
                    <img className="about-img" src="https://images6.alphacoders.com/109/1092587.jpg"/>
                </div>
                <div className="about-huracan-texts">
                    <div className="about-huracan-title">
                        <img style={{width: '500px', height: '100px', objectFit: 'cover'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/limited-series/sian%20roadster.png"/>  
                    </div>
                    <div className="about-huracan-text">
                        The Sián Roadster is the first hybrid open-top super sports car equipped with pioneering supercapacitor technology and an innovative use of materials science.
                        This technological gem combines the most powerful V12 engine ever with a new power pack, thus introducing an innovative hybrid system that offers the maximum power to the more limited weight.
                        The aerodynamic efficiency of the Sián Roadster is optimized by the pure design, which reinterprets the forms in the open-top cabin, creating an unmistakable futuristic profile.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={sianRoadster} className="fin-services-content5-usa country">
                            sian roadster
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-huracan">
                <div className="about-huracan-texts">
                    <div className="about-huracan-title">
                        <img style={{width: '500px', height: '100px', objectFit: 'cover'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/few-off/countach/Countach_LPI800-4_logo_0.png"/>
                    </div>
                    <div className="about-huracan-text">
                        The automotive world was forever changed when Lamborghini first unveiled the Countach at the Geneva Motor Show in 1971. The audacious design of the Countach was a pure expression of Lamborghini DNA, breaking the mold and inspiring everything to follow. This Lamborghini masterpiece is as fresh today as it was 50 years ago — and now, Lamborghini pays tribute to the style icon by launching a commemorative edition. With only 112 units to be manufactured, the new Countach LPI 800-4 asserts a visual continuity between the past and the present, while reaching into the future thanks to Lamborghini’s state-of-the-art technology and uncompromising style.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={countach} className="fin-services-content5-usa country">
                            countach lpi 800-4
                        </div>
                    </div>
                </div>
                <div className="about-huracan-img">
                    <img className="about-img" src="https://media.gq.com/photos/6116af729fcf2620bbb09bde/16:9/w_2560%2Cc_limit/Countach%2520LPI%2520800-4%2520Outdoor%2520(4).JPG"/>
                </div>
            </div>


            
            {
                justImages.map(({id, src}) => (
                    <div style={id == justId ? {backgroundImage: `url(${src})`} : {display: 'none'}} className="just-images">
                        <div className="just-arrows">
                            <div className="just-arrow-left">
                                <MdArrowBackIos onClick={justLeft} className="arrow just-arrow" />
                            </div>
                            <div className="just-arrow-right">
                                <MdArrowForwardIos onClick={justRight} className="arrow just-arrow" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Limited