import Logo from "./images/SpecialRecLogo.png";
import background from "./images/bg-01.jpg";
 import "./css/util.css"
 import "./css/index.css"
 import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css"
 import "./fonts/iconic/css/material-design-iconic-font.min.css"
import { Link } from "react-router-dom";

const LoginPage = () => {
    return ( 
        <div className="limiter">
        <div className="container-login100" style={{backgroundImage: `url(${background})`}}>
          <div className="wrap-login101">
            <div className="login100-form validate-form">
              <span className="login100-form-logo">
                <img src={Logo} width={120} height={120} />
              </span>
              <span className="login100-form-title p-b-34 p-t-27">
                <div className="greenUnderline">Log in</div>
              </span>
              <div className="wrap-input100 validate-input" data-validate="Enter username">
                <input className="input100" type="text" name="username" placeholder="Username" />
                <span className="focus-input100" data-placeholder="&#xf207;" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="pass" placeholder="Password" />
                <span className="focus-input100" data-placeholder="&#xf191;" />
              </div>
              <div className="container-login100-form-btn">

                <Link to="/Employee"> 
                <button className="custombutton" onclick="window.location.href='/page2'">
                  Login
                </button>
                </Link>
                
              </div>
              <div className="container-login100-form-btn">

              <Link to="/Admin">
                <button className="custombutton" onclick="window.location.href = 'admin.html';">
                  (Temp) Admin
                </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default LoginPage;