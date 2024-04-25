const mongoose = require('mongoose')
mongoose.set('strictQuery', false)


const qrCodeSchema = new mongoose.Schema({
    qrCodeId: {
        type: String,
        required: true,
        unique: true
    },

    qrCode: {
        type: String,
        required: true
    } 
})

qrCodeSchema.set('toJSON', {
    transform: (document, returned) => {
        returned.qrCodeId = returned.qrCodeId.toString();
        delete returned.id
        delete returned._v
    }
})



module.exports = mongoose.model('QrCode', qrCodeSchema)