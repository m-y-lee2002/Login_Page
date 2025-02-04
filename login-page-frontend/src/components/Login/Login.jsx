import LoginForm from "./LoginForm";
import './LoginStyles/Login.css';
const Login = ()=>{
    return(
        <div className="login_container">
            <h2 id="login_form_header">Login</h2>
            <LoginForm id="login_form_component"/>
        </div>
    )
}
export default Login