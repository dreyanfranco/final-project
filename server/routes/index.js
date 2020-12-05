module.exports = app => {

    // Base URLS
    app.use('/api/itineraries', require('./itineraries.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
}