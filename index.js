var find=function(obj,ect){
	var a=Object.getOwnPorpertyNames(ect);
	for(var i=0;i<a.length;i++)
	{
		if(ect[a[i]]==obj)
			return i;
	}
}
function translate(sentence,mode)
{
	var result;
	var res="";
	var wordList=
	{
		"A":"01",
		"B":"1000",
		"C":"1010",
		"D":"100",
		"E":"0",
		"F":"0010",
		"G":"110",
		"H":"0000",
		"I":"00",
		"J":"0111",
		"K":"101",
		"L":"0100",
		"M":"11",
		"N":"10",
		"O":"111",
		"P":"0110",
		"Q":"1101",
		"R":"010",
		"S":"000",
		"T":"1",
		"U":"001",
		"V":"0001",
		"W":"011",
		"X":"1001",
		"Y":"1011",
		"Z":"1100",
		"1":"01111",
		"2":"00111",
		"3":"00011",
		"4":"00001",
		"5":"00000",
		"6":"10000",
		"7":"11000",
		"8":"11100",
		"9":"11110",
		"0":"11111"
	};
	if(mode===1)
	{
		result="";
		for (var i=0;i<sentence.length;i++)
		{
			for (var j=0;j<wordList[sentence[i]].length;j++)
			{
				if(wordList[sentence[i]][j]==="1")
				{
					result+="呜";
				}
				else
				{
					result+="嘤";
				}
			}
			result+="!";
		}
		return result;
	}
	else
	{
		result=[""];
		var j=0;
		for(var i=0;i<sentence.length;i++)
		{
			if(sentence[i]=="呜")
			{
				result[j]+="1";
			}
			else
			{
				if(sentence[i]=="嘤")
				{	
					result[j]+="0";
				}
				else
				{
					j++;
					result[j]="";
				}
			}
		}
		result.pop();
		result.pop();
		for(var i=0;i<result.length;i++)
		{
			res+=find(result[i],wordList);
		}
		return res;
	}
}