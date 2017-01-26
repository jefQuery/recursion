// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, parentNode) {
  	//You should use document.body, element.childNodes, and element.classList
	//no parameter to work on, assuming method behavior? Nah, assume root and assign children
	//use 'this'?
	var results = [];//Return an array-like object of all matched child elements
	if (parentNode === undefined){//if current object/node isn't specified, use document body
		parentNode = document.body;
	}
	if(parentNode.classList){
		if(parentNode.classList.contains(className)){//does ordering of parent-child if statements matter? No, .isEqual handles
			results.push(parentNode);
		}
	}
	if (parentNode.hasChildNodes() && parentNode.childNodes.length > 0){
		var childrenNodes = parentNode.childNodes;
		for(var i = 0; i < childrenNodes.length; i++){ //recursively walk down current html element, attemting to match className
			var ele = getElementsByClassName(className, childrenNodes[i]);
			ele.length > 0 ? results.push(ele) : undefined;
		}
	}
	return _.flatten(results);
};
// 	//for fun:
// 	var ayylmao = $('body');
// 	if(Array.isArray(ayylmao)){
// 		var results = [];
// 		for (var i = 0; i < ayylmao.length; i++){  
// 			results.push(ayylmao[i].getElementsByClassName(className))
// 		}
// 		return results;
// 	} else if (typeof ayylmao === 'string'){
// 		// var regex = /^<(div||span){1} class="`${className}`">\w*</(div||span){1}>$/gi;
// 		// return ayylmao.match(regex);
// 	}
