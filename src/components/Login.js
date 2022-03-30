import LoginForm from "./LoginForm";
import { useNavigate } from 'react-router';


function Login(props) {

    const pacijenti = props.spisak;
    const navigate = useNavigate();


    function prijava(username, password) {
        for (let i = 0; i < pacijenti.length; i++) {
            if (pacijenti[i].username === username && pacijenti[i].password === password) {
                alert("Uspešno ste se ulogovali!")
                navigate('/kontakt-strana')
                return;
            }
        }
        alert("Pogrešan username ili password! Molimo pokušajte ponovo!")
    }

    return (
        <div className="div-login">
            <h1 id="pso-naslov">Privatna stomatološka ordinacija - WHITE TEETH</h1>
            <h1 id="login-naslov">Login</h1>
            <LoginForm login={prijava} />
        </div>
    );
}

export default Login;