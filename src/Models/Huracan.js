import { useDispatch, useSelector } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useEffect, useRef, useState } from "react"
import { MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import instance from '../api/axios'
import { useNavigate } from 'react-router-dom'
import { setSingleModel } from "../redux/slices/singleNewSlice"

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
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/hero-banner/huracan/Huracan_Evo_RWD_Spyder_cc-blu_mehit-Vanir_19_Shiny_Black-yellow_caliper-sceneplate_env.png",
            title: 'huracan evo rwd'
        },
        {
            id: 2,
            src: "http://mosautoshina.ru/i/auto/lamborghini_huracan_2022.jpg",
            title: 'huracan evo rwd spyder'
        },
        {
            id: 3,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/model_chooser/gw_hura_model_chooser_hura_tecnica_m.png",
            title: 'huracan tecnica'
        },
        {
            id: 4,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sto/3d/huracan_sto_3d_m.jpg",
            title: 'huracan sto'
        },
        {
            id: 5,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/model_chooser/mobile/Huracan_Evo_cc-arancio_xanto-Aesir_20_Diamond_Cut-black_caliper-sceneplate_env.png",
            title: 'huracan evo'
        },
    ]

    const carousel = [
        {
          id: 1,
          src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/tecnica/hura_tecnica_og.jpg",
          title: 'Model',
          text: 'huracan tecnica'
        },
        {
          id: 2,
          src: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1605700483/autoexpress/2020/11/Lamborghini%20Huracan%20STO-3.jpg",
          title: 'Model',
          text: 'huracan sto'
        },
        {
          id: 3,
          src: "https://hips.hearstapps.com/hmg-prod/images/2020-lamborghini-huracan-evo-spyder-drive-111-1564544744.jpg",
          title: 'Model',
          text: 'huracan spyder'
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
            src: "https://www.hdcarwallpapers.com/download/lamborghini_huracan_sto_2021_4k_7-3840x2160.jpg"
        },
        {
            id: 2,
            src: "https://www.lambocars.com/wp-content/uploads/2022/09/Tecnica-and-STO-in-Sardinia-1.jpg"
        },
        {
            id: 3,
            src: "https://images.hdqwalls.com/wallpapers/lamborghini-huracan-perfomante-spyder-2018-1e.jpg"
        },
        {
            id: 4,
            src: "https://i.pinimg.com/originals/66/c7/c9/66c7c9633e5dfe14ac3be4e227efc9e9.jpg"
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
                        const aaa = {
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
                         dispatch(setSingleModel(aaa))
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
                                {text}
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
                        <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/Hurac%C3%A1n_logo.png"/>
                    </div>
                    <div className="fin-services-content3-text">
                        Discover all the new models of this exclusive car family, created to shape to your deepest emotions. Combining the highest expression of Lamborghini’s power with the exclusive refinement of Italian handicraft, this series embodies authentic design and state-of-the-art mechanical technology. The Lamborghini Huracán is the perfect fusion of technology and design. With its crisp, streamlined lines, designed to cut through the air and tame the road, you’ll get a thrill just by looking at it. The only thing better than taking in this beauty from a distance is actually touching it. The finest Italian craftsmanship lavished on finishes of unprecedented prestige and quality.
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sto/2022/10_06/over/hura_sto_over_01_m.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Huracan-EVO/7195/1645612088168/front-left-side-47.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.motortrend.com/uploads/2022/02/2022-Lamborghini-Huracan-STO-PVOTY22-29.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://images.hdqwalls.com/wallpapers/lamborghini-huracan-evo-red-front-4k-ph.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        DESIGN
                    </div>
                    <div className="fin-services-content5-text">
                        Discover all the new models of this exclusive car family, created to shape to your deepest emotions. Combining the highest expression of Lamborghini’s power with the exclusive refinement of Italian handicraft, this series embodies authentic design and state-of-the-art mechanical technology. The Lamborghini Huracán is the perfect fusion of technology and design. With its crisp, streamlined lines, designed to cut through the air and tame the road, you’ll get a thrill just by looking at it. The only thing better than taking in this beauty from a distance is actually touching it. The finest Italian craftsmanship lavished on finishes of unprecedented prestige and quality.
                    </div>
                </div>
                
            </div>


            <div className="choose-container">
                <div className="choose-background">
                    Huracan
                </div>
                <div className="choose-title">
                    CHOOSE YOUR HURACÁN
                </div>
                <div className="choose-arrows">
                    <div className="arrow-left-div arrow-div" onClick={leftHuracan}>
                        <MdArrowBackIos className="arrow-left arrow" />
                    </div>
                    <div onClick={rightHuracan} className="arrow-right-div arrow-div">
                        <MdArrowForwardIos className="arrow-right arrow" />
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