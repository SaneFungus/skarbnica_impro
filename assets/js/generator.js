// Ten skrypt czeka, aż cała strona się załaduje, zanim zacznie działać.
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('generator-button');
  const resultDiv = document.getElementById('generator-sceny-wynik');

  // Sprawdzamy, czy na stronie istnieje przycisk generatora.
  if (button) {
    button.addEventListener('click', function() {
      // Upewniamy się, że dane z plików .yml zostały poprawnie wczytane.
      if (typeof emocje !== 'undefined' && typeof zawody !== 'undefined' && typeof miejsca !== 'undefined') {
        
        // Losujemy po jednym elemencie z każdej listy.
        const losowaEmocja = emocje[Math.floor(Math.random() * emocje.length)];
        const losowyZawod = zawody[Math.floor(Math.random() * zawody.length)];
        const losoweMiejsce = miejsca[Math.floor(Math.random() * miejsca.length)];

        // Tworzymy nową treść HTML do wyświetlenia.
        resultDiv.innerHTML = `
          <h3>Twoja Scena:</h3>
          <p><strong>Jesteś jako:</strong> ${losowyZawod.nazwa}</p>
          <p><strong>Odczuwasz:</strong> ${losowaEmocja.nazwa}</p>
          <p><strong>Znajdujesz się w:</strong> ${losoweMiejsce.nazwa}</p>
        `;
      } else {
        // Komunikat błędu, jeśli dane się nie załadują.
        resultDiv.innerHTML = "<p>Błąd: Nie można załadować danych. Sprawdź, czy pliki w folderze _data istnieją i mają poprawną treść.</p>";
      }
    });
  }
});
