import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useState } from "react"
import asterion from '../img/asterion.jpg'
import { Link } from "react-router-dom"

const Concepts = () => {
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
          src: "https://www.hdcarwallpapers.com/walls/lamborghini_huracan_tecnica_2022_5k_9-HD.jpg",
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

      const justImages = [
        {
            id: 1,
            src: "https://wallpaperaccess.com/full/3992635.jpg"
        },
        {
            id: 2,
            src: "https://i.pinimg.com/originals/f4/56/c1/f456c149f6e66280bebd75b9247c2924.jpg"
        },
        {
            id: 3,
            src: "https://www.hdcarwallpapers.com/walls/lamborghini_aventador_lp_780_4_ultimae_2022_4k-HD.jpg"
        },
        {
            id: 4,
            src: "https://images7.alphacoders.com/115/1158908.jpg"
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

    return (
        <div>
            {
                
                    <div 
                        style={{
                            backgroundImage: `url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/concept/2020_06/header_c.jpg)`, 
                            backgroundRepeat: 'no-repeat', 
                            height: '100vh', 
                            backgroundSize: 'cover'
                        }} 
                        className='huracan-wrapper' onMouseOver={mouseOver}
                    >
                        <div className="huracan">
                            <div style={{fontSize: '45px'}} className="huracan-title">
                                models
                            </div>
                            <div style={{textAlign: 'end', fontSize: '100px'}} className="huracan-model">
                                concepts
                            </div >
                        </div>
                    </div>
                
            }
            <div className="about-huracan">
                <div className="about-huracan-texts">
                    <div className="about-huracan-title">
                        <img className="terzo" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/concept/2020_06/terzo%20millennio.png"/>
                    </div>
                    <div className="about-huracan-text">
                        The Terzo Millennio anticipates the future and projects the emotions of super sports cars into the electrical revolution era.
                        This design concept car features futuristic lines and is designed with the goal of maximizing aerodynamic performance, stylistic pursuit and driving emotions through advanced technological solutions including an energy storage system based on super capacitators, functional materials in carbon fiber and electric propulsion true to the spirit of a super sports car.
                    </div>
                    <Link className="millenio">
                        terzo millenio
                    </Link>
                </div>
                <div className="about-huracan-img">
                    <img className="about-img" src="https://www.supercars.net/blog/wp-content/uploads/2020/09/2017-Lamborghini-Terzo-Millennio-Concept-009-1600.jpg"/>
                </div>
            </div>
            <div className="about-huracan">
                <div className="about-huracan-img">
                    <img style={{marginRight: '50px'}} className="about-img" src="https://www.hdcarwallpapers.com/walls/2014_lamborghini_asterion_lpi_910_4_2-HD.jpg"/>
                </div>
                <div className="about-huracan-texts">
                    <div className="about-huracan-title">
                        <img style={{marginRight: '50px', marginTop: '-100px'}} className="about-img" src={asterion}/> 
                    </div>
                    <div style={{marginTop: '-150px'}} className="about-huracan-text">
                        The Asterion is a unique concept car with a sensual design, the soul of a Lamborghini, and the DNA of a hybrid: the styles and cutting-edge engineering solutions typical of Lamborghini are combined with an innovative hybrid technology. The purity of the aspirated V10 engine guarantees the thrill of an exceptional driving experience, while the plug-in hybrid system enables the power of the electric motors to be harnessed for city driving. The result is incredible super sports performance.
                    </div>
                </div>
            </div>
            <div className="about-huracan">
                <div className="about-huracan-texts">
                    <div className="about-huracan-title">
                        <img style={{marginRight: '50px', marginTop: '-100px'}} className="about-img" src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/concept/2020_06/estoque.png'/> 
                    </div>
                    <div style={{marginTop: '-150px'}} className="about-huracan-text">
                        The Estoque is an extremely versatile concept car, which stands apart in terms of innovation, creativity and design: a four-door super sports car, perfect for everyday use, boasting technological features that are one of a kind. Lamborghini’s unmistakable style converges in a revolutionary new sedan concept, at the same time characterized by a very low profile and spaciousness, with luxurious interiors.
                    </div>
                </div>
                <div className="about-huracan-img">
                    <img style={{marginRight: '50px'}} className="about-img" src="https://i.ytimg.com/vi/44goGN4fbIs/maxresdefault.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Concepts