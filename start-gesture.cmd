@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is required to run the A24 gallery.
  pause
  exit /b 1
)

start "A24 Gallery Server" /min cmd /c "node serve.cjs"
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:4327/"
