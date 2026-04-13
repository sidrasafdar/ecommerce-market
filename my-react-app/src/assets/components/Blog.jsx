import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>

    <section id="blog-home" className=" container mt-5">
        <h2 className="font-weight-bold pt-5">Blog</h2>
        <hr />
    </section>

    <section id="blog-container" className="container pt-5">
        <div className="row">
            <div className="post col-lg-6 col-md-6 col-12 pb-5">
                <div className="post-img">
                    <img className="img-fluid w-100" src='./blog/1.jpg' alt="" />
                </div>
                <h3 className="text-center font-weight-normal pt-3">The best ways to chalge your summer wordrobe into autumn wordrobe</h3>
                <p className="text-center">Jan, 11 2025</p>
            </div>

            <div className="post col-lg-6 col-md-6 col-12 pb-5">
                <div className="post-img">
                    <img className="img-fluid w-100" src='./blog/2.jpg' alt=""/>
                </div>
                <h3 className="text-center font-weight-normal pt-3">Men's fashion in lather</h3>
                <p className="text-center">Jan, 11 2025</p>
            </div>

            <div className="post col-lg-6 col-md-6 col-12 pb-5">
                <div className="post-img">
                    <img className="img-fluid w-100" src='./blog/3.jpg' alt="" />
                </div>
                <h3 className="text-center font-weight-normal pt-3">DIYer and TV host Tarisha Hersh's journey through gaming</h3>
                <p className="text-center">Jan, 11 2025</p>
            </div>

            <div className="post col-lg-6 col-md-6 col-12 pb-5">
                <div className="post-img">
                    <img className="img-fluid w-100" src='./blog/4.jpg' alt="" />
                </div>
                <h3 className="text-center font-weight-normal pt-3">The best ways to chalge your summer wordrobe into autumn wordrobe</h3>
                <p className="text-center">Jan, 11 2025</p>
            </div>

            <div className="col-lg-12 col-md-12 col-12 pb-5">
                <div className="post-img">
                    <img className="img-fluid w-100" src='./blog/banner.webp' alt="" />
                </div>
            </div>

            <div className="post col-lg-4 col-md-6 col-12 pb-5">
                <div className="post-img">
                    <img className="img-fluid w-100" src='./blog/1.webp' alt="" />
                </div>
                <h4 className="font-weight-normal pt-3">The best ways to chalge your summer wordrobe</h4>
                
            </div>

            <div className="post col-lg-4 col-md-6 col-12 pb-5">
                <div className="post-img">
                    <img className="img-fluid w-100" src='./blog/2.webp' alt="" />
                </div>
                <h4 className="font-weight-normal pt-3">Take a 3D tour through a Microsoft datacenter</h4>
            </div>

            <div className="post col-lg-4 col-md-6 col-12 pb-5">
                <div className="post-img">
                    <img className="img-fluid w-100" src='./blog/3.webp' alt="" />
                </div>
                <h4 className="font-weight-normal pt-3">Lenovo's smarter devices stoke professional passions</h4>
                
            </div>
        </div>
    </section>

     
     {/* <footer className="mt-5 py-5">
        <div className="row container pt-5 mx-auto">
            <div className="footer-one col-lg-3 col-md-6 col-12">
                <img src='./logo2.png' alt="" />
                <p className="pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
            <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                <h5 className="pb-2">Feature</h5>
                <ul className="text-uppercase list-unstyled">
                    <li><Link href="#">Men</Link></li>
                    <li><Link href="#">Women</Link></li>
                    <li><Link href="#">Boys</Link></li>
                    <li><Link href="#">Girls</Link></li>
                    <li><Link href="#">New Arrival</Link></li>
                    <li><Link href="#">Shoes</Link></li>
                    <li><Link href="#">Clothes</Link></li>
                </ul>
            </div>
            <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                <h5 className="pb-2">Contact Us</h5>
                <div>
                    <h6 className="text-uppercase">Address</h6>
                    <p>123 STREET NAME, CITY, US</p>
                </div>
                <div>
                    <h6 className="text-uppercase">Phone</h6>
                    <p>(123) 456-7890</p>
                </div>
                <div>
                    <h6 className="text-uppercase">Email</h6>
                    <p>MAIL@example.com</p>
                </div>
            </div>

            <div className="footer-one col-lg-3 col-md-6 col-12">
                <h5 className="pb-2">Instagram</h5>
                <div className="row">
                    <img className="img-fluid w-25 height-100 m-2" src='./insta/1.jpg' alt="" />
                    <img className="img-fluid w-25 height-100 m-2" src='./insta/2.jpg' alt="" />
                    <img className="img-fluid w-25 height-100 m-2" src='./insta/3.jpg' alt="" />
                    <img className="img-fluid w-25 height-100 m-2" src='.insta/4.jpg' alt="" />
                    <img className="img-fluid w-25 height-100 m-2" src='./insta/5.jpg' alt="" />
                </div>
            </div>
        </div>

        <div className="copyright mt-5">
            <div className="row container mx-auto">

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                    <img src='.img/payment.png' alt="" />
                </div>

                <div className="col-lg-4 col-md-6 col-12 text-nowrap mb-2">
                    <p>rymo eCommerce 2025.All right reserved</p>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>

        </div>
     </footer> */}

    </>
  );
}

export default Blog;
