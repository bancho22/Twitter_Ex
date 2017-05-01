# [MongoDB Hand-In](https://github.com/HelgeCPH/db_course_nosql/blob/master/lecture_notes/MongoDB%20Exercise.ipynb)

## Live at [http://twitter-baniproductions.rhcloud.com/](http://twitter-baniproductions.rhcloud.com/)

## Group Hand-In By:
### Bancho Petrov
### Alexander Gyurov
### Rumyana Vaseva


Due to the fact that we are using a free sandbox mongo instance from mLab, we could only import 1,048,793 entries before we got a quota_exceeded error. Nevertheless, executing the queries against that data gave us the following results:

### How many Twitter users are in our database?

Endpoint: GET /api/twitter/user-count
Answer: 511,440

### Which Twitter users link the most to other Twitter users? (Provide the top ten.)

Endpoint: GET /api/twitter/most-mentioning/10
Answer: {"err":"MongoError: BSONObj size: 40630213 (0x26BF7C5) is invalid. Size must be between 0 and 16793600(16MB)"}

### Who is are the most mentioned Twitter users? (Provide the top five.)

Endpoint: GET /api/twitter/most-mentioned/5
Answer: {"err":"MongoError: BSONObj size: 40630213 (0x26BF7C5) is invalid. Size must be between 0 and 16793600(16MB)"}

### Who are the most active Twitter users (top ten)?

Endpoint: GET /api/twitter/most-active/10
Answer: 
    1. lost_dog
    2. tweetpet
    3. webwoke
    4. mcraddictal
    5. wowlew
    6. SallytheShizzle
    7. nuttychris
    8. tsarnick
    9. Djalfy
    10. StDAY

### Who are the five most grumpy (most negative tweets) and the most happy (most positive tweets)? (Provide five users for each group)

Endpoint: GET /api/twitter/most-positive/5
Answer: 
    1. tsarnick
    2. Djalfy
    3. ramdomthoughts
    4. KevinEdwardsJr
    5. iHomeTech

Endpoint: GET /api/twitter/most-negative/5
Answer: 
    1. lost_dog
    2. tweetpet
    3. webwoke
    4. wowlew
    5. mcraddictal
