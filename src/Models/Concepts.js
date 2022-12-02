import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import asterion from '../img/asterion.jpg'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"

const Concepts = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

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
                        ref={startRef}
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


            <div style={{justifyContent: 'start', marginTop: '0'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1300px', height: '700px'}} src="https://www.supercars.net/blog/wp-content/uploads/2020/09/2017-Lamborghini-Terzo-Millennio-Concept-009-1600.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="about-huracan-title">
                        <img className="terzo" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/concept/2020_06/terzo%20millennio.png"/>
                    </div>
                    <div className="fin-services-content5-text">
                    The Terzo Millennio anticipates the future and projects the emotions of super sports cars into the electrical revolution era.
                        This design concept car features futuristic lines and is designed with the goal of maximizing aerodynamic performance, stylistic pursuit and driving emotions through advanced technological solutions including an energy storage system based on super capacitators, functional materials in carbon fiber and electric propulsion true to the spirit of a super sports car.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={() => navigate('/Terzo')} className="fin-services-content5-aust country">
                            terzo millenio
                        </div>
                    </div>
                </div>
                
            </div>



            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="about-huracan-title">
                        <img style={{marginRight: '50px', marginTop: '-100px', width: '500px'}} className="about-img" src={asterion}/> 
                    </div>
                    <div style={{marginTop: '-150px'}} className="fin-services-content3-text">
                        The Asterion is a unique concept car with a sensual design, the soul of a Lamborghini, and the DNA of a hybrid: the styles and cutting-edge engineering solutions typical of Lamborghini are combined with an innovative hybrid technology. The purity of the aspirated V10 engine guarantees the thrill of an exceptional driving experience, while the plug-in hybrid system enables the power of the electric motors to be harnessed for city driving. The result is incredible super sports performance.
                    </div>
                </div>
                <div className="a">
                    <img  src="https://www.hdcarwallpapers.com/walls/2014_lamborghini_asterion_lpi_910_4_2-HD.jpg" className="fin-services-content3-img"/>
                </div>
            </div>
            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/estoque/s/Lamborghini-Estoque-s-2_M.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/asterion/gallery/Lamborghini-Asterion-03.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.netcarshow.com/Lamborghini-Estoque_Concept-2008-1600-08.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="about-huracan-title">
                        <img style={{marginRight: '50px', marginTop: '-100px', width: '500px'}} className="about-img" src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/concept/2020_06/estoque.png'/> 
                    </div>
                    <div style={{marginTop: '-150px'}} className="fin-services-content5-text">
                        The Asterion is a unique concept car with a sensual design, the soul of a Lamborghini, and the DNA of a hybrid: the styles and cutting-edge engineering solutions typical of Lamborghini are combined with an innovative hybrid technology. The purity of the aspirated V10 engine guarantees the thrill of an exceptional driving experience, while the plug-in hybrid system enables the power of the electric motors to be harnessed for city driving. The result is incredible super sports performance.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div onClick={() => navigate('/Estoque')} className="fin-services-content5-aust country">
                            estoque
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Concepts