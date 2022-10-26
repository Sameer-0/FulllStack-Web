import "./navbar.css";
import {faFilter, faSearch, faTextHeight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <header>
      <div className="header">
        <div className=" row m-0 d-flex align-items-center">
          <div className="col-md-5 col-sm-12">
            <div className="nav-items row justify-content-center align-items-center">
              <a href="/" className="col-md-3 col-sm-3 d-flex justify-content-center">
                <li>
                  <div className="box-1">
                    <div className="btn btn-one">
                      <span>HOME</span>
                    </div>
                  </div>
                </li>
              </a>
              <a href="/" className="col-md-3 col-sm-3 d-flex justify-content-center">
                <li>
                  <div className="box-1">
                    <div className="btn btn-one">
                      <span>About</span>
                    </div>
                  </div>
                </li>
              </a>
              <a href="/" className="col-md-3 col-sm-3 d-flex justify-content-center">
                <li>
                  <div className="box-1">
                    <div className="btn btn-one">
                      <span>Products</span>
                    </div>
                  </div>
                </li>
              </a>
              <a href="/" className="col-md-3 col-sm-3 d-flex justify-content-center">
                <li>
                  <div className="box-1">
                    <div className="btn btn-one">
                      <span>Contact</span>
                    </div>
                  </div>
                </li>
              </a>
            </div>
          </div>
          <div className="container d-flex justify-content-end align-items-center col-md-3">
            <a href="/" className="col-md-3 col-sm-12 mx-1">
              <li>
                <div className="box-1">
                  <div className="btn btn-one">
                    <span>Login</span>
                  </div>
                </div>
              </li>
            </a>
            <a href="/" className="col-md-3 col-sm-12 mx-1">
              <li>
                <div className="box-1">
                  <div className="btn btn-one">
                    <span>Register</span>
                  </div>
                </div>
              </li>
            </a>
          </div>
          <div className="col-md-3 d-flex justify-content-end pe-5">
            <a href="/" className="logo">
              {/*
                <!-- <div className="d-flex justify-content-center align-items-center" style="cursor: pointer;"> --> */}
              <img src="/icons/logo.png" height="80px" alt="Logo" />
              {/*
                <!-- </div> --> */}
            </a>
          </div>
        </div>
      </div>
      <div className="lower-header d-flex justify-content-center pt-3">
        <h2>
          Genuine price, great quality and amazing taste. What else do you need?
        </h2>
      </div>
      <div className="headerSearch d-flex justify-content-center align-items-center">
        <div className="headerSearchItem">
          <input type="text" placeholder="Search" className="headerSearchInput" />
          <FontAwesomeIcon icon={faSearch} className="headerIcon"/>
        </div>
        <div className="headerSearchItem">
          <span>Search By Category</span>
          <FontAwesomeIcon icon={faFilter} className="headerIcon"/>
        </div>
        <div className="headerSearchItem">
          <span>Search By Name</span>
          <FontAwesomeIcon icon={faTextHeight} className="headerIcon"/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
