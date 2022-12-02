import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'

const Classics = () => {
    const [img, setImg] = useState(3)
    const [justId, setJustId] = useState(1)

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
            src: "https://www.cavallivapore.it/wp-content/uploads/2016/10/Lamborghini-350-GT-4.jpg"
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2021/04_14_miura/miura_cover.jpg",
        },
        {
            id: 3,
            src: "https://www.motortrend.com/uploads/sites/11/2016/10/1964-Lamborghini-350-GT-front-moving.jpg",
        }
    ];

    const justImages = [
        {
            id: 1,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_01.jpg"
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_02.jpg"
        },
        {
            id: 3,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_03.jpg"
        },
        {
            id: 4,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_04.jpg"
        },
        {
            id: 5,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_05.jpg"
        },
        {
            id: 6,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_06.jpg"
        },
        {
            id: 7,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_07.jpg"
        },
        {
            id: 8,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_08.jpg"
        },
        {
            id: 9,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_09.jpg"
        },
        {
            id: 10,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_10.jpg"
        },
        {
            id: 11,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_11.jpg"
        },
        {
            id: 12,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_12.jpg"
        },
        {
            id: 13,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_13.jpg"
        },
        {
            id: 14,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_14.jpg"
        },
        {
            id: 15,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/gallery/gallery_15.jpg"
        }
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
        <>  
            {
                carousel.map(({id, src}) => (
                    <div ref={startRef} onMouseOver={mouseOver} key={id}>
                        <div 
                            style={id == img ? {
                                backgroundImage: `url(${src})`, 
                                backgroundRepeat: 'no-repeat', 
                                height: '100vh', 
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
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
                        LAMBORGHINI POLO STORICO: PRESERVATION OF A GLORIOUS HERITAGE
                    </div>
                    <div className="fin-services-content1-text">
                        <span className="classics-span">Lamborghini Polo Storico</span> is the center dedicated to classic Lamborghinis and the preservation of the historical heritage of the House of the Raging Bull.<br />
                        Opened in Spring 2015 at the Sant’Agata Bolognese headquarters, Polo Storico is now a benchmark for Lamborghini owners all around the world. <br />
                        Polo Storico’s activities are focused on four main pillars: <span className="classics-span">Archive, Certification, Restoration and Original Spare Parts. </span>                   
                    </div>
                </div>
                <div className="fin-services-content1-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/over/polo_storico_over_01.jpg" className="fin-services-content1-img"/>
                </div>
            </div>
            
            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/02_s1_m.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        ARCHIVE AND CERTIFICATION
                    </div>
                    <div className="fin-services-content5-text">
                        The Polo Storico <span className="classics-span">Archive</span> contains all the information relating to the models manufactured in Sant’Agata Bolognese in the past, from the first sketches to the production files and the original technical drawings.
                    <br />    Under the supervision of the Comitato dei Saggi (Experts Committee), Polo Storico also offers an exclusive <span className="classics-span">Certification of Authenticity</span> service that verifies the originality of each individual component. This service is only possible because of the detailed information available in the Polo Storico Archive.
                    </div>
                </div>
            </div>

            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="http://www.4legend.com/wp-content/uploads/2018/02/retromobile-2018-lamborghini-polostorico-040-800x533.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/537527-1557239338.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div className="fin-services-content5" style={{justifyContent: 'start'}}>
                <div className="fin-services-content5-img-div">
                    <img src="https://cdn-ds.com/blogs-media/sites/94/2017/07/27205445/Lamborghini-spare-parts-gauges-and-switches_o.jpg" className="fin-services-content5-img"/>
                </div>
                <div style={{marginTop: '-100px'}} className="fin-services-content5-texts">
                    <div className="fin-services-content5-title">
                        RESTORATION AND ORIGINAL SPARE PARTS
                    </div>
                    <div className="fin-services-content5-text">
                        The <span className="classics-span">Restoration</span> of a Lamborghini is a complex endeavor that requires great skill, expertise and specialization. Lamborghini Polo Storico oversees the entire process, working in-house on the mechanics and collaborating with highly qualified and experienced specialists for the bodywork and interiors. Each step in the job is discussed with the customer and developed by Polo Storico experts.
                       <br /> Automobili Lamborghini is committed to also producing <span className="classics-span">Original Spare Parts</span> for classic cars, with components covering over 65% of the fleet, a number that continues to grow year after year for a wide range of models, from the 350 GT to the Diablo. Owners can order spare parts directly through any authorized Automobili Lamborghini dealer
                    </div>
                </div>
                
            </div>

            <div className="classics-events">
                <div className="classics-events-title">
                    EVENTS
                </div>
                <div className="classics-events-text">
                    Polo Storico also organizes events where owners can gather in breathtaking locations to drive and show their beloved cars in total safety and freedom. 50th Anniversary <span className="classics-span">Tours, Auto Shows, Concours d’Elegance</span>, and Track Shakedowns are just a few of the many activities organized for the Lamborghini Polo Storico community
                </div>
            </div>

            {
                justImages.map(({id, src}) => (
                    <div style={id == justId ? {backgroundImage: `url(${src})`, backgroundPosition: 'center', marginTop: '100px'} : {display: 'none'}} className="just-images">
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

            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img style={{width: '1300px', height: '700px'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/polo_storico/06_sx.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div style={{marginTop: '250px'}} className="fin-services-content5-title">
                        CONTACTS
                    </div>
                    <div className="fin-services-content5-text">
                        Via Modena, 12 <br />
                        40019 Sant'Agata Bolognese (Bo) - Italy <br />
                        Phone: +39 051 2156282 <br />
                    </div>
                    <div className="fin-services-content5-btns">
                        <div className="fin-services-content5-aust country">
                            Contact Us
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        
        </>
    )
}

export default Classics