---
layout: default
title: Generator Scen
---

## Generator Scen Improwizacyjnych

Kliknij przycisk poniżej, aby wylosować unikalny scenariusz do Twojej następnej improwizacji!

<button id="generator-button">GENERUJ SCENĘ</button>

<div id="generator-sceny-wynik">
  <p>Twoja scena pojawi się tutaj...</p>
</div>

<!-- Poprawka: Zmieniliśmy 'const' na 'var', aby zapewnić globalną widoczność zmiennych dla skryptu zewnętrznego. -->
<script>
  var emocje = {{ site.data.emocje | to_json }};
  var zawody = {{ site.data.zawody | to_json }};
  var miejsca = {{ site.data.miejsca | to_json }};

  document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('generator-button');
    const resultDiv = document.getElementById('generator-sceny-wynik');

    if (button) {
      button.addEventListener('click', function() {
        if (typeof emocje !== 'undefined' && typeof zawody !== 'undefined' && typeof miejsca !== 'undefined' && emocje.length > 0 && zawody.length > 0 && miejsca.length > 0) {
          const losowaEmocja = emocje[Math.floor(Math.random() * emocje.length)];
          const losowyZawod = zawody[Math.floor(Math.random() * zawody.length)];
          const losoweMiejsce = miejsca[Math.floor(Math.random() * miejsca.length)];

          resultDiv.innerHTML = `
            <h3>Twoja Scena:</h3>
            <p><strong>Jesteś jako:</strong> ${losowyZawod.nazwa}</p>
            <p><strong>Odczuwasz:</strong> ${losowaEmocja.nazwa}</p>
            <p><strong>Znajdujesz się w:</strong> ${losoweMiejsce.nazwa}</p>
          `;
        } else {
          resultDiv.innerHTML = "<p>Błąd: Nie można załadować danych. Sprawdź, czy pliki w folderze _data istnieją i mają poprawną treść.</p>";
        }
      });
    }
  });
</script>
