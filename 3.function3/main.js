var str = "hello";
function alphabetSort(str){
	var temp = str.split("").sort();
	var result = "";
	for (var i = 0; i<temp.length; i++) {
		result += temp[i];
	}
	return result;
}
console.log(alphabetSort(str));