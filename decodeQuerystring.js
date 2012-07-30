//simple URI query to JS Object decoder.
function decodeQuerystring(string){
    var result = {};
    var kvPairs = string.split(/&/g);
    for (i in kvPairs){
        var kvPair = kvPairs[i].split(/=/)
        if(kvPair[1] === undefined){
            kvPair[1] = true;
        }
        result[kvPair[0]] = decodeURIComponent(kvPair[1]);

    }
    return result;
}