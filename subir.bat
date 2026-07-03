@echo off
chcp 65001 > nul
echo =======================================================
echo     Iglesia Manantial de Vida - Subida Automática
echo =======================================================
echo.

set /p commit_msg="Introduce el mensaje de commit (o pulsa Intro para usar uno automático): "
if "%commit_msg%"=="" set commit_msg=Actualización automática de código Iglesia Manantial

echo.
echo [1/3] Agregando archivos al índice...
"C:\Program Files\Git\cmd\git.exe" add .

echo.
echo [2/3] Confirmando cambios (Commit)...
"C:\Program Files\Git\cmd\git.exe" commit -m "%commit_msg%"

echo.
echo [3/3] Subiendo cambios a GitHub (Push)...
"C:\Program Files\Git\cmd\git.exe" push origin main

echo.
echo =======================================================
echo     ¡Listo! Tu código está actualizado en GitHub.
echo =======================================================
echo.
pause
