@echo off
chcp 65001 > nul
echo =======================================================
echo     Iglesia Manantial de Vida - Subida y Despliegue
echo =======================================================
echo.

set /p commit_msg="Introduce el mensaje de commit (o pulsa Intro para usar uno automático): "
if "%commit_msg%"=="" set commit_msg=Actualización automática de código Iglesia Manantial

echo.
echo [1/4] Agregando archivos al índice...
"C:\Program Files\Git\cmd\git.exe" add .

echo.
echo [2/4] Confirmando cambios (Commit)...
"C:\Program Files\Git\cmd\git.exe" commit -m "%commit_msg%"

echo.
echo [3/4] Subiendo cambios a GitHub (Push)...
"C:\Program Files\Git\cmd\git.exe" push origin principal

echo.
echo [4/4] Publicando en Internet (GitHub Pages)...
call npm run deploy

echo.
echo =======================================================
echo     ¡Listo! Tu código está actualizado y publicado.
echo =======================================================
echo.
pause
