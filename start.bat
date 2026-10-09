@echo off
rem Startet den Mini-Server (nur dieser Rechner, kein Internet) und öffnet die Kommandozentrale als App.
rem Über http://localhost merkt sich Edge die Mikrofon-Freigabe; bei einer Datei fragt es jedes Mal neu.
cd /d "%~dp0"
start "Kommandozentrale-Server" /min python -m http.server 4260 --bind 127.0.0.1
timeout /t 2 /nobreak >nul
start "" msedge --app=http://localhost:4260/index.html --start-fullscreen --no-first-run --user-data-dir="%~dp0profil" --use-fake-ui-for-media-stream
