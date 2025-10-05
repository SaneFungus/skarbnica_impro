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

<!-- Ten fragment kodu jest niewidoczny, ale kluczowy. Przekazuje dane z plików .yml do skryptu JavaScript. -->
<script>
  const emocje = {{ site.data.emocje | to_json }};
  const zawody = {{ site.data.zawody | to_json }};
  const miejsca = {{ site.data.miejsca | to_json }};
</script>
