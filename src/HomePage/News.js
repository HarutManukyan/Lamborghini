import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import newsImg from '../img/news-img.webp'
import news1 from '../img/news1.webp'
import news2 from '../img/news2.webp'
import { setNew } from '../redux/slices/singleNewSlice'

const News = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const news = [
        {
            id: 1,
            text: 'MY KIND OF TOWN: ROME WITH STEPHAN WINKELMANN',
            date: '8 NOVEMBER 2022',
            img: news1
        },
        {
            id: 2,
            text: 'LAMBORGHINI AND IRON LYNX JOIN FORCES FOR LMDH PROGRAMME IN FIA WEC AND IMSA FROM 2024 ',
            date: '7 NOVEMBER 2022',
            img: news2
        },
    ]

    const singleNew = (id, text, date, img) => {
        const single = {
            id, 
            text, 
            date, 
            img,
        }

        dispatch(setNew(single))
        navigate('/SingleNew')
    }

    return (
        <div className="news">
            <div className="news-word">
                News
            </div>
            <div className="news-title">
                LAMBORGHINI WORLD
            </div>
            <div className="news-img-div">
                <img src={newsImg} className="news-img"/>
            </div>
            <div className="news-date">
                10 NOVEMBER 2022
            </div>
           <div className='news-content'>
                <div className="news-event-div">
                    <div>
                        <a className="news-event">
                            first lamborghini club japan event
                        </a>
                        <div className="news-event-info">
                            Lamborghini Club Japan hosted its very first event at the Fuji Speedway Hotel on October 15th, 2022.
                        </div>
                    </div>
                    <div className="news-event-btn-div">
                        <button className="news-event-btn">
                            read more
                        </button>
                    </div>
                </div>
                <div>
                    {
                        news.map(({id, text, date, img}) => (
                            <div key={id} className='news-card'>
                                <div className='news-card-img-div'>
                                    <img className='news-card-img' src={img}/>
                                </div>
                                <div className='news-card-text'>
                                    <div className='news-card-date'>
                                        {date}
                                    </div>
                                    <div className='news-card-info'>
                                        {text}
                                    </div>
                                    <div className='news-card-btn-div'>
                                        <button onClick={() => singleNew(id, text, date, img)} className='news-card-btn'>
                                            read more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="news-btn-div">
                    <button onClick={() => navigate('/News')} className='news-btn'>
                        see all
                    </button>
                </div>
           </div>
        </div>
    )
}

export default News