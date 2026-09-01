# Gavvas Astro Analyzer 1.6.4 – iPhone & iPad PWA

## Neu in 1.6.4
- Der zuletzt verwendete Ort wird automatisch auf dem Gerät gespeichert und beim nächsten App-Start wieder geladen.
- iPad-Unterstützung verbessert: Hoch- und Querformat sind erlaubt, die Oberfläche nutzt größere iPad-Displays besser aus.
- Zusätzliche Apple-Touch-Icons für iPad (152 px und 167 px).
- PWA-Cache auf Version 1.6.4 aktualisiert.

## Installation auf iPhone oder iPad
1. GitHub-Pages-Seite in Safari öffnen.
2. Teilen → **Zum Home-Bildschirm**.
3. **Hinzufügen**.

## GitHub-Update
Den kompletten Inhalt dieses Ordners über die vorhandenen Projektdateien kopieren und anschließend:

```bat
cd /d C:\Astro\GAA\gavvas-astro-analyzer-1.2.0
git add .
git commit -m "Gavvas Astro Analyzer 1.6.4 - letzter Ort und iPad"
git push
```


## Neu in 1.6.4 – Meteorschauer

Die App zeigt aktuelle und die nächsten Meteorschauer mit Aktivitätszeitraum, Maximum und maximaler ZHR (Zenithal Hourly Rate). Die Intensität wird zusätzlich als sehr stark/stark/mittel/schwach eingeordnet. Die ZHR ist eine Idealrate bei dunklem Himmel und Radiant im Zenit; die tatsächlich sichtbare Rate kann niedriger sein. Grundlage: Meteorstrom-Kalender der International Meteor Organization (IMO), mit den etablierten jährlichen Aktivitätsfenstern der wichtigsten Ströme.
