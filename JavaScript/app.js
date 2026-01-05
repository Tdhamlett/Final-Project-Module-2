function showRating(rating) {
    let ratings = ""
    for (let i = 0; i = 4; ++i) {
        ratings = ratings + "*"
        if (i === 3) {
            ratings = ratings + "*"

        }
    }
    return ratings
}

console.log(showRating(2));