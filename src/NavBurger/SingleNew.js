import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setNavIsShown } from "../redux/slices/navSlice"
import { newSelector } from "../redux/slices/singleNewSlice"

const SingleNew = () => {
    const {id, text, date, img} = useSelector(newSelector)
        
    const dispatch = useDispatch()

    const mouseOver = () => {
        dispatch(setNavIsShown(false))
    }

    const navigate = useNavigate()

    const startRef = useRef(null)

    useEffect(() => {
        startRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [])

    return (
        <div ref={startRef} className="single-new" onMouseOver={mouseOver}>
            <div className="single-new-card">
                <div className="single-new-card-img-div">
                    <img src={img} alt='img' className="single-new-card-img"/>
                </div>
                <div onClick={() => navigate(-1)} className="back-btn">
                    go back
                </div>
                <div className="single-new-card-date">
                    {date}
                </div>
                <div className="news-page-title single-new-title">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default SingleNew