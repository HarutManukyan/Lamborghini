import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useEffect, useRef, useState } from "react"
import { MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import { setSingleModel } from "../redux/slices/singleNewSlice"
import { useNavigate } from "react-router-dom"
import instance from "../api/axios"

const Urus = () => {
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
          src: "https://www.autodeft.com/_uploads/images/2023-Lamborghini-Urus-Performante-23.jpg",
          title: 'Model'
        },
        {
          id: 2,
          src: "https://images.pexels.com/photos/8237007/pexels-photo-8237007.jpeg?cs=srgb&dl=pexels-supreet-8237007.jpg&fm=jpg",
          title: 'Model'
        },
        {
          id: 3,
          src: "https://media.zenfs.com/en/autoblog_50/8cf4f64d5ef9c6d4a28bc4eb50efef58",
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
            src: "https://www.supercars.net/blog/wp-content/uploads/2020/10/2019-Lamborghini-Urus-011-2160-scaled.jpg"
        },
        {
            id: 2,
            src: "https://data.1freewallpapers.com/download/hennessey-lamborghini-urus-hpe750-2020-4k-cars.jpg"
        },
        {
            id: 3,
            src: "https://besthqwallpapers.com/Uploads/1-9-2021/177425/thumb2-lamborghini-urus-graphite-capsule-4k-tuning-2021-cars-uk-spec.jpg"
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
                        console.log('model', modelTitle)
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
                                Urus
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
                        <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/Image%2034.png"/>
                    </div>
                    <div className="fin-services-content3-text">
                        Lamborghini Urus is the first Super Sport Utility Vehicle in the world, merging the soul of a super sports car with the practical functionality of an SUV. Powered by Lamborghini’s 4.0-liter twin-turbo V8 engine, the Urus is all about a performance mindset that brings together fun-to-drive and astounding vehicle capabilities. The design, performance, driving dynamics and unbridled emotion flow effortlessly into this visionary realization of authentic Lamborghini DNA.
                    </div>
                </div>
                <div className="a">
                    <img src="https://images.news18.com/ibnlive/uploads/2021/03/1614856100_lamborghini-urus_18.jpg?impolicy=website&width=0&height=0" className="fin-services-content3-img"/>
                </div>
            </div>
            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.topgear.com/sites/default/files/cars-car/carousel/2018/04/blu_astraeus_interior_01.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2022/08_19_urus_perf/s/gate_urus_s2_m.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://images.wallpaperscraft.com/image/single/lamborghini_urus_lamborghini_car_194087_1366x768.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        DESIGN
                    </div>
                    <div className="fin-services-content5-text">
                        A declaration of freedom, Urus enables you to discover any terrain, from track to sand, ice, gravel or rocks. It is the absolute all-round super sports car and more. It allows you to explore new paths and new ways to express yourself—to accept challenges confidently and to live life to the fullest. You are not afraid to go far: this is what you aspire to. Unlock any road, unlock your personality.                    
                    </div>
                </div>
                
            </div>


            <div className="choose-container">
                <div className="choose-background aventador">
                    urus
                </div>
                <div className="choose-title">
                    CHOOSE YOUR URUS
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

export default Urus