import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"

import logo from '../img/logo.jpg'
import { navIsShownSelector, navIsTrueSelector, navSelector, setNavIsShown } from "../redux/slices/navSlice"
import Nav from "../HomePage/Nav"

const Header = () => {
    const [hover, setHover] = useState(false)

    const dispatch = useDispatch()

    const leftNav = [
        {
            id: 1,
            to: 'Models',
            text: 'Models',
            childrenShown: false
        },
        {
            id: 2,
            to: 'Cost',
            text: 'Costume solutions'
        },
        {
            id: 3,
            to: 'Ownership',
            text: 'Ownership'
        },
    ]
    
    const rightNav = [
        {
            id: 5,
            to: 'Dealership',
            text: 'Dealership'
        },
        {
            id: 6,
            to: 'Museum',
            text: 'Museum'
        },
        {
            id: 7,
            to: 'Store',
            text: 'Store'
        },
        {
            id: 8,
            to: 'Help',
            text: 'Help centre'
        }
    ]

    const moreInfo = useSelector(navSelector)

    const isShown = useSelector(navIsShownSelector)

    const mouseOver = () => {
        dispatch(setNavIsShown(true))
    }

    

    return (
        <>
            <div className="header">
                <div className="header-left">
                    <Link to='HomePage'>
                        <img src={logo}/>
                    </Link>
                    {
                        leftNav.map(({id, to, text}) => (
                            <div key={id}>
                                <Nav id={id} to={to} text={text}/>
                            </div>
                        ))
                    }
                </div>
                <div className="header-right">
                    {
                        rightNav.map(({id, to, text}) => (
                            <NavLink className='nav-item' key={id} to={to}>
                                {text}
                            </NavLink>
                        ))
                    }
                    <div className='nav-item'>
                        Search
                    </div>
                    <div className='nav-item'>
                        aaa
                    </div>
                </div>
            </div>
                {
                    isShown ? <div onMouseOver={mouseOver}  className="extra-info">
                        {
                            moreInfo.map(({id, text, to}) => (
                                <div  className="extra-info-link-div">
                                    <Link  className="extra-info-link" key={id} to={to}>
                                        <div  className="extra-info-link">
                                            {text}
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>: null
                }
        </>
    )
}

export default Header