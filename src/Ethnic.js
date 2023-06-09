import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStateValue } from "./stateProvider";
import './Ethnic.css'
function Ethnic() {
    const [{ basket }, dispatch] = useStateValue();
    //dispath the item into the data layer 
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                title: 'title',
                price: 'price',
                image: 'image'
            },
        });

    }

    return (
        <div className="ethnic-row row">
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image" placeholder='image'>
                        <a href="#" className="image">
                            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22540368/2023/3/28/7d9b5fc3-518c-4740-8da2-af270ab0ccf01679995459510VASANTAPPARELBlackEthnicMotifsPrintEthnicA-LineMidiDress1.jpg"></img>
                        </a>
                        <span className="product-discount-label">-23%</span>
                        <ul className="product-links">
                            <li><a href="#"><FavoriteIcon /></a></li>
                        </ul>
                        <a href="#" className="add-to-cart" onClick={addToBasket}>Add to Cart</a>
                    </div>
                    <div className="product-content">
                        <h3 className="title" placeholder="title"><a href="#">Sherwani Kurti</a></h3>
                        <div className="price" placeholder="price">$53.55 <span>$68.88</span></div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image" placeholder='image'>
                        <a href="#" className="image">
                            <img src="https://rukminim1.flixcart.com/image/832/832/ks0onm80/kurta/p/z/g/l-tc1-101-koti-black-youthnic-original-imag5z8sdmbfygyg.jpeg?q=70"></img>
                        </a>
                        <ul className="product-links">
                            <li><a href="#"><FavoriteIcon /></a></li>
                        </ul>
                        <a href="#" className="add-to-cart" onClick={addToBasket}>Add to Cart</a>
                    </div>
                    <div className="product-content">
                        <h3 className="title" placeholder="title"><a href="#">Adkara Kurti</a></h3>
                        <div className="price" placeholder="price">$75.55</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image" placeholder='image'>
                        <a href="#" className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0597/5592/1540/products/15019MPTEAL_back_main_512x683.jpg?v=1674657348"></img>
                        </a>
                        <ul className="product-links">
                            <li><a href="#"><FavoriteIcon /></a></li>
                        </ul>
                        <a href="#" className="add-to-cart" onClick={addToBasket}>Add to Cart</a>
                    </div>
                    <div className="product-content">
                        <h3 className="title" placeholder="title"><a href="#">Jasmine Top</a></h3>
                        <div className="price" placeholder="price">$75.55</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image" placeholder='image'>
                        <a href="#" className="image" >
                            <img src="https://img0.junaroad.com/uiproducts/19170301/zoom_0-1673592270.jpg"></img>
                        </a>
                        <ul className="product-links">
                            <li><a href="#"><FavoriteIcon /></a></li>
                        </ul>
                        <a href="#" className="add-to-cart" onClick={addToBasket}>Add to Cart</a>
                    </div>
                    <div className="product-content">
                        <h3 className="title" placeholder="title"><a href="#">Shringar Saree</a></h3>
                        <div className="price" placeholder="price">$75.55</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image" placeholder='image'>
                        <a href="#" className="image">
                            <img src="https://img0.junaroad.com/uiproducts/19087699/zoom_0-1672138527.jpg"></img>
                        </a>
                        <ul className="product-links">
                            <li><a href="#"><FavoriteIcon /></a></li>
                        </ul>
                        <a href="#" className="add-to-cart" onClick={addToBasket}>Add to Cart</a>
                    </div>
                    <div className="product-content">
                        <h3 className="title" placeholder="title"><a href="#">Shringar Saree</a></h3>
                        <div className="price" placeholder="price">$75.55</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image" placeholder='image'>
                        <a href="#" className="image">
                            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22120556/2023/2/25/31818595-3bda-4e8b-a93b-6cfc566126541677314970376KhushalKwomenEmbroideryKurtaandpalazzowithdupattaset1.jpg"></img>
                        </a>
                        <ul className="product-links">
                            <li><a href="#"><FavoriteIcon /></a></li>
                        </ul>
                        <a href="#" className="add-to-cart" onClick={addToBasket}>Add to Cart</a>
                    </div>
                    <div className="product-content">
                        <h3 className="title" placeholder="title"><a href="#">Purple Royalty</a></h3>
                        <div className="price" placeholder="price">$75.55</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image" placeholder='image'>
                        <a href="#" className="image">
                            <img src="https://www.jiomart.com/images/product/500x630/rvw21xikhe/shree-sheetal-fashion-art-women-s-foil-printed-ethnic-jacket-with-kurta-set-brown-dfjk39koti-product-images-rvw21xikhe-3-202212220123.jpg"></img>
                        </a>
                        <ul className="product-links">
                            <li><a href="#"><FavoriteIcon /></a></li>
                        </ul>
                        <a href="#" className="add-to-cart" onClick={addToBasket}>Add to Cart</a>
                    </div>
                    <div className="product-content">
                        <h3 className="title" placeholder="title"><a href="#">Golden Harvest</a></h3>
                        <div className="price" placeholder="price">$75.55</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image" placeholder='image'>
                        <a href="#" className="image">
                            <img src="https://img3.junaroad.com/uiproducts/19170310/pri_175_p-1673592270.jpg"></img>
                        </a>
                        <ul className="product-links">
                            <li><a href="#"><FavoriteIcon /></a></li>
                        </ul>
                        <a href="#" className="add-to-cart" onClick={addToBasket}>Add to Cart</a>
                    </div>
                    <div className="product-content">
                        <h3 className="title" placeholder="title"><a href="#">Sequenced Kurti</a></h3>
                        <div className="price" placeholder="price">$75.55</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ethnic