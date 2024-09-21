import React, { useCallback, useEffect, useState } from 'react'
import OrderSummary from '../Process/OrderSummary'
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import { useSelector } from 'react-redux';

const Gift = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (name) => {
        setSelectedButton(name);
    };

    const scrollLeft = () => {
        document.querySelector('.gift_coupon').scrollBy({
            left: -100,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        document.querySelector('.gift_coupon').scrollBy({
            left: 100,
            behavior: 'smooth'
        });
    };

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/payment');
        }, 1000);
    }

    // header scroll
    const [isScrolled, setIsScrolled] = useState(false);
    
    const handleScroll = useCallback(() => {
        console.log(window.scrollY);
        setIsScrolled(window.scrollY > 50);
        console.log(isScrolled);
    }, [isScrolled]);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
    return (
        <>
            {loading && <Loader />}
            <section className={`cart_header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="cart_header_left">
                    <Link to="/shipping" className="back-button">
                        <i className="ri-arrow-left-line"></i>
                    </Link>
                    <div className="cart_logo">
                        <i className="ri-shopping-cart-fill cart_logo_icon d-lg-block d-md-block d-sm-block d-none"></i>
                        {/* <img alt='' src='assets/img/tiffco-logo-2.svg' className='cart_logo_icon'></img> */}
                    </div>
                </div>

                <div className="cart_header_center">
                    <div className="toggle-buttons">
                        <button className="toggle-button ">Shopping Cart ({totalQuantity})</button>
                        <button className="toggle-button active d-lg-block d-none">Trial Cart (0)</button>
                    </div>
                </div>

                <div className="cart_header_right">
                    <Link to="/assistance" className="assistance-link">
                        <span className='d-lg-block d-md-block d-sm-block d-none'>
                            Need Assistance?
                        </span>
                        <i className="ri-whatsapp-line whatsapp-icon"></i>
                    </Link>
                </div>
            </section>
            <section className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pt-5 pb-3 m-0 p-0'>
                        <div>
                            <div className='card gif_video_sec mx-auto d-block border-0 rounded-3'>
                                <video autoPlay loop controls muted style={{ width: "485px" }} className='item1 video m-0 p-0'>
                                    <source src="https://cdn.caratlane.com/media/static/images/GiftCard/gifting-loop.mp4" type="video/mp4" />
                                </video>
                                <div className='card-body gift_card_body'>
                                    <div className='row'>
                                        <div className='col-xl-8 col-lg-6 col-md-8 col-sm-8 col-12'>
                                            <p className='m-0 p-0'>Send CaratLane&nbsp;
                                                <span className='fst-italic'>Postcards</span>
                                            </p>
                                            <p className='gift_mess'>Add a video message to your gift!</p>
                                        </div>
                                        <div className='col-xl-4 col-lg-6 col-md-4 col-sm-4 col-12 d-lg-block d-md-block d-none float-end mx-auto d-block align-items-center d-flex mt-2'>
                                            <div>
                                                <i className="ri-apple-fill me-3 android_box_shadow"><span>&nbsp;iOS</span></i>
                                                <i className="ri-google-play-fill android_box_shadow"><span>&nbsp;android</span></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='my-5 py-5 bg_gift'>
                                <h6 className='text-center pb-2 fw-bold'>Choose a gift wrap</h6>
                                <div className='d-flex justify-content-center m-0 p-0 ps-2'>
                                    <div className='position-relative d-block pe-2'>
                                        <img alt='' src='assets/img/Giftwrap1.png' className='relative_image'></img>
                                        <p className=' absoulate_image'>Warm hugs</p>
                                    </div>
                                    <div className='position-relative d-block pe-2'>
                                        <img alt='' src='assets/img/Giftwrap2.png' className='relative_image'></img>
                                        <p className=' absoulate_image'>Purple aun</p>
                                    </div>
                                    <div className='position-relative d-block pe-2'>
                                        <img alt='' src='assets/img/Giftwrap3.png' className='relative_image'></img>
                                        <p className=' absoulate_image'>Fairy Tales</p>
                                    </div>
                                </div>
                                <h6 className='text-center pt-5 fw-bold'>Add a gift message (Optional)</h6>
                                <div className='textarea_wrapper mx-auto d-block'>
                                    <textarea placeholder="You can write a personal note with this gift. We promise we'll send it to your loved one."></textarea>
                                    <span className='max_char'>250</span>
                                </div>
                            </div>
                            <div className='px-3 mx-auto d-block gif_video_sec'>
                                <h6 className='text-center pb-2 fw-bold'>Who is the gift for?</h6>
                                <div className='row'>
                                    <div className='gift_coupon_container'>
                                        <button className='scroll_btn' onClick={scrollLeft}><i className="ri-arrow-left-s-line"></i></button>
                                        <div className='gift_coupon'>
                                            {['Self', 'Friend', 'Family', 'Wife', 'Mother', 'Father', 'Husband', 'Girlfriend', 'Sister', 'Daughter', 'Son'].map(name => (
                                                <div key={name} className='item1'>
                                                    <button
                                                        className={`btn gift_btn ${selectedButton === name ? 'selected' : ''}`}
                                                        onClick={() => handleButtonClick(name)}
                                                    >
                                                        {name}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <button className='scroll_btn' onClick={scrollRight}><i className="ri-arrow-right-s-line"></i></button>
                                    </div>
                                </div>
                                <input type='number' placeholder='Recipient’s Mobile*' className='my-3 number_gift form-control mx-auto d-block'></input>
                                <button className='btn w-100 mx-auto d-block payment_btn my-2 mt-5' onClick={handlePlaceOrder}>PROCEED TO PAYMENT</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 bg_login sticky-header'>
                        <OrderSummary />
                    </div>
                </div>
            </section>
            <section className="cart_footer">
                <div className="cart_footer_left pt-3">
                    <p>
                        <strong>Contact Us:</strong>&nbsp; +91-44-66075200 (Helpline) | contactus@caratlane.com
                    </p>
                </div>
                <div className="cart_footer_right">
                    <img src="assets/img/cart_footer_logo.png" alt="payment-icon" className="payment-icon" />
                    <img src="assets/img/cart_footer_logo1.png" alt="MasterCard" className="payment-icon" />
                    <img src="assets/img/cart_footer_logo2.png" alt="PayPal" className="payment-icon" />
                    <img src="assets/img/cart_footer_logo3.png" alt="American Express" className="payment-icon" />
                </div>
            </section>
        </>
    )
}

export default Gift