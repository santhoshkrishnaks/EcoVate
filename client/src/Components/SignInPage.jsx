import logo from "../assets/logow.png";
import "../Components/SignInPage.css";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="signin">
      <div className="photo">
        <img src={logo} alt="" />
      </div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
