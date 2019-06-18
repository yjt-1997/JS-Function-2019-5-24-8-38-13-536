//可以计算由逗号句号空格组成的句子，就算逗号句号后面没有空格也可以
var str = "Good morning, I love JavaScript.";
function countWords(str){
	//保存用句号分割后的数组
	var temp1 = str.split(".");
	//保存用逗号分隔后的二维数组
	var temp2 = new Array();
	for(var i=0;i<temp1.length;i++){
		if(temp1[i].trim().length!=0)
			temp2[i] = temp1[i].split(",");
	}
	//保存结果
	var result = 0;
	for(var i=0;i<temp2.length;i++){
		for(var j=0;j<temp2[i].length;j++){
			//对二维数组的每一项用空格分隔
			if(temp2[i][j].trim().length!=0)
				result += temp2[i][j].trim().split(" ").length;
		}
	}
	return result;
}
console.log(countWords(str));