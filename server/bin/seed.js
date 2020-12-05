const mongoose = require('mongoose')
const Itineraries = require('../models/itineraries.model')
// const Spots = require('../models/spots.model')
const User = require('../models/user.model')

const dbtitle = 'travel'
mongoose.connect(`mongodb://localhost/${dbtitle}`)

Itineraries.collection.drop()
// Spots.collection.drop()
User.collection.drop()

const itineraries = [
    {
        name: '3 días en Oporto',
        description: 'En esta lista hemos reunido lo imprescindible para que aproveches el tiempo al máximo en esta bonita ciudad donde desemboca el río Duero.',
        cityLocation: {
            type: 'Point',
            coordinates: [40.43036064181388, -3.661767031876859]
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
                    coordinates: [42.43036064181388, -3.661767031876859]
                }
            },
            {
                name: 'La catedral de la sé',
                description: 'Ha sido declarado monumento nacional portugués y por eso debería ser uno de los lugares obligatorios que ver en Oporto.',
                spotImage: 'https://catshostels.com/wp-content/uploads/2019/06/4.-S%C3%A9-Cathedral-600x345.jpg',
                spotLocation: {
                    type: 'Point',
                    coordinates: [42.43036064181388, -3.661767031876859]
                }
            }
        ],
        messages: [
            {
                user: '5fcbc6afbee1e9784858e58c',
                text: 'sjflsjdflsjdflkjsdkf',
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
        itineraries: []
    }
]

User
    .create(users)
    .then(allUsersCreated => {
        console.log(`Created ${allUsersCreated.length} users`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))