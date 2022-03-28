import "./App.css";

function App() {
  return (
    <>
      <header role="banner" id="fh5co-header">
        <div className="container">
          {/* <!-- <div className="row"> --> */}
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              {/* <!-- Mobile Toggle Menu Button --> */}
              <a
                href="#"
                className="js-fh5co-nav-toggle fh5co-nav-toggle"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <i></i>
              </a>
              <a className="navbar-brand" href="index.html">
                Cubainsideout
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="active">
                  <a href="#" data-nav-section="home">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="work">
                    <span>Trabajos</span>
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="testimonials">
                    <span>Testimonios</span>
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="services">
                    <span>Servicios</span>
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="about">
                    <span>Nosotros</span>
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="contact">
                    <span>Contacto</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* <!-- </div> --> */}
        </div>
      </header>
      {/* Section 2 */}
      <section
        id="fh5co-home"
        data-section="home"
        data-stellar-background-ratio="0.5"
        className="full_image_1"
      >
        <div className="gradient"></div>
        <div className="container">
          <div className="text-wrap">
            <div className="text-inner">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h1 className="to-animate">Haz solo lo que amas.</h1>
                  {/* <h2 className="to-animate">
                    Elate is a Free HTML5 Bootstrap Template Released Under{" "}
                    <a
                      href="http://creativecommons.org/licenses/by/3.0/"
                      target="_blank"
                    >
                      Creative Commons 3.0
                    </a>
                  </h2> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slant"></div>
      </section>
      <section id="fh5co-intro">
        <div className="container">
          <div className="row row-bottom-padded-lg ">
            <div className="fh5co-block to-animate ">
              <div className="overlay-darker full_image_2"></div>
              <div className="overlay"></div>
              <div className="fh5co-text">
                <i className="fh5co-intro-icon icon-bulb"></i>
                <h2>Plan</h2>
                <p>
                  There's a sign on the wall, But she wants to be sure 'Cause
                  you know sometimes words have two meanings.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Get In Touch
                  </a>
                </p>
              </div>
            </div>
            <div className="fh5co-block to-animate full_image_2">
              <div className="overlay-darker"></div>
              <div className="overlay"></div>
              <div className="fh5co-text">
                <i className="fh5co-intro-icon icon-wrench"></i>
                <h2>Develop</h2>
                <p>
                  In a tree by the brook. There's a songbird who sings.
                  Sometimes all of our thoughts are misgiving, it makes me
                  wonder.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Click Me
                  </a>
                </p>
              </div>
            </div>
            <div className="fh5co-block to-animate img_10">
              <div className="overlay-darker"></div>
              <div className="overlay"></div>
              <div className="fh5co-text">
                <i className="fh5co-intro-icon icon-rocket"></i>
                <h2>Launch</h2>
                <p>
                  There's a feeling I get. When I look to the west, And my
                  spirit is crying for leaving. In my thoughts I have seen
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Why Us?
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row watch-video text-center to-animate">
            <span>Watch the video</span>

            <a
              href="https://youtu.be/bUTwpk7bU1M"
              className="popup-vimeo btn-video"
            >
              <i className="icon-play2"></i>
            </a>
          </div>
        </div>
      </section>
      {/*Fin de seccion 2*/}
      {/* Inicio seccion 3*/}
      <section id="fh5co-work" data-section="work">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-center">
              <h2 className="to-animate">Trabajos</h2>
              <div className="row">
                <div className="col-md-8 col-md-offset-2 subtext to-animate">
                  <h3>
                    If there's a bustle in your hedgerow. Don't be alarmed now.
                    It's just a spring clean for the May queen.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-bottom-padded-sm">
            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href="images/work_1.jpg"
                className="fh5co-project-item image-popup to-animate"
              >
                <img
                  src="images/work_1.jpg"
                  alt="Image"
                  className="img-responsive"
                />
                <div className="fh5co-text">
                  <h2>Project 1</h2>
                  <span>Branding</span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href="images/work_2.jpg"
                className="fh5co-project-item image-popup to-animate"
              >
                <img
                  src="images/work_2.jpg"
                  alt="Image"
                  className="img-responsive"
                />
                <div className="fh5co-text">
                  <h2>Project 2</h2>
                  <span>Web</span>
                </div>
              </a>
            </div>

            <div className="clearfix visible-sm-block"></div>

            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href="images/work_3.jpg"
                className="fh5co-project-item image-popup to-animate"
              >
                <img
                  src="images/work_3.jpg"
                  alt="Image"
                  className="img-responsive"
                />
                <div className="fh5co-text">
                  <h2>Project 3</h2>
                  <span>Web</span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href="images/work_4.jpg"
                className="fh5co-project-item image-popup to-animate"
              >
                <img
                  src="images/work_4.jpg"
                  alt="Image"
                  className="img-responsive"
                />
                <div className="fh5co-text">
                  <h2>Project 4</h2>
                  <span>UI/UX</span>
                </div>
              </a>
            </div>

            <div className="clearfix visible-sm-block"></div>

            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href="images/work_5.jpg"
                className="fh5co-project-item image-popup to-animate"
              >
                <img
                  src="images/work_5.jpg"
                  alt="Image"
                  className="img-responsive"
                />
                <div className="fh5co-text">
                  <h2>Project 1</h2>
                  <span>Photography</span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href="images/work_6.jpg"
                className="fh5co-project-item image-popup to-animate"
              >
                <img
                  src="images/work_6.jpg"
                  alt="Image"
                  className="img-responsive"
                />
                <div className="fh5co-text">
                  <h2>Project 2</h2>
                  <span>Illustration</span>
                </div>
              </a>
            </div>

            <div className="clearfix visible-sm-block"></div>

            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href="images/work_7.jpg"
                className="fh5co-project-item image-popup to-animate"
              >
                <img
                  src="images/work_7.jpg"
                  alt="Image"
                  className="img-responsive"
                />
                <div className="fh5co-text">
                  <h2>Project 3</h2>
                  <span>Web</span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href="images/work_8.jpg"
                className="fh5co-project-item image-popup to-animate"
              >
                <img
                  src="images/work_8.jpg"
                  alt="Image"
                  className="img-responsive"
                />
                <div className="fh5co-text">
                  <h2>Project 4</h2>
                  <span>Sketch</span>
                </div>
              </a>
            </div>

            <div className="clearfix visible-sm-block"></div>

            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href="images/work_1.jpg"
                className="fh5co-project-item image-popup to-animate"
              >
                <img
                  src="images/work_1.jpg"
                  alt="Image"
                  className="img-responsive"
                />
                <div className="fh5co-text">
                  <h2>Project 2</h2>
                  <span>Illustration</span>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center to-animate">
              <p>
                * Demo images from{" "}
                <a href="http://plmd.me/" target="_blank">
                  plmd.me
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Fin Section 3 */}
      {/* Inicio Seccion 4 */}
      <section id="fh5co-testimonials" data-section="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-center">
              <h2 className="to-animate">Testimonios</h2>
              <div className="row">
                <div className="col-md-8 col-md-offset-2 subtext to-animate">
                  <h3>
                    Yes, there are two paths you can go by but in the long run,
                    There's still time to change the road you're on!
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box-testimony">
                <blockquote className="to-animate-2">
                  <p>
                    &ldquo;Beyond the horizon of the place we lived when we were
                    young, In a world of magnets and miracles. Our thoughts
                    strayed constantly and without boundary, The ringing of the
                    division bell had begun.&rdquo;
                  </p>
                </blockquote>
                <div className="author to-animate">
                  <figure>
                    <img src="images/person1.jpg" alt="Person" />
                  </figure>
                  <p>
                    Jean Doe, CEO <a href="#">FREEHTML5.co</a>{" "}
                    <span className="subtext">Creative Director</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-testimony">
                <blockquote className="to-animate-2">
                  <p>
                    &ldquo; Along the Long Road and on down the Causeway, Do
                    they still meet there by the Cut? There was a ragged band
                    that followed in our footsteps. Running before times took
                    our dreams away. Leaving the myriad small creatures trying
                    to tie us to the ground. To a life consumed by slow
                    decay.&rdquo;
                  </p>
                </blockquote>
                <div className="author to-animate">
                  <figure>
                    <img src="images/person2.jpg" alt="Person" />
                  </figure>
                  <p>
                    John Doe, Senior UI <a href="#">FREEHTML5.co</a>{" "}
                    <span className="subtext">Creative Director</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="box-testimony">
                <blockquote className="to-animate-2">
                  <p>
                    &ldquo; The grass was greener. The light was brighter. When
                    friends surrounded. The nights of wonder. &rdquo;
                  </p>
                </blockquote>
                <div className="author to-animate">
                  <figure>
                    <img src="images/person3.jpg" alt="Person" />
                  </figure>
                  <p>
                    Chris Nash, Director <a href="#">FREEHTML5.co</a>{" "}
                    <span className="subtext">Creative Director</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fin seccion 4 */}
      {/* Inicio seccion 5 */}
      <section id="fh5co-services" data-section="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-left">
              <h2 className=" left-border to-animate">Servicios</h2>
              <div className="row">
                <div className="col-md-8 subtext to-animate">
                  <h3>
                    Encumbered forever by desire and ambition. There's a hunger
                    still unsatisfied!
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 fh5co-service to-animate">
              <i className="icon to-animate-2 icon-anchor"></i>
              <h3>Brand &amp; Strategy</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean
              </p>
            </div>
            <div className="col-md-6 col-sm-6 fh5co-service to-animate">
              <i className="icon to-animate-2 icon-layers2"></i>
              <h3>Web &amp; Interface</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean
              </p>
            </div>

            <div className="clearfix visible-sm-block"></div>

            <div className="col-md-6 col-sm-6 fh5co-service to-animate">
              <i className="icon to-animate-2 icon-video2"></i>
              <h3>Photo &amp; Video</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean
              </p>
            </div>
            <div className="col-md-6 col-sm-6 fh5co-service to-animate">
              <i className="icon to-animate-2 icon-monitor"></i>
              <h3>CMS &amp; eCommerce</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Fin seccion 5 */}
      {/* Inicio seccion 6 */}
      <section id="fh5co-about" data-section="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-center">
              <h2 className="to-animate">Nosotros</h2>
              <div className="row">
                <div className="col-md-8 col-md-offset-2 subtext to-animate">
                  <h3>
                    Our weary eyes still stray to the horizon. Though down this
                    road we've been so many times.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="fh5co-person text-center to-animate">
                <figure>
                  <img src="images/person1.jpg" alt="Image" />
                </figure>
                <h3>Jarvis Miranda</h3>
                <span className="fh5co-position">Full Stack Developer</span>
                <p>
                  Software Engineer, Knowledge of Java, Javascript, React.js,
                  Angular, Vue.js, PHP, MySQL, SQLServer, CSS, HTML
                </p>
                <ul className="social social-circle">
                  <li>
                    <a href="#">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jarvis-miranda-74896389"
                      target="_blank"
                    >
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/kaiser5474" target="_blank">
                      <i className="icon-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fh5co-person text-center to-animate">
                <figure>
                  <img src="images/person2.jpg" alt="Image" />
                </figure>
                <h3>Orsanhec Plaza</h3>
                <span className="fh5co-position">Community Manager</span>
                <p>
                  Lic. en Comunicación Social. Más de 17 años de experiencia
                  profesional en los campos de periodismo, Community Manager,
                  fotografía, inglés, emprendimiento...
                </p>
                <ul className="social social-circle">
                  <li>
                    <a href="https://www.linkedin.com/in/orsanhec">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fh5co-person text-center to-animate">
                <figure>
                  <img src="images/person3.jpg" alt="Image" />
                </figure>
                <h3>Larry Ben</h3>
                <span className="fh5co-position">Web Designer</span>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts
                </p>
                <ul className="social social-circle">
                  <li>
                    <a href="#">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fin seccion 6 */}
      {/* Inicio seccion 7 */}
      <section
        id="fh5co-counters full_image_1"
        data-stellar-background-ratio="0.5"
      >
        <div className="fh5co-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-center to-animate">
              <h2>Fun Facts</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="fh5co-counter to-animate">
                <i className="fh5co-counter-icon icon-briefcase to-animate-2"></i>
                <span
                  className="fh5co-counter-number js-counter"
                  data-from="0"
                  data-to="89"
                  data-speed="5000"
                  data-refresh-interval="50"
                >
                  89
                </span>
                <span className="fh5co-counter-label">Finished projects</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="fh5co-counter to-animate">
                <i className="fh5co-counter-icon icon-code to-animate-2"></i>
                <span
                  className="fh5co-counter-number js-counter"
                  data-from="0"
                  data-to="2343409"
                  data-speed="5000"
                  data-refresh-interval="50"
                >
                  2343409
                </span>
                <span className="fh5co-counter-label">Line of codes</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="fh5co-counter to-animate">
                <i className="fh5co-counter-icon icon-cup to-animate-2"></i>
                <span
                  className="fh5co-counter-number js-counter"
                  data-from="0"
                  data-to="1302"
                  data-speed="5000"
                  data-refresh-interval="50"
                >
                  1302
                </span>
                <span className="fh5co-counter-label">Cup of coffees</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="fh5co-counter to-animate">
                <i className="fh5co-counter-icon icon-people to-animate-2"></i>
                <span
                  className="fh5co-counter-number js-counter"
                  data-from="0"
                  data-to="52"
                  data-speed="5000"
                  data-refresh-interval="50"
                >
                  52
                </span>
                <span className="fh5co-counter-label">Happy clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fin seccion 7 */}
      {/* Inicio seccion 8 */}
      <section id="fh5co-contact" data-section="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-center">
              <h2 className="to-animate">Get In Touch</h2>
              <div className="row">
                <div className="col-md-8 col-md-offset-2 subtext to-animate">
                  <h3>
                    Hello? Hello? Hello? Is there anybody in there? Just nod if
                    you can hear me. Is there anyone at home?{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-6 to-animate">
              <h3>Información de Contacto</h3>
              <ul className="fh5co-contact-info">
                <li className="fh5co-contact-address ">
                  <i className="icon-home"></i>
                  170502 De Las Hortensias <br />
                  Quito, Pichincha, Ecuador
                </li>
                <li>
                  <i className="icon-phone"></i> (+593) 0963959520
                </li>
                <li>
                  <i className="icon-envelope"></i>info@yourmail.co
                </li>
                {/* <li>
                  <i className="icon-globe"></i> <a href="#">freehtml5.co</a>
                </li> */}
              </ul>
            </div>

            <div className="col-md-6 to-animate">
              <h3>Contáctenos</h3>
              <div className="form-group ">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  className="form-control"
                  placeholder="Nombre"
                  type="text"
                />
              </div>
              <div className="form-group ">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="form-group ">
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  className="form-control"
                  placeholder="Teléfono"
                  type="text"
                />
              </div>
              <div className="form-group ">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  name=""
                  id="message"
                  cols="30"
                  rows="5"
                  className="form-control"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <div className="form-group ">
                <input
                  className="btn btn-primary btn-lg"
                  value="Enviar Mensaje"
                  type="submit"
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* Fin seccion 8 */}
      {/* INicio Footer */}
      <footer id="footer" role="contentinfo">
        <a href="#" className="gotop js-gotop">
          Ir<i className="icon-arrow-up2">Inicio</i>
        </a>
        <div className="container">
          <div className="">
            <div className="col-md-12 text-center">
              <p>
                &copy; Cubainsideout. All Rights Reserved. <br />
                Created by <a href="#">Cubainsideout</a>{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="social social-circle">
                <li>
                  <a
                    href="https://www.linkedin.com/company/cubainsideout"
                    target="_blank"
                    noreferrer
                  >
                    <i className="icon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Fin Footer */}
    </>
  );
}

export default App;
