import Login from "./Login";

function Pocetna() {

    const pacijenti = [
        { id: 1, imePrezime: 'Milica Todorovic', username: 'mt1', password: '123' },
        { id: 2, imePrezime: 'Vesna Savkovic', username: 'vs1', password: '456' },
        { id: 3, imePrezime: 'Dragan Petrovic', username: 'dp1', password: '789' },
    ];

    return (
        <div className="div-pocetna">
            <Login spisak={pacijenti} />
        </div>
    );
}

export default Pocetna;
