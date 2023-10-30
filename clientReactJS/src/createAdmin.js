import "./css/createAdmin.css"
import "./images/icons/FVSRA_ICON.png"
import logo from "./forms/PDRMA Form 03 Property Loss Report_files/Image_001.jpg"
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import background from "./images/bg-01.jpg";
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(3)

const CreateAdmin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const hashedPassword = bcrypt.hashSync(password, salt) ;

    const navigate = useNavigate() //Like going back and forward in "history"/back from the previous or next page


    const handleSubmit = (e) => { //Handles the onSubmit action of the log
        e.preventDefault();

        let minorInjuryLogObj = {
            "username": username,
            "password": hashedPassword,
        }

        fetch(process.env.REACT_APP_FOX_VALLEY_SPECIAL_REC_ENDPOINT + '/fvsra/auth', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(minorInjuryLogObj)
        }).then(() => {

           alert("Account Created");

        })

    }

    return (

        <div>

            <form onSubmit={handleSubmit}>
                <div className="container-login100" style={{backgroundImage: `url(${background})`}}>
                    <div className="wrap-login101">

                         <span className="login100-form-title p-b-34 p-t-27">
                        <div className="greenUnderline">New Admin Account</div>
                       </span>



                <input className="input100Create" type="text" placeholder="Enter Username" name="uname" value={username} onChange={(e) => setUsername(e.target.value)} id="username"  required />
                <input className="input100Create" type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e) => setPassword(e.target.value)} id="password"  required/>

                    <div className="centerButton">
                        <button className="createbutton">Submit</button>
                    </div>

                    </div>



                    <Link to="/admin/settings">
                        <button className="LogoutButton"  >
                            Return
                        </button>
                    </Link>

                    </div>
            </form>
        </div>
    );
}

export default CreateAdmin;