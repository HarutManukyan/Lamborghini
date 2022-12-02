import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useEffect, useRef, useState } from "react"
import { MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'

import instance from "../api/axios"
import { setSingleModel } from "../redux/slices/singleNewSlice"
import { useNavigate } from "react-router-dom"

const Huracan = () => {
    const [img, setImg] = useState(1)
    const [modelsId, setModelId] = useState(1)
    const [justId, setJustId] = useState(1)

    const [models, setModels] = useState([])

    const dispatch = useDispatch()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const modelsCarousel = [
        {
            id: 1,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/Configurator_Model_choose/2021/07_29_model_chooser/Aventador_Ultimae_rds_model_mobile.png",
            title: 'aventador 780-4 ultimae'
        },
        {
            id: 2,
            src: "https://cdn.pixabay.com/photo/2021/08/31/19/37/lamborghini-aventador-6589974_960_720.png",
            title: 'aventador svj'
        },
        {
            id: 3,
            src: "https://media-server3.modenamotorsgmbh.com/19444-medium_default/lamborghini-aventador-svj.jpg",
            title: 'aventador svj roadster'
        },
    ]

    const carousel = [
        {
          id: 1,
          src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_hero_01.jpg",
          title: 'Model'
        },
        {
          id: 2,
          src: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1605700483/autoexpress/2020/11/Lamborghini%20Huracan%20STO-3.jpg",
          title: 'Model'
        },
        {
          id: 3,
          src: "https://hips.hearstapps.com/hmg-prod/images/2020-lamborghini-huracan-evo-spyder-drive-111-1564544744.jpg",
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

      const navigate = useNavigate()

      useEffect(() => {
        instance.get('models')
            .then(res => setModels(res.data))
            .catch(err => console.log(err))
      }, [])

      const getModel = (modelTitle) => {
        models.map(({id, model, link, singleModel}) => {
            
            if(model == modelTitle.split(' ')[0]){
                
                singleModel.map(({background, subtitle, title, powerCv, powerKw, fastest, maxSpeed, section1, section2, section3, section4, section5, section6, section7, modelImages}) => {

                    if(subtitle == modelTitle){
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
                         navigate('/SingleModel')
                    } 
                })
                    
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
                carousel.map(({id, src, title, text}) => (
                    <div style={id == img ? {backgroundImage: `url(${src})`, backgroundRepeat: 'no-repeat', height: '100vh', backgroundSize: 'cover'}: {display: 'none'}} className='huracan-wrapper' onMouseOver={mouseOver}>
                        <div className="huracan">
                            <div className="huracan-title">
                                models
                            </div>
                            <div className="huracan-model">
                                Aventador
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



            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="about-huracan-title">
                        <img  src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/aventador_logo.png"/>
                    </div>
                    <div className="fin-services-content3-text">
                        DESIGNED TO PUSH BEYOND PERFORMANCE
                        Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy. The Aventador advances every concept of performance, immediately establishing itself as the benchmark for the super sports car sector. Giving a glimpse of the future today, it comes from a family of supercars already considered legendary.
                    </div>
                </div>
                <div className="a">
                    <img style={{width: '700px', height: '400px'}} src="https://images2.alphacoders.com/108/1080051.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://cdn.carbuzz.com/gallery-images/2021-lamborghini-aventador-svj-roadster-dashboard-carbuzz-556919-1600.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.insidehook.com/wp-content/uploads/2022/11/lamborghini-aventador-ultimae-driving.jpg?fit=1200%2C800" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://cdn.motor1.com/images/mgl/G4x21/s1/lamborghini-aventador-lp-780-4-ultimae.webp" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        DESIGN
                    </div>
                    <div className="fin-services-content5-text">
                        Each and every detail of the Aventador bears the hallmarks of the House of the Raging Bull. It is a true masterpiece of design that expresses dynamism and power, with the carbon-fiber monocoque the jewel in its crown. The interior combines high-level technology and luxury equipment, crafted by skilled artisans using 
                    </div>
                </div>
                
            </div>


            <div className="choose-container">
                <div className="choose-background aventador">
                    aventador
                </div>
                <div className="choose-title">
                    CHOOSE YOUR AVENTADOR
                </div>
                <div className="choose-arrows">
                    <div className="arrow-left-div arrow-div" onClick={leftHuracan}>
                        <MdArrowBackIos className="arrow-left arrow arrow" />
                    </div>
                    <div onClick={rightHuracan} className="arrow-right-div arrow-div">
                        <MdArrowForwardIos className="arrow-right arrow arrow" />
                    </div>
                </div>
                {
                    modelsCarousel.map(({id, src, title}) => (
                        modelsId == id ? <div key={id}>
                            <div className="choose-content">
                                <div style={{cursor: 'pointer'}} onClick={() => getModel(title)} className="choose-name">
                                    {title}
                                </div>    
                            </div>
                            <div className='choose-img-div'>
                                <img className='choose-img' src={src}/>
                            </div>
                        </div> : null
                    ))
                }
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

export default Huracan