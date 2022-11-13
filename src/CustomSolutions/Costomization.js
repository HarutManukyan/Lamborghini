import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useRef, useState } from "react"
import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'
import { useHref } from "react-router-dom"

const Costomization = () => {
    const [img, setImg] = useState(1)
    const [modelsId, setModelId] = useState(1)
    const [justId, setJustId] = useState(1)

    const dispatch = useDispatch()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const modelsCarousel = [
        {
            id: 1,
            src: "https://www.pngmart.com/files/10/Lamborghini-Urus-PNG-Transparent-Image.png",
            title: 'urus'
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/09_26_graphite_lancio/family_chooser1_m.png",
            title: 'urus performante'
        },
    ]

    const carousel = [
        {
          id: 1,
          src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/ad_personam/gallery/ad_personam_01.jpg",
          title: 'Model'
        },
        {
          id: 2,
          src: "https://www.supercars.net/blog/wp-content/uploads/2021/04/2021-Novitec-Lamborghini-Huracan-EVO-RWD-003-2160-scaled.jpg",
          title: 'Model'
        }
      ];

      const justImages = [
        {
            id: 1,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/ad_personam/gallery/ad_personam_02.jpg"
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/ad_personam/gallery/ad_personam_03.jpg"
        },
        {
            id: 3,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/ad_personam/gallery/ad_personam_04.jpg"
        },
      ]
      
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

        const rightHuracan = () => {
            if (modelsId == modelsCarousel.length) {
                setModelId(1);
            } else {
                setModelId(modelsId + 1);
            }
        }

        const leftHuracan = () => {
            if (modelsId == 1) {
                setModelId(modelsCarousel.length - 1);
            } else {
                setModelId(modelsId - 1);
            }
        }

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
    return (
        <div>
            {
                carousel.map(({id, src, title, text}) => (
                    <div style={id == img ? {backgroundImage: `url(${src})`, backgroundRepeat: 'no-repeat', height: '100vh', backgroundSize: 'cover'}: {display: 'none'}} className='huracan-wrapper' onMouseOver={mouseOver}>
                        <div className="huracan">
                            <div className="huracan-title">
                                lamborghini
                            </div>
                            <div className="huracan-model">
                                ad personam
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

            <div className="video-div">
                <video className="video-custom" loop autoPlay controls>
                    <source src="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcR2QPGIlvRaQO4RfYIpCBZL2a9sSk-MpeCpUQ" type="video/ogg"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="about-huracan">
                <div className="about-huracan-texts">
                    <div style={{ fontSize: '25px'}} className="about-huracan-title">
                        <h2>
                            MAKE IT UNIQUE MAKE IT YOURS
                        </h2>
                    </div>
                    <div className="about-huracan-text">
                        The Ad Personam customisation program is available for the Huracán and Aventador, giving customers the chance to create their own personal Lamborghini, making it extra special and meeting any wish. There is an infinity of  possible combinations, from the colours to the materials: from the logo on the seat that may be hand stitched instead of branded, to the initials stitched inside the vehicle’s interior, or even a custom colour, all meeting the company’s exacting standards of quality.  Or the possibility to choose from various types of materials, from luxurious Lambo Vintage semi aniline leathers embellished with other effects and developed together with leading Italian experts, or the innovative Forged Composite material in carbon fiber.
                    </div>
                </div>
                <div className="about-huracan-img">
                    <img className="about-img" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/ad_personam/gallery/ad_personam_05.jpg"/>
                </div>
            </div>
            <div className="about-huracan">
                <div className="about-huracan-img">
                    <img className="about-img" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/gateway/ynl/s/ynl_s1_02.jpg"/>
                </div>
                <div className="about-huracan-texts">
                    <div className="about-huracan-title">
                        <div>
                            AD PERSONAM STUDIO
                        </div>
                    </div>
                    <div className="about-huracan-text">
                        Customers wishing to take advantage of the customisation program can design their own vehicle directly with Ad Personam Studio, the area dedicated to customisation based at the Sant’Agata Bolognese HQ. The area was designed to offer a unique experience, with displays showing the alternative leathers, colours, materials, seats and rims, as well as digital simulation of the possible options using an advanced car configurator. Our team of experts supports customers at all stages of the configuration of their personal super sports car, including the choice of colour, accessories and materials. The meeting with the customer is preceded by a production line experience, with a guided tour of the factory and a preview of some of the possible configurations of the Huracán and Aventador. 
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

export default Costomization