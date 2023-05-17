import React, { useState } from "react";
import "./loginform.css"
import daniel from "../../assets/daniel.jpg"
import twitter from "../../assets/twitter.svg"
import facebook from "../../assets/facebook.svg"
import linkedin from "../../assets/linkedin.svg"


const LoginForm = () => {
    const [loginForm, setLoginForm] = useState();

    return (
        <section>
            <div className="imgBx">
                <img src={daniel} className="" alt="" />
            </div>
            <div className="contentBx">
             <div className="formBx">
                <h2>Create a Secure Account</h2>
                <text>Welcome to the future of Real Estate Investments</text>
                <form>
                    <div className="inputBx">
                        <span>Email</span>
                        <input type="email" placeholder="...@gmail" value="" />
                    </div>
                    <div className="inputBx">
                        <span>Password</span>
                        <input type="password" placeholder="vfgsjq32!" value="" />
                        <text>Must contain capital letter and special characters eg.!@#$%*&-</text>
                    </div>
                    <div className="inputBx">
                        <span>Confirm Password</span>
                        <input type="password" placeholder="vfgsjq32!" value="" />
                        <text>Must contain capital letter and special characters eg.!@#$%*&-</text>
                    </div>
                    <div className="remember">
                        <label><input type="checkbox" name="" /> Remember me</label>
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Sign in" name="" />
                    </div>
                    <div className="inputBx">
                        <p>Already have an account? <a href="Sign up" rel="">Sign up</a></p>
                    </div>
                </form>
                <h3>Login with social media</h3>
                <ul className="media">
                    <li><img src={twitter} alt=""/></li>
                    <li><img src={facebook} alt=""/></li>
                    <li><img src={linkedin} alt=""/></li>
                </ul>
             </div>
            </div>
        </section>
    )
}

export default LoginForm