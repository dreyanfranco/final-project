const mongoose = require('mongoose')
const Itineraries = require('../models/itinerary.model')
const User = require('../models/user.model')

const dbtitle = 'travel'
mongoose.connect(`mongodb://localhost/${dbtitle}`)

Itineraries.collection.drop()
User.collection.drop()

const itineraries = [
    {
        name: '3 días en Oporto',
        description: 'En esta lista hemos reunido lo imprescindible para que aproveches el tiempo al máximo en esta bonita ciudad donde desemboca el río Duero.',
        itineraryImage: 'https://static7lonelyplanetes.cdnstatics.com/sites/default/files/styles/max_1300x1300/public/fotos/portugal_oporto_duero_shutterstockrf_262697807_sean_pavone_shutterstock.jpg?itok=weUKEf4N',
        cityLocation: {
            type: 'Point',
            coordinates: [41.158071958696496, -8.62913418093418]
        },
        duration: '3 días',
        owner: '5fcbc6afbee1e9784858e58c',
        spots: [
            {
                name: 'Torre de los clérigos',
                description: 'La Iglesia de los Clérigos fue construida en el siglo XVIII y su visita es gratuita.',
                spotImage: 'https://catshostels.com/wp-content/uploads/2019/06/1.-Clerigos-tower-1024x589.jpg',
                spotLocation: {
                    type: 'Point',
                    coordinates: [41.14585630268839, -8.613987774364723]
                }
            },
            {
                name: 'La catedral de la sé',
                description: 'Ha sido declarado monumento nacional portugués y por eso debería ser uno de los lugares obligatorios que ver en Oporto.',
                spotImage: 'https://catshostels.com/wp-content/uploads/2019/06/4.-S%C3%A9-Cathedral-600x345.jpg',
                spotLocation: {
                    type: 'Point',
                    coordinates: [41.14286198075304, -8.611115882104372]
                }
            }
        ],
        messages: [
            {
                user: '5fcbc6afbee1e9784858e58c',
                text: 'El mejor itinerario para ver Oporto en 3 días',
                rating: 5
            }
        ]
    },
    {
        name: 'Ruta de 1 día en Formentera',
        description: 'Este es nuestro itinerario de un día en Formentera: lo más bonito para hacer y ver desde el amanecer hasta el anochecer',
        itineraryImage: 'https://mas.diariodemallorca.es/especiales/wp-content/uploads/2019/03/Formentera-playas-03.jpg',
        cityLocation: {
            type: 'Point',
            coordinates: [38.69269837828735, 1.4781691427754278]
        },
        duration: '1 día',
        owner: '5fcbc6afbee1e9784858e58c',
        spots: [
            {
                name: 'El Pilar de La Mola',
                description: 'El pueblo más alto de la isla. A lo largo del camino se pueden admirar las casas de campo con la arquitectura típica de la isla',
                spotImage: 'https://img.balearity.com/locations/pilar-de-la-mola-formentera-main.jpg',
                spotLocation: {
                    type: 'Point',
                    coordinates: [38.66864665975332, 1.5564766111110078]
                }
            },
            {
                name: 'Playa de Es Arenals',
                description: 'Aprovechen el mar cristalino que distingue a este rincón del paraíso para darse un chapuzón en el mar.',
                spotImage: 'https://www.visitformentera.com/_misc2/playas-formentera/arenals4.jpg',
                spotLocation: {
                    type: 'Point',
                    coordinates: [38.66624954198312,  1.5105006981761322]
                }
            }
        ],
        messages: [
            {
                user: '5fcbc6afbee1e9784858e58c',
                text: 'El mejor itinerario para conocer Formentera',
                rating: 5
            }
        ]
    }
]

Itineraries
    .create(itineraries)
    .then(allItinerariesCreated => {
        console.log(`Created ${allItinerariesCreated.length} itineraries`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))

const users = [
    {
        profileImage: '',
        username: "isa",
        password: "isa",
        description: 'Lorem fksdfhsdhshaLJSLKDJFLKASJFLSJFLKJSAF',
        role: "USER",
        itinerariesSaved: []
    }
]

User
    .create(users)
    .then(allUsersCreated => {
        console.log(`Created ${allUsersCreated.length} users`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))