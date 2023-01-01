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
                      <div class="col-lg-4 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                        <h2><span>Spokojny poród</span></h2>
                        <p>Narodziny Twojego dziecka to jedno z najważniejszych wydarzeń w Waszym życiu.​</p>
                        <p>Jest wiele aspektów porodu, jak i całe jego doświadczenie, które będą miały wpływ na całe Wasze życie, na Waszą więź, na rozwój i zdrowie Twojego jeszcze nienarodzonego maleństwa.​</p>
                        <p>Jest wiele pięknych porodów, które odbywają się w atmosferze spokoju, z pełnym zaufaniem do tego naturalnego procesu. Tutaj mam dla Ciebie dobrą wiadomość: możesz zrobić wiele, aby stworzyć możliwie jak najlepsze warunki dla Twojego maleństwa, by jego przyjście na świat było dobrym i spokojnym doświadczeniem dla Was wszystkich, a ja chcę Wam pomóc to osiągnąć.​</p>
                        <p>Pozwól sobie odkryć drogę do Twojego spokojnego porodu.​</p>
                        <div class="d-flex justify-content-center justify-content-lg-start">
                          <a href="/about" class="btn-get-started">Poznajmy się</a>
                        </div>
                      </div>
                      <div class="col-lg-8 order-1 order-lg-2">
                                      <div class="icon-boxes position-relative">
                                        <div class="container position-relative">
                                          <div class="row gy-4 mt-5 hppict_mt-5">
                                            <div class="col-xl-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                              <div class="icon-box one">
                                                <h4 class="title"><a href="" class="stretched-link">O mnie</a></h4>
                                              </div>
                                            </div>
                                            {/* <!--End Icon Box --> */}

                                            <div class="col-xl-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                              <div class="icon-box two">
                                                <h4 class="title"><a href="" class="stretched-link">Oferta</a></h4>
                                              </div>
                                            </div>
                                            {/* <!--End Icon Box --> */}

                                            <div class="col-xl-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                              <div class="icon-box three">
                                                <h4 class="title"><a href="" class="stretched-link">Kontakt</a></h4>
                                              </div>
                                            </div>
                                            <div class="col-xl-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                              <div class="icon-box three">
                                                <h4 class="title"><a href="" class="stretched-link">Sklep</a></h4>
                                              </div>
                                            </div>
                                          </div>
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