'use strict'

import * as db from '../db/conn'
import { getNumOfUsers, getMostActiveUsers } from '../db/queries'

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


router.get('/most-active/:limit', (req, res) => {
    let limit = parseInt(req.params.limit)
    getMostActiveUsers(db.get().collection('tweets'), limit)
        .then(mostActive => {
            mostActive = mostActive.map((e, i) => {
                return {
                    user: e._id,
                    num_of_tweets: e.count,
                    place: i + 1
                }
            })
            return res.status(200).json(mostActive)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({err: err.toString()})
        })
})

module.exports = router
