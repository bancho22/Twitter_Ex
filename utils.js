'use strict'

export function extractMostMentionedUsers(tweets, limit){
    let userMentions = {}
    tweets.forEach(tweet => {
        let split = tweet.split(' ')
        split.forEach(word => {
            if(word.startsWith('@')){
                let user = word.substring(1, word.length)
                if(userMentions[user]){
                    userMentions[user]++
                }
                else{
                    userMentions[user] = 1
                }
            }
        })
    })

    let sortable = []
    Object.keys(userMentions).forEach(user => {
        sortable.push([user, userMentions[user]])
    })

    sortable.sort((a, b) => {
        return b[1] - a[1]
    })

    // console.log(sortable)

    let mostMentioned = {}

    let end = limit > sortable.length ? sortable.length : limit
    for(let i = 0; i < end; i++){
        mostMentioned[sortable[i][0]] = sortable[i][1]
    }

    return mostMentioned
}


export function extractMostMentioningUsers(tweetsByuser, limit){
    let usersMentioning = {}
    tweetsByuser.forEach(e => {
        e.tweets.forEach(tweet => {
            let split = tweet.split(' ')
            split.forEach(word => {
                if(word.startsWith('@')){
                    if(usersMentioning[e.user]){
                        usersMentioning[e.user]++
                    }
                    else{
                        usersMentioning[e.user] = 1
                    }
                }
            })
        })
    })

    let sortable = []
    Object.keys(usersMentioning).forEach(user => {
        sortable.push([user, usersMentioning[user]])
    })

    sortable.sort((a, b) => {
        return b[1] - a[1]
    })

    // console.log(sortable)

    let mostMentioning = {}

    let end = limit > sortable.length ? sortable.length : limit
    for(let i = 0; i < end; i++){
        mostMentioning[sortable[i][0]] = sortable[i][1]
    }

    return mostMentioning
}
