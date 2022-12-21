import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
              {/* <!-- ======= Hero Section ======= --> */}
                <section id="hero" class="hero">
                  <div class="container position-relative">
                    <div class="row gy-5" data-aos="fade-in">
                      <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                        <h2>Witamy w <span>Spokojny poród</span></h2>
                        <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                        <div class="d-flex justify-content-center justify-content-lg-start">
                          <a href="/about" class="btn-get-started">Poznajmy się</a>
                        </div>
                      </div>
                      <div class="col-lg-6 order-1 order-lg-2">
                              <StaticImage
                                src="../images/main.webp"
                                width={1000}
                                quality={95}
                                formats={["AUTO", "WEBP"]}
                                alt="Logo"
                                className="img-fluid"
                              />
                      </div>
                    </div>
                  </div>

                  <div class="icon-boxes position-relative">
                    <div class="container position-relative">
                      <div class="row gy-4 mt-5">

                        <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                          <div class="icon-box one">
                            <h4 class="title"><a href="" class="stretched-link">O mnie</a></h4>
                          </div>
                        </div>
                        {/* <!--End Icon Box --> */}

                        <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                          <div class="icon-box two">
                            <h4 class="title"><a href="" class="stretched-link">Oferta</a></h4>
                          </div>
                        </div>
                        {/* <!--End Icon Box --> */}

                        <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                          <div class="icon-box three">
                            <h4 class="title"><a href="" class="stretched-link">Kontakt</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* <!-- End Hero Section --> */}
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)