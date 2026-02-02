import { useAuth } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";


const Login = () => {

    const {setIsAuthenticated} = useAuth();
    const navigate = useNavigate();

    const handleLogin = ()=>{
        setIsAuthenticated(true);
        navigate("/");
    }

    return (
        <>
        <h2>Login</h2>
        <button onClick={handleLogin} > Login to EcoTrack</button>

        </>
    )

}
;

export default Login;
