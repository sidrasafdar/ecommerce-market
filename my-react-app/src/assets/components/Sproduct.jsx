import React from "react";

function Sproduct() {
  return (
    <>
      {/* Product Section */}
      <section className="sproduct container my-5 pt-5">
        <div className="row mt-5">

          {/* Left Images */}
          <div className="col-lg-5 col-md-12 col-12">
            <img className="img-fluid w-100 pb-1" src="./shop/1.jpg" alt="" />

            <div className="small-img-group">
              <div className="small-img-col">
                <img className="small-img" width="100" src="./shop/1.jpg" alt="" />
              </div>

              <div className="small-img-col">
                <img className="small-img" width="100" src="./shop/24.jpg" alt="" />
              </div>

              <div className="small-img-col">
                <img className="small-img" width="100" src="./shop/25.jpg" alt="" />
              </div>

              <div className="small-img-col">
                <img className="small-img" width="100" src="./shop/26.jpg" alt="" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-5 col-md-12 col-12">
            <h6>Home / T-Shirt</h6>
            <h3 className="my-4">Men's Fashion T-Shirt</h3>
            <h2>$139.00</h2>

            <select className="mt-3">
              <option>Select Option</option>
              <option>XXL</option>
              <option>XL</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <input className="my-3" type="number" defaultValue="1" />

            <button className="buy-btn">Add To Cart</button>

            <h4 className="mt-5 mb-5">Product Details</h4>
            <span>
              This premium cotton T-shirt is designed for everyday comfort and effortless style.
              Crafted from soft, breathable fabric, it offers a relaxed fit that feels great all day long.
            </span>
          </div>

        </div>
      </section>

      {/* Related Products */}
      <section id="featured" className="my-5 pb-5">
        <div className="text-center mt-5 my-5">
          <h3>Related Products</h3>
          <hr className="mx-auto" />
        </div>

        <div className="row mx-auto container">

          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="product text-center col-lg-3 col-md-4 col-12">
              <img className="mb-3 img-fluid" src={`/img/featured/${item}.jpg`} alt="" />

              <div className="star">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>

              <h5 className="P-name">Sports Boots</h5>
              <h4 className="p-price">$92.0</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}

export default Sproduct;