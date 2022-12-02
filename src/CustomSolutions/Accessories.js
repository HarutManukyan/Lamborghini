import { useDispatch } from "react-redux"
import { setAccessori, setNavIsShown } from "../redux/slices/navSlice"

import { useEffect, useRef, useState } from "react"

import { MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'

import instance from '../api/axios'
import { useNavigate } from "react-router-dom"

const Accessories = () => {
    const [img, setImg] = useState(1)
    const [data, setData] = useState([])
    const [single, setSingle] = useState(1)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

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

      const singleAccesories = [
        {
            id: 1,
            src: "https://www.pngmart.com/files/22/Lamborghini-Urus-PNG-Image.png",
            name: 'urus',
            brochure: 'https://www.auto100.ee/files/page_files/2022-accessori-urus-eng-dkv0uTmUNb.pdf'
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/model_chooser/mobile/Huracan_Evo_cc-arancio_xanto-Aesir_20_Diamond_Cut-black_caliper-sceneplate_env.png",
            name: 'huracan',
            brochure: 'file:///C:/Users/User/Downloads/accessori-2017.pdf'
        },
        {
            id: 3,
            src: "https://media-server3.modenamotorsgmbh.com/19444-medium_default/lamborghini-aventador-svj.jpg",
            name: 'aventador',
            brochure: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/accessori_originali/brochure/2021/aventador/Accessori_Originali_AVENTADOR_ENGLISH.pdf'
        },
      ]

      const featured = [
        {
            id: 1,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/accessori_originali/gateway/2022/07_20/slider/urus_accessori.jpg",
            subtitle: 'urus - traveling',
            title: 'BIKE CARRIER',
            name: 'urus',
            text: 'The Accessori Originali range offers the finest, yet sporty travel pack to accompany you, whether you are planning a quick weekend getaway or a longer adventure. Drive in extra comfort by equipping your Urus with the highest quality components and materials both you and your vehicle deserve, and wave goodbye to travel-related burden.',
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/accessori_originali/gateway/2022/07_20/slider/hura_accessori.jpg",
            subtitle: 'huracan - sport',
            title: 'titanium exhaust',
            name: 'huracan',
            text: 'The new titanium exhaust for Huracan STO is an extremely advanced component that doesn’t go unnoticed. Made from lightweight titanium of the highest quality. ',
        },
        {
            id: 3,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/accessori_originali/gateway/slider/aven_accessori.jpg",
            subtitle: 'aventador - exterior',
            title: 'x-frame in carbon fiber',
            name: 'aventador',
            text: 'Together with the complete set of engine bay shields and the T-Engine cover, the X-Frame support helps adds that finishing touch to your engine compartment.',
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

    useEffect(() => {
        instance.get('accessories')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    const explore = (carName) => {
        data.map((car) => {
            if(car.name == carName){
                const {name, accessoryCarousel, brochure, section1, section2, section3, section4, section5, brochureImg} = car 
                const carInfo = {
                    name, accessoryCarousel, brochure, section1, section2, section3, section4, section5, brochureImg
                }
                dispatch(setAccessori(carInfo))
                navigate('/SingleAccessori')
            }
        })
    }


    return (
        <div>
            {
                carousel.map(({id, src, title, text}) => (
                    <div ref={startRef} style={id == img ? {backgroundImage: `url(${src})`, backgroundRepeat: 'no-repeat', height: '100vh', backgroundSize: 'cover'}: {display: 'none'}} className='huracan-wrapper' onMouseOver={mouseOver}>
                        <div className="huracan">
                            <div className="huracan-title">
                                lamborghini
                            </div>
                            <div className="huracan-model">
                                ad personam
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

            <div className="single-accesories-container">
                {
                    singleAccesories.map(({id, src, name, brochure}) => (
                        single == id ? <div className="single-accesories-content">
                            <div className="single-accesories-content-left">
                                <div className="accesories-content-title">
                                    ACCESSORIES <br/>
                                    <span>
                                        {name}
                                    </span>
                                </div>
                                <div className="single-accesories-btns">
                                    <div className="brochure-btn-div">
                                        <a target={'blank'} href={brochure} className="brochure-btn">
                                            +
                                        </a>
                                        <div className="brochure-text">
                                            <a target={'blank'} href={brochure}>
                                                browse <br /> the brochure
                                            </a>
                                        </div>
                                    </div>
                                    <div onClick={() => explore(name)} className="explore-btn-div">
                                        <button className="explore-btn">
                                            <MdArrowForwardIos />
                                        </button>
                                        <div className="explore-text">
                                            explore <br /> the accessories
                                        </div>
                                    </div>
                                </div>    
                                <div className="single-accesories-choose">
                                    <div onClick={() => setSingle(1)} className="single-accesories-urus accessories-choose">
                                        urus
                                    </div>
                                    <div onClick={() => setSingle(2)} className="single-accesories-huracan accessories-choose">
                                        huracan
                                    </div>
                                    <div onClick={() => setSingle(3)} className="single-accesories-aventador accessories-choose">
                                        aventador
                                    </div>
                                </div>
                            </div>
                            <div className="single-accesories-content-right">
                                <img src={src} className='single-accesories-img'/>
                            </div>
                        </div> : null
                    ))
                }
            </div>
            <div className="featured">
                <div className="featured-title">
                    FEATURED <br />
                    <span>
                        ACCESSORIES
                    </span>
                </div>
                <div className="featured-cards">
                    {
                        featured.map(({id, src, subtitle, name, title, text}) => (
                            <div key={id} className="featured-card">
                                <div className="featured-card-img-div">
                                    <img src={src} className="featured-card-img"/>
                                </div>
                                <div className="featured-card-subtitle">
                                    {subtitle}
                                </div>
                                <div className="featured-card-title">
                                    {title}
                                </div>
                                <div className="featured-card-text">
                                    {text}
                                </div>
                                <div className="featured-card-link-div">
                                    <a style={{cursor: 'pointer'}} onClick={() => explore(name)}>
                                        Find out more
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Accessories