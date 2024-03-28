let sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', function(event) {
    //preventDefault så att inte sidan laddas om varje gång man klickar ner en alert.(data rensades)
    event.preventDefault(); 

    //kallar på saveData funktionen
    saveData();

    
});

function saveData(){


    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const streetInput = document.getElementById('street');
    const cityInput = document.getElementById('city');
    const zipInput = document.getElementById('zip');


    //Namn-validering
    const name = nameInput.value.trim();
    if (name.length < 2 || name.length > 50) {
        alert('Namnet måste vara minst 2 och max 50 bokstäver.');
        return; 
    }

    //Email-validering
    //Input-typen är email i html-koden, "@" kontrolleras redan där.
    const email = emailInput.value.trim();
    if (email.length > 50){
        alert('Email får ej innehålla över 50 tecken.');
        return;
    }

    //Telefon-validering
    const phone = phoneInput.value.trim();
    //Om telnr inte matchar med någon siffra("\d"), "-" eller "{}" så får vi ett felmeddelande.
    if (!/^[\d-{}]+$/.test(phone)) {
        alert('Telefonnummer får bara innehålla siffror, "-" och "{}".');
        return; 
    }

    if (phone.length > 50) {
        alert('Telefonnummer får max vara 50 siffror.');
        return; 
    }

    //Gatunamn-validering
    const street = streetInput.value.trim();
    if (street.length < 2 || street.length > 50) {
        alert('Gatunamnet måste vara minst 2 och max 50 bokstäver.');
        return; 
    }

    //Ort-validering
    const city = cityInput.value.trim();
    if (city.length < 2 || city.length > 50) {
        alert('Ortnamn måste vara minst 2 och max 50 bokstäver.');
        return; 
    }

    //Postnr-validering
    const zip = zipInput.value.trim();
    if (zip.length != 5){
        alert('Postnummer måste vara 5 siffror')
        return;
    }


    //user objekt
    const userData = {

        name: name,
        email: email,
        phone: phone,
        street: street,
        city: city,
        zip: zip
    };

    localStorage.setItem('user', JSON.stringify(userData));

    

    //skickar oss vidare till bekräftelse-sidan
    window.location.href = 'bekraftelse.html';
}