import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import Sproduct from "./Sproduct"

const Shop = () =>{
    const navigate = useNavigate();
  return (
    <>
      <section id="featured" className="my-5 py-5" >
        <div className="container mt-5 my-5">
            <h2 className="font-weight-bold">Our Featured</h2>
            <hr />
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        
            <div className="row mx-auto container">
            <div 
            className="container row product text-center col-lg-3 col-md-4 col-12"
            onClick={() => navigate("/product")}
            style={{ cursor: "pointer" }}
            >
            <img className="mb-3 img-fluid" src='./shop/1.jpg' alt="" />

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
                <img className="mb-3 img-fluid" src='./shop/2.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/3.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/4.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/5.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/6.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/7.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/8.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/9.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/10.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/11.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/12.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/13.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/14.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/15.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/16.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/17.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/18.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/19.jpg' alt="" />
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
                <img className="mb-3 img-fluid" src='./shop/20.jpg' alt="" />
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

            <nav aria-label="...">
                <ul className="pagination mt-5">
                <li className="page-item"><Link to="#" className="page-link">Previous</Link></li>
                <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                <li className="page-item">
                <a className="page-link" href="#" aria-current="page">2</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
            </nav>
        </div>
     </section>

    </>
  );
}

export default Shop;
