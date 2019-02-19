/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var length = preferences.length;
  var count = 0;
 
  for (var i = 0; i < length; i++){
  	var a = preferences[i];
  	var b = preferences[a - 1];

  	 	if( !b ) continue;
  	 	var c = preferences[b - 1];
  	 	
  		if( i === c - 1 && b !== c){
	  		count++;
	  		preferences[i] = 0;
	  		preferences[a - 1] = 0;
	  		preferences[b - 1] = 0;
  	}
  }

  return count;

};
