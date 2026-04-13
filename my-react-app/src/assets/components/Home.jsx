import React from 'react';

import { Link } from "react-router-dom";


const Home =() => {
  return (
    <>
    
    {/* <!-- navigation bar --> */}

    {/* <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
   <div className="container">
    <img src='./logo1.png' alt='.logo1.png'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><i id="bar" className="fa-solid fa-bars"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
                <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/shop">Shop</Link>
        </li>
                <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/blog">Blog</Link>
        </li>
                <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/About">About</Link>
        </li>
                <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Contact">Contact Us</Link>
        </li>
                <li className="nav-item">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
        </ul>
        
      </form>
    </div>
  </div>
</nav> */}

    {/* <!-- home section --> */}
        <section id="home">
        <div className="home-content container">
            <h5>NEW ARRIVALS</h5>
            <h1><span>BEST PRICE</span> THIS YEAR</h1>
            <p>
            Shomatic offer your very comfortable time <br />
            on walking and experiences
            </p>
            <button>Shop Now</button>
        </div>
        </section>

     {/* <!-- brand section --> */}
     <section id="brand" className="container">
        <div className="row m-0 py-5">
            <img className="img-fluid col-lg-2 col-md-4 col-6" src='./1.png' alt='' />
            <img className="img-fluid col-lg-2 col-md-4 col-6" src='./2.png' alt='' />
            <img className="img-fluid col-lg-2 col-md-4 col-6" src='./3.png' alt='' />
            <img className="img-fluid col-lg-2 col-md-4 col-6" src='./4.png' alt='' />
            <img className="img-fluid col-lg-2 col-md-4 col-6" src='./5.png' alt=''/>
            <img className="img-fluid col-lg-2 col-md-4 col-6" src='./6.png' alt='' />
        </div>

     </section>
     
     <section id="new" className="w-100">
        <div className="row p-0 m-0">
            <div className="one col-lg-4 col-md-12 col-12 p-0">
                <img className="img-fluid" src='./new/1.jpg' alt='' />
                <div className="details">
                    <h2>Extreme Rare Sneaker</h2>
                    <button className="text-uppercase">Shop Now</button>
                </div>
            </div>
            <div className="one col-lg-4 col-md-12 col-12 p-0">
                <img className="img-fluid" src='./new/5.jpg' alt='' />
                <div className="details">
                    <h2>Awesome Blank Outfit</h2>
                    <button className="text-uppercase">Shop Now</button>
                </div>
            </div>
            <div className="one col-lg-4 col-md-12 col-12 p-0">
                <img className="img-fluid" src='./new/3.jpg' alt='' />
                <div className="details">
                    <h2>Sportwear Up To 50% off</h2>
                    <button className="text-uppercase">Shop Now</button>
                </div>
            </div>
        </div>
     </section>

     <section id="featured" className="my-5 pb-5">
        <div className="text-center mt-5 my-5">
            <h3>Our Featured</h3>
            <hr className="mx-auto" />
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div className="row mx-auto container">
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./featured/1.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./featured/2.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./featured/3.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./featured/4.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
        </div>
     </section>
     
     <section id="banner" className="py-5 my-5">
        <div className="container">
            <h4>MID SEASON'S SALE</h4>
            <h1>Automn Collection <br></br>
                Up To 20% Off
            </h1>
            <button className="text-uppercase">Shop Now</button>
        </div>
     </section>

      <section id="clothes" className="my-5">
        <div className="text-center mt-5 my-5">
            <h3>Dresses & Jumpsuits</h3>
            <hr className="mx-auto" />
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div className="row mx-auto container">
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./clothes/1.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./clothes/2.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./clothes/3.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./clothes/1.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
        </div>
     </section>

      <section id="watches" className="my-5">
        <div className="text-center mt-5 my-5">
            <h3>Best Watches</h3>
            <hr className="mx-auto" />
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div className="row mx-auto container">
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./watches/1.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./watches/2.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./watches/3.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./watches/4.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
        </div>
     </section>

     <section id="shoes" className="my-5 pb-5">
        <div className="text-center mt-5 my-5">
            <h3>Running Shoes</h3>
            <hr className="mx-auto" />
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div className="row mx-auto container">
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./shoes/5.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./shoes/6.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./shoes/7.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="mb-3 img-fluid" src='./shoes/8.jpg' alt='' />
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="P-name">Sports Boots</h5>
                <h4 className="p-price">$92.0</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
        </div>
     </section>
{/*      
     <footer className="mt-5 py-5">
        <div className="row container pt-5 mx-auto">
            <div className="footer-one col-lg-3 col-md-6 col-12">
                <img src='./logo2.png' alt='' />
                <p className="pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
            <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                <h5 className="pb-2">Feature</h5>
                <ul className="text-uppercase list-unstyled">
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Boys</a></li>
                    <li><a href="#">Girls</a></li>
                    <li><a href="#">New Arrival</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Clothes</a></li>
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
                    <img className="img-fluid w-25 height-100 m-2" src='./insta/1.jpg' alt='' />
                    <img className="img-fluid w-25 height-100 m-2" src='./insta/2.jpg' alt='' />
                    <img className="img-fluid w-25 height-100 m-2" src='./insta/3.jpg' alt='' />
                    <img className="img-fluid w-25 height-100 m-2" src='.insta/4.jpg' alt='' />
                    <img className="img-fluid w-25 height-100 m-2" src='./insta/5.jpg' alt='' />
                </div>
            </div>
        </div>
        <div className="copyright mt-5">
            <div className="row container mx-auto">

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                    <img src="img/payment.png" alt="" />
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

export default Home;
