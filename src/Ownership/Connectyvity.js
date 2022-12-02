import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'

const Connectivity = () => {
    const [img, setImg] = useState(3)

    const dispatch = useDispatch()

    const ref = useRef(null)

    const scroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    
    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const carousel = [
        {
            id: 1,
            src: "https://images8.alphacoders.com/116/1168079.jpg"
        },
        {
            id: 2,
            src: "https://cdn.carbuzz.com/gallery-images/2019-lamborghini-huracan-dashboard-carbuzz-364972-1600.jpg",
            title: 'Model'
        },
        {
            id: 3,
            src: "https://i.pinimg.com/originals/38/8f/9e/388f9e57b91f19c7d8b911b5d4989941.jpg",
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

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    return (
        <>  
            {
                carousel.map(({id, src}) => (
                    <div ref={startRef} onMouseOver={mouseOver} key={id}>
                        <div 
                            style={id == img ? {
                                backgroundImage: `url(${src})`, 
                                backgroundRepeat: 'no-repeat', 
                                height: '100vh', 
                                backgroundSize: 'cover'
                            } : {display: 'none'}}
                            className="conn"
                        >
                            <div className="conn-content">
                                <div className="conn-sub">
                                    lamborghini
                                </div>
                                <div className="conn-title">
                                    connect
                                </div>
                                <div className="arrows conn-arrows">
                                    <div className="arrow-left-div arrow-div" onClick={left}>
                                        <img className="arrow-left arrow" src={leftArrow}/>
                                    </div>
                                    <div onClick={right} className="arrow-right-div arrow-div">
                                        <img className="arrow-right arrow" src={rightArrow}/>
                                    </div>
                                </div>
                                <div onClick={scroll} className="conn-btn">
                                    {'>'}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))
            }

        <div ref={ref} className="fin-services-content">
            <div className="fin-services-content1">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        LAMBORGHINI CONNECT
                    </div>
                    <div className="fin-services-content1-text">
                        The journey is more important than the destination. That’s why Automobili Lamborghini is constantly committed to improving the driving experience, paving the way to new horizons that look to the future of mobility. Lamborghini connected services can be used from the moment you get in the car via the Lamborghini Infotainment System (LIS), an intuitive system that accesses information directly from the Web and allows you to manage it quickly and easily. The experience doesn’t stop upon reaching your destination but also continues remotely.
                    </div>
                </div>
                <div className="fin-services-content1-img-div">
                    <img src="https://images.hdqwalls.com/download/lamborghini-urus-blue-82-1920x1080.jpg" className="fin-services-content1-img"/>
                </div>
            </div>
            
            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://s3-ap-northeast-1.amazonaws.com/loperaio-photo-cp-3/photo/17270/740/740/65c7c6ca2b67557af1ff35052415305d.JPG" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://motor.ru/imgs/2019/03/26/11/3024846/e91fcb147b21dc085005e1f061380ee793bf3254.jpeg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="http://4kwallpapers.com/images/walls/thumbs_2t/8209.jpg" className="fin-services-content5-img"/>
                </div>
                <div  className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        CONNECT REMOTELY WHENEVER YOU WANT
                    </div>
                    <div className="fin-services-content5-text">
                        The Lamborghini UNICA app is the key to accessing an exclusive and personalized experience.
                        Reserved for Lamborghini customers, the app allows you to conveniently and simply manage, command and control your car remotely from wherever you are.
                        In addition, with its innovative services, Lamborghini UNICA allows you to receive the latest updates from the Sant’Agata Bolognese company in preview and gives you access to exclusive content and events.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div className="fin-services-content5-aust country">
                            discover lamborghini unica
                        </div>
                    </div>
                </div>
                
            </div>
            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1300px', height: '700px'}} src="https://images.hdqwalls.com/wallpapers/lamborghini-huracan-sto-edition-rear-look-5k-1l.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/connectivity/landing/logo/Hurac%C3%A1n_logo.jpg"/>
                    </div>
                    <div className="fin-services-content5-text">
                        The exclusive and advanced suite of connected technologies are ready to raise driving engagement to a level never experienced before. Lamborghini Connect gives EVO drivers peace of mind when they are not at the wheel and always up to date functions on board while driving.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div className="fin-services-content5-aust country">
                            discover main futures
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/connectivity/landing/logo/Image%2034.jpg"/>
                    </div>
                    <div className="fin-services-content3-text">
                        Thanks to state-of-the-art connectivity with exclusive navigation, comfort, safety and entertainment features, the driving experience with Urus reaches unparalleled levels both onboard and remotely.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div className="fin-services-content5-aust country">
                            discover main futures
                        </div>
                    </div>
                </div>
                <div className="fin-services-content3-img-div">
                    <img src="https://media.autoexpress.co.uk/image/private/s--TXfMi9JA--/v1660917777/evo/2022/08/LAMBORGHINI_URUS_PERFORMANTE_SUNSET_02_cwjdaw.jpg" className="conn-last-img"/>
                </div>
            </div>
            <div className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1300px', height: '700px'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/connectivity/landing/over/connected_over_03.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        REMOTE CONNECTED
                        SERVICES TUTORIALS
                    </div>
                    <div className="fin-services-content5-text">
                        Learn how the connected services of Urus and Huracán work with Lamborghini Unica.
                    </div>
                    <div className="fin-services-content5-btns">
                        <div className="fin-services-content5-aust country">
                            go to the tutorials page
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Connectivity