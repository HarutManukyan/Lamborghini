import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useRef, useState } from "react"
import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'
import { useHref } from "react-router-dom"

const Accessories = () => {
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
          src: "https://pbs.twimg.com/media/ETK_c2aWoAMA9Cd?format=jpg&name=large",
          title: 'Model'
        },
        {
          id: 2,
          src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/accessori_originali/gateway/2022/07_20/slider/hura_accessori.jpg",
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
            <div className="accessorie">
                <div className="accessorie-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/accessori_originali/gateway/2022/07_20/accordion/aven/aven_exterior.jpg"/>
                </div>
                <div className="accessorie-content">
                    <div className="accessorie-content-title">
                        CUSTOMIZE YOUR STYLE 
                    </div>
                    <div className="accessorie-content-text">
                        The full Accessori Originali range combines style with functionality to increase the value of your car by adding an exclusive touch.<br/>
                        Available for all models, the solutions guaranteed by Automobili Lamborghini are designed to meet all your customization needs.<br/>
                        With specific accessories for interiors and exteriors, not to mention those for care and safety, you will be free to express an unparalleled style: your own.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accessories