import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setNavIsShown } from "../redux/slices/navSlice";

import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'

const Estoque    = () => {
    const [justId, setJustId] = useState(1)

    const dispatch = useDispatch()

    const ref = useRef(null)

    const scroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    
    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const justImages = [
        {
            id: 1,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/estoque/gallery/Lamborghini-Estoque-01.jpg"
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/estoque/gallery/Lamborghini-Estoque-02.jpg"
        },
        {
            id: 3,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/estoque/gallery/Lamborghini-Estoque-03.jpg"
        }
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

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    return (
        <div ref={startRef}>
            <div style={{backgroundImage: `url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/estoque/gallery/Lamborghini-Estoque-02.jpg)`}} className=" single-model" onMouseOver={mouseOver}>
                <div style={{color: 'rgb(31, 30, 30)'}} className=" single-model-header">
                    <div className="single-model-header-subtitle">
                        concept car
                    </div>
                    <div className="single-model-header-title">
                        estoque
                    </div>
                    <div onClick={scroll} className="single-model-header-btn">
                        {'>'}
                    </div>
                </div>
            </div>

            <div className="fin-services-content1">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        PERFORMANCE
                    </div>
                    <div className="fin-services-content1-text">
                        The Estoque concept car is a four-door super sports car that enhances the tradition of the brand with totally new versatility. Suited for daily driving, it is the perfect match for a multi-faceted lifestyle.
                      <br />  Conceptually speaking, the Estoque expresses the idea of a Lamborghini which is both a top-class super sports car and a highly practical GT.
                    </div>
                </div>
                <div className="fin-services-content1-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/estoque/gallery/Lamborghini-Estoque-01_M.jpg" className="fin-services-content1-img"/>
                </div>
            </div>

            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1200px', height: '550px'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/estoque/s/Lamborghini-Estoque-s-3_M.jpg" className="fin-services-content5-img"/>
                    <img style={{width: '705px', height: '450px'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/estoque/s/Lamborghini-Estoque-s-4_M.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        DESIGN
                    </div>
                    <div className="fin-services-content5-text">
                        The Estoque is a car with unique, unmistakable style. A long wheelbase, wide track and oversize wheels - combined with a low silhouette and a bold appearance - express the typical creativity of the Lamborghini style applied to a groundbreaking concept sedan.
                    </div>
                </div>
            </div>

           
            {
                justImages.map(({id, src}) => (
                    <div style={id == justId ? {backgroundImage: `url(${src})`} : {display: 'none'}} className="just-images">
                        <div className="just-arrows">
                            <div className="just-arrow-left">
                                <img onClick={justLeft} className="arrow just-arrow" src={leftArrow}/>
                            </div>
                            <div className="just-arrow-right">
                                <img onClick={justRight} className="arrow just-arrow" src={rightArrow}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Estoque  