import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useEffect, useRef, useState } from "react"
import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'

const Museum = () => {
    const [img, setImg] = useState(1)
    const [justId, setJustId] = useState(1)

    const dispatch = useDispatch()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const carousel = [
        {
          id: 1,
          src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/00_hero_museo.jpg",
        },
        {
          id: 2,
          src: "https://motorvalley.it/wp-content/uploads/2020/04/Museo-MUDETEC-Lamborghini-virtual-tour.jpg",
        },
        {
          id: 3,
          src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_07.jpg",
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

      const justImages = [
        {
            id: 1,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_01b.jpg"
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_05.jpg"
        },
        {
            id: 3,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_06.jpg"
        },
        {
            id: 4,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_07.jpg"
        },
        {
            id: 5,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_03.jpg"
        },
        {
            id: 6,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_02.jpg"
        },
        {
            id: 7,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_04.jpg"
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
                            <div  style={{color: 'rgb(31, 30, 30)'}}className="huracan-title">
                                lamborghini museum
                            </div>
                            <div style={{color: 'rgb(31, 30, 30)'}} className="huracan-model">
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
                        MUDETEC: IN SEARCH OF THE FUTURE    
                    </div>
                    <div className="fin-services-content3-text">
                        The Lamborghini Museum has been updated to become Museum of Technologies, where fascinating history, the iconic models and tours of the production lines tell the story of over 50 years of innovation that project Lamborghini into the future.
                        Mudetec offers an interactive experience, also thanks to the new driving simulator that amplifies the thrills and the discovery of the vehicles on display. 
                        From the early visionary creations of the genius of Ferruccio Lamborghini like the Miura and Countach to the more recent and exclusive super sports cars like the hybrid concept Asterion, the few-off Centenario, the Huracán Performante and the Aventador SVJ.
                        Experience the emotion of the new augmented reality. Download the #lamborghinimudetec app
                        Open every day from 9:30 a.m. until 6:00 p.m. (last admittance at 5 p.m.).
                    </div>
                </div>
                <div className="a">
                    <img src="https://preview.thenewsmarket.com/Previews/lamb/StillAssets/1920x1440/428886.jpg" className="fin-services-content3-img"/>
                </div>
            </div>

            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.lambocars.com/wp-content/uploads/2020/12/espada_prototype_1.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.lambocars.com/wp-content/uploads/2020/12/museo_lamborghini_1.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://picjumbo.com/wp-content/uploads/lamborghini-museum-free-photo-2210x1473.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content5-text">
                     <br />   Please remember that to ensure your safety, booking your tour of Mudetec is mandatory. A protective face mask is not mandatory to gain admittance to the museum, but it is strongly recommended.
                     <br /> <br /> <br />   <span className="museum-span">DAYS CLOSED IN 2022</span>
                     <br />   January 1; May 1; August 15; December 25
                     <br />   March 10 (closed until 1:30 p.m.)
                     <br />   July 20 (closed after 2:30 p.m.)
                     <br />   September 16, 23, 30
                     <br />   December: closed from the 10th until the 22nd – December 24 and 31 closing at 2 p.m.
                    </div>
                    <div className="fin-services-content5-btns">
                        <a href="https://www.ticketlandia.com/m/lamborghini-museum" target='blank' className="fin-services-content5-aust country">
                            info and booking
                        </a>
                    </div>
                </div>
                
            </div>


            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="fin-services-content3-title">
                        TOUR OF THE PRODUCTION LINES    
                    </div>
                    <div className="fin-services-content3-text">
                        The visit to the inside of the innovative Urus line is distinguished by the use of the Factory 4.0 model, where the operators working on the assembly activities are assisted by new production technologies. Spread across 24 stations, the visit shows how the different teams of specialized operators succeed in producing 26 cars a day. The Factory Tours that start from the Museum make the visit an unforgettable experience for discovering the most amazing places in the company.
                        <br /><br />
                        A shuttle is provided for reaching the Urus production site; according to legislation in force, it is compulsory to use an FFP2 face mask inside the shuttle
                    </div>
                    <div className="fin-services-content5-btns">
                        <a href="https://www.ticketlandia.com/m/lamborghini-museum" target='blank' className="fin-services-content5-aust country">
                            info and booking
                        </a>
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_06.jpg" className="fin-services-content3-img"/>
                </div>
            </div>

            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_04.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_02.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>
            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/gallery/museum_gallery_05.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="fin-services-content3-title">
                        EVENTS AND INCENTIVE TOURS: AN EXCLUSIVE EXPERIENCE    
                    </div>
                    <div className="fin-services-content5-text">
                        Our offer of incentive tours turns into an unforgettable experience for customers and collaborators owing to the dedicated guides, personalized gadgets and customized proposals. 
                        After the museum closes, Mudetec’s rooms turn into a magical and exclusive place where private tours and exclusive events can be organized. <br />
                        The new Olimpo looking onto Manifattura Lamborghini 4.0, the technological production line of Urus, is the ideal backdrop for transforming conferences and meetings into unique experiences.
                    </div>
                    <div className="fin-services-content5-btns">
                        <a href="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/pdf/CATALOGO_EVENTI_MUDETEC-2022.pdf" target='blank' className="fin-services-content5-aust country">
                            download the events catalog
                        </a>
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

export default Museum