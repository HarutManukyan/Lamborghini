import insta from '../img/insta.png'
import facebook from '../img/facebook.png'
import youtube from '../img/youtube.png'
import twitter from '../img/twitter.png'
import tiktok from '../img/tiktok.png'
import linkedin from '../img/linkedin.png'


const Footer = () => {
    const links = [
        {
            id: 1,
            text: 'company',
            link: ''
        },
        {
            id: 2,
            text: 'careers',
            link: ''
        },
        {
            id: 3,
            text: 'contact us',
            link: ''
        },
        {
            id: 4,
            text: 'sustainability',
            link: ''
        },
        {
            id: 5,
            text: 'media center',
            link: ''
        },
        {
            id: 6,
            text: 'privacy and legal',
            link: ''
        },
        {
            id: 7,
            text: 'cookie settings',
            link: ''
        },
        {
            id: 8,
            text: 'sitemap',
            link: ''
        },
        {
            id: 9,
            text: 'newsletter',
            link: ''
        },
    ]

    const contacts = [
        {
            id: 1,
            img: insta,
            link: 'https://www.instagram.com/lamborghini/?hl=en'
        },
        {
            id: 2,
            img: facebook,
            link: 'https://www.facebook.com/Lamborghini/'
        },
        {
            id: 3,
            img: youtube,
            link: 'https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw'
        },
        {
            id: 4,
            img: twitter,
            link: 'https://twitter.com/Lamborghini'
        },
        {
            id: 5,
            img: tiktok,
            link: 'https://www.tiktok.com/@lamborghini?lang=en'
        },
        {
            id: 6,
            img: linkedin,
            link: 'https://www.linkedin.com/company/automobili-lamborghini-s-p-a-'
        }
    ]

    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer-links">
                    {
                        links.map(({id, text, link}) => (
                            <div className="footer-link" key={id}>
                                {text}
                            </div>
                        ))
                    }
                </div>
                <div className="footer-contacts">
                    {
                        contacts.map(({id, img, link}) => (
                            <div className='contact' key={id}>
                                <a href={link} >
                                    <img className='contact-img' src={img}/>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className='footer-texts'>
                    <div className='footer-text1'>
                        The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, <br /> contact your dealer to get valid consumption and emissions information in your area.
                    </div>
                    <div className='footer-text2'>
                        Copyright © 2022 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.
                        All rights reserved. VAT no. IT 00591801204
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer