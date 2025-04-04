// Najdi elementy na stránce podle jejich ID
const tlacitko = document.getElementById('tlacitko');
const zpravaElement = document.getElementById('zprava');

// Přidej "posluchače události" na tlačítko
tlacitko.addEventListener('click', function() {
    // Co se má stát po kliknutí
    zpravaElement.textContent = 'Tlačítko bylo stisknuto!';
    console.log('Tlačítko kliknuto!'); // Zpráva do konzole prohlížeče (F12)
});