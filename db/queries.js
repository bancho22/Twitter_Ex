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
