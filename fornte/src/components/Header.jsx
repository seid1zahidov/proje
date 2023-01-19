import React from 'react'
import Logo from '../assets/img/Screen Shot 2022-02-23 at 23.45 1.png'
import '../assets/css/header/header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-lg-9 d-flex   ms-5 ">
                        <img style={{ width: '10%' }} src={Logo} alt='Logo' />
                        <div className='logo-right-line'></div>
                        <ul className='d-flex Navbar_Text'>
                            <li>About Us</li>
                            <li>Media</li>
                            <li>PartNers</li>
                            <li>Career</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-lg-2  Navbar-right">
                        <span>Whatsapp: <a href="">050-360-66-22</a></span>
                        <ul className='d-flex Navbar_right_Links'>
                            <li><a href="https://www.instagram.com/">Instagram</a></li>
                            <li><a href="https://www.facebook.com/campaign/landing.php?campaign_id=17872459589&extra_1=s%7Cc%7C613001315912%7Cb%7Cfacebook%27%7C&placement=&creative=613001315912&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D17872459589%26adgroupid%3D145027593088%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327090827491%26loc_physical_ms%3D1000998%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAkrWdBhBkEiwAZ9cdcD6TVz8P77rpiyBfAlerfLnSJp5TCptSGlbNZgke5uy6T8h4xXQOIRoCq64QAvD_BwE">FaceBook</a></li>
                            <li><a href="https://tr.linkedin.com/">Linkedin</a></li>
                            <select className='ms-3 '>
                                <option value="En">En</option>
                                <option value="Az">Az</option>
                                <option value="Ru">Ru</option>
                            </select>
                        </ul>
    
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header