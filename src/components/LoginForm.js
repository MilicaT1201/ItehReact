import { useState } from 'react'


function LoginForm(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(e) {
        setUsername(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }


    return (
        <div className="div-loginform">
            <div className="loginforma">
                <input type="text" className="form-control mt-4" value={username} onChange={handleUsername} placeholder="Unesite username..." />
                <input type="password" className="form-control mt-3 mb-3" value={password} onChange={handlePassword} placeholder="Unesite password..." />
                <button onClick={() => props.login(username, password)} id="loginbutton" className="btn btn-primary">Login</button>
            </div>
        </div>
    );
}

export default LoginForm;