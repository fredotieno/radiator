$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "https://docs.google.com/spreadsheet/pub?key=0Am3aL9KWHBI7dEZGZ0lhMlByZHF0dUlyZ2JjWVhKZVE&output=csv",
		dataType: "text",
		success: function(data) {processData(data);}
		});
});

var processData = function(data){
	csvData = $.csv.toArrays(data);
	for(var x = 0; x < csvData.length; x++){
		y = x + 1;
		if(csvData[x][0].match(/^(\d+)\/(\d+)\/(\d+)$/) && csvData[y][0].match(/^(\d+)\/(\d+)\/(\d+)$/)){
		fromDate = csvData[x][0].split("/");
		toDate = csvData[y][0].split("/");
		startDate = new Date(fromDate[2], fromDate[0] - 1, fromDate[1]);
			endDate = new Date(toDate[2], toDate[0] - 1, toDate[1]);
			nowDate = new Date();
			if(nowDate >= startDate && nowDate < endDate){
				console.log(nowDate);
				console.log("Support on " + startDate + " to " + endDate);
				break;
			}
		}
	}
}
