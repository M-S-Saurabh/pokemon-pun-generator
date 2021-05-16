function levenshteinDistance(word1, word2){
    var r = word1.length; var c = word2.length;

    const distance = Array(r+1).fill(null).map( ()=>Array(c+1).fill(null) );

    for(let i=0; i<=r; i++){ distance[i][0] = i;}
    for(let j=0; j<=c; j++){ distance[0][j] = j;}
    // console.log(distance);

    for(let i=1; i<=r; i++){
        for(let j=1; j<=c; j++){
            var same = (word1[i-1] === word2[j-1]) ? 0 : 1;
            distance[i][j] = Math.min(
                distance[i-1][j] + 1,
                distance[i][j-1] + 1,
                distance[i-1][j-1] + same
            );
        }
    }

    return distance[r][c];
}

// var a = levenshteinDistance("cat", "bat");
// console.log(a);

module.exports = levenshteinDistance;