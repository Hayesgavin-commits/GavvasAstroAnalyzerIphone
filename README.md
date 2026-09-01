# Gavvas Astro Analyzer 1.2.0

## Dateien für GitHub Pages

Die veröffentlichte Struktur muss so aussehen:

```
/
├── index.html
└── data/
    ├── world_atlas_2015.bin
    └── world_atlas_2015.json
```

Kopiere die beiden Dateien, die dein Konverter erzeugt hat, in den Ordner `data`.

## World Atlas

`world_atlas_2015.bin` ist das kompakte Raster aus deiner lokalen
`World_Atlas_2015.tif`. Die App berechnet daraus:

- künstliche Zenit-Himmelshelligkeit in mcd/m²
- geschätzten SQM-Wert (mag/arcsec²)
- geschätzte Bortle-Klasse 1–9

Die Bortle-Klasse ist ausdrücklich eine Näherung, weil die originale Bortle-Skala
beobachtungsbasiert ist und nicht direkt im World-Atlas-TIFF gespeichert wird.

## GitHub Pages

1. Lege ein GitHub-Repository an, z. B. `gavvas-astro-analyzer`.
2. Lade `index.html` in den Repository-Root.
3. Erzeuge dort den Ordner `data`.
4. Lade `world_atlas_2015.json` und `world_atlas_2015.bin` in `data`.
5. GitHub: Settings → Pages → Build and deployment → Deploy from a branch.
6. Branch `main`, Ordner `/ (root)` wählen und speichern.
7. Die angezeigte Pages-Adresse auf dem iPhone in Safari öffnen.
8. Safari → Teilen → „Zum Home-Bildschirm“.

Die 39,8-MB-Rasterdatei liegt danach bei GitHub Pages. Der Windows-PC wird für
die laufende Nutzung nicht mehr benötigt.
