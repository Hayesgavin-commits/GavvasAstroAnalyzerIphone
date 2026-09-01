# Gavvas Astro Analyzer 1.7.11 – Android / iPhone / iPad

Diese Version ist als Progressive Web App (PWA) für Android optimiert und bleibt mit iPhone/iPad kompatibel.

## Android installieren
1. GitHub-Pages-Seite in **Google Chrome** öffnen.
2. Im App-Hinweis auf **App installieren** tippen, falls der Button erscheint.
3. Alternativ Chrome-Menü → **App installieren** oder **Zum Startbildschirm hinzufügen**.
4. Danach startet Gavvas Astro Analyzer im Standalone-Modus mit eigenem App-Symbol.

## Neu in 1.7.7
- Android-Installationsdialog via `beforeinstallprompt`
- Android/Chrome Installationshinweis
- Maskable Icons 192 × 192 und 512 × 512
- Manifest für Android-PWA erweitert
- Hoch- und Querformat auf Android, iPhone und iPad
- bestehende Funktionen aus 1.6.4 unverändert übernommen

## GitHub Update
```bat
cd /d C:\Astro\GAA\gavvas-astro-analyzer-1.2.0
git add .
git commit -m "Gavvas Astro Analyzer 1.7.7 - Android PWA"
git push
```

Hinweis: Für eine APK/AAB im Google Play Store wäre zusätzlich ein Android-Wrapper (z. B. Capacitor) und eine signierte Android-Build-Umgebung nötig.


## Änderung 1.7.7
Das Dashboard „Die nächsten 7 Nächte“ steht jetzt direkt vor dem Bereich „Meteorschauer“.


## Layout 1.7.7
- Karte kompakter dargestellt.
- Astro-Index/Astro-Übersicht steht auf Tablet, iPad und größeren Android-Displays direkt neben der Karte.
- Auf schmalen Smartphones bleibt die Darstellung lesbar untereinander.
- Direkt nach dem Karten-/Astro-Block folgen die nächsten 7 Nächte und anschließend die Stundenanalyse.
- Meteorschauer, Favoriten und weitere Bereiche folgen danach.


## Änderungen 1.7.7
- Home-Bildschirm-Name: **Gavvas Astro Analyzer**.
- Karte im Darkmode (CARTO Dark, Datenbasis OpenStreetMap).
- Reihenfolge direkt unter Karte/Astro-Index: **Stundenanalyse → Nächste 7 Tage → Astronomische Daten → Meteore**.


## 1.7.7
- Karte konsequent im Darkmode dargestellt, weiterhin ohne API-Key.
- Dunkle Leaflet-Bedienelemente und Attribution.


## Änderung 1.7.7
Die ISS-Nachtprognose lädt die aktuellen TLE-Daten jetzt über die WhereTheISS.at-API statt direkt von CelesTrak. Dadurch funktioniert die Berechnung zuverlässiger in Android-PWA, iPhone und iPad.


## Änderung 1.7.11
- Karte auf klassische OpenStreetMap-Kartenansicht umgestellt.
- Keine topografische/Relief-Darstellung und keine Höhenlinien.
- Die künstliche Darkmode-Invertierung der Kartenkacheln wurde entfernt, damit Straßen, Orte, Grenzen und Beschriftungen in der normalen Kartenansicht klar erkennbar sind.
- Leaflet-Bedienelemente bleiben passend zum dunklen App-Dashboard gestaltet.
- PWA-Cache auf 1.7.11 erhöht.

## GitHub Update 1.7.11
```bat
cd /d C:\Astro\GAA\gavvas-astro-analyzer-1.2.0
git add .
git commit -m "Gavvas Astro Analyzer 1.7.11 - Kartenmodus"
git push
```


## 1.7.11
- Klassische OpenStreetMap-Straßenkarte (keine Topografie/kein Relief)
- Moderater Nachtmodus: heller als 1.7.5, aber sichtbar dunkler als die Standardkarte
- Sichtbare Versionsanzeige im Kopfbereich
- Cache-Busting für Manifest und Service Worker, damit Updates auf Android/iOS schneller sichtbar werden
