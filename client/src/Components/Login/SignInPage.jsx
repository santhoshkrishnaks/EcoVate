import logo from "../../assets/logow.png";
import "./SignInPage.css"
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="signin">
    <div className="sign">
      <div className="photo">
        <img src={logo} alt="" />
      </div>
      <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
