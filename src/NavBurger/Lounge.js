import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { setNavIsShown } from "../redux/slices/navSlice"

const Lounge = () => {
    const dispatch = useDispatch()

    const ref = useRef(null)

    const scroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    
    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    return (
        <>  
        <div ref={startRef} className="fin-services lounge-wrapper" onMouseOver={mouseOver}>
            <div className="fin-services-header">
                <div className="fin-services-header-subtitle ">
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
        <div style={{position: 'relative'}} ref={ref} className="fin-services-content">
            <div className="lounge-container">
                <div className="lounge-text-container">
                    <div className="fin-services-content1-text lounge-text1">
                        The Lamborghini Lounge is a sophisticated, immersive venue created to highlight memorable events and offer an elevated Lamborghini experience to distinguished guests — most notably customers, their families and friends. This intimate environment expresses the essence of Lamborghini, forging a strong and enthusiastic connection with visitors and giving each one an inimitable glimpse of the Lamborghini brand.
                    </div>
                </div>
            </div>
            <div className="lounge-img1-div">
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/lounge/s/lounge_s_01_m.jpg" className="aa"/>
            </div>
        </div>

        <div className="lounge-text">
            A private setting, the Lamborghini Lounge brings an exclusive lifestyle experience to the most vibrant destinations around the world, from New York City to Tokyo, with pop-ups St. Moritz, Melbourne, Monterey and Porto Cervo. 
            <span>Introducing the Lamborghini Lounge NYC</span> — the brands’ chic new home in New York’s Chelsea neighborhood. A captivating destination to explore all things Lamborghini. The exclusive venue is designed to provide access to the brand like never before where guests can enjoy private vehicle unveilings, Italian culinary experiences and bespoke events by invitation only. Nothing short of a trip to Sant’Agata Bolognese engages visitors like the Lamborghini Lounge NYC.
            <br /><br />
            The Lamborghini Lounge NYC
            533 W 26th St
            New York, NY 10001
            <br /><br />
            <span>The Lamborghini Lounge Tokyo</span>, located in the upscale residential neighborhood of Roppongi, is an exclusive three-floor structure that offers a gateway to the world of Lamborghini. Here, customers and special visitors can enjoy event spaces and hold meetings, and owners can work with the Ad Personam studio to customize every detail of their supercar’s interior and exterior.
            <br /><br />
            The Lamborghini Lounge Tokyo
            7-5-5 Roppongi, Minato-ku
            106-0032, Tokyo, Japan
        </div>
        
        <div className="lounge-bottom-img-div">
            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/lounge/gallery/lounge_01.jpg" className="lounge-bottom-img"/>
        </div>
        </>
    )
}

export default Lounge