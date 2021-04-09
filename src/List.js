import React, { lazy } from "react";
import img1 from "./images/pic1.png";
import img2 from "./images/pic2.png";
import img3 from "./images/pic3.png";
import img4 from "./images/pic4.png";
import img5 from "./images/pic5.png";
import img6 from "./images/pic6.png";
import img7 from "./images/pic7.png";
import img8 from "./images/pic8.png";
import img9 from "./images/pic9.png";
import img10 from "./images/pic10.png";
import img11 from "./images/pic11.png";
import blog1 from "./images/blog1.jpeg";
import blog2 from "./images/blog2.jpeg";
import blog3 from "./images/blog3.jpeg";
import LazyLoad from "react-lazyLoad";
import Footer from "./Footer";

const List = () => {
  return (
    <main>
      <section class="section new__arrival" id="new__arrival">
        <div class="arrivals container">
          <div class="title">
            <h1 class="primary__title">New Arrival</h1>
          </div>

          <div class="arrival__center">
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img10} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img2} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img3} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img4} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section featured" id="featured">
        <div class="featured__container container">
          <div class="title">
            <h1 class="primary__title">Featured Products</h1>
          </div>

          <div class="featured__center">
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img6} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img1} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img11} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img7} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img8} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img9} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img5} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div class="product">
              <div class="product__bottom">
                <div class="rating">
                  <span>
                    <LazyLoad>
                      <img className="" src={img6} alt="" />
                    </LazyLoad>
                  </span>
                </div>
                <h3>Polar Skate Co Devil T Shirt</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section blog" id="blog">
        <div class="blog__container container">
          <div class="title">
            <h1 class="primary__title">Latest News</h1>
          </div>

          <div class="blog__center">
            <div class="blog__box">
              <div class="img__cover blog-12">
                <LazyLoad>
                  <img className="" src={blog1} alt="" />
                </LazyLoad>
              </div>
              <div class="box__content">
                <h2>Here are the trends I see coming this fall</h2>
                <a href="#">Read more</a>
              </div>
            </div>

            <div class="blog__box blog-22">
              <div class="img__cover">
                <LazyLoad>
                  <img className="" src={blog2} alt="" />
                </LazyLoad>
              </div>
              <div class="box__content">
                <h2>Here are the trends I see coming this fall</h2>
                <a href="#">Read more</a>
              </div>
            </div>

            <div class="blog__box blog-32">
              <div class="img__cover">
                <LazyLoad>
                  <img className="" src={blog3} alt="" />
                </LazyLoad>
              </div>
              <div class="box__content">
                <h2>Here are the trends I see coming this fall</h2>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section newsletter" id="newsletter">
        <div class="newsletter__container container">
          <div class="title">
            <h1 class="primary__title">Newsletter</h1>
          </div>

          <div class="newsletter__center">
            <div class="newsletter__box">
              <h2>Newsletter</h2>
              <p>
                Subscribe to our newsletter and get 20% off your first purchase
              </p>
            </div>

            <div class="newsletter__box">
              <form action="#">
                <input type="email" placeholder="Your email" />
                <button>SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default List;
