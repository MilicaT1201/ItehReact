import { useState } from 'react'

function KontaktForma(props) {

    const [naslov, setNaslov] = useState('');
    const [email, setEmail] = useState('');
    const [poruka, setPoruka] = useState('');
    const [brojTelefona, setBrojTelefona] = useState('');



    function handleNaslov(e) {
        setNaslov(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePoruka(e) {
        setPoruka(e.target.value);
    }

    function handleBrojTelefona(e) {
        setBrojTelefona(e.target.value);
    }


    return (
        <div className="div-kontaktforma">
            <div className="forma">
                <label>Naslov poruke: </label>
                <input type="text" className="form-control mt-2 mb-3" value={naslov} onChange={handleNaslov} />
                <label>Email: </label>
                <input type="email" className="form-control mt-2 mb-3" value={email} onChange={handleEmail} />
                <label>Broj telefona: </label>
                <input type="text" className="form-control mt-2 mb-3" value={brojTelefona} onChange={handleBrojTelefona} />
                <label>Poruka: </label>
                <textarea className="form-control mt-2 mb-3" value={poruka} onChange={handlePoruka} />
                <button type="button" onClick={() => props.submit(naslov, email, brojTelefona, poruka)} className="btn btn-primary btn-lg mt-3" id="submitbutton">Pošalji</button>
            </div>
        </div>
    );
}

export default KontaktForma;
