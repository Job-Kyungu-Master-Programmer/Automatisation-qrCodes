const qrCodeRoute = require('express').Router()
const QRCode = require('../models/QrCode')
const QrCodeGenerator = require('qrcode')


qrCodeRoute.post('/', async (request, response) => {
    try {
         // Générer un identifiant unique pour le QR code
        const qrCodeId = 'BS' + Date.now()

        const data = 'AAAAABAAAAA'
          // Générer le QR code à partir de la chaîne de caractères
        const qrCodeDataURL = await QrCodeGenerator.toDataURL(data)
         // Créer un nouveau document QrCode avec l'identifiant unique et le QR code généré
        const addQrCode = new QRCode({
            qrCodeId: qrCodeId,
            qrCode: qrCodeDataURL
         })
         // sauvegardons
         await addQrCode.save()
        // Renvoyer le QR code généré au client
        response.status(201).json({
            success: true,
            data: addQrCode
        });
    } catch (error) {
        console.log('Une erreur a eu lieu', error)
    }
})


qrCodeRoute.get('/', async (request, response) => {
    const qrcode = await QRCode.find({})
    response.json(qrcode)
})

module.exports = qrCodeRoute