# Gavvas Astro Analyzer 1.6.1 – iPhone App / PWA

Diese Version ist als Progressive Web App (PWA) für das iPhone vorbereitet.

## Installation auf dem iPhone
1. Die GitHub-Pages-Seite in **Safari** öffnen.
2. Auf **Teilen** tippen.
3. **Zum Home-Bildschirm** auswählen.
4. Mit **Hinzufügen** bestätigen.

Danach erscheint Gavvas Astro Analyzer mit dem mitgelieferten App-Symbol auf dem Home-Bildschirm und startet im Standalone-Modus ohne Safari-Adressleiste.

## Neue PWA-Dateien
- `manifest.webmanifest`
- `sw.js`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`
- `favicon-32.png`

Die dynamischen Wetter-, ISS- und TLE-Abfragen bleiben online. Das große World-Atlas-Binary wird bewusst nicht im Service-Worker-Cache gespeichert.

## GitHub-Update
Den kompletten Inhalt dieses Ordners in das Repository kopieren. Wichtig: nicht nur `index.html`, sondern auch Manifest, Service Worker und Icon-Dateien.

```bat
cd /d C:\Astro\GAA\gavvas-astro-analyzer-1.2.0
git add index.html manifest.webmanifest sw.js apple-touch-icon.png icon-192.png icon-512.png favicon-32.png
git commit -m "Gavvas Astro Analyzer 1.6.1 - iPhone App PWA"
git push
```


## Änderungen 1.6.1
- Seeing und Transparenz: robuster 7Timer!-Abruf mit zweitem Endpoint; aktuelle Werte werden als Bogensekunden bzw. Prozent angezeigt.
- ISS kommende Nacht: zusätzlich maximale Elevation über dem Horizont (Grad) und Überflughöhe der ISS über der Erde (km).
- PWA-Service-Worker: neue Version und Network-first für die App-Seite, damit Updates auf dem iPhone schneller sichtbar werden.
