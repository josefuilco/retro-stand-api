# Retro Stand API

API para el registro de ventas de productos retro piratas como películas en DVD y videojuegos de consolas clásicas (PS1, PS2, PS3, Xbox 360, Wii, etc).

## Commands

* Habilitar PostgreSQL con Docker.
```powershell
docker compose up -d
```

* Ejecutar el backend.
```powershell
npm start
```

* Crear una migración.
```powershell
npm run mgr:create --name=<migration-name>
#npm run mgr:create --name=InsertCategoriesAndSubcategories
```
