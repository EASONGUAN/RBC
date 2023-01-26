import express from 'express';
import multer from 'multer';
import * as fs from 'fs';

import {findStock, addStock, bulkAddStock} from '../Logic/logic.js';

const router = express.Router();

var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './uploads');    
    }, 
    filename: function (req, file, cb) { 
       cb(null , file.originalname);   
    }
 });
var upload = multer({ storage: storage })

router.get('/', (req, res) => {
    //call findStock()
    //Query can be accessed using req.query
    res.send("FIND STOCK")
});

router.post('/', (req, res) => {
    //call addStock()
    //request body can be accessed using req.body
    res.send("ADD STOCK")
});

router.post('/bulk', upload.fields([{ name: 'data', maxCount: 1 }, { name: 'names', maxCount: 1 }]), (req, res) => {
    //call bulkAddStock()
    //request body can be accessed using req.body
    console.log(req.files)
    res.send("ADD STOCK BULK")
});

export default router;