import Logo from "./images/SpecialRecLogo.png";
import "./css/admin.css"
import background from "./images/bg-01.jpg";
import Employee from "./Employee";
import {Link} from "react-router-dom";


const SubmissionPage = () => {




    return (

        <div className="limiter">
            <div className="container-login100" style={{backgroundImage: `url(${background})`}}>
                <div className="wrap-login100">
                    <div className="login100-form validate-form">
              <span className="login100-form-logo">
                <img src={Logo} width={120} height={120}/>
              </span>
                        <span className="login100-form-title p-b-34 p-t-27">
                <div className="greenUnderline">Form Submitted</div>
              </span>
                        <div className="container-login100-form-btn">
                            <Link to="/Employee">
                            <button className="custombutton">
                                Home Page
                            </button>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmissionPage;