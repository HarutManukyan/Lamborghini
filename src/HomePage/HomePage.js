
import { useDispatch } from 'react-redux'
import tecnica from '../img/tecnica.jpg'
import { setNavIsShown } from '../redux/slices/navSlice'
import Configurator from './Configurator'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Models from './Models'
import Museum from './Museum'
import News from './News'

const HomePage = () => {
    const dispatch = useDispatch()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    return (
        <>
            <div onMouseOver={mouseOver} className='home-page'>
            <div  className='homepage1'>
                    {/* <img className='back-img' src={tecnica}/> */}
                    <div className='homepage-content'>
                            <div className='homepage-title'>
                                huracan tecnica
                            </div>
                            <div className='homepage-text'>
                                take all your <br /> souls to drive
                            </div>
                            <div>
                                <button className='homepage-btn'>
                                    view more
                                </button>
                            </div>
                    </div>
            </div>
            {/* --------------------------------------- */}
            
            </div>
            <Models />
            <Configurator />
            <Museum />
            <News />
            <Footer />
        </>
    )
}

export default HomePage