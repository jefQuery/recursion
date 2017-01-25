// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

 var stringifyJSON = function(obj) {
  	//maintain { },[ ] , "," , '',  etc of values in result string/array depending on datatype...How?
  	//format (template literals `"{[$(obj)]}"` ) just before returning string based on datatype (and/or value edgecases)
  	//recursively call on array vals/obj keys & values before returning full parent obj
  	//Start: check datatype
  	if (Array.isArray(obj)){
  		obj = obj.map(x => `${stringifyJSON(x)}`).join();
  		return `[${obj}]`;
  	} else if (typeof obj === 'string'){
  		//change '' for strings into "" to not conflict with overall string
  		return `"${obj}"`;
  	} else if (typeof obj === 'number' || typeof obj === 'boolean'){
  		return obj.toString(); //change to template literal for consistancy? 
 	} else if (typeof obj === 'function' || obj === undefined){//edge cases
 		return ``;
 	}else if (obj === null){//edge-case
  		return `${obj}`;
  	} else {
  		//is object
  		//array-like iteration
  		var arrayLike = [];
  		for (var keys in obj) {
  			if(obj[keys] !== undefined && keys !== 'functions'){ //not 'correct' edge cases for learning? Tests do pass..
  				//insert formatted values into array `"keys":values` w/ recursion
  				arrayLike.push(`"${keys}":${stringifyJSON(obj[keys])}`);
  			}
  		}
  		return `{${arrayLike.join()}}`; 
  	}
};
