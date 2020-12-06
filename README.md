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
| id | method | path | description | Entorno
| ------ | ------ | ------ | ------ | ------ |
| 1 | get | /getAllItineraries | Solicita todos los itinerarios | Server |
| 2 | get | /getOneItinerary/:itinerary_id | Selecciona un itinerario | Server |
| 3 | post | /newItinerary | Detalles del itinerario | Server |
| 4 | put | /editItinerary/:itinerary_id | Editar itinerario | Server |
| 5 | delete | /deleteItinerary | Eliminar itinerario  | Server |
| 6 | post | /signup | Registro de usuario | Server |
| 7 | post | /login | Iniciar sesión usuario o admin | Server |
| 8 | get | /logout | Cierra sesión | Server |
| 9 | post | /loggedin | Verifica la sesión | Server |
| 10 | post | /:id/message | Crea valoración y comentario | Server |
| 11 | post | /:id/new-spots | Crea nuevo spot | Server |
| 13 | get | /getAllUsers | Obtiene los usuarios (solo ADMIN)| Server |
| 12 | get | /deleteUser/:user_id' | Elimina usuario (solo ADMIN)  | Server |
