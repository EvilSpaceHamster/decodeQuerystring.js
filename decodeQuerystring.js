function queryStringToObject(string) {
    var result = {};
	var kvPairs = string.split(/&/g);
	for (i in kvPairs) {
		var kvPair = kvPairs[i].split(/=/)
		if (kvPair[1] === undefined) {
			kvPair[1] = true;
		}
		var key = decodeURIComponent(kvPair[0]);
		var keySplit = key.split("[");
		if (keySplit.length>1){
			var keyRoot = keySplit.shift();
			if (result[keyRoot] == undefined){
				result[keyRoot] = [];
			}
			var shifted = keySplit.shift().replace("]","");
			if (shifted!=""){
				result[keyRoot][shifted] = kvPair[1];
			} else{
				result[keyRoot].push(kvPair[1]);
			}
		} else {
			result[key] = decodeURIComponent(kvPair[1]);
		}

	}
	return result;
}