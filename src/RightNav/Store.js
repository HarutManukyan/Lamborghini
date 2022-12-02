import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useEffect, useRef, useState } from "react"
import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'

const Store = () => {
    const [img, setImg] = useState(1)
    const [justId, setJustId] = useState(1)

    const dispatch = useDispatch()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const carousel = [
        {
          id: 1,
          src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/store/hero/01_19/store_hero_01.jpg",
        },
        {
          id: 2,
          src: "https://i0.wp.com/www.proudmag.com/wp-content/uploads/2018/01/494350-Kopie.jpg?fit=1024%2C683&ssl=1",
        },
        {
          id: 3,
          src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/store/hero/01_19/store_hero_04.jpg",
        },
        {
          id: 4,
          src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/store/hero/01_19/store_hero_02.jpg",
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
        <div ref={startRef}>
            {
                carousel.map(({id, src, title, text}) => (
                    <div style={id == img ? {backgroundImage: `url(${src})`, backgroundRepeat: 'no-repeat', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}: {display: 'none'}} className='huracan-wrapper' onMouseOver={mouseOver}>
                        <div className="huracan">
                            <div  className="huracan-title">
                                lamborghini museum
                            </div>
                            <div  className="huracan-model">
                                mudetec
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

            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        MENSWEAR AND ACCESSORIES COLLECTION    
                    </div>
                    <div className="fin-services-content3-text">
                        The iconic features of the super sports cars reflected in the Menswear and Travel Collections marked by an informal style and contemporary taste.
                    </div>
                    <div className="fin-services-content5-btns">
                        <a href="https://www.lamborghinistore.com/us/man.html?utm_source=www_corp&utm_medium=%20internal_traffic" target='blank' className="fin-services-content5-aust country">
                            men
                        </a>
                        <a href="https://www.lamborghinistore.com/us/woman.html?utm_source=www_corp&utm_medium=%20internal_traffic" target='blank' className="fin-services-content5-aust country">
                            women
                        </a>
                        <a href="https://www.lamborghinistore.com/us/accessories.html?utm_source=www_corp&utm_medium=%20internal_traffic" target='blank' className="fin-services-content5-aust country">
                            accessories
                        </a>
                        <a href="https://www.lamborghinistore.com/us/junior.html?utm_source=www_corp&utm_medium=%20internal_traffic" target='blank' className="fin-services-content5-aust country">
                            junior
                        </a>
                        <a href="https://www.lamborghinistore.com/us/squadra-corse.html?utm_source=www_corp&utm_medium=%20internal_traffic" target='blank' className="fin-services-content5-aust country">
                            squadra corse
                        </a>
                        <a href="https://www.lamborghinistore.com/us/collectibles.html?utm_source=www_corp&utm_medium=%20internal_traffic" target='blank' className="fin-services-content5-aust country">
                            collectibles
                        </a>
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/store/2022/image-s/MOBILE_1.jpg" className="fin-services-content3-img"/>
                </div>
            </div>

            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/store/2022/image-s/MOBILE_3.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://explorewithcassie.com/wp-content/uploads/2020/04/SMI_1737-scaled.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/store/2022/image-s/MOBILE_4.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content3-title">
                        SHOP BY CAR    
                    </div>
                    <div style={{marginTop: '50px'}} className="fin-services-content5-btns">
                        <a href="https://www.lamborghinistore.com/us/shop-by-car/huracan.html?utm_source=www_corp&utm_medium=%20internal_traffic" target='blank' className="fin-services-content5-aust country">
                            huracan
                        </a>
                        <a href="https://www.lamborghinistore.com/us/shop-by-car/urus.html?utm_source=www_corp&utm_medium=%20internal_traffic" target='blank' className="fin-services-content5-aust country">
                            urus
                        </a>
                        <a href="https://www.lamborghinistore.com/us/shop-by-car/aventador.html?utm_source=www_corp&utm_medium=%20internal_traffic" target='blank' className="fin-services-content5-aust country">
                            aventador
                        </a>
                        <a href="https://www.lamborghinistore.com/us/shop-by-car/terzo-millennio.html?utm_source=www_corp&utm_medium=%20internal_traffic" target='blank' className="fin-services-content5-aust country">
                            terzo millennio
                        </a>
                    </div>
                </div>
                

                
            </div>

            <div className="store-comp">
                <div className="store-comp-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/store/2022/VETRINA-BOUTIQUE.jpeg" className="store-comp-img"/>
                </div>
                <div className="store-comp-texts">
                    <div className="store-comp-title fin-services-content3-title">
                        FLAGSHIP STORE SANT’AGATA <br /> BOLOGNESE
                    </div>
                    <div className="store-comp-text">
                        Via Modena 12<br />
                        40019 Sant’Agata Bolognese<br />
                        Bologna – Italy<br />
                        +39 051 9597611<br />
                        <br />
                        <br />
                        Hours<br />
                        Open Monday to Friday from 10 a.m. to 6:30 p.m.<br />
                        Saturday, Sunday and Holidays from 9:30 a.m. to 1 p.m. / from 2 to 6:30 p.m.<br />
                        <br />
                        Days Closed in 2021
                        January 1, May 1, August 15, December 25<br />
                        Early closing at 2:30 p.m. on December 24 and 31<br />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Store