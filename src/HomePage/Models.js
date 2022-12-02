import { useEffect, useState } from "react"
import instance from '.././api/axios'
import { useNavigate } from 'react-router-dom'

const Models = () => {
    const [showModels, setShowModels] = useState(false)
    const [models, setModels] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        instance.get('models')
            .then(res => setModels(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="models-wrapper">
            <div className='wrapper'>
                <div className='models'>
                    <div className='models-content'>
                        <div className='models-title'>
                            Models
                        </div>
                        <div className='models-text'>
                            pure engeenering magic
                        </div>
                        <div className='models-nav'>
                            <button onClick={() => setShowModels(true)} className='models-btn'>
                                +
                            </button>
                            <div onClick={() => setShowModels(true)} className='models-link'>
                                Explore the models
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showModels && 
                <div className="models-models">
                    <div onClick={() => setShowModels(false)} className="models-back-btn">
                        go back
                    </div>
                    <div className="models-container">
                        {models.map(({id, model, link}) => (
                            <div onClick={() => navigate(`/${link}`)} key={id} className="models-list">
                                {model}
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default Models