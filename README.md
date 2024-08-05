# Retro Stand API

API para el registro de ventas de productos retro piratas como películas en DVD y videojuegos de consolas clásicas (PS1, PS2, PS3, Xbox 360, Wii, etc).

## Productos

1. Crash Bandicoot (PS1).
2. God of war II (PS2).
3. Super Smash Bross Brawl (Wii).
4. Transformers (DVD).
5. Shrek (Blu-ray).
6. Naruto Ultimate Ninja Storm 3 (PS3).
7. Naruto Ultimate Ninja Storm 2 (Xbox 360).
8. DBZ Saga de Cell (DVD).
9. Kingdom Hearts (PS2).

## Comandos

### Ejecutar aplicación

* **Paso 1:** Habilitar PostgreSQL con Docker.
```powershell
docker compose up -d
```

* **Paso 2:** Ejecutar el backend.
```powershell
npm start
```

* **Paso 3:** Ejecutar migraciones. (Solo la primera vez)
```powershell
npm run mgr:run
```

### Adicionales

* Crear una migración.
```powershell
npm run mgr:create --name="<migration-name>""
```


## Diagrama de la base de datos

Diagrama realizado con **draw.io.**

![Descripción de la imagen](/retro_stand_db.jpg "Leyenda de la imagen")

## Arquitectura

´´´txt
api -> use_case -> repository -> persistence
´´´