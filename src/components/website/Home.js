/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Home = () => {
  return (
    <div>
      <section
        class="py-3"
        style={{
          background: `url('./assets/images/background-pattern.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="banner-blocks">
                <div class="banner-ad large bg-info block-1">
                  <div class="swiper main-swiper">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="row banner-content p-5">
                          <div class="content-wrapper col-md-7">
                            <div class="categories my-3">100% natural</div>
                            <h3 class="display-4">
                              Fresh Smoothie & Summer Juice
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3"
                            >
                              Shop Now
                            </a>
                          </div>
                          <div class="img-wrapper col-md-5">
                            <img
                              src="./assets/images/product-thumb-1.png"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="swiper-slide">
                        <div class="row banner-content p-5">
                          <div class="content-wrapper col-md-7">
                            <div class="categories mb-3 pb-3">100% natural</div>
                            <h3 class="banner-title">
                              Fresh Smoothie & Summer Juice
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                            >
                              Shop Collection
                            </a>
                          </div>
                          <div class="img-wrapper col-md-5">
                            <img
                              src="./assets/images/product-thumb-1.png"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="swiper-slide">
                        <div class="row banner-content p-5">
                          <div class="content-wrapper col-md-7">
                            <div class="categories mb-3 pb-3">100% natural</div>
                            <h3 class="banner-title">Heinz Tomato Ketchup</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                            >
                              Shop Collection
                            </a>
                          </div>
                          <div class="img-wrapper col-md-5">
                            <img
                              src="./assets/images/product-thumb-2.png"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="swiper-pagination"></div>
                  </div>
                </div>

                <div
                  class="banner-ad bg-warning block-2"
                  style={{
                    background: `url('./assets/images/ad-image-1.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                  }}
                >
                  <div class="row banner-content p-5">
                    <div class="content-wrapper col-md-7">
                      <div class="categories sale mb-3 pb-3">20% off</div>
                      <h3 class="banner-title">Fruits & Vegetables</h3>
                      <a href="#" class="d-flex align-items-center nav-link">
                        Shop Collection{" "}
                        <svg width="24" height="24">
                          <use href="#arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="banner-ad bg-danger block-3"
                  style={{
                    background: `url('./assets/images/ad-image-2.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                  }}
                >
                  <div class="row banner-content p-5">
                    <div class="content-wrapper col-md-7">
                      <div class="categories sale mb-3 pb-3">15% off</div>
                      <h3 class="item-title">Baked Products</h3>
                      <a href="#" class="d-flex align-items-center nav-link">
                        Shop Collection{" "}
                        <svg width="24" height="24">
                          <use href="#arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
