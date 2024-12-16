const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const User = require('../models/User');

/*Configuration Multer for file upload */
const storange = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const Upload = multer({storage});

/*User Register */
router.post('/register',Upload.single('profileImage'), async (req, res) => {
    try{
        /*Take all infromation from the form */
        const {firstName,lastName,email,password} = req.body;

        /*upload file is available as req.file */
        const profileImage = req.file;

        if(!profileImage){
            return res.status(400).send("No file uploaded");
            ///////////
        }


    }catch(err){
        
    }
});