import { Link } from "react-router-dom";
import Images from "../../Assets/Images";
import SocialLogin from "../../Components/socialLogin";
import "./login.scss";

function Loginpage() {
  return (
    <div className="login">
      <div className="container">
        <div className="inputcomponets">
          <div className="components">
            <h1 className="signin">Sign In</h1>
            <div className="createaaccount-div">
              <label>New user?</label>
              <Link to="/" className="">
                Create a account
              </Link>
            </div>
            <div className="inputs">
              <input className="form-input" placeholder="Username or email" />
              <input
                className="form-input"
                type={"password"}
                placeholder="Password"
              />
              <div className="KeepMesignindiv">
                <input
                  type="checkbox"
                  id="KeepMesignin"
                  name="KeepMesignin"
                  className="KeepMesignin"
                />
                <label htmlFor="KeepMesignin"> Keep Me sign in</label>
              </div>
              <Link to={"/home"} className="signinbtn" type="submit">
                Sign In
              </Link>
            </div>

            <div>
              <span className="line">
                <h2>
                  <span>Or Sign In With</span>
                </h2>
              </span>
            </div>
            <SocialLogin />
          </div>
        </div>

        <div className="logo-img">
          <img alt="Illustration" src={Images.Illustration} />{" "}
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
