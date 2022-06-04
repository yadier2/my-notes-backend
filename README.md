# my-notes-backend
# ...[backend server my notes]...
El servidor backend del sitema de notas. Esta documentación explica cómo configurar, iniciar y probar el servidor backend.
El proyecto esta realizado en:

- [Node.js](https://nodejs.org/es/)
- [express.js](https://expressjs.com/es/)
- [PostgreSQL](https://www.postgresql.org/)


## Programas necesarios
Para poder utilizar el proyecto en localhost en necesario clonarlo y tener algunos programas necesarios:

- [Nodejs](https://nodejs.org/es/download/) v12.18.0 o Superior.
- IDE de desarrollo de tu comodidad Ej. [VS Code](https://code.visualstudio.com/download)
- [PostMan](https://www.postman.com/downloads/) para puebas de APIS. (Opcional)
- [Git](https://git-scm.com/downloads) para poder gestionar las versiones.

## Intalación
Ya clonado el proyecto es necesario instalar todas las dependencias con el comando:

```bash
npm install
```

## Variables de entorno
El servidor back-end requiere que se establezcan algunas variables de entorno para funcionar correctamente.
Para confugurr lasv variables puede sar un archivo `.env` ubicado en la raíz del backend. 
- *PORT=
- *DB_USER=''
- *DB_PASSWORD=''
- *DB_HOST=''
- *DB_NAME=''
- *DB_PORT=''
- *NODE_ENV=''
- *DATABASE_URL=''

## Migraciones
Para definir las tablas y relaciones de la base de datos utilizamos migraciones. 
Una vez que haya configurado correctamente su base da datos ejecute el siguente comando.

```bash
npm run migrations:run
```

## Lanzamiento del servidor backend

```bash
npm run dev
```

### Autor

Desarrollo realizado por [YADIER](https://github.com/yadier2)
