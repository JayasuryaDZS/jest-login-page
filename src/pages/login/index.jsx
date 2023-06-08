import React,{useState} from 'react'
import style from "../../styles/login.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from "../../features/login/login";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginDetails = useSelector((state) => state.login);


  const changeFunction = (e, name) => {
    setData((prev) => {
      return {
        ...prev,
        [name] : e.target.value
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(data));
    navigate("/dashboard");
  }

  return (
    <div className={style.wrapper}>
      <div className={style.imgContainer}></div>
      <div className={style.loginContainer}>
        <div className={style.formWrapper}>
          <form onSubmit={formSubmit}>
            <span className={style.headingSpan}>Login to continue</span>
            <div className={style.inputBox}>
              <input type="email" required="required" data-testid="email" onChange={(e)=>changeFunction(e, "email")}></input>
              <span>Email</span>
            </div>
            {/* {!loginDetails.email && <span className={style.errMsg}>Email Required</span>} */}
            <div className={style.inputBox}>
              <input type="password" required="required" onChange={(e)=>changeFunction(e, "password")} data-testid="password"></input>
              <span>Password</span>
            </div>
            {/* {!loginDetails.password && <span className={style.errMsg}>Password Required</span>} */}
            <div className={style.anchorDiv}>
              <a href="#">Forgot Password?</a>
            </div>
            <input type="submit" value="Login" className={style.subBtn} data-testid="submit"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
