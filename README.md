# santo-node
Bueno masomeno, node, docker, y le meti postgres que es lo que usaria.

```bash
npm init -y
```
Te hace el package.json, todas las boludeces para manejar el proyecto, desde instalar nuevas cosas hasta algun script pa que ande.

- Instalar express (para usar api facil) 
- cors (es cors :D),
- body-parser para manejar los parametros request y response,
- sequealize es un orm, 
- joi para validar data, 
- morgan: Ayuda a registrar detalles sobre las solicitudes HTTP realizadas al servidor, lo que facilita la depuración y el seguimiento del flujo de solicitudes.
- pg postgres (meti postgres, hacelo con lo que se te cante)
```bash
npm install express body-parser cors sequelize pg pg-hstore joi morgan
```
Instalando esto te cambia el package.json obvio te agrega todas las dependencias.

El proyecto yo lo haria algo asi:
- src
  - config
    - db.config.js
  - models
    - note.model.js
  - routes
    - note.routes.js
  - controllers
    - note.controller.js
  - validators
    - note.validator.js
  - app.js
  - server.js
- .env
- .gitignore
- docker-compose.yml
- Dockerfile

Despues para no tener que estar haciendo npm start de cada cosa que modificas, nodemon te actualiza el backend cada vez que guardas:
npm install --save-dev nodemon

Aca es donde toque el package.json pa que arranque con estos los scripts:
```bash
{
  "name": "santo-node",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.js", #
  "scripts": {
    "start": "node src/server.js", #
    "dev": "nodemon src/server.js" #
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    // ...
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```
Los scripts los corres con npm run, osea
```
npm run dev
```
Para hacer migraciones y usar una seed:
```
npm install --save-dev sequelize-cli
```
Va todo en .sequelizerc

Creas la carpeta seeders con:
```
npx sequelize-cli init:seeders
```

(Meti un ejemplo de como es un seed.)

Para crear el modelo en la base de datos:
```
npx sequelize-cli db:migrate
```

Para insertar las notas de prueba usando la seed:
```
npx sequelize-cli db:seed:all
```
