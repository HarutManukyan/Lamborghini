import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"

import logo from '../img/logo.jpg'
import { navIsShownSelector, navIsTrueSelector, navSelector, setNavIsShown } from "../redux/slices/navSlice"
import Nav from "../HomePage/Nav"
import { BsSearch } from "react-icons/bs"
import { VscChromeClose } from 'react-icons/vsc'
import { GiHamburgerMenu } from 'react-icons/gi'

import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillWeiboCircle } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'


const Header = () => {
    const [search, setSearch] = useState(false)
    const [menu, setMenu] = useState(false)

    const dispatch = useDispatch()

    const openSearch = () => {
        setSearch(!search)
    }

    const closeSearch = () => {
        setSearch(false)
    }

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

    const menuContent = [
        {
            id: 1,
            text: 'design',
            to: 'design'
        },
        {
            id: 2,
            text: 'driving programs',
            to: 'driving'
        },
        {
            id: 4,
            text: 'innovation and axcellence',
            to: 'innovation'
        },
        {
            id: 5,
            text: 'lounge',
            to: 'lounge'
        },
        {
            id: 6,
            text: 'news',
            to: 'news'
        }
    ]

    const languagesContent = [
        {
            id: 1,
            text: 'english'
        },
        {
            id: 2,
            text: 'italian'
        },
        {
            id: 3,
            text: 'french'
        },
        {
            id: 4,
            text: 'spanish'
        },
        {
            id: 5,
            text: 'german'
        },
        {
            id: 6,
            text: 'chinese'
        },
        {
            id: 7,
            text: 'japanese'
        },
        {
            id: 8,
            text: 'russian'
        },
    ]

    const socials = [
        {
            id: 1,
            text: <BsInstagram />,
            link: 'https://www.instagram.com/lamborghini/?hl=en'
        },
        {
            id: 2,
            text: <BsFacebook />,
            link: 'https://www.facebook.com/Lamborghini/'
        },
        {
            id: 3,
            text: <BsYoutube />,
            link: 'https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw'
        },
        {
            id: 4,
            text: <BsTwitter />,
            link: 'https://twitter.com/Lamborghini'
        },
        {
            id: 5,
            text: <FaTiktok />,
            link: 'https://www.tiktok.com/@lamborghini?lang=en'
        },
        {
            id: 6,
            text: <BsLinkedin />,
            link: 'https://www.linkedin.com/company/automobili-lamborghini-s-p-a-'
        },
        {
            id: 7,
            text: <AiFillWeiboCircle />,
            link: 'https://weibo.com/lamborghinichina?is_all=1'
        },
        {
            id: 8,
            text: <FaDiscord />,
            link: 'https://discord.gg/GAU7DRGEfjs'
        }
    ]

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
                    <div onClick={openSearch} className='nav-item search'>
                        <BsSearch />
                    </div>
                    <div onClick={() => setMenu(!menu)} className='nav-item'>
                        {menu ? <VscChromeClose /> : <GiHamburgerMenu />}
                    </div>
                </div>
            </div>
            {
                search && <div className="search-wrapper">
                            <div className="search-area">
                        <div onClick={closeSearch} className="close-search">
                            close search <span><VscChromeClose /></span>
                        </div>
                        <div className="search-form">
                            <div className="search-title">
                                lamborghini
                            </div>
                            <div className="search-text">
                                SEARCH IN THE WEBSITE
                            </div>
                            <div className="search-input-div">
                                <div className="search-div">
                                    <input className="search-input"/>
                                </div>
                                <div>
                                    <button className="search-btn">search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                menu && 
                <div className="menu">
                    <div className="menu-container">
                        <div className="menu-content">
                            {
                                menuContent.map(({id, text, to}) => (
                                    <div className="menu-item-div" key={id}>
                                        <Link onClick={() => setMenu(false)} to={to} className="menu-item">
                                            {text}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="menu-bottom">
                            <div className="languages-content">
                                <div className="languages-title">
                                    languages
                                </div>
                                <div className="languages">
                                    {
                                        languagesContent.map(({id, text}) => (
                                            <div className="language-text" key={id}>
                                                {text}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="languages-content">
                                <div className="languages-title">
                                    socials
                                </div>
                                <div className="socials">
                                    {
                                        socials.map(({id, text, link}) => (
                                            <a href={link} target='blank' className="language-text" key={id}>
                                                {text}
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
                {
                    isShown ? <div onMouseOver={mouseOver}  className="extra-info">
                        {
                            moreInfo.map(({id, text, to}) => (
                                <div  className="extra-info-link-div">
                                    <Link onClick={() => dispatch(setNavIsShown(false))} className="extra-info-link" key={id} to={to}>
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