import React from 'react'
import '../assets/css/footer/Footer.css'
import Google_Maps from '../components/Google_Map'
const Footer = () => {
    return (
        <>
            <div id='Footer'>
                <div className="container_fluid">
                    <div className="row">
                        <div className="col-lg-4 ">
                            <div className="Footer_top-left_text">
                                <h1>Bizimlə Əlaqə</h1>
                                <p>Bu layihə xoşunuza gəlib və ofisimizdə görüşə yazılmaq <br /> istəyirsiniz? Ofisimizdə görüşə yazılmaq və ya onlayn <br /> qaydada mümkündür</p>
                            </div>
                        </div>
                        <div className="col-lg-8 Footer_top_right-side row">
                            <div className="col-lg-5 Footer_right_input text-center">
                                <input className='Footer_first-input' type="text" placeholder='Ad,Soyad' />
                                <input className='Footer_first-input' type="text" placeholder='Telefon nömrəniz' />
                                <input className='Footer_first-input_large' type="text" placeholder='Görüş ilə bağlı suallarınızı qeyd edə bilərsiniz' /> <br />
                                <button className="Footer_top-right_button">Görüşə yazılmaq</button>

                            </div>
                            <div className="col-lg-7 ">
                                <Google_Maps />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='Footer_line' />
                <div className="row">
                    <div className="col-lg-6 d-flex Footer_bottom_left">
                        <div className="col-lg-2">
                            <ul className='ms-5 mt-5 '>
                                Menu
                                <li>About Us</li>
                                <li>Media</li>
                                <li>Partners</li>
                                <li>Career</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 ms-5">
                            <ul className='ms-5 mt-5 '>
                                Follow
                                <li>Intagram</li>
                                <li>Linkedin</li>
                                <li>Facebook</li>
                                <li>Whatsapp</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 ms-5">
                            <ul className='ms-5 mt-3 '>
                                Follow
                                <li><a href="">Tel: (+99455) 225-07-70</a></li>
                                <li>support@amalgroup.az</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 Footer_bottom_right">
                        <ul className='me-5 text-end mt-5 '>
                           Legal
                            <li className='mt-2'>Copyright. All rights reserved. Amal Group 2021</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer