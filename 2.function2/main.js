var str = "abcdedcba";
function palindrome(str){
	var middle = str.length/2;
	var length = str.length;
	for(var i=0;i<middle;i++){
		if(str[i]!=str[length-1-i])
			return false;
	}
	return true;
}
console.log(palindrome(str));