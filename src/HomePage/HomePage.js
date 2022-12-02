
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import instance from '../api/axios'
import { setNavIsShown } from '../redux/slices/navSlice'
import { setSingleModel } from '../redux/slices/singleNewSlice'
import Configurator from './Configurator'
import Models from './Models'
import News from './News'

const HomePage = () => {
    const [model, setModel] = useState([])

    const dispatch = useDispatch()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const navigate = useNavigate()

    useEffect(() => {
        instance.get('models')
            .then(res => setModel(res.data))
            .catch(err => console.log(err))
    }, [])

    const tecnica = (modelTitle) => {
        model.map(({id, model, link, singleModel}) => {
            
            if(model == modelTitle.split(' ')[0]){
                
                singleModel.map(({background, subtitle, title, powerCv, powerKw, fastest, maxSpeed, section1, section2, section3, section4, section5, section6, section7, modelImages}) => {

                    if(subtitle == modelTitle){
                        const mdelInfo = {
                            background,
                            subtitle, 
                            title, 
                            powerCv, 
                            powerKw, 
                            fastest,
                            maxSpeed, 
                            section1, 
                            section2, 
                            section3, 
                            section4, 
                            section5, 
                            section6, 
                            section7, 
                            modelImages
                        }
                         dispatch(setSingleModel(mdelInfo))
                         navigate('/SingleModel')
                    } 
                })
                    
            }
        })
    }

    return (
        <>
            <div onMouseOver={mouseOver} className='home-page'>
                <div  className='homepage1'>
                    <div className='homepage-content'>
                        <div className='homepage-title'>
                            huracan tecnica
                        </div>
                        <div className='homepage-text'>
                            take all your <br /> souls to drive
                        </div>
                        <div>
                            <button onClick={() => tecnica('huracan tecnica')} className='homepage-btn'>
                                view more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Models />
            <Configurator />
            <News />
        </>
    )
}

export default HomePage