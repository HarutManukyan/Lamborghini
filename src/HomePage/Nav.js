import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { navIsTrueSelector, navSelector, setNav, setNavIsShown } from "../redux/slices/navSlice"

const Nav = ({id, to, text}) => {
    const [hover, setHover] = useState(false)
    const [navInfo, setNavInfo] = useState()

    const dispatch = useDispatch()

    const modelsNav = [
        {
            id: 1,
            to: 'Aventador',
            text: 'Aventador'
        },
        {
            id: 2,
            to: 'Huracan',
            text: 'Huracan'
        },
        {
            id: 3,
            to: 'Urus',
            text: 'Urus'
        },
        {
            id: 4,
            to: 'Owned',
            text: 'Pre owned'
        },
        {
            id: 5,
            to: 'Limited',
            text: 'limited series'
        },
        {
            id: 6,
            to: 'Concepts',
            text: 'Concepts'
        },
    ]

    const costNav = [
        {
            id: 1,
            to: 'Costomization',
            text: 'Costomization'
        },
        {
            id: 2,
            to: 'Accessories',
            text: 'Accessories'
        },
        {
            id: 3,
            to: 'Fin',
            text: 'Financial cervices'
        },
        {
            id: 4,
            to: 'Ext',
            text: 'Warranty extensions'
        },
    ]

    const ownershipNav = [
        {
            id: 1,
            to: 'Conectivity',
            text: 'Conectivity'
        },
        {
            id: 2,
            to: 'Custapp',
            text: 'Customer app'
        },
        {
            id: 3,
            to: 'Mobprog',
            text: 'Mobility program'
        },
        {
            id: 4,
            to: 'Classics',
            text: 'Classics'
        },
        {
            id: 5,
            to: 'Service',
            text: 'Service'
        },
        {
            id: 6,
            to: 'Recall',
            text: 'Recall campaign'
        },
    ]

    const mouseOver = () => {
        switch(text){
            case 'Models':
                dispatch(setNav(modelsNav))
                dispatch(setNavIsShown(true))  
                break;
            case 'Costume solutions':
                dispatch(setNav(costNav)) 
                dispatch(setNavIsShown(true)) 
                break;
            case 'Ownership':
                dispatch(setNav(ownershipNav))  
                dispatch(setNavIsShown(true))
                break;
        }
         
    }
    
    
    // const mouseOut = () => {
    //     dispatch(setNav(''))
    //     dispatch(setNavIsShown(false))
    // }

    return (
        <div>
            <>
                <div>
                    <NavLink 
                        className='nav-item'
                        onMouseOver={mouseOver}
                        // onMouseOut={mouseOut}
                    >
                        {text}
                    </NavLink>
                </div>
                
            </>
            <div>
                {/* {
                    hover && modelsNav.map(({id, to, text}) => (
                        <div>
                            {text}
                        </div>
                    ))
                } */}
            </div>
        </div>
    )
}

export default Nav