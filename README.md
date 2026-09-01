# Gavvas Astro Analyzer 1.7.1 – Android / iPhone / iPad

Diese Version ist als Progressive Web App (PWA) für Android optimiert und bleibt mit iPhone/iPad kompatibel.

## Android installieren
1. GitHub-Pages-Seite in **Google Chrome** öffnen.
2. Im App-Hinweis auf **App installieren** tippen, falls der Button erscheint.
3. Alternativ Chrome-Menü → **App installieren** oder **Zum Startbildschirm hinzufügen**.
4. Danach startet Gavvas Astro Analyzer im Standalone-Modus mit eigenem App-Symbol.

## Neu in 1.7.1
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
git commit -m "Gavvas Astro Analyzer 1.7.1 - Android PWA"
git push
```

Hinweis: Für eine APK/AAB im Google Play Store wäre zusätzlich ein Android-Wrapper (z. B. Capacitor) und eine signierte Android-Build-Umgebung nötig.


## Änderung 1.7.1
Das Dashboard „Die nächsten 7 Nächte“ steht jetzt direkt vor dem Bereich „Meteorschauer“.
