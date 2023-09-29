import Images from "../../Assets/Images";
import "./social.scss";

function SocialLogin({ children }) {
  return (
    <div className="sociallogin">
      <img alt="cb1" src={Images.cb1} />
      <img alt="cb2" src={Images.cb2} />
      <img alt="c3" src={Images.cb3} />
      <img alt="cb4" src={Images.cb4} />
    </div>
  );
}

export default SocialLogin;
