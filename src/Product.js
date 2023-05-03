import React from 'react'
import './Product.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Ethnic from './Ethnic'
import { Link } from "react-router-dom";
import Header from './Header';
import { Router, Routes, Route, useLocation } from "react-router-dom";
function Product() {
    return (
        <div className='pro' id="middle">
            <h2><b>Trending Products</b></h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src="https://cdn.kamatharjun.com/wp-content/uploads/2021/08/Indian-Wedding-Photography-30.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Ethnic Apparal</h5>
                            <p className="card-text">We have an assortment of brands like Libaaz, Mehbooba, Uasmin and a lot more with every price range you like! So get to shopping now for your perfect traditional look!</p>
                            <Link to="/ethnic"><a href="" class="btn_card btn">Shop Now</a></Link>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://cdn.shopify.com/s/files/1/0006/0420/9215/articles/cheap_edgy_clothes_1000.jpg?v=1605580776" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Modern Chic</h5>
                            <p className="card-text">Do we need to say anything? Look here for your favourite brands like Levi, Monte Carlo and Zara for your party ready attire!</p>
                            <Link to="/modern"><a href="" class="btn_card btn">Shop Now</a></Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://fashionista.com/.image/t_share/MTQ3MTc0ODk3NTQ0NjAzMDg2/hp-uniqlo-workwear-1.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Casuals</h5>
                            <p className="card-text">Find your comfort and warmth here with brands like H&M, Pantaloons and a lot more!<br></br>Shop now!</p>
                            <Link to="/casuals"><a href="" class="btn_card btn">Shop Now</a></Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://ksr-ugc.imgix.net/assets/038/106/071/06195626ac549a04d155b769f363f5b4_original.png?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1659055580&auto=format&frame=1&q=92&s=88ed70fb8c651655137c53e064047c4c" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Purses</h5>
                            <p className="card-text">Which girl doesn't like purses? Its the most pleasurable thing for females! Get on the journey with us as we present to you the best brands for you!</p>
                            <Link to="/purses"><a href="" class="btn_card btn">Shop Now</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Product


