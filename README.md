# Final Project
Isabel Pérez | Dreyan Franco

 ### Inicializar app con:
 ```sh
 From Server
$ npm install 
$ npm run dev
```
 ```sh
 From Client
$ create-react-app -> It was used to create client app 
$ npm start
```

### Tabla de endpoint
| id | method | path | description | Entorno |
| ------ | ------ | ------ | ------ | ------ |
| 1 | get | api/itineraries/getAllItineraries | Solicita todos los itinerarios | Server |
| 2 | get | api/itineraries/getOneItinerary/:itinerary_id | Selecciona un itinerario | Server |
| 3 | post | api/itineraries/newItinerary | Detalles del itinerario | Server |
| 4 | put | api/itineraries/editItinerary/:itinerary_id | Editar itinerario | Server |
| 5 | delete | api/itineraries/deleteItinerary | Eliminar itinerario  | Server |
| 6 | post | api/itineraries/:id/message | Crea valoración y comentario | Server |
| 7 | post | api/itineraries/:id/new-spots | Crea nuevo spot | Server |
| ------ | ------ | ------ | ------ | ------ |
| 8 | post | api/auth/signup | Registro de usuario | Server |
| 9 | post | api/auth/login | Iniciar sesión usuario o admin | Server |
| 10 | get | api/auth/logout | Cierra sesión | Server |
| 11 | post | api/auth/loggedin | Verifica la sesión | Server |
| 12 | get | api/auth/getAllUsers | Obtiene los usuarios (solo ADMIN)| Server |
| 13 | delete | api/auth/deleteUser/:user_id' | Elimina usuario (solo ADMIN)  | Server |
