'use strict'

export function getNumOfUsers(coll){
    return new Promise((resolve, reject) => {
        coll.distinct('user')
            .then(distinctUsers => {
                console.log('User count from mongo:', distinctUsers.length)
                return resolve(distinctUsers.length)
            })
            .catch(err => {
                console.log(err)
                return reject(err)
            })
    })
}


export function getTweetsWithMentions(coll){
    return new Promise((resolve, reject) => {
        let cur = coll.aggregate([
            {$match: {text: new RegExp('@\\w+', 'ig')}},
            {$group: {_id: null, text: {$push: '$text'}}}
        ])

        cur.toArray()
            .then(res => {
                // console.log(res)
                return resolve(res[0].text)
            })
            .catch(err => {
                return reject(err)
            })
    })
}


export function getMostActiveUsers(coll, limit){
    return new Promise((resolve, reject) => {
        let cur = coll.aggregate([
            {$group: {_id: '$user', count: {$sum: 1}}},
            {$sort: {count: -1}},
            {$limit: limit}
        ])

        cur.toArray()
            .then(res => {
                console.log(res)
                return resolve(res)
            })
            .catch(err => {
                return reject(err)
            })
    })
}


export function getMostPositiveUsers(coll, limit){
    return new Promise((resolve, reject) => {
        let cur = coll.aggregate([
            {$match: {polarity: 4}},
            {$group: {_id: '$user', count: {$sum: 1}}},
            {$sort: {count: -1}},
            {$limit: limit}
        ])

        cur.toArray()
            .then(res => {
                console.log(res)
                return resolve(res)
            })
            .catch(err => {
                return reject(err)
            })
    })
}
