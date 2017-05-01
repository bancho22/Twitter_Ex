'use strict'

import * as db from '../db/conn'
import { getNumOfUsers } from '../db/queries'

import express from 'express'
let router = express.Router()


router.get('/user-count', (req, res) => {
    getNumOfUsers(db.get().collection('tweets'))
        .then(userCount => {
            return res.status(200).json({userCount})
        })
        .catch(err => {
            return res.status(500).json({err})
        })
})


module.exports = router
