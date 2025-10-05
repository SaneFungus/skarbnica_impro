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
</script>
