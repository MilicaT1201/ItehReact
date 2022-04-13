import KontaktForma from './KontaktForma';
import swal from 'sweetalert';

function Kontakt() {

    function submit(naslov, email, brojTelefona, poruka) {

        swal({
            title: "Da li želite da pošaljete ovu poruku?",
            text: 'Naslov poruke -> ' + naslov + '\n' +
                'Email -> ' + email + '\n' +
                'Broj telefona -> ' + brojTelefona + '\n' +
                'Poruka -> ' + poruka,
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poruka je uspešno poslata!" + '\n \n' + "Očekujte odgovor u najkraćem roku.", {
                        icon: "info",
                    });
                } else {
                    swal("Molimo popunite formu opet.");
                }
            });


    }

    return (
        <div className="div-kontakt">
            <h1 id="pso-naslov">Privatna stomatološka ordinacija - WHITE TEETH</h1>
            <KontaktForma submit={submit} />
        </div>
    );
}

export default Kontakt;
