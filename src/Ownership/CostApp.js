import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

import rightArrow from '../img/arrow-right.png'
import leftArrow from '../img/arrow-left.png'

const CostApp = () => {
    const [img, setImg] = useState(1)

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
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/app_clienti/dd/05_virtual_drive.jpg",
            title: 'A PREVIEW OF THE WORLD OF LAMBORGHINI',
            text: 'Enables users to get a preview of all the features of the latest models launched on the market and to keep constantly updated on the latest news and events of the Sant’Agata Bolognese-based automaker.'
        },
        {
            id: 2,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/app_clienti/dd/06_on_track.jpg",
            title: 'A VIRTUAL DRIVE ON BOARD OF YOUR LAMBORGHINI',
            text: 'It goes beyond imagination: you can take a virtual drive inside your car to discover all its features in a 360-degree view. '
        },
        {
            id: 3,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/app_clienti/dd/07_lamborghini_masterpieces.jpg",
            title: 'ON TRACK WITH LAMBORGHINI SQUADRA CORSE',
            text: 'Motorsport enthusiasts can follow races “live” through dedicated content and obtain a digital VIP hospitality pass to Lamborghini Super Trofeo events.'
        },
        {
            id: 4,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/app_clienti/dd/01_real_time_new.jpg",
            title: 'LAMBORGHINI “MASTERPIECES” AT A TAP',
            text: 'Access is given to an information-rich catalogue containing sufficient data and characteristics of Lamborghini cars to satisfy anybody’s curiosity.'
        },
        {
            id: 5,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/app_clienti/dd/garage_cor.jpg",
            title: 'YOUR NEXT LAMBORGHINI',
            text: 'Creating and customizing your next Lamborghini in a virtual garage and sharing the future masterpiece with your preferred dealer has never been simpler'
        },
        {
            id: 6,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/app_clienti/dd/preview_of_the_world_lamborghini.jpg",
            title: 'REAL-TIME PRODUCTION UPDATES',
            text: 'It enables you to monitor the early production phases of your Lamborghini and receive information on the progress made in production, crowned with an exclusive photo of the car at the very last production step, before it leaves Sant’Agata Bolognese.'
        },
        {
            id: 7,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/app_clienti/dd/garage_cor.jpg",
            title: 'MY GARAGE',
            text: 'Take a glimpse of your car in a virtual garage with all its features.'
        },
        {
            id: 8,
            src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/app_clienti/dd/03_customer_care.jpg",
            title: 'CUSTOMER CARE AND ASSISTANCE',
            text: 'Offers a complete assistance service by giving easy access to all your preferred dealer’s useful contacts and reference information.'
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
        <div ref={startRef} className="fin-services cost-app" onMouseOver={mouseOver}>
            <div className="fin-services-header">
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
        <div ref={ref} className="fin-services-content">
            <div className="fin-services-content1">
                <div className="asasas cost-app-content">
                    <div className="fin-services-content1-logo-div">
                        <div className="cost-app-title">
                            CONNECT TO THE WORLD OF LAMBORGHINI
                        </div>
                    </div>
                    <div className="fin-services-content1-text">
                        Lamborghini UNICA is an exclusive app reserved for Lamborghini customers, enabling them to connect to the Sant’Agata Bolognese-based automaker at a simple tap of a finger.
                        <br /> <br />
                        Customized and rich in contents, UNICA is an app that serves as a priceless guide to keeping constantly informed of the latest news on Lamborghini’s range of products, track activities or lifestyle events and to receiving real-time updates on the production of one’s newly purchased car and to easily contacting one’s reference dealer.
                    </div>
                </div>
                <div className="fin-services-content1-img-div">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/app_clienti/over/unica_over_rev_01a.jpg" className="cost-app-img"/>
                </div>
            </div>
        </div>


        <div className="about-app">
            <div className="about-app-content">
                {
                    carousel.map(({id, src, title, text}) => (
                        img == id ?<div key={id} className="about-app-card">
                            <div className="about-app-img-div">
                                <img src={src} className="about-app-img"/>
                            </div>
                            <div className="about-app-texts">
                                <div className="about-app-title">
                                    {title}
                                </div>
                                <div className="about-app-text">
                                    {text}
                                </div>
                                <div onClick={left} className="about-app-btns">
                                    <div className="arrow-left-div arrow-div" >
                                        <img  className="arrow-left arrow" src={leftArrow}/>
                                    </div>
                                    <div onClick={right} className="arrow-right-div arrow-div">
                                        <img  className="arrow-right arrow" src={rightArrow}/>
                                    </div>
                                </div>
                            </div>
                        </div> : null
                    ))
                }
            </div>
        </div>

        <div className="app-exp">
            <div className="app-exp-left">
                <div className="app-exp-left-title">
                    ACCESS A “UNIQUE” EXPERIENCE
                </div>
                <div className="app-exp-left-text">
                    To gain access to the exclusive functions of Lamborghini UNICA and enjoy all its benefits, you are required to apply for your access credentials by filling out a form. To submit the application, all you need is your VIN (Vehicle Identification Number) and your certificate of ownership. 
                </div>
                <div className="app-exp-left-btns">
                    <div className="app-exp-left-btn-div">
                        <img className="arrow-right arrow app-exp-left-btn" src={leftArrow}/>
                    </div>
                    <div className="app-exp-left-btn-text">
                        Ask for your access credentials
                    </div>
                </div>
                <div className="app-exp-left-img-div">
                    <img src="https://c4.wallpaperflare.com/wallpaper/254/44/11/lamborghini-lamborghini-huracan-performante-italian-cars-selective-coloring-wallpaper-preview.jpg" className="app-exp-left-img"/>
                </div>
            </div>
            <div className="app-exp-right">
                <img className="app-exp-right-img" src="https://wallpaperaccess.com/full/3331463.jpg" />
            </div>
        </div>
        
        <div style={{justifyContent: 'start'}} className="fin-services-content5">
            <div className="fin-services-content5-img-div">
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/app_clienti/over/unica_over_02a.jpg" className="fin-services-content5-img"/>
            </div>
            <div style={{marginTop: '-100px'}} className="fin-services-content5-texts">
                <div className="fin-services-content5-title">
                    REMOTELY MANAGE YOUR LAMBORGHINI
                </div>
                <div className="fin-services-content5-text">
                    Lamborghini UNICA enables users to access the remote services offered by Lamborghini Connect through an advanced connectivity system which gives the possibility of remotely controlling the status and conditions of one’s Lamborghini at a simple tap of a finger. *
                    <br /> <br />
                    * The availability of Lamborghini Connect remote services varies according to the model of the car and the market of reference. For more information, please contact the Customer Care service or your preferred Dealer.
                </div>
                <div className="fin-services-content5-btns">
                    <div className="fin-services-content5-aust country">
                        Go to the tutorials page
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default CostApp