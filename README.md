## First of All
Tuve que utilizar unas librerias que fueran compatibles con mi equipo por lo que para iniciar la aplicacion tiene que correr: `npm install --force`.

## Web: Getting Started
Para correr el proyecto basta con correr el comando `serve:web`. Tambien los puedes correr por separado:
  
```
"serve:api": "nx run api:serve",
"serve:web": "ng serve --open",
"serve:all": "concurrently \"npm run serve:api\" \"npm run serve:web\""
```

La app de angular se abrira en [http://localhost:4200](http://localhost:4200).

La API se mostrara en [https://mysterious-ocean-30392.herokuapp.com/api/](https://mysterious-ocean-30392.herokuapp.com/api/) con su metodos por postman. La API fue desarrollada con Nest.js 

> Note: El proyecto fue creado en una Macbook con chip M1.

## Web: Running E2E

Para poder utilizar Cypress tiene que correr el comando: 

```
npm run e2e
```

Tambien puedes utilizar el siguiente comando para ver los cambios y test de la aplicacion: 

```
nx run dashboard-e2e:e2e --watch
```
