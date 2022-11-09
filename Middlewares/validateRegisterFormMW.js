const { body } = require('express-validator');
const path = require('path');

module.exports = [
    body('name').notEmpty().withMessage('Debes escribir un nombre'),
    body('email')
        .notEmpty().withMessage('Debes escribir un correo electronico').bail()
        .isEmail().withMessage('Debes escribir un formato de email valido'),
    body('username').notEmpty().withMessage('Debes escribir un Username'),
    body('password').notEmpty().withMessage('Debes escribir una contrasena'),
    body('fotoPerfil').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error('Debes subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;

    })

]

