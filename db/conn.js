import {MongoClient} from 'mongodb'

let mongoUrl
let connection


export function connect(prod) {
    return new Promise((resolve, reject) => {
        if (connection) return resolve();

        mongoUrl = `mongodb://admin:omega1234@ds127531.mlab.com:27531/twitter_db`

        MongoClient.connect(mongoUrl, (err, mongo) => {
            if (err) {
                console.log(err)
                return reject(err)
            }

            connection = mongo
            return resolve()
        })
    })
}


export function get() {
    return connection
}

export function close() {
    return new Promise((resolve, reject) => {
        if (connection) {
            connection.close((err, result) => {
                if (err) {
                    return reject(err)
                }
                connection = null
                console.log("conn closed");
                resolve()
            })
        } else {
            reject("conn already closed")
        }
    })
}
