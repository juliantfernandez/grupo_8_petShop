const express = require('express');
const router = express.Router()
const multer = require('multer');
const path = require('path')
const {body} = require('express-validator')
 const guestMiddleware = require('../../Middlewares/guestMiddleware')
const authMiddleware = require('../../Middlewares/authMiddleware')
const validationsRegister = require('../../Middlewares/validateRegisterFormMW')
const usersController = require('../controllers/usersController');

// let validationsRegister = [
//     body('nombreUsuario').notEmpty().withMessage('El campo Nombre y Apellido no puede estar vacio'),
//     body('emailUsuario')
//     .notEmpty().withMessage('El campo Email no puede estar vacio').bail()
//     .isEmail().withMessage('Debes escribir un mail valido'),
//     body('passwordUsuario').notEmpty().withMessage('El campo Contrasena no puede estar vacio'),
//     body('imageProfile').custom((value, {req})=>{
//         let file = req.file; 
//         let acceptedExtensions = ['.jpg', '.png', '.gif'];
//         if(!file){
//             throw new Error('Debes subir una imagen')
//         }else {
//             let fileExtension = path.extname(file.originalname);
//             if (!acceptedExtensions.includes(fileExtension)) {
//                 throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
//             }
//         }

//         return true;
//     })
// ]
const storage = multer.diskStorage({

    destination: (req,file,cb) => {
        cb(null, path.join(__dirname, '../../public/img/avatars'))
    },
    filename:(req, file,cb) => {
        let avatarName = Date.now() + file.originalname
        cb(null, avatarName)
    }
})

const uploadAvatar = multer({storage})

router.get('/register', validationsRegister, guestMiddleware ,usersController.register)

router.post('/register', uploadAvatar.single('imageProfile'), validationsRegister ,usersController.registerProcess)

router.get('/login', guestMiddleware, usersController.login)

router.post('/login', usersController.loginProcess)

router.get('/profile', authMiddleware ,usersController.profile)




module.exports = router