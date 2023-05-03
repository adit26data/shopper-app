import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
function Footer() {
    return (
        <div className='footer-bg'>
            <div className="container my-5 ">
                <footer className="bg-light text-center text-lg-start text-white">
                    <div className="container_footer container p-4">
                        <div className="row_footer row my-4">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LDRuKNL8owUW9CgVcYSAyUXcOkyS65E2_Mn3QOb0K_KT1TwpvL8k8Ad_ufS4yHshXnc&usqp=CAU" height="70" alt=""
                                        loading="lazy" />
                                </div>

                                <p className="text-center">The best site for women's clothing where you can buy from a plethora of choices!</p>

                                <ul className="list-unstyled d-flex flex-row justify-content-center">
                                    <li>
                                        <a className="text-white px-2" href="#!">
                                            <i className="fab fa-facebook-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white px-2" href="#!">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white ps-2" href="#!">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">Social Media</h5>

                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Facebook<FacebookIcon /></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Instagram<InstagramIcon /></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Twitter<TwitterIcon /></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Snapchat</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Yahoo</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">General details</h5>

                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>General information</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>About the shelter</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Statistic data</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Job</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Tenders</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">Contact<SettingsPhoneIcon /></h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <p><i className="fas fa-map-marker-alt pe-2"></i>2, Gwalior Road Baluganj Agra</p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-phone pe-2"></i>+91 9690053690</p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-envelope pe-2 mb-0"></i>kaushaladit26@gmail.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-center p-3" >
                        © 2023 Copyright:
                        <a className="text-white" href="#">Shopper.com</a>
                    </div>
                </footer>

            </div>
        </div>
    )
}
export default Footer