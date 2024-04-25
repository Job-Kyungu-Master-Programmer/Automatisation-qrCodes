const config = require('./utils/config')
const app = require('./app')
const logger = require('./utils/logger')

const PORT = config.PORT || process.env.PORT
app.listen(PORT, () => {
    logger.info(`Server running on PORT ${PORT}`)
})