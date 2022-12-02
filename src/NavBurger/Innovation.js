import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useEffect, useRef, useState } from "react"
import { MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'

const Innovation = () => {
    const [img, setImg] = useState(1)

    const dispatch = useDispatch()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const carousel = [
        {
          id: 1,
          src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/forged_composites/forged_composites_og.jpg",
          title: 'Model'
        },
        {
          id: 2,
          src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/innovation/innovation_hero_02.jpg",
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
                    <div className="fin-services-content3-title">
                        LAMBORGHINI TERZO MILLENNIO  
                    </div>
                    <div className="fin-services-content3-text">
                        Automobili Lamborghini strongly believes in the future of the super sports cars and works to preserve these values to push them into a third millennium which requires new concepts, innovative solutions and the adoption of electrified powertrains. Lamborghini Terzo Millennio shows Automobili Lamborghini’s vision through a concept car which aims to deliver the most emotional and ultimate driving experience with an extreme design, an extreme architecture and an innovative electric powertrain. The Terzo Millennio  develops through 4 pillars: Energy, Innovation in Materials, Powertrain & Vehicle Architecture, Sound & Emotion. The first two pillars are conceived together with the two laboratories at the MIT - Massachusetts Institute of Technology: the “Dinca Research Lab”, led by Prof. Mircea Dinca, Department of Chemistry, and the “Mechanosynthesis Group”, led by Prof. Anastasios John Hart, Department of Mechanical Engineering.
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/innovation/s/01_coppia1.jpg" className="fin-services-content3-img"/>
                </div>
            </div>

            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/innovation/s/02_coppia2.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        FORGED COMPOSITES®
                    </div>
                    <div className="fin-services-content5-text">
                        Forged Composites® is an advanced composite material. After more than thirty years of research carried out around the world, Lamborghini is introducing Forged Composites® with a single goal: to give major impetus to technological innovation in composite materials and raise them to a level that had never been reached until now.
                    </div>
                </div>
                
            </div>

            <div className="innovation-images">
                <div className="innov-image1-div ">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/innovation/s/03_coppia1.jpg" className="innov-image1 innov-img"/>
                </div>
                <div className="innov-image2-div ">
                    <img src="https://auto.cdn-rivamedia.com/photos/annoncecli/big/lamborghini-huracan-lp-640-4-performante-132055106.jpg" className="innov-image2 innov-img"/>
                </div>
            </div>

            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/innovation/s/05_coppia1.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        CARBON FIBER
                    </div>
                    <div className="fin-services-content5-text">
                        Carbon fiber is well-known all over the world for its unparalleled resistance-to-weight ratio. Lamborghini has made a leap forward in the research and development on this material, constantly developing innovative technologies capable of adapting to different project specifications.
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Innovation