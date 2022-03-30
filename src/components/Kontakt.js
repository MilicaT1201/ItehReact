import KontaktForma from './KontaktForma';

function Kontakt() {

    function submit(naslov, email, poruka) {
        console.log('Naslov ->  ' + naslov);
        console.log('Email ->  ' + email);
        console.log('Poruka -> ' + poruka);
    }

    return (
        <div className="div-kontakt">
            <h1 id="pso-naslov">Privatna stomatološka ordinacija - WHITE TEETH</h1>
            <KontaktForma submit={submit} />
        </div>
    );
}

export default Kontakt;
