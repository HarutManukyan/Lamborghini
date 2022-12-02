import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useEffect, useRef } from "react"

const Design = () => {
    const dispatch = useDispatch()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const ref = useRef(null)

    const scroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    return (
        <div ref={startRef}>
            <div  className="fin-services design-wrapper" onMouseOver={mouseOver}>
                <div className="fin-services-header ">
                    <div className="fin-services-header-subtitle">
                        lamborghini
                    </div>
                    <div className="fin-services-header-title">
                        financial <br /> services
                    </div>
                    <div onClick={scroll} className="fin-services-header-btn">
                        {'>'}
                    </div>
                </div>
            </div>

            <div ref={ref} className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        LAMBORGHINI DESIGN DNA    
                    </div>
                    <div className="fin-services-content3-text">
                        Determined proportions, clear contours, precise lines and pure surfaces are characteristics of Lamborghini’s design reduced to its very essence. This DNA embodies the guidelines that inspire the Lamborghini Centro Stile to create cars that are always different and increasingly innovative in terms of research and aesthetic language, yet all unmistakably Lamborghini.
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/design/s1/01_s1_m.jpg" className="fin-services-content3-img"/>
                </div>
            </div>

            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/design/s1/03_s3_m.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/design/s1/02_s2.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>

            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://i.pinimg.com/originals/18/e3/14/18e31441e398b18a5d37aa911c1f9ffa.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content3-title">
                        THE HEXAGON AND THE Y    
                    </div>
                    <div className="fin-services-content5-text">
                        The hexagon and the Y are stylistic elements that have characterized Lamborghini design since the very beginning. From the interior of the Marzal to the front and rear lights of the newest member of the family, the Sián, the iconic elements of the House of Sant’Agata Bolognese give every detail a character that is both sporty and elegant at the same time.
                    </div>
                </div>
                
            </div>


            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        LAMBORGHINI CENTRO STILE    
                    </div>
                    <div className="fin-services-content3-text">
                        Lamborghini Centro Stile was established in 2004 with the mission to combine the spirit of the brand with innovation to create consistently new and unexpected design solutions. The Centro Stile brings together the greatest talents in automotive design from all over the world, who work in close contact with the Technical Office to create the perfect balance between form and function.
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/design/hero.jpg" className="fin-services-content3-img"/>
                </div>
            </div>

            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://hd2.tudocdn.net/737233?w=714&h=428" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/design/s2/06_s2_m.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/design/gallery/slide_06.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content3-title">
                        DESIGN PROCESS    
                    </div>
                    <div className="fin-services-content5-text">
                        “With just a few elegant and accurate lines, it is possible to create a new Lamborghini,” says Mitja Borkert, Head of Design at the Lamborghini Centro Stile.
                        The design process passes several times from the drawing to the physical model, the sketches become 3D renderings, scale models, and then return to virtual realty to achieve absolute perfection.
                    </div>
                </div>
                
            </div>

            <div style={{marginBottom: '100px'}} className="classics-events">
                <div className="classics-events-title">
                    SKETCHES
                </div>
                <div className="classics-events-text">
                    The marvel of the design of a Lamborghini starts from a blank sheet of paper, a pencil and the creativity of a designer. On that paper, where the main lines that represent Lamborghini DNA are sketched, true works of art are brought to life.                
                </div>
            </div>

        <div className="design-bottom">
            <img  className="design-bottom-img"/>
        </div>
           
        </div>
    )
}

export default Design