import React from 'react'
import './Testimonials.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
function Testimonials() {
    return (
        <div className='testi'>
            <h3 className='testimonials-heading'>Happy Customers!</h3>
            <section id="testimonials">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h2 className='testimonial-text'>The best site for all kinds of shopping where I can get everything I want at the most affordable price!</h2>
                            <img className="dog" src="https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-white-dress-sexy-carefree-woman-posing-near-blue-wall-studio-positive-model-having-fun-cheerful-happy-isolated_158538-25710.jpg" alt="person-profile"></img>
                            <em>Riya, New Delhi</em>
                        </div>
                        <div className="carousel-item">
                            <h2 className="testimonial-text">The most amazing clothes and the most amazing services ever by an e commerce site!</h2>
                            <img className="testimonial-image"
                                src="https://t3.ftcdn.net/jpg/00/67/39/66/360_F_67396619_U6koWlJK4md7X5GWXqSqHc1GTS2GeZuz.jpg"
                                alt="person-profile"></img>
                            <em>Samayra, Hyderabad</em>
                        </div>
                        <div className="carousel-item">
                            <h2 className="testimonial-text">Fell in love with this brand and now I buy everything from here!</h2>
                            <img className="testimonial-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-z39HQ6JZGPZScDr--KEdQycB0ccleVjrbA&usqp=CAU" alt="person-profile"></img>
                            <em>Sakshi, Kolkata</em>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Testimonials