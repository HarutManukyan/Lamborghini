import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import instance from "../api/axios"
import { setNavIsShown } from "../redux/slices/navSlice"
import { FaTelegramPlane } from 'react-icons/fa'
import { setNew } from "../redux/slices/singleNewSlice"
import { useNavigate } from "react-router-dom"

const News = () => {
    const [news, setNews] = useState([])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    useEffect(() => {
        instance.get('news')
            .then((res) => setNews(res.data))
            .catch((err) => console.log(err))
    }, [])

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

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    return (
        <div ref={startRef} className="news" onMouseOver={mouseOver}>
            <div className="news-word">
                News
            </div>
            <div className="news-title">
                LAMBORGHINI WORLD
            </div>
            <div className="news-img-div">
                <img src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2022/11_24_amy/COVER_D.jpg' className="news-img"/>
            </div>
            <div className="news-date">
                10 NOVEMBER 2022
            </div>
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

            <div className="telegram">
                <a href="https://telegram.me/lamborghini" target='blank' >
                    <div className="telegram-container">
                        <div className="telegram-logo">
                            <FaTelegramPlane className="telegram-img"/>
                        </div>
                        <div className="telegram-texts">
                            <div className="telegram-subtitle">
                                lamborghini telegram
                            </div>
                            <div className="telegram-title">
                                follow us on telegram
                            </div>
                        </div>
                    </div>
                </a>
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
                <button className='news-btn'>
                    see all
                </button>
            </div>
        </div>
    )
}

export default News