import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import iPhone from "../images/iphone-with-profile.png";
import logo from "../images/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      {/* <img src={logo} alt="Instagram Logo"></img> */}
      <div className="flex w-3/5">
        <img src={iPhone} alt="iPhone with Instagram Opened"></img>
      </div>
      <div className="flex flex-col w-2/5">
        <p>I will be the form!</p>
      </div>
    </div>
  );
}
