import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaidIcon from '@mui/icons-material/Paid';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './Features.css'
function Features() {
    return (
        <div className="features_row">
            <section className="features">
                <div className="row_features row rowsecondary">
                    <div className="feature-box col-lg-3">
                        <h3><div className="delivery_icon"><LocalShippingIcon className='icon-cart' /></div><br></br>Fast Local Delivery</h3>
                        <p className="para-feature">Assured 100% safe delivery within 3-5 business days</p>
                    </div>
                    <div className="feature-box col-lg-3">
                        <h3><div className="delivery_icon"><CreditCardIcon className='icon-cart' /></div><i className="fas fa-solid fa-bullseye fa-3x icon"></i><br></br>Secure Payments</h3>
                        <p className="para-feature">All cards are accepted.</p>
                    </div>
                    <div className="feature-box col-lg-3">
                        <h3><div className="delivery_icon"><PaidIcon className='icon-cart' /></div><i className="fas fa-solid fa-heart fa-3x icon"></i><br></br>Guaranteed Money Back</h3>
                        <p className="para-feature">Assured refund on order return.</p>
                    </div>
                    <div className="feature-box col-lg-3">
                        <h3><div className="delivery_icon"><CheckroomIcon className='icon-cart' /></div><i className="fas fa-solid fa-heart fa-3x icon"></i><br></br>1000 choices for you</h3>
                        <p className="para-feature">Mega store to fulfill all your needs</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features