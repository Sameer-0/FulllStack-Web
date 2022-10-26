import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
   <>
        <div className="banner">
        <Navbar />
        <section>
            <div className="main-content">
                {/* <div className="main-container row">
                    <div className="col-md-6">

                    </div>
                    <div className="caption col-md-6">
                        <h1>Genuine price,</h1>
                        <h1>great quality and amazing taste.</h1>
                        <h1> What else do you need?</h1>
                    </div>
                </div> */}
            </div>
        </section>
        <footer>
            <div className="footer">

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved 
                                {/* <a href="/">Ghar KI Bakery</a>. */}
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="d-flex justify-content-end">
                                <ul className="social-icons">
                                    <li><a className="instagram"
                                            href="https://instagram.com/gharkibakery2021?igshid=YmMyMTA2M2Y="><i
                                                className="fa fa-brands fa-instagram"></i></a></li>
                                    {/* <!-- <li><a className="facebook" href="/"><i className="fa fa-brands fa-facebook"></i></a></li> --> */}
                                    <li><a className="whatsapp" href="https://wa.link/etfsks"><i
                                                className="fa fa-brands fa-whatsapp"></i></a></li>
                                    {/* <!-- <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li> --> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </footer>
    </div>
   </>
  )
}

export default Home
