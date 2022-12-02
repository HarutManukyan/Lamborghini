import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import { useEffect, useRef, useState } from "react"

import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'

const Driving = () => {
    const [img, setImg] = useState(1)

    const dispatch = useDispatch()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }


    const carousel = [
        {
            id: 1,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/driving_programs/00_hero.jpg",
            title: 'Model'
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/driving_programs/hb/01_hero.jpg",
            title: 'Model'
        },
        {
            id: 3,
            src: "https://www.jetsetmag.com/wp-content/uploads/2017/01/esperienza-e1486056018366.jpg",
            title: 'Model'
        },
        {
            id: 4,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2021/11_18_livigno/cover.jpg",
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
                                driving
                            </div>
                            <div className="huracan-model">
                                programs
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
                    <div className="about-huracan-title">
                        <img style={{width: '250px', height: '100px', objectFit: 'contain'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/driving_programs/loghi/logo_3.jpg"/>  
                    </div>
                    <div className="fin-services-content3-text">
                        Esperienza Dinamica is an exclusive program, which combines the discovery of the historic Sant’Agata Bolognese site with the emotion of driving behind the wheel of the Urus, Aventador and Huracán.It starts with a visit to MUDETEC, the new Museum of Technology, a tour of the V10, V12 and Urus production lines, and a visit to the Boutique. It then moves onto the track, where Lamborghini instructors and drivers put the participants to the test with exercises on equipped areas of the track at the Autodromo di Imola, as well as off-road on terrains that can be tackled with the versatility of the Super SUV Urus. The Esperienza Dinamica is divided into five programs designed to take your emotions to the limit on every type of surface: Corsa, Neve, Sabbia, Strada, Terra.
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/driving_programs/01_s1_m.jpg" className="fin-services-content3-img"/>
                </div>
            </div>

            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/driving_programs/03_s3.jpg" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/driving_programs/02_s2_m.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>

            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/driving_programs/04_s4_m.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="about-huracan-title">
                        <img style={{width: '250px', height: '100px', objectFit: 'contain'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/driving_programs/loghi/logo_1_LESS.jpg"/>  
                    </div>
                    <div className="fin-services-content5-text">
                        Lamborghini Accademia is the on-track and on-snow driving course program on board the Lamborghini super sports cars. The aim is to guarantee excellent learning outcomes, enabling students to practice as much as possible under the careful technical supervision of Lamborghini instructors.
                        With programs organized all around the world, from Australia to the United States, the schedule is divided between the Accademia Corsa, where you can put the power of Lamborghinis to the test on some of the most prestigious race tracks in the world, and the Accademia Neve, a unique opportunity to experience a pure adrenalin rush by driving a Huracán, Aventador and Urus on ice and snow.
                    </div>
                </div>
                
            </div>


            <div className="fin-services-content3">
                <div className="asasas">
                    <div className="about-huracan-title">
                        <img style={{width: '250px', height: '100px', objectFit: 'contain'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/driving_programs/loghi/logo_2.jpg"/>  
                    </div>
                    <div className="fin-services-content3-text">
                        Esperienza Giro is a program designed for Lamborghini owners to experience unforgettable adventures by exploring the most spectacular places and roads in the world in their own cars. Esperienza Giro has been to some of the most exclusive destinations on the five continents, exploring, among other places, Italy, the United States, China, Japan and Oceania: a unique sight of dozens of Lamborghinis heading to places that dreams are made of. The pleasure of driving, exclusivity and time spent in high-end residences: Esperienza Giro is the perfect way for you to release your desire to drive on the road while living your passion for Lamborghini cars to the full.
                    </div>
                </div>
                <div className="a">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/driving_programs/05_s1_m.jpg" className="fin-services-content3-img"/>
                </div>
            </div>

            <div className="fin-services-content4">
                <div className="fin-services-content4-img1-div">
                    <img src="https://i1.wp.com/audiclubna.org/wp-content/uploads/Lamborghini-Accademia-Neve-returns-to-Livigno-2022-7.jpg?ssl=1" className="fin-services-content4-img1"/>
                </div>
                <div className="fin-services-content4-img2-div">
                    <img src="https://www.carscoops.com/wp-content/uploads/2022/02/Lamborghini-Accademia-Neve-6.jpg" className="fin-services-content4-img2"/>
                </div>
            </div>

            <div style={{justifyContent: 'start'}} className="fin-services-content5">
                <div className="fin-services-content5-img-div">
                    <img src="https://media.ed.edmunds-media.com/lamborghini/urus-performante/2023/ns/2023_lamborghini_urus-performante_actf34_ns_1017221_1600.jpg" className="fin-services-content5-img"/>
                </div>
                <div className="fin-services-content5-texts">
                    <div className="about-huracan-title">
                        <img style={{width: '250px', height: '100px', objectFit: 'contain'}} src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/driving_programs/loghi/logo_1_LESS.jpg"/>  
                    </div>
                    <div className="fin-services-content5-text">
                        Esperienza Avventura is the ultimate expression of the potential of cars from the House of the Raging Bull to reach the most spectacular places on Earth. The roads in Iceland, Norway, Andalusia and Transylvania are just some of the carefully chosen routes, crossed by convoys of Lamborghinis in search of breathtaking scenery. Historic places and heritage sites are the backdrop to the caravans of super sports cars put to the test on and off the road, crossing lunar landscapes and fords thanks to the incredible potential of the Urus to overcome any obstacle. 
                        Esperienza Avventura is restricted to VIP guests and the press, and offers unparalleled spectacular views every time.
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Driving