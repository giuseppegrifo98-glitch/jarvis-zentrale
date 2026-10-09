# Jarvis-Zentrale

Eine persönliche Kommandozentrale als lokale Web-App: Eine glühende Abendsonne hört auf dich, antwortet mit Stimme und zeigt Aufgaben, Fristen und Projekte des Tages. Alles auf Deutsch, kein eigener Server im Netz, keine Konten.

Gebaut von Giuseppe Grifo zusammen mit Claude.

## Starten (Windows, Edge)

1. `heute.beispiel.js` nach `heute.js` kopieren und die eigenen Daten eintragen.
2. `start.bat` doppelklicken. Das startet einen kleinen Server, der nur auf diesem Rechner erreichbar ist (Port 4260), und öffnet die Seite als Vollbild-App.

Voraussetzung: Python 3 und Microsoft Edge. Über `http://localhost` merkt sich Edge die Mikrofon-Freigabe, bei einer geöffneten Datei fragt es jedes Mal neu.

## Bedienen

| Was | Wie |
|---|---|
| Zuhören | Leertaste halten oder Knopf „Sprechen“ |
| Dauerhören mit Weckwort | Taste **J**, dann „Hey Jarvis …“ |
| Vorführung mit Effekten | Taste **V**, Abbruch mit **Esc** |
| Video-Modus (nur Beispieldaten) | Taste **M** oder „Jarvis, Video-Modus an“ |
| Befehle | „Bericht“, „Fristen“, „Diese Woche“, „Von gestern“, „Fokus“, „Hinweise“, „Baustellen“, „Wie spät ist es“, „Idee: …“, „Erledigt …“ |

## Eigene Show-Antworten

In `dialoge.js` stehen die Antworten für Videos. Jeder Eintrag hat ein Suchmuster (`wenn`) und einen Satz (`sage`). Dort kannst du sie ändern oder ergänzen. Der Eintrag mit `abschluss: true` ist der Schlusssatz der Vorführung.

## Datenschutz

- Deine Tagesdaten stehen in `heute.js` und bleiben auf deinem Rechner. Die Datei ist in `.gitignore`.
- Die Sprachfunktionen sind die des Browsers. In Edge werden Sprachaufnahmen zur Erkennung an Microsoft geschickt.
- Der Video-Modus zeigt und liest nur Beispieldaten vor, damit nichts Echtes im Video landet.

## Dateien

- `index.html`: die ganze Oberfläche (Sonne, Felder, Sprache, Vorführung)
- `heute.beispiel.js`: Vorlage für die Tagesdaten
- `dialoge.js`: Antworten für Videos
- `start.bat`: Start mit Mini-Server und Edge-App-Fenster
